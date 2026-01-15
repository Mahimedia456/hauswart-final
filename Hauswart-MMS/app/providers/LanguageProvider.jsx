import React, { createContext, useEffect, useMemo, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import en from "@/constants/i18n/en";
import de from "@/constants/i18n/de";

export const LanguageContext = createContext(null);

const STORAGE_KEY = "hauswart_lang";

export default function LanguageProvider({ children }) {
  const [lang, setLangState] = useState("en");
  const [ready, setReady] = useState(false);

  // load saved language once
  useEffect(() => {
    (async () => {
      try {
        const saved = await AsyncStorage.getItem(STORAGE_KEY);
        if (saved === "en" || saved === "de") setLangState(saved);
      } catch (e) {
        // ignore
      } finally {
        setReady(true);
      }
    })();
  }, []);

  const setLang = async (code) => {
    setLangState(code); // ✅ instant rerender
    try {
      await AsyncStorage.setItem(STORAGE_KEY, code);
    } catch (e) {
      // ignore
    }
  };

  const t = useMemo(() => {
    return lang === "de" ? de : en;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t, ready }), [lang, t, ready]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
