import { useLanguage } from "../../../../../../context/LanguageContext";
import { t } from "../../../../../../i18n/translations";

export default function AssetAnalytics() {
  const { lang } = useLanguage();
  const dict = t[lang];

  const stats = [
    { label: dict.asset_avgTime, value: "2.5 hrs" },
    { label: dict.asset_totalTasks, value: "42" },
    { label: dict.asset_overdueTasks, value: "3", color: "text-red-500" },
    { label: dict.asset_conditionRating, value: "4.5 / 5", color: "text-green-500" },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e8dcce]">
      <h3 className="text-lg font-bold mb-4">{dict.asset_analytics}</h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-[#f8f7f5] p-4 rounded-lg">
            <p className="text-xs text-[#9c7649]">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.color || ""}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center text-[#9c7649]">
          {dict.asset_chart_activity}
        </div>
        <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center text-[#9c7649]">
          {dict.asset_chart_failures}
        </div>
      </div>
    </div>
  );
}
