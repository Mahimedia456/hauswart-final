import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";

export default function TaskDrawer({ open, onClose, task, onEdit }) {
  const { lang } = useLanguage();
  const dict = t[lang];

  if (!open || !task) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-end">
      <div className="w-full max-w-md bg-white h-full shadow-2xl p-6 overflow-y-auto animate-slideLeft">

        {/* HEADER */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-xl font-bold">{task.name}</h2>
            <p className="text-sm text-slate-500">{task.property}</p>
          </div>

          <button
            onClick={onClose}
            className="material-symbols-outlined text-slate-500 hover:text-black"
          >
            close
          </button>
        </div>

        {/* STATUS */}
        {task.status && (
          <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-700">
            {task.status}
          </span>
        )}

        {/* SCHEDULE */}
        <div className="mt-6">
          <p className="text-xs font-bold text-slate-400">{dict.mt_label_schedule}</p>
          <p className="text-sm mt-1">
            {task.scheduleText ?? dict.noSchedule}
          </p>
        </div>

        {/* DESCRIPTION */}
        <div className="mt-6">
          <p className="text-xs font-bold text-slate-400">{dict.mt_label_description}</p>
          <p className="text-sm mt-1">
            {task.description ?? dict.noDescription}
          </p>
        </div>

        {/* CHECKLIST */}
        <div className="mt-6">
          <p className="text-xs font-bold text-slate-400">{dict.mt_label_checklistPreview}</p>

          <div className="mt-3 space-y-2">
            {(task.checklist ?? []).length > 0 ? (
              task.checklist.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-600 text-lg">
                    check_circle
                  </span>
                  <p className="text-sm">{item}</p>
                </div>
              ))
            ) : (
              <p className="text-sm text-slate-400">{dict.noChecklistAvailable}</p>
            )}
          </div>
        </div>

        {/* ACTIONS */}
        <div className="mt-8 space-y-3">
          <button className="w-full py-3 rounded-lg bg-[#F38B14] text-white font-semibold hover:bg-black transition">
            {dict.mt_action_openDetails}
          </button>

          <button className="w-full py-3 rounded-lg border border-slate-300 hover:bg-slate-100 transition">
            {dict.mt_action_viewHistory}
          </button>

          <button
            onClick={() => onEdit(task)}
            className="w-full py-3 rounded-lg border border-slate-300 hover:bg-slate-100 transition"
          >
            {dict.mt_action_editTask}
          </button>
        </div>
      </div>
    </div>
  );
}
