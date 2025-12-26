// src/modules/superAdmin/pages/Maintenance/tabs/MaintenanceOverview.jsx

import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";

export default function MaintenanceOverview() {
  const { lang } = useLanguage();
  const dict = t[lang];

  const maintenance = {
    id: "MT-2342",
    title: "Quarterly HVAC Inspection",
    status: "In Progress",
    priority: "High",
    category: "HVAC",
    technician: "Emily Carter",
    property: "Hauswart Tower / Floor 5",
    asset: "Air Handling Unit — AHU-04",
    dueDate: "28 Jan 2025",
    lastUpdated: "24 Jan 2025",
    openTasks: 3,
    overdueTasks: 1,
    completedSteps: 2,
    totalSteps: 5,
  };

  return (
    <div className="p-6 space-y-6">

      {/* HEADER */}
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-[#111]">
          {dict.mt_overview_title}
        </h1>

        <p className="text-gray-500 text-sm">
          {dict.mt_overview_subtitle}
        </p>

        <div className="text-sm text-gray-600 mt-1">
          <span className="font-medium">{dict.mt_overview_id}:</span> {maintenance.id}
          &nbsp; • &nbsp;
          <span className="font-medium">{dict.mt_overview_lastUpdated}:</span> {maintenance.lastUpdated}
        </div>
      </div>

      {/* SUMMARY CARD */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-[#111] mb-4">
          {maintenance.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* STATUS CARD */}
          <div className="p-4 border rounded-lg bg-[#FFF7EC] border-[#F38B14]/30">
            <p className="text-sm text-gray-500 font-medium">{dict.mt_overview_status}</p>
            <h3 className="text-lg font-bold text-[#111]">{maintenance.status}</h3>
            <p className="text-sm text-gray-600 mt-1">
              {dict.mt_overview_priority}: {maintenance.priority}
            </p>
            <p className="text-sm text-gray-600">{dict.mt_overview_category}: {maintenance.category}</p>
          </div>

          {/* PROGRESS CARD */}
          <div className="p-4 border rounded-lg bg-gray-50">
            <p className="text-sm text-gray-500 font-medium">{dict.mt_overview_progress}</p>
            <h3 className="text-lg font-bold text-[#111]">
              {maintenance.completedSteps} / {maintenance.totalSteps}
            </h3>

            <div className="w-full h-2 rounded-full bg-gray-200 mt-2 overflow-hidden">
              <div
                className="h-2 bg-[#F38B14]"
                style={{
                  width: `${(maintenance.completedSteps / maintenance.totalSteps) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* TECHNICIAN CARD */}
          <div className="p-4 border rounded-lg bg-gray-50">
            <p className="text-sm text-gray-500 font-medium">{dict.mt_overview_technician}</p>
            <h3 className="text-lg font-bold text-[#111]">{maintenance.technician}</h3>
            <p className="text-sm text-gray-600 mt-1">
              {dict.mt_overview_dueDate}: {maintenance.dueDate}
            </p>
          </div>
        </div>

        {/* DETAILS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 text-sm">

          <div>
            <span className="font-medium text-gray-600">{dict.mt_overview_property}:</span>
            <p>{maintenance.property}</p>
          </div>

          <div>
            <span className="font-medium text-gray-600">{dict.mt_overview_asset}:</span>
            <p>{maintenance.asset}</p>
          </div>

        </div>
      </div>

    </div>
  );
}
