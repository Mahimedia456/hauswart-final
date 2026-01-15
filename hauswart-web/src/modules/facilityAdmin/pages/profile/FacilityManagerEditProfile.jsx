import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/i18n/translations";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FacilityManagerEditProfile() {
  const { lang } = useLanguage();
  const dict = t[lang];
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "Ahsan Malik",
    phone: "79 123 45 67",
    location: "Zurich, Switzerland",
    language: "en",
    timezone: "cet",
    defaultProperty: "p1",
  });

  const update = (key, value) =>
    setForm(prev => ({ ...prev, [key]: value }));

  return (
    <div className="max-w-5xl mx-auto pb-28 space-y-6">

      {/* PAGE HEADER */}
      <h1 className="text-xl font-bold text-slate-900">
        {dict.fm_edit_profile_title}
      </h1>

      {/* FORM CARD */}
      <div className="bg-white rounded-xl border border-slate-200">

        <div className="p-8 space-y-10">

          {/* ===================== */}
          {/* PERSONAL INFORMATION */}
          {/* ===================== */}
          <section className="space-y-6">
            <h3 className="text-base font-semibold text-slate-900">
              {dict.basic_information}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field
                label={dict.full_name}
                value={form.fullName}
                onChange={v => update("fullName", v)}
              />

              <Field
                label={dict.email}
                value="ahsan@hauswart.com"
                disabled
                hint={dict.email_locked}
              />

              <Field
                label={dict.phone}
                value={form.phone}
                onChange={v => update("phone", v)}
              />

              <Field
                label={dict.location}
                value={form.location}
                onChange={v => update("location", v)}
              />
            </div>
          </section>

          <Divider />

          {/* ===================== */}
          {/* ORGANIZATION DETAILS */}
          {/* ===================== */}
          <section className="space-y-6">
            <h3 className="text-base font-semibold text-slate-900">
              {dict.organization_role}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label={dict.organization} value="Hauswart HQ" disabled />
              <Field label={dict.role} value={dict.facilityManager} disabled />
            </div>

            <div className="rounded-lg bg-slate-50 border border-slate-200 p-4 text-sm text-slate-600">
              {dict.org_role_info}
            </div>
          </section>

          <Divider />

          {/* ===================== */}
          {/* PREFERENCES */}
          {/* ===================== */}
          <section className="space-y-6">
            <h3 className="text-base font-semibold text-slate-900">
              {dict.preferences}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Select
                label={dict.language}
                value={form.language}
                onChange={v => update("language", v)}
                options={[
                  { value: "en", label: "English (US)" },
                  { value: "de", label: "Deutsch" },
                ]}
              />

              <Select
                label={dict.timezone}
                value={form.timezone}
                onChange={v => update("timezone", v)}
                options={[
                  { value: "cet", label: "Europe/Zurich (CET)" },
                  { value: "gmt", label: "London (GMT)" },
                  { value: "est", label: "New York (EST)" },
                ]}
              />

              <Select
                label={dict.default_property}
                value={form.defaultProperty}
                onChange={v => update("defaultProperty", v)}
                options={[
                  { value: "p1", label: "Sunset Boulevard Complex" },
                  { value: "p2", label: "Alpine Heights" },
                  { value: "p3", label: "Lakeview Offices" },
                ]}
              />
            </div>
          </section>
        </div>

        {/* ===================== */}
        {/* STICKY FOOTER */}
        {/* ===================== */}
        <div className="sticky bottom-0 bg-white border-t px-6 py-4 flex justify-between items-center">
          <span className="text-xs text-slate-500 hidden md:block">
            {dict.unsaved_changes}
          </span>

          <div className="flex gap-3 w-full md:w-auto">
            <button
              onClick={() => navigate("/facility-manager/profile")}
              className="flex-1 md:flex-none px-6 py-2 rounded-lg border text-sm"
            >
              {dict.cancel}
            </button>
            <button
              className="flex-1 md:flex-none px-6 py-2 rounded-lg bg-[#F38B14] text-white text-sm font-semibold hover:bg-black"
            >
              {dict.save_changes}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= HELPERS ================= */

const Divider = () => (
  <hr className="border-slate-100" />
);

const Field = ({ label, value, onChange, disabled, hint }) => (
  <div className="space-y-1">
    <label className="text-sm font-medium text-slate-700">
      {label}
    </label>
    <input
      disabled={disabled}
      value={value}
      onChange={e => onChange?.(e.target.value)}
      className={`w-full h-12 rounded-lg border border-slate-200 bg-slate-50 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#F38B14]/20 ${
        disabled ? "text-slate-400" : ""
      }`}
    />
    {hint && (
      <p className="text-xs text-slate-500">
        {hint}
      </p>
    )}
  </div>
);

const Select = ({ label, value, onChange, options }) => (
  <div className="space-y-1">
    <label className="text-sm font-medium text-slate-700">
      {label}
    </label>
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-full h-12 rounded-lg border border-slate-200 bg-slate-50 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#F38B14]/20"
    >
      {options.map(o => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  </div>
);
