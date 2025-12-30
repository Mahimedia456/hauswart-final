import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/i18n/translations";

import {
  TaskFormModal,
  AssignTaskModal,
  UpdateTaskStatusModal,
} from "@/components/modals";

export default function TaskHeader({ task }) {
  const { lang } = useLanguage();
  const dict = t[lang];

  const [editOpen, setEditOpen] = useState(false);
  const [assignOpen, setAssignOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);

  return (
    <>
      {/* ================= HEADER CARD ================= */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
        <div className="flex flex-col lg:flex-row justify-between gap-4">

          {/* LEFT */}
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              {task.title}
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              #{task.id}
            </p>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-wrap gap-3">
            <Btn icon="edit" onClick={() => setEditOpen(true)}>
              {dict.edit || "Edit"}
            </Btn>

            <Btn icon="person_add" onClick={() => setAssignOpen(true)}>
              {dict.assign || "Assign"}
            </Btn>

            <Btn
              primary
              icon="check_circle"
              onClick={() => setStatusOpen(true)}
            >
              {dict.update_status || "Update Status"}
            </Btn>
          </div>
        </div>
      </div>

      {/* ================= EDIT TASK ================= */}
      <TaskFormModal
        open={editOpen}
        mode="edit"
        initialData={task}
        onClose={() => setEditOpen(false)}
        onSubmit={(data) => {
          console.log("EDIT TASK", data);
          setEditOpen(false);
        }}
      />

      {/* ================= ASSIGN TASK ================= */}
      <AssignTaskModal
        open={assignOpen}
        task={task}
        onClose={() => setAssignOpen(false)}
        onSubmit={(data) => {
          console.log("ASSIGN TASK", data);
          setAssignOpen(false);
        }}
      />

      {/* ================= UPDATE STATUS ================= */}
      <UpdateTaskStatusModal
        open={statusOpen}
        task={task}
        onClose={() => setStatusOpen(false)}
        onSubmit={(data) => {
          console.log("UPDATE STATUS", data);
          setStatusOpen(false);
        }}
      />
    </>
  );
}

/* ================================================= */
/* BUTTON COMPONENT                                 */
/* ================================================= */

function Btn({ icon, children, primary, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        h-10 px-4 rounded-xl text-sm font-semibold
        flex items-center gap-2 transition
        ${
          primary
            ? "bg-[#F38B14] text-white hover:bg-black"
            : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
        }
      `}
    >
      <span className="material-symbols-outlined text-[20px]">
        {icon}
      </span>
      {children}
    </button>
  );
}
