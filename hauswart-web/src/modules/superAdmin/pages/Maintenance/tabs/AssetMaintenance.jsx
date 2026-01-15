import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";
import AssetSummaryCard from "../components/Asset/AssetSummaryCard";
import AssetLinkedSchedules from "../components/Asset/AssetLinkedSchedules";
import AssetUpcomingTasks from "../components/Asset/AssetUpcomingTasks";
import AssetMaintenanceHistory from "../components/Asset/AssetMaintenanceHistory";
import AssetAnalytics from "../components/Asset/AssetAnalytics";
import AssetDocuments from "../components/Asset/AssetDocuments";
import AssetQuickActions from "../components/Asset/AssetQuickActions";
import AssetMetadata from "../components/Asset/AssetMetadata";
import AssetAlerts from "../components/Asset/AssetAlerts";
import AssetNotes from "../components/Asset/AssetNotes";

export default function AssetMaintenance() {
  const { lang } = useLanguage();
  const dict = t[lang];

  return (
    <div className="p-6 space-y-6">
      {/* Page Header (NO BACK BUTTON) */}
      <header className="flex flex-wrap justify-between items-center gap-4 mb-4">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-[#1c150d]">
            {dict.asset_title}
          </h1>
          <p className="text-[#9c7649] text-base">
            {dict.asset_subtitle}
          </p>
        </div>

        <div className="flex gap-3">
          <button className="h-10 px-4 rounded-lg bg-[#f4eee7] text-[#1c150d] font-bold hover:bg-[#e8dcce]">
            {dict.asset_btn_edit}
          </button>

          <button className="h-10 px-4 rounded-lg bg-[#f4eee7] text-[#1c150d] font-bold hover:bg-[#e8dcce]">
            {dict.asset_btn_addTask}
          </button>

          <button className="h-10 px-4 rounded-lg bg-[#F38B14] text-white font-bold hover:bg-black">
            {dict.asset_btn_assignSchedule}
          </button>
        </div>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 space-y-6">
          <AssetSummaryCard />
          <AssetLinkedSchedules />
          <AssetUpcomingTasks />
          <AssetMaintenanceHistory />
          <AssetAnalytics />
          <AssetDocuments />
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">
          <AssetQuickActions />
          <AssetMetadata />
          <AssetAlerts />
          <AssetNotes />
        </div>
      </div>
    </div>
  );
}
