import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";
import { useState } from "react";

import TaskDrawer from "../components/TaskDrawer";
import MaintenanceTaskCreateModal from "@/components/modals/MaintenanceTaskCreateModal";
import MaintenanceTaskEditModal from "@/components/modals/MaintenanceTaskEditModal";

export default function UpcomingTasks() {
  const { lang } = useLanguage();
  const dict = t[lang];
  const navigate = useNavigate();

  // UI state
  const [showDelete, setShowDelete] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const [createOpen, setCreateOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [editTaskData, setEditTaskData] = useState(null);

  function handleView(task) {
    setSelectedTask(task);
    setDrawerOpen(true);
  }

  const openEditModal = (task) => {
    setEditTaskData(task);
    setEditOpen(true);
  };

  // Dummy Data
  const tasks = [
    {
      id: "MT-1001",
      name: "Quarterly HVAC Filter Replacement",
      fromSchedule: "HVAC Monthly Check",
      asset: "HVAC Unit #3",
      assetId: "SN-4892-B",
      property: "Starlight Tower",
      propertyDetail: "Floor 12 → Unit 1204 → Utility",
      assignee: "John Doe",
      assigneeImg: "https://i.pravatar.cc/150?img=12",
      date: "Mar 25, 2025, 10:00 AM",
      dueTag: "Due Today",
      priority: "Critical",
      status: "Assigned",
      scheduleText: "Jul 15, 2025 • Quarterly",
      description:
        "Monthly preventive maintenance including inspection of components and safety systems.",
      checklist: ["Inspect hoist cables for wear", "Test door safety sensors"],
    },
    {
      id: "MT-1002",
      name: "Fire Extinguisher Inspection",
      fromSchedule: "Monthly Safety Walk",
      asset: "Lobby Extinguishers",
      assetId: "Multiple",
      property: "Northwind Plaza",
      propertyDetail: "Floor 1 → Lobby Area",
      assignee: "Jane Smith",
      assigneeImg: "https://i.pravatar.cc/150?img=32",
      date: "Mar 26, 2025, 2:00 PM",
      dueTag: "Due Tomorrow",
      priority: "High",
      status: "In Progress",
      scheduleText: "Jul 20, 2025 • Monthly",
      description: "Routine safety inspection for all building extinguishers.",
      checklist: ["Check pressure level", "Verify mounting brackets"],
    },
  ];

  // Badge Styles
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

  const statusBadge = {
    Assigned: "bg-blue-100 text-blue-700",
    "In Progress": "bg-orange-100 text-orange-700",
    Scheduled: "bg-gray-100 text-gray-700",
    "Awaiting Report": "bg-purple-100 text-purple-700",
  };

  return (
    <div className="p-6 space-y-6">

      {/* HEADER */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="text-2xl font-bold">{dict.mt_tab_upcomingTasks}</h2>

        <div className="flex gap-3">

          <button className="h-10 px-4 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-100">
            {dict.exportList}
          </button>

          <button
            onClick={() => setCreateOpen(true)}
            className="h-10 px-4 rounded-lg text-sm font-semibold text-white bg-[#F38B14] hover:bg-black transition"
          >
            {dict.maintenance_createTask}
          </button>
        </div>
      </div>

      {/* FILTERS */}
      <div className="bg-white border rounded-lg p-4 shadow-sm space-y-4">

        <div className="flex flex-wrap gap-3">
          {[
            dict.filter_timeRange,
            dict.filter_organization,
            dict.filter_property,
            dict.filter_assetCategory,
            dict.filter_priority,
            dict.filter_status,
          ].map((label, i) => (
            <button
              key={i}
              className="flex items-center gap-2 h-9 bg-gray-100 px-3 text-sm rounded-lg border border-gray-300 hover:bg-gray-200"
            >
              {label}
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
          ))}

          <button className="text-sm font-medium text-gray-500 hover:text-black">
            {dict.resetFilters}
          </button>
        </div>

        {/* SEARCH */}
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              search
            </span>
            <input
              placeholder={dict.search}
              className="w-full h-11 pl-12 rounded-lg bg-gray-100 border border-gray-300 text-sm"
            />
          </div>

          <button className="flex items-center gap-2 h-11 px-3 bg-gray-100 border border-gray-300 rounded-lg">
            <span className="text-sm">{dict.sortBySoonest}</span>
            <span className="material-symbols-outlined text-sm">expand_more</span>
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-x-auto">

        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600 text-xs uppercase border-b">
            <tr>
              <th className="p-3 text-left">{dict.mt_table_title}</th>
              <th className="p-3 text-left">{dict.mt_table_asset}</th>
              <th className="p-3 text-left">{dict.mt_table_property}</th>
              <th className="p-3 text-left">{dict.mt_table_technician}</th>
              <th className="p-3 text-left">{dict.mt_table_dueDate}</th>
              <th className="p-3 text-left">{dict.mt_table_priority}</th>
              <th className="p-3 text-left">{dict.mt_table_status}</th>
              <th className="p-3 text-left">{dict.actions}</th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((task) => (
              <tr
                key={task.id}
                className={`border-b hover:bg-gray-50 border-l-4 ${priorityColor[task.priority]}`}
              >
                {/* TITLE */}
                <td className="p-3">
                  <div className="font-semibold">{task.name}</div>
                  <div className="text-xs text-gray-500">
                    {dict.fromSchedule}: {task.fromSchedule}
                  </div>
                </td>

                {/* ASSET */}
                <td className="p-3">
                  <div className="font-medium">{task.asset}</div>
                  <div className="text-xs text-gray-500">SN: {task.assetId}</div>
                </td>

                {/* PROPERTY */}
                <td className="p-3">
                  <div>{task.property}</div>
                  <div className="text-xs text-gray-500">{task.propertyDetail}</div>
                </td>

                {/* ASSIGNEE */}
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-8 h-8 rounded-full bg-cover"
                      style={{ backgroundImage: `url(${task.assigneeImg})` }}
                    ></div>
                    {task.assignee}
                  </div>
                </td>

                {/* DATE */}
                <td className="p-3">
                  <div>{task.date}</div>
                  <div className="text-xs text-orange-600 font-semibold">{task.dueTag}</div>
                </td>

                {/* PRIORITY */}
                <td className="p-3">
                  <span className={`px-2 py-1 rounded-full text-xs ${priorityBadge[task.priority]}`}>
                    {task.priority}
                  </span>
                </td>

                {/* STATUS */}
                <td className="p-3">
                  <span className={`px-2 py-1 rounded-full text-xs ${statusBadge[task.status]}`}>
                    {task.status}
                  </span>
                </td>

                {/* ACTIONS */}
                <td className="p-3">
                  <div className="flex gap-3">

                    {/* VIEW → opens drawer */}
                    <button
                      onClick={() => handleView(task)}
                      className="text-gray-600 hover:text-black material-symbols-outlined text-[20px]"
                    >
                      visibility
                    </button>

                    {/* EDIT → opens modal */}
                    <button
                      onClick={() => openEditModal(task)}
                      className="text-blue-600 hover:text-blue-800 material-symbols-outlined text-[20px]"
                    >
                      edit
                    </button>

                    {/* DELETE */}
                    <button
                      onClick={() => setShowDelete(task.id)}
                      className="text-red-600 hover:text-red-800 material-symbols-outlined text-[20px]"
                    >
                      delete
                    </button>

                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* DELETE POPUP */}
      {showDelete && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 shadow-xl w-full max-w-md">
            <h2 className="text-lg font-bold text-red-600">
              {dict.modal_delete_title}
            </h2>

            <p className="text-gray-600 mt-2">{dict.modal_delete_desc}</p>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowDelete(null)}
                className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
              >
                {dict.action_cancel}
              </button>

              <button className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700">
                {dict.action_delete}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TASK DRAWER */}
      <TaskDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        task={selectedTask}
        onEdit={() => openEditModal(selectedTask)}
      />

      {/* CREATE MODAL */}
      <MaintenanceTaskCreateModal
        open={createOpen}
        onClose={() => setCreateOpen(false)}
      />

      {/* EDIT MODAL */}
      <MaintenanceTaskEditModal
        open={editOpen}
        onClose={() => setEditOpen(false)}
        task={editTaskData}
      />

    </div>
  );
}
