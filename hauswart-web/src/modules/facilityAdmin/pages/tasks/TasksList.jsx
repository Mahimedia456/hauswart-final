import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/i18n/translations";

const DUMMY_TASKS = [
  {
    id: "TASK-001",
    ticket: "Air conditioning issue",
    technician: "Ahmed Khan",
    status: "in_progress",
    property: "Hauswart Tower",
    created: "2025-03-18",
  },
  {
    id: "TASK-002",
    ticket: "Water leakage",
    technician: "Ali Raza",
    status: "completed",
    property: "Maplewood Gardens",
    created: "2025-03-17",
  },
];

export default function TasksList() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const dict = t[lang];

  const statusColor = (s) => ({
    pending: "bg-yellow-100 text-yellow-800",
    in_progress: "bg-blue-100 text-blue-800",
    on_hold: "bg-orange-100 text-orange-800",
    completed: "bg-green-100 text-green-800",
  }[s]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{dict.tasks}</h1>

      <div className="bg-white rounded-2xl border shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-3 text-left">{dict.col_task_id}</th>
              <th className="px-6 py-3">{dict.ticket}</th>
              <th className="px-6 py-3">{dict.col_technician}</th>
              <th className="px-6 py-3">{dict.col_status}</th>
              <th className="px-6 py-3">{dict.properties}</th>
              <th className="px-6 py-3">{dict.col_createdDate}</th>
            </tr>
          </thead>

          <tbody>
            {DUMMY_TASKS.map((task) => (
              <tr
                key={task.id}
                onClick={() => navigate(`/facility-manager/tasks/${task.id}`)}
                className="border-t cursor-pointer hover:bg-orange-50/50"
              >
                <td className="px-6 py-4 font-semibold">{task.id}</td>
                <td className="px-6 py-4">{task.ticket}</td>
                <td className="px-6 py-4">{task.technician}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs ${statusColor(task.status)}`}>
                    {dict[`task_status_${task.status}`]}
                  </span>
                </td>
                <td className="px-6 py-4">{task.property}</td>
                <td className="px-6 py-4">{task.created}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
