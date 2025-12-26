import { useContext } from "react";
import { LanguageContext } from "../providers/LanguageProvider";

const safeT = {
  ticketDetail: {},
  tenantDashboard: {},
  profile: {},
  chat: {},
  common: {},
  login: {},
  register: {},
  onboarding: {},
  roleSelect: {},
  language: {},
  help: {},
  tabs: {},
};

export default function useLanguage() {
  const ctx = useContext(LanguageContext);

  if (!ctx) {
    return {
      lang: "en",
      setLang: () => {},
      t: safeT,
    };
  }

  return {
    ...ctx,
    t: ctx.t || safeT,
  };
}
