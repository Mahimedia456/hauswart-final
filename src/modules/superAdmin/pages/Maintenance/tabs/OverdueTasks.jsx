import { useState } from "react";
import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";
import TaskDrawer from "../components/TaskDrawer";
import AssignMaintenanceModal from "@/components/modals/AssignMaintenanceModal";

export default function OverdueTasks() {
  const { lang } = useLanguage();
  const dict = t[lang];

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const [showAssignModal, setShowAssignModal] = useState(false);

  function handleView(task) {
    setSelectedTask(task);
    setDrawerOpen(true);
  }

  // ------------------------------------------
  // KPI DATA (demo)
  // ------------------------------------------
  const KPIs = [
    {
      label: dict.mt_overdue_kpi_critical,
      value: 6,
      desc: dict.mt_overdue_kpi_criticalDesc,
      color: "text-red-600",
    },
    {
      label: dict.mt_overdue_kpi_high,
      value: 14,
      desc: dict.mt_overdue_kpi_highDesc,
      color: "text-orange-500",
    },
    {
      label: dict.mt_overdue_kpi_medium,
      value: 22,
      desc: dict.mt_overdue_kpi_mediumDesc,
      color: "text-yellow-500",
    },
    {
      label: dict.mt_overdue_kpi_unassigned,
      value: 9,
      desc: dict.mt_overdue_kpi_unassignedDesc,
      color: "text-gray-600",
    },
  ];

  // ------------------------------------------
  // TABLE DATA (demo)
  // ------------------------------------------
  const tasks = [
    {
      id: "OD-2001",
      name: "Inspect Fire Sprinkler System",
      fromSchedule: "Monthly HVAC Check",
      asset: "Sprinkler-001",
      icon: "local_fire_department",
      property: "Main Tower",
      propertyDetail: "Floor 12 → Unit 1204",
      assignee: "Jane Doe",
      assigneeImg: "https://i.pravatar.cc/150?img=32",
      scheduledDate: "May 15, 2025",
      overdueDays: 12,
      priority: "Critical",
      sla: "SLA Breached",
      slaIcon: "dangerous",

      // Needed for Drawer
      status: "Overdue",
      scheduleText: "Monthly HVAC Check",
      description: "Fire suppression preventive maintenance overdue.",
      checklist: ["Check sprinkler pressure", "Inspect valves"],
    },
    {
      id: "OD-2002",
      name: "HVAC Filter Replacement",
      fromSchedule: "Quarterly Maintenance",
      asset: "HVAC-003",
      icon: "ac_unit",
      property: "West Wing",
      propertyDetail: "Floor 3 → Common Area",
      assignee: "Unassigned",
      assigneeImg: null,
      scheduledDate: "May 20, 2025",
      overdueDays: 7,
      priority: "High",
      sla: "SLA Warning",
      slaIcon: "warning",

      status: "Overdue",
      scheduleText: "Quarterly Maintenance",
      description: "Air handling filter replacement overdue.",
      checklist: [],
    },
    {
      id: "OD-2003",
      name: "Lobby Light Fixture Check",
      fromSchedule: "Weekly Walkthrough",
      asset: "Lighting-Lobby-01",
      icon: "lightbulb",
      property: "Main Tower",
      propertyDetail: "Lobby",
      assignee: "John Smith",
      assigneeImg: "https://i.pravatar.cc/150?img=15",
      scheduledDate: "May 25, 2025",
      overdueDays: 2,
      priority: "Medium",
      sla: "No SLA",
      slaIcon: "info",

      status: "Overdue",
      scheduleText: "Weekly Walkthrough",
      description: "Basic lighting safety check overdue.",
      checklist: ["Inspect bulbs", "Check panel status"],
    },
  ];

  const priorityColor = {
    Critical: "border-red-500",
    High: "border-orange-500",
    Medium: "border-yellow-500",
    Low: "border-gray-400",
  };

  const priorityBadge = {
    Critical: "bg-red-100 text-red-700",
    High: "bg-orange-100 text-orange-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-gray-100 text-gray-700",
  };

  return (
    <div className="p-6 space-y-8">
      
      {/* PAGE HEADER */}
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">{dict.mt_tab_overdueTasks}</h1>
          <p className="text-gray-500">{dict.mt_overdue_subtitle}</p>
        </div>

        <div className="flex gap-3">
          {/* REMOVED BACK BUTTON */}
          <button className="h-10 px-4 rounded-lg text-sm border border-gray-300 hover:bg-gray-100">
            {dict.exportOverdueList}
          </button>

          <button
            onClick={() => setShowAssignModal(true)}
            className="h-10 px-4 rounded-lg text-sm text-white bg-[#F38B14] hover:bg-black"
          >
            {dict.assignTechnicians}
          </button>
        </div>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPIs.map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-xl bg-white border shadow-sm flex flex-col gap-2"
          >
            <p className="text-sm font-medium">{item.label}</p>
            <p className={`text-4xl font-bold ${item.color}`}>{item.value}</p>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* TABLE */}
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600 text-xs uppercase border-b">
              <tr>
                <th className="p-3">{dict.mt_table_title}</th>
                <th className="p-3">{dict.mt_table_asset}</th>
                <th className="p-3">{dict.mt_table_property}</th>
                <th className="p-3">{dict.mt_table_technician}</th>
                <th className="p-3">{dict.mt_table_dueDate}</th>
                <th className="p-3">{dict.mt_overdue_days}</th>
                <th className="p-3">{dict.mt_table_priority}</th>
                <th className="p-3">{dict.mt_overdue_sla}</th>
                <th className="p-3">{dict.actions}</th>
              </tr>
            </thead>

            <tbody>
              {tasks.map((task) => (
                <tr
                  key={task.id}
                  className={`border-b hover:bg-gray-50 border-l-4 ${priorityColor[task.priority]}`}
                >
                  {/* NAME */}
                  <td className="p-3">
                    <div className="font-semibold">{task.name}</div>
                    <div className="text-xs text-gray-500">
                      {dict.fromSchedule}: {task.fromSchedule}
                    </div>
                  </td>

                  {/* ASSET */}
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">
                        {task.icon}
                      </span>
                      {task.asset}
                    </div>
                  </td>

                  {/* PROPERTY */}
                  <td className="p-3">
                    <div>{task.property}</div>
                    <div className="text-xs text-gray-500">{task.propertyDetail}</div>
                  </td>

                  {/* TECHNICIAN */}
                  <td className="p-3">
                    {task.assigneeImg ? (
                      <div className="flex items-center gap-2">
                        <img src={task.assigneeImg} className="w-8 h-8 rounded-full" />
                        {task.assignee}
                      </div>
                    ) : (
                      <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-semibold">
                        {dict.unassigned}
                      </span>
                    )}
                  </td>

                  {/* DATE */}
                  <td className="p-3">{task.scheduledDate}</td>

                  {/* DAYS OVERDUE */}
                  <td className="p-3">
                    <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full font-semibold">
                      {task.overdueDays} {dict.daysOverdue}
                    </span>
                  </td>

                  {/* PRIORITY */}
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${priorityBadge[task.priority]}`}
                    >
                      {task.priority}
                    </span>
                  </td>

                  {/* SLA */}
                  <td className="p-3">
                    <div className="flex items-center gap-1 text-red-500">
                      <span className="material-symbols-outlined text-sm">{task.slaIcon}</span>
                      {task.sla}
                    </div>
                  </td>

                  {/* ACTIONS */}
                  <td className="p-3">
                    <button
                      onClick={() => handleView(task)}
                      className="text-gray-600 hover:text-black material-symbols-outlined"
                    >
                      visibility
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* DRAWER */}
      <TaskDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        task={selectedTask}
      />

      {/* ASSIGN MODAL */}
      {showAssignModal && (
        <AssignMaintenanceModal
          open={showAssignModal}
          onClose={() => setShowAssignModal(false)}
          task={selectedTask}
        />
      )}
    </div>
  );
}
