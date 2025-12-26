import { useLanguage } from "../../../../../../context/LanguageContext";
import { t } from "../../../../../../i18n/translations";

export default function AssetQuickActions() {
  const { lang } = useLanguage();
  const dict = t[lang];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e8dcce]">
      <h3 className="text-lg font-bold mb-4">{dict.asset_quickActions}</h3>

      <div className="space-y-2">
        <button className="w-full p-3 rounded-lg bg-[#f4eee7] text-primary font-medium hover:bg-[#e8dcce]">
          + {dict.asset_btn_addTask}
        </button>
        <button className="w-full p-3 rounded-lg hover:bg-[#f4eee7]">{dict.asset_btn_assignSchedule}</button>
        <button className="w-full p-3 rounded-lg hover:bg-[#f4eee7]">{dict.asset_markUnderRepair}</button>
        <button className="w-full p-3 rounded-lg hover:bg-[#f4eee7]">{dict.asset_export}</button>
      </div>
    </div>
  );
}
