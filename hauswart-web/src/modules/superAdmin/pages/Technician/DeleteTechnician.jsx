// src/modules/superAdmin/pages/Technicians/TechnicianDelete.jsx
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";

export default function TechnicianDelete() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { lang } = useLanguage();
  const dict = t[lang];

  const [confirmed, setConfirmed] = useState(false);
  const [notes, setNotes] = useState("");

  /* MOCK TECHNICIAN DATA (API LATER) */
  const technician = {
    id: "TECH-4589",
    name: "John Carter",
    email: "john.carter@hauswart.com",
    phone: "+1 234 567 890",
    role: "Technician",
    status: "Active",
    organization: "Global Facilities Inc.",
    properties: "Downtown Plaza, Eastside Lofts",
    lastActive: "2024-01-12 09:30 AM",
    joinedAt: "2022-04-10",
  };

  return (
    <div className="px-6 py-8 md:px-10 space-y-8">

      {/* HEADER */}
      <div className="space-y-2">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          {dict.action_backToTechnicianProfile}
        </button>

        <h1 className="text-4xl font-extrabold text-red-600">
          {dict.technician_delete_title}
        </h1>

        <p className="text-gray-500">
          {dict.technician_delete_subtitle}
        </p>
      </div>

      {/* WARNING */}
      <div className="flex gap-4 rounded-xl border border-red-200 bg-red-50 p-6">
        <span className="material-symbols-outlined text-red-600 text-2xl">
          warning
        </span>
        <div>
          <p className="font-bold text-red-700">
            {dict.technician_delete_warning_title}
          </p>
          <p className="text-sm text-red-600 mt-1">
            {dict.technician_delete_warning_desc}
          </p>
        </div>
      </div>

      {/* TECHNICIAN SUMMARY */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow p-6">
        <div className="flex flex-wrap gap-8">
          <div>
            <p className="text-lg font-bold">{technician.name}</p>
            <p className="text-sm text-gray-500">{technician.email}</p>
            <p className="text-sm text-gray-500">{technician.phone}</p>

            <div className="flex gap-2 mt-2">
              <Badge text={technician.role} color="orange" />
              <Badge text={technician.status} color="green" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 flex-1 text-sm">
            <Info label={dict.tech_org} value={technician.organization} />
            <Info label={dict.tech_properties} value={technician.properties} />
            <Info label={dict.tech_last_active} value={technician.lastActive} />
            <Info label={dict.tech_joined} value={technician.joinedAt} />
            <Info label={dict.tech_id} value={technician.id} full />
          </div>
        </div>
      </div>

      {/* IMPACT */}
      <Card title={dict.technician_delete_impact_title}>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <li>{dict.tech_open_tickets}: <b>4</b></li>
          <li>{dict.tech_active_tasks}: <b>6</b></li>
          <li>{dict.tech_scheduled_jobs}: <b>3</b></li>
          <li>{dict.tech_pending_reports}: <b>2</b></li>
          <li>{dict.tech_live_chats}: <b>1</b></li>
        </ul>

        <p className="text-sm text-red-600 font-semibold mt-4">
          {dict.tech_reassign_notice}
        </p>
      </Card>

      {/* CONFIRM */}
      <Card>
        <label className="flex gap-3 items-start">
          <input
            type="checkbox"
            checked={confirmed}
            onChange={(e) => setConfirmed(e.target.checked)}
            className="mt-1 size-5 rounded text-red-600"
          />
          <span className="font-medium">
            {dict.technician_delete_confirm}
          </span>
        </label>
      </Card>

      {/* NOTES */}
      <Card>
        <label className="font-bold">
          {dict.technician_delete_notes_title}
        </label>
        <p className="text-sm text-gray-500 mt-1">
          {dict.technician_delete_notes_desc}
        </p>

        <textarea
          rows={4}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder={dict.technician_delete_notes_placeholder}
          className="mt-3 w-full rounded-lg border px-4 py-2 bg-gray-50"
        />
      </Card>

      {/* ACTION BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-10">
        <div className="ml-64 bg-white border-t px-6 md:px-10 py-4 flex justify-between items-center shadow-lg">
          <p className="text-sm font-bold text-red-600">
            {dict.technician_delete_irreversible}
          </p>

          <div className="flex gap-3">
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 rounded-lg font-semibold hover:bg-gray-100"
            >
              {dict.action_cancel}
            </button>

            <button
              disabled={!confirmed}
              className="px-6 py-2 rounded-lg bg-red-600 text-white font-bold disabled:opacity-40"
            >
              {dict.action_delete_technician}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- UI HELPERS ---------------- */

function Card({ title, children }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow p-6 space-y-4">
      {title && <h2 className="text-xl font-bold">{title}</h2>}
      {children}
    </div>
  );
}

function Badge({ text, color }) {
  const map = {
    orange: "bg-orange-100 text-orange-700",
    green: "bg-green-100 text-green-700",
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${map[color]}`}>
      {text}
    </span>
  );
}

function Info({ label, value, full }) {
  return (
    <div className={full ? "col-span-2" : ""}>
      <p className="text-gray-500">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}
