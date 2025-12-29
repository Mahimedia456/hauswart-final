import { useLanguage } from "../../../../../../context/LanguageContext";
import { t } from "../../../../../../i18n/translations";

export default function MaintenanceTaskDrawer({ open, onClose, task }) {
  const { lang } = useLanguage();
  const dict = t[lang];

  if (!open || !task) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex justify-end z-50">
      {/* DRAWER */}
      <div className="w-full max-w-xl h-full bg-white shadow-xl p-6 overflow-y-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between pb-4 border-b">
          <h2 className="text-xl font-bold">{dict.maint_drawer_title}</h2>
          <button onClick={onClose}>
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* TASK NAME */}
        <div className="mt-4">
          <p className="text-sm text-gray-600">{dict.maint_field_taskName}</p>
          <p className="font-semibold text-lg">{task.name}</p>
        </div>

        {/* DETAILS GRID */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <DetailRow label={dict.maint_field_asset} value={task.asset} />
          <DetailRow label={dict.maint_field_frequency} value={task.frequency} />
          <DetailRow label={dict.maint_field_nextDue} value={task.nextDue} />
          <DetailRow label={dict.maint_field_status} value={dict[`maint_status_${task.status}`]} />
          <DetailRow label={dict.maint_field_assignedTo} value={task.assigned} />
        </div>

        {/* DESCRIPTION */}
        <div className="mt-6">
          <p className="text-sm text-gray-600 mb-1">{dict.maint_field_description}</p>
          <p className="text-gray-700">
            {task.description || dict.maint_noDescription}
          </p>
        </div>

        {/* ACTION BUTTONS */}
        <div className="mt-8 flex justify-between">
          <button className="px-4 py-2 rounded-lg bg-gray-200" onClick={onClose}>
            {dict.action_cancel}
          </button>
          <button className="px-5 py-2 rounded-lg bg-[#F38B14] text-white font-semibold">
            {dict.maint_action_editTask}
          </button>
        </div>
      </div>
    </div>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className="flex flex-col">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
