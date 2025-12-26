import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";
import { t } from "../../../i18n/translations";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const dict = t[lang];

  // 🔹 ROLE TAB STATE
  const [roleTab, setRoleTab] = useState("SUPER_ADMIN");

  // 🔹 FORM STATE
  const [email, setEmail] = useState("admin@mahimediasolutions.com");
  const [password, setPassword] = useState("123123123");
  const [showPassword, setShowPassword] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    // ✅ SUPER ADMIN LOGIN
    if (
      roleTab === "SUPER_ADMIN" &&
      email === "admin@mahimediasolutions.com" &&
      password === "123123123"
    ) {
      login("dummy-token", "SUPER_ADMIN");
      navigate("/super-admin", { replace: true });
      return;
    }

    // ✅ FACILITY MANAGER LOGIN
    if (
      roleTab === "FACILITY_MANAGER" &&
      email === "facility@mahimediasolutions.com" &&
      password === "123123123"
    ) {
      login("dummy-token", "FACILITY_MANAGER");
      navigate("/facility-admin", { replace: true });
      return;
    }

    alert(dict.login_invalid);
  };

  return (
    <div
      className="
        min-h-screen w-full flex flex-col items-center justify-center px-4 
        bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100
      "
    >
      {/* LOGO */}
      <div className="mb-8 flex items-center justify-center gap-3">
        <div
          className="
            h-12 w-12 rounded-xl bg-[#F38B14] flex items-center justify-center 
            shadow-lg shadow-orange-300/30
          "
        >
          <span className="material-symbols-outlined text-white text-3xl">
            home
          </span>
        </div>
        <span className="text-2xl font-bold tracking-tight text-slate-900">
          {dict.appName}
        </span>
      </div>

      {/* 🔹 ROLE TABS */}
      <div className="mb-4 flex gap-2 bg-white/70 p-1 rounded-xl border border-white/40 backdrop-blur">
        {[
          { key: "SUPER_ADMIN", label: "Super Admin" },
          { key: "FACILITY_MANAGER", label: "Facility Manager" },
        ].map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => {
              setRoleTab(tab.key);

              if (tab.key === "SUPER_ADMIN") {
                setEmail("admin@mahimediasolutions.com");
                setPassword("123123123");
              }

              if (tab.key === "FACILITY_MANAGER") {
                setEmail("facility@mahimediasolutions.com");
                setPassword("123123123");
              }
            }}
            className={[
              "px-4 py-2 rounded-lg text-sm font-medium transition",
              roleTab === tab.key
                ? "bg-black text-white"
                : "text-slate-700 hover:bg-slate-200",
            ].join(" ")}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* LOGIN CARD */}
      <form
        onSubmit={submit}
        className="
          w-full max-w-md p-10 rounded-2xl bg-white/60 
          backdrop-blur-xl border border-white/40
          shadow-[0_8px_25px_rgba(0,0,0,0.08)]
        "
      >
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900">
            {dict.login_title}
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            {dict.login_subtitle}
          </p>
        </div>

        {/* EMAIL */}
        <div className="mb-4">
          <label className="text-sm font-medium text-slate-800 mb-2 block">
            {dict.auth_email}
          </label>
          <input
            type="email"
            required
            value={email}
            placeholder={dict.auth_email_placeholder}
            onChange={(e) => setEmail(e.target.value)}
            className="
              w-full h-11 px-4 rounded-xl bg-white/80 border border-slate-300
              focus:ring-2 focus:ring-[#F38B14] text-slate-900 outline-none
            "
          />
        </div>

        {/* PASSWORD */}
        <div className="mb-6">
          <label className="text-sm font-medium text-slate-800 mb-2 block">
            {dict.auth_password}
          </label>
          <div className="flex items-center rounded-xl bg-white/80 border border-slate-300">
            <input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              placeholder={dict.auth_password_placeholder}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 h-11 px-4 bg-transparent text-slate-900 outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="px-3 text-slate-500"
            >
              <span className="material-symbols-outlined">
                {showPassword ? "visibility" : "visibility_off"}
              </span>
            </button>
          </div>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="
            w-full h-11 rounded-xl bg-[#F38B14] text-white 
            hover:bg-black transition shadow-md shadow-orange-300/30
          "
        >
          {dict.auth_login}
        </button>

        {/* LINKS */}
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => navigate("/auth/forgot-password")}
            className="text-sm text-slate-600 underline"
          >
            {dict.auth_forgotPassword}
          </button>
        </div>

        <div className="mt-3 text-center">
          <button
            type="button"
            onClick={() => navigate("/auth/register")}
            className="text-sm text-[#F38B14] underline"
          >
            {dict.auth_noAccount}
          </button>
        </div>
      </form>

      <p className="absolute bottom-6 text-xs text-slate-700">
        © 2024 {dict.appName}. {dict.footer_allRights}
      </p>
    </div>
  );
}
