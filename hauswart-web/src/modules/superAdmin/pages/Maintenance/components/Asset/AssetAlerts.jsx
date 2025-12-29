import { useLanguage } from "../../../../../../context/LanguageContext";
import { t } from "../../../../../../i18n/translations";

export default function AssetAlerts() {
  const { lang } = useLanguage();
  const dict = t[lang];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e8dcce]">
      <h3 className="text-lg font-bold mb-4">{dict.asset_alerts}</h3>

      <div className="space-y-3">
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-md text-sm">
          {dict.asset_alert_warranty}
        </div>

        <div className="bg-red-100 border-l-4 border-red-500 text-red-800 p-4 rounded-md text-sm">
          {dict.asset_alert_overdue}
        </div>
      </div>
    </div>
  );
}
