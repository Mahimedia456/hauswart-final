import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/i18n/translations";

import TaskFormModal from "@/components/modals/TaskFormModal";

/* ================= KPIs ================= */

const taskStats = [
  { key: "tasks_total", value: "84", icon: "assignment" },
  { key: "tasks_in_progress", value: "36", icon: "sync" },
  { key: "tasks_completed", value: "31", icon: "check_circle" },
  { key: "tasks_overdue", value: "17", icon: "schedule" },
];

/* ================= DATA ================= */

const TASKS = [
  {
    id: "TSK-24-001",
    priority: "High",
    technician: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/40.jpg",
    status: "In Progress",
  },
];

export default function TasksList() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const dict = t[lang];

  const [createOpen, setCreateOpen] = useState(false);
  const [editTask, setEditTask] = useState(null);

  const [filters, setFilters] = useState({
    status: "",
    priority: "",
    technician: "",
  });

  const filteredTasks = TASKS.filter(
    (t) =>
      (!filters.status || t.status === filters.status) &&
      (!filters.priority || t.priority === filters.priority) &&
      (!filters.technician || t.technician === filters.technician)
  );

  return (
    <>
      <div className="p-6 space-y-6">

        {/* ================= HEADER ================= */}
        <header className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">{dict.tasks}</h1>
            <p className="text-slate-500">{dict.tasks_subtitle}</p>
          </div>

          <button
            onClick={() => setCreateOpen(true)}
            className="h-10 px-4 rounded-lg bg-[#F38B14] text-white font-bold hover:bg-black transition flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            {dict.create_task}
          </button>
        </header>

        {/* ================= KPIs ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {taskStats.map((s) => (
            <div
              key={s.key}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm"
            >
              <div className="flex justify-between text-slate-500">
                <p className="font-medium">{dict[s.key]}</p>
                <span className="material-symbols-outlined">{s.icon}</span>
              </div>
              <p className="text-3xl font-bold mt-2">{s.value}</p>
            </div>
          ))}
        </div>

        {/* ================= FILTER BAR ================= */}
        <section className="bg-white border border-slate-200 rounded-xl shadow-sm p-4">
          <div className="flex flex-wrap gap-3">
            <Select
              value={filters.status}
              onChange={(e) =>
                setFilters({ ...filters, status: e.target.value })
              }
            >
              <option value="">{dict.filter_status}</option>
              <option value="In Progress">{dict.status_in_progress}</option>
              <option value="Completed">{dict.status_completed}</option>
            </Select>

            <Select
              value={filters.priority}
              onChange={(e) =>
                setFilters({ ...filters, priority: e.target.value })
              }
            >
              <option value="">{dict.filter_priority}</option>
              <option value="High">{dict.priority_high}</option>
            </Select>

            <Select
              value={filters.technician}
              onChange={(e) =>
                setFilters({ ...filters, technician: e.target.value })
              }
            >
              <option value="">{dict.filter_technician}</option>
              <option value="John Doe">John Doe</option>
            </Select>

            <button
              onClick={() =>
                setFilters({ status: "", priority: "", technician: "" })
              }
              className="ml-auto text-[#F38B14] text-sm font-medium hover:underline"
            >
              {dict.clear_all}
            </button>
          </div>
        </section>

        {/* ================= TABLE ================= */}
        <section className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-600 uppercase text-xs">
              <tr>
                <Th>{dict.col_task_id}</Th>
                <Th>{dict.col_technician}</Th>
                <Th>{dict.col_status}</Th>
                <Th right>{dict.col_actions}</Th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {filteredTasks.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="px-6 py-10 text-center text-slate-400"
                  >
                    {dict.no_tasks}
                  </td>
                </tr>
              )}

              {filteredTasks.map((task) => (
                <tr
                  key={task.id}
                  className="hover:bg-slate-50 cursor-pointer"
                  onClick={() =>
                    navigate(`/facility-manager/tasks/${task.id}`)
                  }
                >
                  <Td strong>#{task.id}</Td>

                  <Td>
                    <div className="flex items-center gap-2">
                      <img
                        src={task.avatar}
                        className="h-6 w-6 rounded-full"
                      />
                      {task.technician}
                    </div>
                  </Td>

                  <Td>
                    <StatusBadge status={task.status} />
                  </Td>

                  <Td
                    right
                    onClick={(e) => e.stopPropagation()}
                    className="space-x-2"
                  >
                    <IconBtn
                      icon="edit"
                      onClick={() => setEditTask(task)}
                    />
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>

      {/* ================= MODALS ================= */}
      <TaskFormModal
        open={createOpen}
        onClose={() => setCreateOpen(false)}
        onSubmit={() => setCreateOpen(false)}
      />

      <TaskFormModal
        open={!!editTask}
        mode="edit"
        initialData={editTask}
        onClose={() => setEditTask(null)}
        onSubmit={() => setEditTask(null)}
      />
    </>
  );
}

/* ================= UI ================= */

function Select({ children, ...props }) {
  return (
    <select
      {...props}
      className="h-10 px-3 rounded-lg border border-slate-200 bg-slate-50 text-sm"
    >
      {children}
    </select>
  );
}

function Th({ children, right }) {
  return (
    <th
      className={`px-6 py-3 font-medium ${
        right ? "text-right" : "text-left"
      }`}
    >
      {children}
    </th>
  );
}

function Td({ children, strong, right }) {
  return (
    <td
      className={`px-6 py-4 ${
        strong ? "font-semibold text-slate-900" : "text-slate-700"
      } ${right ? "text-right" : ""}`}
    >
      {children}
    </td>
  );
}

function IconBtn({ icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className="p-1 rounded hover:bg-slate-200"
    >
      <span className="material-symbols-outlined text-[20px]">
        {icon}
      </span>
    </button>
  );
}

function StatusBadge({ status }) {
  const map = {
    "In Progress": "bg-orange-100 text-orange-700",
    Completed: "bg-green-100 text-green-700",
  };

  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-semibold ${
        map[status] || "bg-slate-200 text-slate-600"
      }`}
    >
      {status}
    </span>
  );
}
