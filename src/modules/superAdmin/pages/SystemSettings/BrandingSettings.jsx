import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/i18n/translations";

export default function BrandingSettings() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const dict = t[lang];

  const inputBase =
    "w-full h-11 pl-10 pr-3 rounded-xl bg-white border border-slate-300 " +
    "text-sm focus:ring-2 focus:ring-[#F38B14] focus:border-[#F38B14]";

  return (
    <div className="w-full">

      {/* BACK */}
      <button
        onClick={() => navigate("/super-admin/system-settings")}
        className="flex items-center gap-2 mb-3 text-sm text-slate-500 hover:text-slate-700"
      >
        <span className="material-symbols-outlined">arrow_back</span>
        {dict.systemSettings}
      </button>

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-slate-900">
          {dict.branding}
        </h1>
        <p className="text-slate-500 mt-1">
          {dict.brandingDesc}
        </p>
      </div>

      {/* LOGO & IDENTITY — FULL WIDTH */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 mb-8 w-full">
        <h2 className="text-xl font-medium text-slate-900">
          {dict.logoIdentity}
        </h2>
        <p className="text-sm text-slate-500 mt-1 mb-8">
          {dict.logoIdentityDesc}
        </p>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* LIGHT LOGO */}
          <div>
            <label className="text-sm font-medium text-slate-700 mb-2 block">
              {dict.lightModeLogo}
            </label>
            <div className="h-40 border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-50">
              <span className="material-symbols-outlined text-4xl text-slate-400">
                upload_file
              </span>
              <p className="text-sm text-slate-500 mt-2">
                {dict.uploadHint}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {dict.uploadFormat}
              </p>
            </div>
          </div>

          {/* DARK LOGO */}
          <div>
            <label className="text-sm font-medium text-slate-700 mb-2 block">
              {dict.darkModeLogo}
            </label>
            <div className="h-40 border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-50">
              <span className="material-symbols-outlined text-4xl text-slate-400">
                upload_file
              </span>
              <p className="text-sm text-slate-500 mt-2">
                {dict.uploadHint}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {dict.uploadFormat}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* THEME & COLORS — FULL WIDTH */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 w-full">
        <h2 className="text-xl font-medium text-slate-900 mb-8">
          {dict.themeColors}
        </h2>

        <div className="grid grid-cols-1 2xl:grid-cols-3 gap-10">
          {/* COLORS */}
          <div className="2xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* PRIMARY */}
            <div>
              <label className="text-sm font-medium text-slate-700 mb-2 block">
                {dict.primaryColor}
              </label>
              <div className="relative">
                <div
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded border"
                  style={{ background: "#F38B14" }}
                />
                <input className={inputBase} defaultValue="#F38B14" />
              </div>
            </div>

            {/* NEUTRAL DARK */}
            <div>
              <label className="text-sm font-medium text-slate-700 mb-2 block">
                {dict.neutralDark}
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded border bg-[#111111]" />
                <input className={inputBase} defaultValue="#111111" />
              </div>
            </div>

            {/* NEUTRAL GREY */}
            <div>
              <label className="text-sm font-medium text-slate-700 mb-2 block">
                {dict.neutralGrey}
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded border bg-[#7A7A7A]" />
                <input className={inputBase} defaultValue="#7A7A7A" />
              </div>
            </div>

            {/* ACCENT */}
            <div>
              <label className="text-sm font-medium text-slate-700 mb-2 block">
                {dict.accentColors}
              </label>
              <button className="h-11 flex items-center gap-2 text-sm text-slate-500 hover:text-[#F38B14]">
                <span className="material-symbols-outlined">add_circle</span>
                {dict.addAccent}
              </button>
            </div>
          </div>

          {/* THEME MODE */}
          <div>
            <label className="text-sm font-medium text-slate-700 mb-2 block">
              {dict.themeMode}
            </label>
            <div className="flex flex-col gap-3">
              {["light", "dark", "auto"].map(mode => (
                <label
                  key={mode}
                  className="flex items-center gap-3 p-3 rounded-xl border border-slate-300 has-[:checked]:border-[#F38B14] has-[:checked]:bg-[#F38B14]/10"
                >
                  <input
                    type="radio"
                    name="theme"
                    defaultChecked={mode === "light"}
                  />
                  <span className="text-sm text-slate-900">
                    {dict[`theme_${mode}`]}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <hr className="my-8 border-slate-200" />

        {/* ACTIONS */}
        <div className="flex justify-end gap-4">
          <button
            onClick={() => navigate("/super-admin/system-settings")}
            className="text-sm text-slate-500 hover:text-slate-700"
          >
            {dict.cancel}
          </button>
          <button className="h-11 px-6 rounded-xl bg-[#F38B14] text-white font-medium hover:bg-black transition">
            {dict.saveBranding}
          </button>
        </div>
      </div>
    </div>
  );
}
