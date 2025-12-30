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

export default function UpdateTaskStatusModal({
  open,
  onClose,
  onSubmit,
  task,
}) {
  const { lang } = useLanguage();
  const dict = t[lang];

  const [status, setStatus] = useState("on_hold");
  const [reason, setReason] = useState("");
  const [notify, setNotify] = useState(true);

  if (!open) return null;

  const isReasonRequired = status === "on_hold" || status === "cancelled";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="w-full max-w-[420px] bg-white rounded-xl shadow-2xl overflow-hidden">

        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h3 className="text-lg font-bold">
            {dict.change_task_status}
          </h3>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-slate-100"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* BODY */}
        <div className="px-6 py-5 space-y-6 max-h-[70vh] overflow-y-auto">

          {/* TASK CONTEXT */}
          <div className="p-4 rounded-lg bg-slate-50 border space-y-2">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-lg bg-white border flex items-center justify-center">
                <span className="material-symbols-outlined">build</span>
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-semibold truncate">
                  {task.title}
                </p>
                <p className="text-xs text-slate-500">
                  ID: #{task.id}
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <span className="text-xs text-slate-500">
                    {dict.current_status}:
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                    {dict.status_in_progress}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* STATUS OPTIONS */}
          <div>
            <label className="block text-sm font-semibold mb-3">
              {dict.new_status} <span className="text-red-500">*</span>
            </label>

            <div className="space-y-2">
              {STATUS_OPTIONS.map((opt) => (
                <label
                  key={opt.key}
                  className={`
                    flex items-center justify-between p-3 rounded-lg border cursor-pointer transition
                    ${
                      status === opt.key
                        ? "border-[#F38B14] bg-[#F38B14]/5"
                        : "hover:bg-slate-50"
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="status"
                      value={opt.key}
                      checked={status === opt.key}
                      onChange={() => setStatus(opt.key)}
                      className="accent-[#F38B14]"
                    />
                    <span className="text-sm font-medium">
                      {dict[opt.labelKey]}
                    </span>
                  </div>

                  <span className={`h-2 w-2 rounded-full ${opt.color}`} />
                </label>
              ))}
            </div>
          </div>

          {/* REASON */}
          {isReasonRequired && (
            <div className="space-y-1">
              <label className="block text-sm font-semibold">
                {dict.reason_for_change} <span className="text-red-500">*</span>
              </label>

              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder={dict.reason_placeholder}
                className="w-full min-h-[100px] p-3 rounded-lg border resize-none focus:ring-2 focus:ring-[#F38B14]/20"
              />

              <p className="text-xs text-slate-500">
                {dict.minimum_characters}
              </p>
            </div>
          )}

          {/* NOTIFY */}
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={notify}
              onChange={() => setNotify(!notify)}
              className="accent-[#F38B14]"
            />
            <span className="text-sm">
              {dict.notify_technician_tenant}
            </span>
          </label>
        </div>

        {/* FOOTER */}
        <div className="px-6 py-4 border-t bg-slate-50 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border text-sm font-medium hover:bg-slate-100"
          >
            {dict.cancel}
          </button>

          <button
            disabled={isReasonRequired && reason.trim().length < 5}
            onClick={() =>
              onSubmit({
                status,
                reason,
                notify,
              })
            }
            className="px-4 py-2 rounded-lg bg-[#F38B14] hover:bg-black text-white text-sm font-semibold disabled:opacity-50"
          >
            {dict.update_status}
          </button>
        </div>
      </div>
    </div>
  );
}
