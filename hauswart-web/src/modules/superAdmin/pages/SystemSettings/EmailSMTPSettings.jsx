import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/i18n/translations";

export default function EmailSMTPSettings() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const dict = t[lang];

  return (
    <div className="w-full p-8">
      {/* Back */}
      <button
        onClick={() => navigate("/super-admin/system-settings")}
        className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 mb-4"
      >
        <span className="material-symbols-outlined">arrow_back</span>
        {dict.systemSettings}
      </button>

      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-slate-900">
          {dict.smtpTitle}
        </h1>
        <p className="text-slate-500 mt-1">
          {dict.smtpDesc}
        </p>
      </div>

      {/* Main Card */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-8 w-full">
        <h2 className="text-xl font-semibold text-slate-900">
          {dict.smtpConfigTitle}
        </h2>
        <p className="text-slate-500 mt-1 mb-8">
          {dict.smtpConfigDesc}
        </p>

        {/* FORM */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
          <Input label={dict.smtpHost} placeholder="smtp.yourprovider.com" />
          <Input label={dict.smtpPort} placeholder="587 / 465 / 25" />
          <Input
            label={dict.smtpUsername}
            placeholder="email@domain.com"
            className="col-span-2"
          />
          <PasswordInput label={dict.smtpPassword} className="col-span-2" />
          <Select
            label={dict.smtpEncryption}
            options={["SSL", "TLS", "STARTTLS", "None"]}
          />
          <Input
            label={dict.smtpFromEmail}
            placeholder="notifications@yourdomain.com"
          />
          <Input
            label={dict.smtpFromName}
            placeholder="Hauswart System"
            className="col-span-2"
          />
        </div>

        {/* Advanced */}
        <Divider />
        <h3 className="text-lg font-semibold text-slate-900">
          {dict.smtpAdvanced}
        </h3>

        <div className="grid grid-cols-2 gap-x-8 gap-y-6 mt-6">
          <Input label={dict.smtpTimeout} placeholder="30" type="number" />
          <Input label={dict.smtpRetries} placeholder="3" type="number" />
          <Select
            label={dict.smtpAuthMode}
            options={["Plain", "Login", "CRAM-MD5"]}
            className="col-span-2"
          />
        </div>

        {/* Test Email */}
        <Divider />
        <h3 className="text-lg font-semibold text-slate-900">
          {dict.smtpTest}
        </h3>

        <div className="mt-6 max-w-md">
          <Input
            label={dict.smtpTestEmail}
            placeholder="you@yourdomain.com"
          />
          <button className="mt-4 h-11 px-6 bg-[#F38B14] text-white rounded-xl text-sm font-semibold hover:bg-black">
            {dict.sendTestEmail}
          </button>
        </div>

        {/* Actions */}
        <div className="mt-12 flex items-center gap-6">
          <button className="h-11 px-6 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-black">
            {dict.saveSmtp}
          </button>
          <button className="text-sm font-medium text-slate-500 hover:text-slate-900">
            {dict.resetDefaults}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- Small UI Helpers ---------- */

function Input({ label, className = "", ...props }) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="text-sm font-medium text-slate-900">{label}</label>
      <input
        {...props}
        className="h-11 rounded-xl border border-slate-300 bg-slate-100 px-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
      />
    </div>
  );
}

function PasswordInput({ label, className = "" }) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="text-sm font-medium text-slate-900">{label}</label>
      <div className="relative">
        <input
          type="password"
          placeholder="••••••••••"
          className="h-11 w-full rounded-xl border border-slate-300 bg-slate-100 px-3 pr-10 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
        />
        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 cursor-pointer">
          visibility
        </span>
      </div>
    </div>
  );
}

function Select({ label, options, className = "" }) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="text-sm font-medium text-slate-900">{label}</label>
      <select className="h-11 rounded-xl border border-slate-300 bg-slate-100 px-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary">
        {options.map(opt => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

function Divider() {
  return <div className="my-8 border-t border-slate-200" />;
}
