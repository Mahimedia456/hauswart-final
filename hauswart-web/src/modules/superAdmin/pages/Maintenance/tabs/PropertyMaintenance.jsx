import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";

import PropertyHeader from "../components/Property/PropertyHeader";
import PropertySummaryCard from "../components/Property/PropertySummaryCard";
import PropertyActiveSchedules from "../components/Property/PropertyActiveSchedules";
import PropertyUpcomingTasks from "../components/Property/PropertyUpcomingTasks";
import PropertyHistory from "../components/Property/PropertyHistory";
import PropertyAnalytics from "../components/Property/PropertyAnalytics";
import PropertyRiskIndicators from "../components/Property/PropertyRiskIndicators";
import PropertyCompliance from "../components/Property/PropertyCompliance";

export default function PropertyMaintenance() {
  const { lang } = useLanguage();
  const dict = t[lang];

  // Placeholder modal handlers
  const openAddTask = () => console.log("OPEN: AddTaskModal");
  const openAssignSchedule = () => console.log("OPEN: AssignScheduleModal");
  const openAddAsset = () => console.log("OPEN: AddAssetModal");

  return (
    <div className="p-6 space-y-6">

      {/* PAGE HEADER */}
      <PropertyHeader
        title={dict.mt_property_title}
        subtitle={dict.mt_property_subtitle}
        onAddTask={openAddTask}
        onAssignSchedule={openAssignSchedule}
        onAddAsset={openAddAsset}
      />

      {/* SUMMARY CARD */}
      <PropertySummaryCard dict={dict} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT SIDE (2 COLS) */}
        <div className="lg:col-span-2 space-y-6">
          <PropertyActiveSchedules dict={dict} />
          <PropertyUpcomingTasks dict={dict} />
          <PropertyHistory dict={dict} />
        </div>

        {/* RIGHT SIDE (1 COL) */}
        <div className="space-y-6">
          <PropertyAnalytics dict={dict} />
          <PropertyRiskIndicators dict={dict} />
          <PropertyCompliance dict={dict} />
        </div>
      </div>
    </div>
  );
}
