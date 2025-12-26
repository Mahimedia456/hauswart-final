import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/i18n/translations";



export default function MaintenanceTaskCreate({ open, onClose }) {
  const { lang } = useLanguage();
  const dict = t[lang];

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-lg shadow-xl">

        <h2 className="text-xl font-bold mb-4">{dict.maint_create_title}</h2>

        {/* TASK NAME */}
        <Input label={dict.maint_field_taskName} placeholder={dict.maint_placeholder_taskName} />

        {/* ASSET */}
        <Input label={dict.maint_field_asset} placeholder="Select asset..." />

        {/* FREQUENCY */}
        <label className="block text-sm font-medium mt-4">{dict.maint_field_frequency}</label>
        <select className="w-full mt-1 p-2 border rounded-lg">
          <option>Monthly</option>
          <option>Quarterly</option>
          <option>Bi-Annual</option>
          <option>Annual</option>
        </select>

        {/* NEXT DATE */}
        <Input label={dict.maint_field_nextDue} placeholder="Select date..." type="date" />

        {/* DESCRIPTION */}
        <label className="block text-sm font-medium mt-4">{dict.maint_field_description}</label>
        <textarea
          className="w-full border rounded-lg p-2 mt-1"
          placeholder={dict.maint_placeholder_description}
          rows={3}
        />

        {/* ACTIONS */}
        <div className="flex justify-end gap-3 mt-6">
          <button className="px-4 py-2 bg-gray-200 rounded-lg" onClick={onClose}>
            {dict.action_cancel}
          </button>
          <button className="px-5 py-2 bg-[#F38B14] text-white rounded-lg font-semibold">
            {dict.maint_action_create}
          </button>
        </div>
      </div>
    </div>
  );
}

function Input({ label, placeholder, type = "text" }) {
  return (
    <div className="mt-4">
      <label className="block text-sm font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border rounded-lg p-2 mt-1"
      />
    </div>
  );
}
