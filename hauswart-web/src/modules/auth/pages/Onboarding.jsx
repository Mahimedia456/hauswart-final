// src/modules/auth/pages/Onboarding.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { t } from "../../../i18n/translations";
import { useLanguage } from "../../../context/LanguageContext";

export default function Onboarding() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const dict = t[lang];

  const [step, setStep] = useState(0);

  const slides = [
    {
      title: dict.onb_slide1_title,
      body: dict.onb_slide1_body,
      bullets: [dict.onb_slide1_b1, dict.onb_slide1_b2],
    },
    {
      title: dict.onb_slide2_title,
      body: dict.onb_slide2_body,
      bullets: [dict.onb_slide2_b1, dict.onb_slide2_b2],
    },
    {
      title: dict.onb_slide3_title,
      body: dict.onb_slide3_body,
      bullets: [dict.onb_slide3_b1, dict.onb_slide3_b2],
    },
  ];

  const next = () => {
    if (step < slides.length - 1) return setStep(step + 1);
    navigate("/auth/login");
  };

  const skip = () => navigate("/auth/login");

  const s = slides[step];

  return (
    <div className="
      min-h-screen flex items-center justify-center px-4
      bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100
    ">
      <div className="
        w-full max-w-xl p-10 rounded-2xl
        bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl
      ">
        
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-[#F38B14] rounded-xl flex items-center justify-center text-white shadow-md">
              <span className="material-symbols-outlined">home</span>
            </div>
            <span className="font-semibold text-slate-800">{dict.appName}</span>
          </div>

          <button
            onClick={skip}
            className="text-sm text-[#F38B14] underline"
          >
            {dict.onb_skip}
          </button>
        </div>

        {/* CONTENT */}
        <p className="text-xs uppercase font-semibold tracking-widest text-[#F38B14] mb-2">
          {dict.onb_tagline}
        </p>

        <h1 className="text-2xl font-bold text-slate-900 mb-3">
          {s.title}
        </h1>

        <p className="text-slate-700 mb-4">{s.body}</p>

        <ul className="space-y-1 text-slate-600">
          {s.bullets.map((b, i) => (
            <li key={i}>• {b}</li>
          ))}
        </ul>

        {/* FOOTER */}
        <div className="mt-8 flex items-center justify-between">

          {/* DOTS */}
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`h-2 rounded-full transition-all ${
                  i === step
                    ? "w-5 bg-[#F38B14]"
                    : "w-2 bg-slate-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="
              h-11 px-6 rounded-xl bg-[#F38B14] text-white font-medium
              shadow-md hover:bg-black transition
            "
          >
            {step === slides.length - 1 ? dict.onb_getStarted : dict.onb_next}
          </button>
        </div>
      </div>
    </div>
  );
}
