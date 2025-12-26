import { useLanguage } from "../../../../../../context/LanguageContext";
import { t } from "../../../../../../i18n/translations";
export default function AssetLinkedSchedules() {
  const { lang } = useLanguage();
  const dict = t[lang];

  const schedules = []; // empty to show no linked schedules state

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e8dcce]">
      <h3 className="text-lg font-bold mb-4">{dict.asset_linkedSchedules}</h3>

      {schedules.length === 0 ? (
        <div className="text-center py-10 border-2 border-dashed border-[#e8dcce] rounded-lg">
          <p className="text-[#9c7649] mb-4">{dict.asset_noSchedules}</p>
          <button className="mx-auto h-10 px-4 bg-[#F38B14] rounded-lg text-white font-bold hover:bg-black">
            {dict.asset_assignNow}
          </button>
        </div>
      ) : (
        <div> {/* future: map schedules */}</div>
      )}
    </div>
  );
}
