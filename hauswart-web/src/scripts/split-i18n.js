import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

/* -------------------------------------------------- */
/* ESM __dirname fix                                  */
/* -------------------------------------------------- */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* -------------------------------------------------- */
/* CONFIG                                             */
/* -------------------------------------------------- */
const PROJECT_ROOT = path.resolve(__dirname, "../..");

// If you run it from hauswart-web, SRC will be hauswart-web/src
const SRC_DIR = path.join(PROJECT_ROOT, "src");

// Your translations file
const I18N_FILE = path.join(SRC_DIR, "i18n", "translations.js");

// Outputs
const OUTPUT_USED = path.join(SRC_DIR, "i18n", "usedTranslations.js");
const OUTPUT_UNUSED = path.join(SRC_DIR, "i18n", "unusedTranslations.js");
const OUTPUT_MAYBE = path.join(SRC_DIR, "i18n", "maybeUsedTranslations.js");

/* -------------------------------------------------- */
/* HELPERS                                            */
/* -------------------------------------------------- */
function listFilesRecursive(dir) {
  const out = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const e of entries) {
    const full = path.join(dir, e.name);

    if (e.isDirectory()) {
      if (["node_modules", "dist", ".git", ".idea"].includes(e.name)) continue;
      out.push(...listFilesRecursive(full));
    } else {
      if (/\.(js|jsx|ts|tsx)$/.test(e.name)) out.push(full);
    }
  }
  return out;
}

function formatJS(obj) {
  return Object.entries(obj)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => `    ${k}: ${JSON.stringify(v)},`)
    .join("\n");
}

/* -------------------------------------------------- */
/* LOAD TRANSLATIONS (EN only)                         */
/* -------------------------------------------------- */
const translationsSource = fs.readFileSync(I18N_FILE, "utf8");

// Grab EN block (works with your format export const t = { EN: { ... } }
const enMatch = translationsSource.match(/EN:\s*{([\s\S]*?)\n\s*}\s*,?/);
if (!enMatch) {
  throw new Error(
    `Could not find EN translations block in: ${I18N_FILE}\nMake sure it contains: EN: { ... }`
  );
}

// Parse `key: "value"` pairs within EN
const EN_ENTRIES = {};
const entryRegex = /([a-zA-Z0-9_]+)\s*:\s*("([^"\\]|\\.)*"|'([^'\\]|\\.)*'|`([^`\\]|\\.)*`)\s*,?/g;

let m;
while ((m = entryRegex.exec(enMatch[1]))) {
  const key = m[1];
  // Remove wrapping quotes via JSON.parse when possible
  let raw = m[2];
  let val = raw;
  try {
    if (raw.startsWith("'")) {
      // convert '...' to "..." for JSON.parse
      val = JSON.parse(`"${raw.slice(1, -1).replace(/"/g, '\\"')}"`);
    } else if (raw.startsWith("`")) {
      val = raw.slice(1, -1);
    } else {
      val = JSON.parse(raw);
    }
  } catch {
    val = raw.replace(/^["'`]|["'`]$/g, "");
  }
  EN_ENTRIES[key] = val;
}

/* -------------------------------------------------- */
/* SCAN SOURCE                                         */
/* -------------------------------------------------- */
const allKeys = new Set(Object.keys(EN_ENTRIES));
const usedKeys = new Set();
const maybeKeys = new Set();

const files = listFilesRecursive(SRC_DIR);

for (const file of files) {
  const content = fs.readFileSync(file, "utf8");

  // 1) Direct property access: dict.key, dict?.key, t[lang].key, t[lang]?.key etc.
  // Capture .KEY
  const dotAccess = /\b(?:dict|t\[[^\]]+\])\?\.\s*([a-zA-Z0-9_]+)|\b(?:dict|t\[[^\]]+\])\.\s*([a-zA-Z0-9_]+)/g;
  let a;
  while ((a = dotAccess.exec(content))) {
    const key = a[1] || a[2];
    if (key && allKeys.has(key)) usedKeys.add(key);
  }

  // 2) Bracket access with string literal: dict["KEY"], t[lang]['KEY'], dict?.["KEY"]
  const bracketLiteral =
    /\b(?:dict|t\[[^\]]+\])\s*\?\.\s*\[\s*["'`]([a-zA-Z0-9_]+)["'`]\s*\]|\b(?:dict|t\[[^\]]+\])\s*\[\s*["'`]([a-zA-Z0-9_]+)["'`]\s*\]/g;

  let b;
  while ((b = bracketLiteral.exec(content))) {
    const key = b[1] || b[2];
    if (key && allKeys.has(key)) usedKeys.add(key);
  }

  // 3) Dynamic bracket access: dict[someVar], t[lang][someVar]
  // We cannot know which key, so mark as "maybe" if it appears at all.
  const bracketDynamic =
    /\b(?:dict|t\[[^\]]+\])\s*\[\s*[a-zA-Z_$][a-zA-Z0-9_$]*\s*\]/g;

  if (bracketDynamic.test(content)) {
    // If dynamic access exists in any file, we must be conservative:
    // Put ALL keys not already used into maybe bucket later OR keep a separate conservative list.
    // Here we just flag that dynamic usage exists.
    // We'll handle conservatively after scan.
    maybeKeys.add("__DYNAMIC_ACCESS_PRESENT__");
  }

  // 4) Common config patterns where key appears as string:
  // labelKey: "tab_overview", i18nKey: "x", translationKey: "x", key: "x" (careful)
  const configKeyStrings =
    /\b(labelKey|i18nKey|translationKey|titleKey|subtitleKey|emptyKey|tabKey)\s*:\s*["'`]([a-zA-Z0-9_]+)["'`]/g;

  let c;
  while ((c = configKeyStrings.exec(content))) {
    const key = c[2];
    if (key && allKeys.has(key)) usedKeys.add(key);
  }

  // 5) Optional: direct string match for any existing key (very conservative)
  // This helps catch cases like: tabs = ["tab_overview", "tab_details"]
  // but can create false positives; still better than blank UI.
  for (const key of allKeys) {
    if (content.includes(`"${key}"`) || content.includes(`'${key}'`) || content.includes(`\`${key}\``)) {
      usedKeys.add(key);
    }
  }
}

/* -------------------------------------------------- */
/* SPLIT USED / UNUSED / MAYBE                          */
/* -------------------------------------------------- */
const used = {};
const unused = {};
const maybe = {};

// If any dynamic access exists anywhere, be conservative:
// keys not found via direct usage go into MAYBE instead of UNUSED.
const hasDynamic = maybeKeys.has("__DYNAMIC_ACCESS_PRESENT__");

for (const key of Object.keys(EN_ENTRIES)) {
  if (usedKeys.has(key)) {
    used[key] = EN_ENTRIES[key];
  } else if (hasDynamic) {
    maybe[key] = EN_ENTRIES[key];
  } else {
    unused[key] = EN_ENTRIES[key];
  }
}

/* -------------------------------------------------- */
/* WRITE OUTPUT                                        */
/* -------------------------------------------------- */
fs.writeFileSync(
  OUTPUT_USED,
  `export const t = {\n  EN: {\n${formatJS(used)}\n  }\n};\n`
);

fs.writeFileSync(
  OUTPUT_UNUSED,
  `export const t = {\n  EN: {\n${formatJS(unused)}\n  }\n};\n`
);

fs.writeFileSync(
  OUTPUT_MAYBE,
  `export const t = {\n  EN: {\n${formatJS(maybe)}\n  }\n};\n`
);

console.log("✅ usedTranslations.js generated:", Object.keys(used).length);
console.log("⚠️ maybeUsedTranslations.js generated:", Object.keys(maybe).length);
console.log("🗑️ unusedTranslations.js generated:", Object.keys(unused).length);
