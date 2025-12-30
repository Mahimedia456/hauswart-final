import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/i18n/translations";

const STATUS_OPTIONS = [
  { key: "todo", labelKey: "status_todo", color: "bg-gray-400" },
  { key: "in_progress", labelKey: "status_in_progress", color: "bg-blue-500" },
  { key: "on_hold", labelKey: "status_on_hold", color: "bg-orange-500" },
  { key: "completed", labelKey: "status_completed", color: "bg-green-500" },
  { key: "cancelled", labelKey: "status_cancelled", color: "bg-red-500" },
];

export default function UpdateTaskStatusModal({ open, onClose, onSubmit, task }) {
  const { lang } = useLanguage();
  const dict = t[lang];

  const [status, setStatus] = useState(task.status);
  const [notify, setNotify] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-[420px] bg-white rounded-xl shadow-xl">

        {/* HEADER */}
        <div className="px-6 py-4 border-b flex justify-between">
          <h3 className="font-bold">{dict.change_task_status}</h3>
          <button onClick={onClose}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* BODY */}
        <div className="px-6 py-5 space-y-4">

          <div className="p-4 bg-slate-50 rounded-lg">
            <p className="font-semibold">{task.title}</p>
            <p className="text-xs text-slate-500">#{task.id}</p>
          </div>

          {STATUS_OPTIONS.map((opt) => (
            <label
              key={opt.key}
              className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer
                ${status === opt.key ? "border-[#F38B14] bg-orange-50" : ""}`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  checked={status === opt.key}
                  onChange={() => setStatus(opt.key)}
                  className="accent-[#F38B14]"
                />
                {dict[opt.labelKey]}
              </div>
              <span className={`h-2 w-2 rounded-full ${opt.color}`} />
            </label>
          ))}

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={notify}
              onChange={() => setNotify(!notify)}
              className="accent-[#F38B14]"
            />
            {dict.notify_technician_tenant}
          </label>
        </div>

        {/* FOOTER */}
        <div className="px-6 py-4 border-t flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 rounded-lg border">
            {dict.cancel}
          </button>
          <button
            onClick={() => onSubmit({ status, notify })}
            className="px-4 py-2 rounded-lg bg-[#F38B14] text-white font-semibold hover:bg-black"
          >
            {dict.update_status}
          </button>
        </div>
      </div>
    </div>
  );
}
