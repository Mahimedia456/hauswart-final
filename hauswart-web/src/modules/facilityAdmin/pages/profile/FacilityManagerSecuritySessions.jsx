import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/i18n/translations";
import { useState } from "react";

export default function FacilityManagerSecuritySessions() {
  const { lang } = useLanguage();
  const dict = t[lang];

  const [password, setPassword] = useState({
    current: "",
    next: "",
    confirm: "",
  });

  const canUpdate =
    password.current &&
    password.next.length >= 8 &&
    password.next === password.confirm;

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-28">

      {/* PAGE HEADER */}
      <h1 className="text-xl font-bold text-slate-900">
        {dict.security_sessions}
      </h1>

      {/* SECURITY ALERT */}
      <div className="rounded-xl border border-orange-200 bg-orange-50 px-6 py-4 flex gap-4">
        <span className="material-symbols-outlined text-orange-600">
          security
        </span>
        <div>
          <h3 className="font-semibold text-slate-900">
            {dict.monitoring_active}
          </h3>
          <p className="text-sm text-slate-700">
            {dict.monitoring_desc}
          </p>
        </div>
      </div>

      {/* ===================== */}
      {/* PASSWORD MANAGEMENT */}
      {/* ===================== */}
      <Card title={dict.password_management} subtitle={dict.password_desc}>
        <div className="max-w-md space-y-5">

          <Input
            label={dict.current_password}
            type="password"
            value={password.current}
            onChange={v =>
              setPassword(p => ({ ...p, current: v }))
            }
          />

          <Input
            label={dict.new_password}
            type="password"
            value={password.next}
            onChange={v =>
              setPassword(p => ({ ...p, next: v }))
            }
            hint={dict.password_hint}
          />

          <Input
            label={dict.confirm_password}
            type="password"
            value={password.confirm}
            onChange={v =>
              setPassword(p => ({ ...p, confirm: v }))
            }
          />

          <button
            disabled={!canUpdate}
            className="h-11 px-6 rounded-lg bg-[#F38B14] text-white text-sm font-semibold hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {dict.update_password}
          </button>
        </div>
      </Card>

      {/* ===================== */}
      {/* TWO FACTOR */}
      {/* ===================== */}
      <Card
        title={dict.two_factor}
        subtitle={dict.two_factor_desc}
        action={<Toggle />}
      />

      {/* ===================== */}
      {/* ACTIVE SESSIONS */}
      {/* ===================== */}
      <Card
        title={dict.active_sessions}
        subtitle={dict.active_sessions_desc}
        action={
          <button className="flex items-center gap-2 text-red-600 text-sm font-semibold hover:underline">
            <span className="material-symbols-outlined text-sm">
              logout
            </span>
            {dict.logout_all}
          </button>
        }
      >
        <div className="space-y-3">
          <Session
            device="MacBook Pro"
            location="Zurich, Switzerland"
            meta="Chrome • 192.168.1.1"
            current
          />
          <Session
            device="iPhone 13"
            location="Bern, Switzerland"
            meta="Safari • 192.168.1.45"
          />
          <Session
            device="Windows PC"
            location="Basel, Switzerland"
            meta="Edge • 192.168.1.12"
          />
        </div>
      </Card>

      {/* ===================== */}
      {/* LOGIN ACTIVITY */}
      {/* ===================== */}
      <Card
        title={dict.login_activity}
        subtitle={dict.login_activity_desc}
        action={
          <button className="text-[#F38B14] text-sm font-semibold hover:underline flex items-center gap-1">
            {dict.view_log}
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </button>
        }
      >
        <ActivityTable />
      </Card>

    </div>
  );
}

/* ===================== */
/* HELPERS */
/* ===================== */

const Card = ({ title, subtitle, action, children }) => (
  <div className="bg-white rounded-xl border border-slate-200 p-8 space-y-6">
    <div className="flex items-start justify-between">
      <div>
        <h3 className="text-base font-semibold text-slate-900">
          {title}
        </h3>
        {subtitle && (
          <p className="text-sm text-slate-500">
            {subtitle}
          </p>
        )}
      </div>
      {action}
    </div>
    {children}
  </div>
);

const Input = ({ label, type, value, onChange, hint }) => (
  <div className="space-y-1">
    <label className="text-xs font-semibold uppercase text-slate-500">
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-full h-11 rounded-lg border border-slate-200 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F38B14]/20"
    />
    {hint && (
      <p className="text-xs text-slate-500">
        {hint}
      </p>
    )}
  </div>
);

const Toggle = () => (
  <label className="relative inline-flex items-center cursor-pointer">
    <input type="checkbox" className="sr-only peer" />
    <div className="w-11 h-6 bg-slate-200 peer-checked:bg-[#F38B14] rounded-full after:content-[''] after:absolute after:top-1 after:left-1 after:w-4 after:h-4 after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-5" />
  </label>
);

const Session = ({ device, location, meta, current }) => (
  <div className="flex items-center justify-between px-5 py-4 rounded-lg border border-slate-200 hover:bg-slate-50">
    <div>
      <div className="flex items-center gap-2">
        <p className="font-medium text-sm text-slate-900">
          {device}
        </p>
        {current && (
          <span className="px-2 py-0.5 text-[10px] rounded-full bg-green-100 text-green-700 font-bold">
            Current
          </span>
        )}
      </div>
      <p className="text-xs text-slate-500">
        {location}
      </p>
    </div>
    <p className="text-xs text-slate-500">
      {meta}
    </p>
  </div>
);

const ActivityTable = () => (
  <div className="overflow-x-auto border border-slate-200 rounded-lg">
    <table className="w-full text-sm">
      <thead className="bg-slate-50 text-slate-500 text-xs uppercase">
        <tr>
          <th className="px-4 py-3 text-left">Status</th>
          <th className="px-4 py-3 text-left">Date</th>
          <th className="px-4 py-3 text-left">Location</th>
          <th className="px-4 py-3 text-left">IP</th>
        </tr>
      </thead>
      <tbody>
        <Row status="success" />
        <Row status="success" />
        <Row status="failed" />
      </tbody>
    </table>
  </div>
);

const Row = ({ status }) => (
  <tr className="border-t">
    <td className="px-4 py-3">
      <span
        className={`px-2 py-0.5 rounded-md text-xs font-semibold ${
          status === "success"
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {status === "success" ? "Success" : "Failed"}
      </span>
    </td>
    <td className="px-4 py-3">Oct 24, 2023</td>
    <td className="px-4 py-3">Zurich, CH</td>
    <td className="px-4 py-3 font-mono text-xs">192.168.1.1</td>
  </tr>
);
