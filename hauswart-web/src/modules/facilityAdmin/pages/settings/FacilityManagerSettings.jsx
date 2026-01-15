import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/i18n/translations";

export default function FacilityManagerSettings() {
  const { lang } = useLanguage();
  const dict = t[lang];

  return (
    <div className="max-w-4xl space-y-4">
      <h1 className="text-xl font-bold">
        {dict.fm_settings}
      </h1>
      <p className="text-sm text-slate-500">
        {dict.fm_settings_desc}
      </p>

      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <p className="text-sm text-slate-600">
          Settings modules will be added here.
        </p>
      </div>
    </div>
  );
}
