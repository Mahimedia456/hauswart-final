// src/modules/facilityAdmin/pages/Tickets/tabs/Tasks.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";

import TaskFormModal from "@/components/modals/TaskFormModal";

const DUMMY_TASKS = [
  {
    id: "TSK-24-001",
    technician: "Ahmed Khan",
    status: "in_progress",
    startedAt: "2025-03-18 10:15",
    duration: "—",
  },
  {
    id: "TSK-24-002",
    technician: "Ali Raza",
    status: "completed",
    startedAt: "2025-03-17 09:40",
    duration: "1h 25m",
  },
];

export default function TicketTasks() {
  const { lang } = useLanguage();
  const dict = t[lang];
  const navigate = useNavigate();

  const [createOpen, setCreateOpen] = useState(false);

  const statusBadge = (status) => {
    const map = {
      pending: "bg-yellow-100 text-yellow-800",
      in_progress: "bg-blue-100 text-blue-800",
      on_hold: "bg-orange-100 text-orange-800",
      completed: "bg-green-100 text-green-800",
      unassigned: "bg-slate-200 text-slate-700",
    };
    return map[status] || "bg-slate-100 text-slate-600";
  };

  return (
    <>
      <div className="space-y-6">

        {/* HEADER */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              {dict.ticket_tasks}
            </h3>
            <p className="text-sm text-slate-500">
              {dict.ticket_tasks_subtitle}
            </p>
          </div>

          <button
            onClick={() => setCreateOpen(true)}
            className="inline-flex items-center gap-2 h-10 px-4 rounded-xl
              bg-[#F38B14] text-white text-sm font-semibold hover:bg-black"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            {dict.ticket_create_task}
          </button>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-500 uppercase text-xs">
              <tr>
                <th className="px-6 py-3 text-left">{dict.col_task_id}</th>
                <th className="px-6 py-3 text-left">{dict.col_technician}</th>
                <th className="px-6 py-3 text-left">{dict.col_status}</th>
                <th className="px-6 py-3 text-left">{dict.col_started_at}</th>
                <th className="px-6 py-3 text-left">{dict.col_duration}</th>
              </tr>
            </thead>

            <tbody>
              {DUMMY_TASKS.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-slate-400">
                    {dict.ticket_no_tasks}
                  </td>
                </tr>
              )}

              {DUMMY_TASKS.map((task) => (
                <tr
                  key={task.id}
                  onClick={() =>
                    navigate(`/facility-manager/tasks/${task.id}`)
                  }
                  className="border-t hover:bg-orange-50/50 cursor-pointer"
                >
                  <td className="px-6 py-4 font-semibold">{task.id}</td>
                  <td className="px-6 py-4">{task.technician}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${statusBadge(task.status)}`}
                    >
                      {dict[`task_status_${task.status}`]}
                    </span>
                  </td>
                  <td className="px-6 py-4">{task.startedAt}</td>
                  <td className="px-6 py-4">{task.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-slate-500">
          {dict.ticket_tasks_note}
        </p>
      </div>

      {/* CREATE TASK MODAL */}
      <TaskFormModal
        open={createOpen}
        onClose={() => setCreateOpen(false)}
        onSubmit={(data) => {
          console.log("CREATE TASK FROM TICKET", data);
          setCreateOpen(false);
        }}
      />
    </>
  );
}
