// src/modules/auth/pages/ForgotPassword.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";
import { t } from "../../../i18n/translations";
import api from "../../../config/api";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const dict = t[lang];
const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

const submit = async (e) => {
  e.preventDefault();

  if (!email.includes("@")) {
    return setError(dict.forgot_invalidEmail);
  }

  try {
    setLoading(true);
    setError("");

    await api.post("/auth/forgot-password", { email });

    // store email for next step
    sessionStorage.setItem("reset_email", email);

    navigate("/auth/verify-otp");
  } catch (err) {
    setError(err?.response?.data?.message || "Failed to send OTP");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="w-full max-w-md p-10 rounded-2xl 
      bg-white/60 backdrop-blur-xl border border-white/40
      shadow-[0_8px_25px_rgba(0,0,0,0.08)]
    ">
      {/* ICON */}
      <div className="flex justify-center mb-6">
        <div className="h-12 w-12 bg-[#F38B14] rounded-xl flex items-center justify-center shadow-lg shadow-orange-300/30">
          <span className="material-symbols-outlined text-white text-3xl">key</span>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-center">{dict.forgot_title}</h2>
      <p className="text-center text-slate-600 mt-2">{dict.forgot_subtitle}</p>

      <form onSubmit={submit} className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            {dict.auth_email}
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={dict.auth_email_placeholder}
            className="
              w-full h-11 px-4 rounded-xl bg-white/80 border border-slate-300
              outline-none focus:ring-2 focus:ring-[#F38B14]
            "
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full h-11 bg-[#F38B14] text-white rounded-xl font-medium 
            hover:bg-black transition shadow-orange-300/30 shadow-md
          "
        >
          {dict.forgot_cta}
        </button>
      </form>

      <p
        className="text-center mt-4 text-[#F38B14] underline cursor-pointer"
        onClick={() => navigate("/auth/login")}
      >
        {dict.auth_backToLogin}
      </p>
    </div>
  );
}
