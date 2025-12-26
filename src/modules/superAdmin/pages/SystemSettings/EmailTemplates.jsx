import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/i18n/translations";
import { useNavigate } from "react-router-dom";

export default function EmailTemplates() {
  const { lang } = useLanguage();
  const dict = t[lang];
  const navigate = useNavigate();

  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className="p-8 w-full">
      {/* BACK */}
      <button
        onClick={() => navigate("/super-admin/system-settings")}
        className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 mb-2"
      >
        <span className="material-symbols-outlined">arrow_back</span>
        {dict.systemSettings}
      </button>

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-slate-900">
          {dict.notificationTemplates}
        </h1>
        <p className="text-slate-500 mt-1">
          {dict.notificationTemplatesDesc}
        </p>
      </div>

      {/* TABS (EMAIL ONLY ACTIVE) */}
      <div className="bg-white border rounded-lg mb-8">
        <div className="flex px-6 gap-8 border-b">
          <div className="border-b-4 border-primary py-4">
            <span className="text-primary text-sm font-bold">
              {dict.emailTemplates}
            </span>
          </div>
        </div>
      </div>

      {/* LIST */}
      <div className="bg-white border rounded-lg shadow-sm w-full">
        <div className="flex justify-between items-center p-6 border-b">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              {dict.emailTemplates}
            </h2>
            <p className="text-sm text-slate-500">
              {dict.emailTemplatesDesc}
            </p>
          </div>

          <button
            className="bg-primary text-white px-5 h-11 rounded-lg text-sm font-bold flex items-center gap-2"
          >
            <span className="material-symbols-outlined">add</span>
            {dict.createTemplate}
          </button>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="px-6 py-4 text-left">{dict.templateName}</th>
                <th className="px-6 py-4">{dict.type}</th>
                <th className="px-6 py-4">{dict.description}</th>
                <th className="px-6 py-4">{dict.lastUpdated}</th>
                <th className="px-6 py-4">{dict.status}</th>
                <th className="px-6 py-4 text-right">{dict.actions}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t hover:bg-slate-50">
                <td className="px-6 py-4 font-medium">Welcome Email</td>
                <td className="px-6 py-4">Email</td>
                <td className="px-6 py-4 text-slate-500">
                  {dict.welcomeEmailDesc}
                </td>
                <td className="px-6 py-4">2023-10-26</td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 text-xs rounded-full bg-green-100 text-green-700">
                    {dict.active}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button onClick={() => setOpenDrawer(true)}>
                    <span className="material-symbols-outlined">
                      more_horiz
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* DRAWER */}
      {openDrawer && (
        <>
          <div
            className="fixed inset-0 bg-black/30 z-40"
            onClick={() => setOpenDrawer(false)}
          />
          <EditTemplateDrawer onClose={() => setOpenDrawer(false)} />
        </>
      )}
    </div>
  );
}

/* ================= DRAWER ================= */

function EditTemplateDrawer({ onClose }) {
  const { lang } = useLanguage();
  const dict = t[lang];

  return (
    <div className="fixed top-0 right-0 h-full w-[520px] bg-white shadow-2xl z-50 flex flex-col">
      <div className="p-6 border-b flex justify-between">
        <h2 className="text-xl font-semibold">{dict.editTemplate}</h2>
        <button onClick={onClose}>
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
        <div>
          <label className="text-sm font-medium">{dict.templateName}</label>
          <input className="w-full border rounded-lg p-2 mt-1" />
        </div>

        <div>
          <label className="text-sm font-medium">{dict.subject}</label>
          <input className="w-full border rounded-lg p-2 mt-1" />
        </div>

        <div>
          <label className="text-sm font-medium">{dict.messageBody}</label>
          <textarea
            rows={6}
            className="w-full border rounded-lg p-3 mt-1"
          />
        </div>

        <div>
          <label className="text-sm font-medium">{dict.availableVariables}</label>
          <div className="flex flex-wrap gap-2 mt-2">
            {["{{user.firstName}}", "{{user.lastName}}", "{{facility.name}}"].map(v => (
              <span key={v} className="text-xs bg-slate-100 px-3 py-1 rounded-full">
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 border-t bg-slate-50 flex justify-end gap-4">
        <button onClick={onClose} className="text-sm font-bold text-slate-500">
          {dict.cancel}
        </button>
        <button className="bg-primary text-white px-6 h-11 rounded-lg text-sm font-bold">
          {dict.saveChanges}
        </button>
      </div>
    </div>
  );
}
