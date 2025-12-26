// src/modules/superAdmin/pages/Maintenance/tabs/Calendar.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";

// Calendar Components
import CalendarMonth from "../components/CalendarMonth";
import CalendarWeek from "../components/CalendarWeek";
import CalendarDay from "../components/CalendarDay";
import CalendarInspector from "../components/CalendarInspector";
import CalendarFilters from "../components/CalendarFilters";

// Correct modal — ONLY for task creation
import MaintenanceTaskCreateModal from "@/components/modals/MaintenanceTaskCreateModal";

export default function Calendar() {
  const { lang } = useLanguage();
  const dict = t[lang];

  const navigate = useNavigate();

  const [activeView, setActiveView] = useState("month");
  const [selectedTask, setSelectedTask] = useState(null);

  // MODAL STATE — only for task create
  const [taskCreateOpen, setTaskCreateOpen] = useState(false);

  return (
    <div className="p-6 flex gap-6">

      {/* LEFT SIDE */}
      <div className="flex-1 space-y-4">

        {/* TOP BUTTONS */}
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            {[
              { key: "month", label: dict.mt_calendar_monthView },
              { key: "week", label: dict.mt_calendar_weekView },
              { key: "day", label: dict.mt_calendar_dayView },
            ].map((v) => (
              <button
                key={v.key}
                onClick={() => setActiveView(v.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium border ${
                  activeView === v.key
                    ? "bg-[#F38B14] text-white border-[#F38B14]"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex gap-2">

            {/* CREATE SCHEDULE (Page Redirect) */}
            <button
              onClick={() => navigate("/super-admin/maintenance/create")}
              className="h-10 px-4 rounded-lg text-sm border border-gray-300 hover:bg-gray-100"
            >
              {dict.createMaintenanceSchedule}
            </button>

            {/* CREATE TASK (Open Modal) */}
            <button
              onClick={() => setTaskCreateOpen(true)}
              className="h-10 px-4 rounded-lg text-sm bg-[#F38B14] text-white hover:bg-black"
            >
              {dict.createMaintenanceTask}
            </button>

          </div>
        </div>

        {/* ACTIVE VIEW: MONTH / WEEK / DAY */}
        {activeView === "month" && <CalendarMonth onTaskClick={setSelectedTask} />}
        {activeView === "week" && <CalendarWeek onTaskClick={setSelectedTask} />}
        {activeView === "day" && <CalendarDay onTaskClick={setSelectedTask} />}

        {/* FILTER BAR */}
        <CalendarFilters />
      </div>

      {/* RIGHT SIDEBAR */}
      <CalendarInspector task={selectedTask} />

      {/* CREATE TASK MODAL */}
      <MaintenanceTaskCreateModal
        open={taskCreateOpen}
        onClose={() => setTaskCreateOpen(false)}
      />
    </div>
  );
}
