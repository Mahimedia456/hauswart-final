import { useState } from "react";
import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";

export default function SuperAdminProfile() {
  const { lang, setLang } = useLanguage();
  const dict = t[lang];

  const [form, setForm] = useState({
    name: "Jane Doe",
    email: "admin@hauswart.com",
    phone: "+49 123 456 789",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  function update(field, value) {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  return (
    <div className="space-y-8 max-w-4xl">

      {/* HEADER */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 flex items-center gap-6">
        <img
          src="https://i.pravatar.cc/120"
          className="h-24 w-24 rounded-full border"
        />

        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            {form.name}
          </h1>
          <p className="text-slate-500">{dict.superAdmin}</p>
          <p className="text-sm text-slate-600 mt-1">{form.email}</p>
        </div>
      </div>

      {/* PERSONAL INFO */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
        <h2 className="text-lg font-semibold text-slate-900">
          {dict.profile_personalInfo}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label={dict.fullName}
            value={form.name}
            onChange={v => update("name", v)}
          />

          <Input
            label={dict.email}
            value={form.email}
            disabled
          />

          <Input
            label={dict.phone}
            value={form.phone}
            onChange={v => update("phone", v)}
          />

          <div>
            <label className="text-sm text-slate-600 mb-1 block">
              {dict.language}
            </label>
            <select
              value={lang}
              onChange={e => setLang(e.target.value)}
              className="w-full h-11 rounded-xl border border-slate-200 bg-slate-50 px-3"
            >
              <option value="EN">English</option>
              <option value="DE">Deutsch</option>
            </select>
          </div>
        </div>
      </div>

      {/* SECURITY */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
        <h2 className="text-lg font-semibold text-slate-900">
          {dict.security}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label={dict.currentPassword}
            type="password"
            value={form.currentPassword}
            onChange={v => update("currentPassword", v)}
          />

          <Input
            label={dict.newPassword}
            type="password"
            value={form.newPassword}
            onChange={v => update("newPassword", v)}
          />

          <Input
            label={dict.confirmPassword}
            type="password"
            value={form.confirmPassword}
            onChange={v => update("confirmPassword", v)}
          />
        </div>
      </div>

      {/* ACTIONS */}
      <div className="flex justify-end gap-3">
        <button className="px-5 py-2 rounded-xl border border-slate-200 hover:bg-slate-100">
          {dict.cancel}
        </button>

        <button className="px-6 py-2 rounded-xl bg-[#F38B14] text-white hover:bg-black">
          {dict.saveChanges}
        </button>
      </div>
    </div>
  );
}

function Input({ label, value, onChange, type = "text", disabled }) {
  return (
    <div>
      <label className="text-sm text-slate-600 mb-1 block">{label}</label>
      <input
        type={type}
        value={value}
        disabled={disabled}
        onChange={e => onChange?.(e.target.value)}
        className="
          w-full h-11 rounded-xl px-3
          border border-slate-200 bg-slate-50
          disabled:opacity-60
        "
      />
    </div>
  );
}
