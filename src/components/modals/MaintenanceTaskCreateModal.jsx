import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/i18n/translations";

export default function MaintenanceTaskCreateModal({ open, onClose }) {
  const { lang } = useLanguage();
  const dict = t[lang];

  if (!open) return null;

  const [form, setForm] = useState({
    title: "",
    category: "",
    priority: "",
    asset: "",
    property: "",
    dueDate: "",
    description: "",
  });

  function updateField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-2xl flex flex-col">

        {/* HEADER */}
        <header className="relative border-b border-zinc-200 px-6 py-5">
          <h1 className="text-xl font-bold">{dict.mt_create_title}</h1>
          <p className="text-sm text-zinc-500">{dict.mt_create_subtitle}</p>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-800"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </header>

        {/* BODY */}
        <div className="px-6 py-6 overflow-y-auto max-h-[75vh] space-y-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* NAME */}
            <label className="flex flex-col">
              <span className="pb-2 text-sm font-medium">{dict.mt_create_name}</span>
              <input
                className="h-11 rounded-lg border border-zinc-300 px-3"
                placeholder={dict.mt_create_name_ph}
                onChange={(e) => updateField("title", e.target.value)}
              />
            </label>

            {/* CATEGORY */}
            <label className="flex flex-col">
              <span className="pb-2 text-sm font-medium">{dict.mt_create_category}</span>
              <select
                className="h-11 rounded-lg border border-zinc-300 bg-white px-3"
                onChange={(e) => updateField("category", e.target.value)}
              >
                <option>{dict.select}</option>
                <option>HVAC</option>
                <option>Plumbing</option>
                <option>Electrical</option>
              </select>
            </label>

            {/* PRIORITY */}
            <label className="flex flex-col">
              <span className="pb-2 text-sm font-medium">{dict.mt_create_priority}</span>
              <select
                className="h-11 rounded-lg border border-zinc-300 bg-white px-3"
                onChange={(e) => updateField("priority", e.target.value)}
              >
                <option>{dict.select}</option>
                <option>{dict.priority_low}</option>
                <option>{dict.priority_medium}</option>
                <option>{dict.priority_high}</option>
                <option>{dict.priority_critical}</option>
              </select>
            </label>

            {/* DUE DATE */}
            <label className="flex flex-col">
              <span className="pb-2 text-sm font-medium">{dict.mt_create_dueDate}</span>
              <input
                type="date"
                className="h-11 rounded-lg border border-zinc-300 px-3"
                onChange={(e) => updateField("dueDate", e.target.value)}
              />
            </label>

          </div>

          {/* DESCRIPTION */}
          <label className="flex flex-col">
            <span className="pb-2 text-sm font-medium">{dict.mt_create_description}</span>
            <textarea
              className="h-28 rounded-lg border border-zinc-300 p-3 text-sm"
              placeholder={dict.mt_create_description_ph}
              onChange={(e) => updateField("description", e.target.value)}
            ></textarea>
          </label>
        </div>

        {/* FOOTER */}
        <footer className="border-t border-zinc-200 px-6 py-4 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 h-10 rounded-lg text-sm font-semibold text-zinc-600 hover:bg-zinc-100"
          >
            {dict.cancel}
          </button>

          <button className="px-5 h-10 rounded-lg bg-[#F38B14] text-white font-semibold hover:bg-black">
            {dict.mt_create_button}
          </button>
        </footer>
      </div>
    </div>
  );
}
