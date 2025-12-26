// src/context/LanguageContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { t } from "../translations"; // ✅ correct path

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "DE"); // default German

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const translate = (key) => t[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translate }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
