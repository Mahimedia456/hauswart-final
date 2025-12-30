import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/i18n/translations";

export default function TaskFormModal({
  open,
  onClose,
  mode = "create",
  initialData,
  onSubmit,
}) {
  const { lang } = useLanguage();
  const dict = t[lang];

  const [form, setForm] = useState({
    property: "",
    unit: "",
    title: "",
    description: "",
    priority: "high",
    dueDate: "",
    technician: "",
  });

  useEffect(() => {
    if (mode === "edit" && initialData) {
      setForm((prev) => ({ ...prev, ...initialData }));
    }
  }, [initialData, mode]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-[640px] bg-white rounded-xl shadow-xl p-6">

        {/* HEADER */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              {mode === "create"
                ? dict.task_create_title
                : dict.task_edit_title}
            </h1>
            <p className="text-sm text-slate-500">
              {dict.task_create_subtitle}
            </p>
          </div>

          <button onClick={onClose} className="text-slate-500 hover:text-slate-800">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* FORM */}
        <div className="flex flex-col gap-5">

          {/* CONTEXT */}
          <Section title={dict.task_section_context} icon="location_on">
            <div className="grid grid-cols-2 gap-4">
              <Field label={dict.task_property} required>
                <input className={input} />
              </Field>
              <Field label={dict.task_unit}>
                <input className={input} disabled />
              </Field>
            </div>
          </Section>

          {/* DETAILS */}
          <Section title={dict.task_section_details} icon="assignment">
            <Field label={dict.task_title} required>
              <input
                className={input}
                value={form.title}
                onChange={(e) =>
                  setForm({ ...form, title: e.target.value })
                }
              />
            </Field>

            <Field label={dict.task_description}>
              <textarea
                className={`${input} min-h-[90px]`}
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />
            </Field>
          </Section>

          {/* PRIORITY & DUE */}
          <Section title={dict.task_section_schedule} icon="schedule">
            <div className="grid grid-cols-2 gap-4">
              <PrioritySwitch
                value={form.priority}
                onChange={(p) => setForm({ ...form, priority: p })}
                dict={dict}
              />

              <Field label={dict.task_due_date}>
                <input
                  type="date"
                  className={input}
                  value={form.dueDate}
                  onChange={(e) =>
                    setForm({ ...form, dueDate: e.target.value })
                  }
                />
              </Field>
            </div>
          </Section>

          {/* ASSIGNMENT */}
          <Section title={dict.task_section_assignment} icon="person">
            <Field label={dict.task_assign_technician} required>
              <select
                className={input}
                value={form.technician}
                onChange={(e) =>
                  setForm({ ...form, technician: e.target.value })
                }
              >
                <option value="">{dict.select_technician}</option>
                <option>John Doe</option>
              </select>
            </Field>
          </Section>
        </div>

        {/* FOOTER */}
        <div className="flex justify-end gap-4 pt-6">
          <button
            onClick={onClose}
            className="text-sm font-medium text-slate-600"
          >
            {dict.btn_cancel}
          </button>

          <button
            onClick={() => onSubmit(form)}
            className="h-10 px-5 rounded-lg bg-[#F38B14] text-white font-semibold hover:bg-black"
          >
            {mode === "create"
              ? dict.btn_create_task
              : dict.btn_save_changes}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

/* ---------------- UI ---------------- */

const input =
  "w-full h-12 rounded-lg bg-slate-100 border border-transparent px-4 text-sm focus:ring-2 focus:ring-[#F38B14]/40";

function Section({ title, icon, children }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-slate-700 font-semibold">
        <span className="material-symbols-outlined">{icon}</span>
        {title}
      </div>
      {children}
    </div>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm font-medium text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      {children}
    </label>
  );
}

function PrioritySwitch({ value, onChange, dict }) {
  return (
    <div>
      <p className="text-sm font-medium text-slate-700 mb-2">
        {dict.task_priority}
      </p>
      <div className="flex bg-slate-100 rounded-lg p-1">
        {["high", "medium", "low"].map((p) => (
          <button
            key={p}
            onClick={() => onChange(p)}
            className={`flex-1 h-10 rounded-md text-sm font-semibold transition
              ${
                value === p
                  ? "bg-white text-[#F38B14] shadow"
                  : "text-slate-500"
              }`}
          >
            {dict[`priority_${p}`]}
          </button>
        ))}
      </div>
    </div>
  );
}
