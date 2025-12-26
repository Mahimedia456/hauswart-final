import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/i18n/translations";

export default function LocalizationSettings() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const dict = t[lang];

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
          {dict.localization}
        </h1>
        <p className="text-slate-500 mt-1">
          {dict.localizationDesc}
        </p>
      </div>

      {/* SUPPORTED LANGUAGES */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 mb-8 w-full">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              {dict.supportedLanguages}
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              {dict.supportedLanguagesDesc}
            </p>
          </div>

          <button className="flex items-center gap-2 px-4 h-10 rounded-xl bg-[#F38B14] text-white text-sm font-semibold hover:bg-black transition">
            <span className="material-symbols-outlined">add</span>
            {dict.addLanguage}
          </button>
        </div>

        {/* TABLE */}
        <div className="-mx-8">
          <table className="w-full border-t border-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-8 py-3 text-left text-sm font-semibold">{dict.language}</th>
                <th className="py-3 text-left text-sm font-semibold">{dict.code}</th>
                <th className="py-3 text-left text-sm font-semibold">{dict.enabled}</th>
                <th className="py-3 text-left text-sm font-semibold">{dict.default}</th>
                <th className="px-8 py-3"></th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {[
                { name: "English", code: "en-US", enabled: true, def: true },
                { name: "German", code: "de-DE", enabled: true },
                { name: "Arabic", code: "ar-SA", enabled: false },
                { name: "French", code: "fr-FR", enabled: true },
              ].map((l, i) => (
                <tr key={i}>
                  <td className="px-8 py-4 font-medium">{l.name}</td>
                  <td className="py-4 text-slate-500">{l.code}</td>
                  <td className="py-4">
                    <input type="checkbox" defaultChecked={l.enabled} />
                  </td>
                  <td className="py-4">
                    <input type="radio" name="defaultLang" defaultChecked={l.def} />
                  </td>
                  <td className="px-8 py-4 text-right">
                    <span className="material-symbols-outlined text-slate-400">
                      more_horiz
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* PRIORITY ORDER */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 w-full">
        <h2 className="text-xl font-semibold text-slate-900">
          {dict.languagePriority}
        </h2>
        <p className="text-sm text-slate-500 mt-1 mb-6">
          {dict.languagePriorityDesc}
        </p>

        <div className="space-y-3">
          {["English", "German", "French"].map((l, i) => (
            <div
              key={i}
              className="flex items-center p-4 border border-slate-200 rounded-xl bg-white hover:bg-slate-50 cursor-grab"
            >
              <span className="material-symbols-outlined mr-4 text-slate-400">
                drag_indicator
              </span>
              <div className="flex-1 font-medium">{l}</div>
              <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-700">
                {dict.enabled}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ACTIONS */}
      <div className="flex gap-6 mt-8">
        <button className="h-11 px-6 rounded-xl bg-[#F38B14] text-white font-semibold hover:bg-black transition">
          {dict.saveLocalization}
        </button>
        <button
          onClick={() => navigate("/super-admin/system-settings")}
          className="text-sm font-semibold text-slate-500 hover:text-slate-700"
        >
          {dict.cancel}
        </button>
      </div>
    </div>
  );
}
