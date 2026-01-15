// src/modules/auth/pages/Splash.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { t } from "../../../i18n/translations";
import { useLanguage } from "../../../context/LanguageContext";

export default function Splash() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const dict = t[lang];

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/auth/onboarding", { replace: true });
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="
      min-h-screen flex items-center justify-center px-4
      bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100
    ">
      <div className="flex flex-col items-center gap-4">
        
        <div className="
          h-16 w-16 bg-[#F38B14] rounded-2xl flex items-center justify-center 
          shadow-lg shadow-orange-300/30
        ">
          <span className="material-symbols-outlined text-white text-4xl">home</span>
        </div>

        <p className="text-lg font-semibold text-slate-900">{dict.appName}</p>

        <div className="w-40 h-1.5 rounded-full bg-white/50 overflow-hidden mt-3">
          <div className="h-full bg-[#F38B14] animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
