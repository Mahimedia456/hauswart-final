import { useNavigate, useParams } from "react-router-dom";
import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";

export default function TechnicianTickets() {
  const navigate = useNavigate();
  const { id } = useParams(); // technician id
  const { lang } = useLanguage();
  const dict = t[lang];

  // TECHNICIAN TASKS (Tickets)
  const tasks = [
    {
      id: "HW-3462",
      category: "Plumbing",
      property: "123 Maple St / 4B",
      reportedBy: "Olivia Rhye (Tenant)",
      status: "completed",
      priority: "medium",
      created: "2023-10-26",
      updated: "2023-10-28",
    },
    {
      id: "HW-3455",
      category: "Electrical",
      property: "Oakwood Towers / 12B",
      reportedBy: "Phoenix Baker (Tenant)",
      status: "inProgress",
      priority: "high",
      created: "2023-10-24",
      updated: "2023-10-29",
    },
  ];

  return (
    <div className="space-y-6">

      {/* TOOLBAR */}
      <div className="flex flex-wrap justify-between items-center gap-4">
        <input
          type="text"
          placeholder={dict.tech_tasks_search}
          className="h-10 w-72 px-4 rounded-lg border border-slate-200"
        />

        <button
          onClick={() => navigate(`/super-admin/tickets/create?technician=${id}`)}
          className="h-10 px-4 rounded-lg bg-[#F38B14] text-white font-semibold hover:bg-black"
        >
          {dict.tech_tasks_create}
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-6 py-3 text-left">{dict.tech_task_id}</th>
              <th className="px-6 py-3 text-left">{dict.tech_task_category}</th>
              <th className="px-6 py-3 text-left">{dict.tech_task_property}</th>
              <th className="px-6 py-3 text-left">{dict.tech_task_reported_by}</th>
              <th className="px-6 py-3 text-left">{dict.tech_task_status}</th>
              <th className="px-6 py-3 text-left">{dict.tech_task_priority}</th>
              <th className="px-6 py-3 text-left">{dict.tech_task_created}</th>
              <th className="px-6 py-3 text-left">{dict.tech_task_updated}</th>
            </tr>
          </thead>

          <tbody>
            {tasks.map(task => (
              <tr
                key={task.id}
                onClick={() => navigate(`/super-admin/tickets/${task.id}`)}
                className="border-t hover:bg-slate-50 cursor-pointer"
              >
                <td className="px-6 py-4 font-medium">#{task.id}</td>
                <td className="px-6 py-4">{task.category}</td>
                <td className="px-6 py-4">{task.property}</td>
                <td className="px-6 py-4">{task.reportedBy}</td>
                <td className="px-6 py-4">
                  <StatusBadge value={task.status} dict={dict} />
                </td>
                <td className="px-6 py-4">
                  <PriorityBadge value={task.priority} dict={dict} />
                </td>
                <td className="px-6 py-4">{task.created}</td>
                <td className="px-6 py-4">{task.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* BADGES                                                                     */
/* -------------------------------------------------------------------------- */

function StatusBadge({ value, dict }) {
  const map = {
    completed: "bg-green-100 text-green-700",
    inProgress: "bg-blue-100 text-blue-700",
    overdue: "bg-red-100 text-red-700",
    open: "bg-slate-100 text-slate-700",
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${map[value]}`}>
      {dict[`status_${value}`]}
    </span>
  );
}

function PriorityBadge({ value, dict }) {
  const map = {
    low: "bg-slate-100 text-slate-700",
    medium: "bg-yellow-100 text-yellow-700",
    high: "bg-orange-100 text-orange-700",
    critical: "bg-red-100 text-red-700",
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${map[value]}`}>
      {dict[`priority_${value}`]}
    </span>
  );
}
