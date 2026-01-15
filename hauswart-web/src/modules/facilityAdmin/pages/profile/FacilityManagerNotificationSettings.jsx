import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/i18n/translations";
import { useState } from "react";

export default function FacilityManagerNotificationSettings() {
  const { lang } = useLanguage();
  const dict = t[lang];

  const [master, setMaster] = useState(true);
  const [quiet, setQuiet] = useState(true);

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-28">

      {/* PAGE HEADER */}
      <h1 className="text-xl font-bold text-slate-900">
        {dict.notification_settings}
      </h1>

      {/* ===================== */}
      {/* GLOBAL PREFERENCES */}
      {/* ===================== */}
      <Card title={dict.global_preferences} subtitle={dict.global_preferences_desc}>
        <ToggleRow
          title={dict.enable_all_notifications}
          desc={dict.enable_all_notifications_desc}
          checked={master}
          onChange={setMaster}
        />

        <Divider />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <p className="text-sm font-medium text-slate-900">
              {dict.quiet_hours}
            </p>
            <p className="text-sm text-slate-500">
              {dict.quiet_hours_desc}
            </p>
          </div>

          <div className="flex items-center justify-between gap-3 bg-slate-50 border border-slate-200 rounded-lg px-4 py-3">
            <TimeInput label={dict.from} value="20:00" />
            <span className="text-slate-400">–</span>
            <TimeInput label={dict.to} value="07:00" />
            <Toggle checked={quiet} onChange={setQuiet} />
          </div>
        </div>
      </Card>

      {/* ===================== */}
      {/* TASK NOTIFICATIONS */}
      {/* ===================== */}
      <Section title={dict.task_notifications} subtitle={dict.task_notifications_desc}>
        <Row label={dict.task_new} />
        <Row label={dict.task_assigned} email />
        <Row label={dict.task_completed} email />
        <Row label={dict.task_overdue} email priority />
      </Section>

      {/* ===================== */}
      {/* APPROVALS & CRITICAL */}
      {/* ===================== */}
      <Section
        title={dict.approvals_critical}
        subtitle={dict.approvals_critical_desc}
        critical
      >
        <Row label={dict.emergency_task} locked email />
        <Row label={dict.task_rejected} locked email />
        <Row label={dict.tech_unavailable} locked email priority />
      </Section>

      {/* ===================== */}
      {/* TENANT & COMMUNICATION */}
      {/* ===================== */}
      <Section
        title={dict.tenant_notifications}
        subtitle={dict.tenant_notifications_desc}
      >
        <Row label={dict.tenant_issue} />
        <Row label={dict.tenant_message} email />
        <Row label={dict.tenant_escalated} email badge={dict.manager_only} />
      </Section>

      {/* ===================== */}
      {/* DELIVERY SUMMARY */}
      {/* ===================== */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col md:flex-row gap-6 justify-between">
        <div className="flex gap-3">
          <span className="material-symbols-outlined text-slate-400">
            info
          </span>
          <div>
            <p className="font-semibold text-slate-900">
              {dict.delivery_summary}
            </p>
            <p className="text-sm text-slate-500">
              {dict.delivery_summary_desc}
            </p>
          </div>
        </div>

        <div className="text-sm text-right">
          <p className="text-xs uppercase text-slate-400 font-semibold">
            {dict.current_timezone}
          </p>
          <div className="flex items-center gap-2 justify-end">
            <span className="font-medium text-slate-900">
              Europe/Zurich (CET)
            </span>
            <button className="text-[#F38B14] font-semibold hover:underline">
              {dict.change}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ===================== */
/* HELPERS */
/* ===================== */

const Divider = () => (
  <hr className="border-slate-100" />
);

const Card = ({ title, subtitle, children }) => (
  <div className="bg-white rounded-xl border border-slate-200 p-8 space-y-6">
    <div>
      <h3 className="text-base font-semibold text-slate-900">
        {title}
      </h3>
      <p className="text-sm text-slate-500">
        {subtitle}
      </p>
    </div>
    {children}
  </div>
);

const Section = ({ title, subtitle, children, critical }) => (
  <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
    <div className="px-8 py-5 border-b border-slate-200">
      <h3 className="text-base font-semibold text-slate-900 flex items-center gap-2">
        {critical && (
          <span className="material-symbols-outlined text-[#F38B14]">
            warning
          </span>
        )}
        {title}
      </h3>
      <p className="text-sm text-slate-500 mt-1">
        {subtitle}
      </p>
    </div>
    {children}
  </div>
);

const Row = ({ label, email, locked, priority, badge }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 items-center px-8 py-4 border-b last:border-b-0 hover:bg-slate-50">
    <div className="md:col-span-2 flex items-center gap-2">
      <span className="text-sm font-medium text-slate-900">
        {label}
      </span>
      {priority && (
        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-red-50 text-red-600 border border-red-100">
          High
        </span>
      )}
      {badge && (
        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-600">
          {badge}
        </span>
      )}
    </div>

    <div className="flex gap-8 justify-end">
      <Toggle checked disabled={locked} />
      <Toggle checked={email} />
    </div>
  </div>
);

const ToggleRow = ({ title, desc, checked, onChange }) => (
  <div className="flex items-center justify-between">
    <div>
      <p className="text-sm font-medium text-slate-900">
        {title}
      </p>
      <p className="text-sm text-slate-500">
        {desc}
      </p>
    </div>
    <Toggle checked={checked} onChange={onChange} />
  </div>
);

const Toggle = ({ checked, onChange, disabled }) => (
  <label
    className={`relative flex h-6 w-11 items-center rounded-full p-0.5 transition ${
      checked ? "bg-[#F38B14]" : "bg-slate-200"
    } ${disabled && "opacity-50 cursor-not-allowed"}`}
  >
    <div
      className={`h-5 w-5 rounded-full bg-white shadow transition ${
        checked ? "translate-x-5" : ""
      }`}
    />
    <input
      type="checkbox"
      checked={checked}
      disabled={disabled}
      onChange={e => onChange && onChange(e.target.checked)}
      className="absolute inset-0 opacity-0"
    />
  </label>
);

const TimeInput = ({ label, value }) => (
  <div className="flex items-center gap-2">
    <span className="text-xs uppercase text-slate-400 font-semibold">
      {label}
    </span>
    <input
      type="time"
      defaultValue={value}
      className="h-9 rounded-md border border-slate-300 bg-white px-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F38B14]/20"
    />
  </div>
);
