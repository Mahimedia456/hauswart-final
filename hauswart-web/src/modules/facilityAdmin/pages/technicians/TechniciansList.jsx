// src/modules/superAdmin/pages/Technicians/TechniciansList.jsx
import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

/* ---------------- KPIs ---------------- */
const stats = [
  { labelKey: "technicians_total", value: "320", icon: "engineering" },
  { labelKey: "technicians_active", value: "275", icon: "person_check" },
  { labelKey: "technicians_assigned", value: "198", icon: "assignment_turned_in" },
  { labelKey: "technicians_unassigned", value: "77", icon: "pending_actions" },
];

/* ---------------- TABLE DATA ---------------- */
const technicians = [
  {
    id: "1",
    name: "Felix Bauer",
    email: "felix.bauer@hauswart.com",
    phone: "+49 30 555 0126",
    organization: "Hauswart Global",
    properties: 6,
    status: "active",
    lastActivity: "2024-05-10 11:45 AM",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    id: "2",
    name: "Jonas Müller",
    email: "jonas.mueller@hauswart.com",
    phone: "+49 176 234 8899",
    organization: "Berlin Facilities",
    properties: 0,
    status: "inactive",
    lastActivity: "2024-04-21 03:10 PM",
    avatar: "https://i.pravatar.cc/100?img=14",
  },
];

export default function TechniciansList() {
  const { lang } = useLanguage();
  const dict = t[lang];
  const navigate = useNavigate();

  const [deleteTech, setDeleteTech] = useState(null);

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">{dict.technicians}</h1>
          <p className="text-slate-500">{dict.technicians_subtitle}</p>
        </div>

        <div className="flex gap-3">
          <button className="h-10 px-4 rounded-lg border border-slate-200 font-bold">
            {dict.export_list}
          </button>
          <button
            onClick={() => navigate("/facility-manager/technicians/create")}
            className="h-10 px-4 rounded-lg bg-[#F38B14] text-white font-bold hover:bg-black transition"
          >
            <span className="material-symbols-outlined text-sm mr-1">add</span>
            {dict.add_technician}
          </button>
        </div>
      </header>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(s => (
          <div key={s.labelKey} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <div className="flex justify-between text-slate-500">
              <p className="font-medium">{dict[s.labelKey]}</p>
              <span className="material-symbols-outlined">{s.icon}</span>
            </div>
            <p className="text-3xl font-bold mt-2">{s.value}</p>
          </div>
        ))}
      </div>

      {/* TABLE */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-6 py-3 text-left">{dict.technician_name}</th>
              <th className="px-6 py-3 text-left">{dict.organization}</th>
              <th className="px-6 py-3 text-left">{dict.properties}</th>
              <th className="px-6 py-3 text-left">{dict.phone}</th>
              <th className="px-6 py-3 text-left">{dict.status}</th>
              <th className="px-6 py-3 text-left">{dict.last_activity}</th>
              <th className="px-6 py-3 text-right">{dict.actions}</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200">
            {technicians.map(tc => (
              <tr key={tc.id} className="hover:bg-slate-50">
                <td className="px-6 py-4 flex items-center gap-3 font-medium">
                  <img src={tc.avatar} className="w-8 h-8 rounded-full" />
                  <div>
                    <p>{tc.name}</p>
                    <p className="text-xs text-slate-500">{tc.email}</p>
                  </div>
                </td>
                <td className="px-6 py-4">{tc.organization}</td>
                <td className="px-6 py-4">{tc.properties}</td>
                <td className="px-6 py-4">{tc.phone}</td>
                <td className="px-6 py-4">
                  <StatusBadge status={tc.status} />
                </td>
                <td className="px-6 py-4">{tc.lastActivity}</td>

                {/* ACTIONS */}
                <td className="px-6 py-4 text-right space-x-2">
                  <IconButton icon="visibility" onClick={() => navigate(`/facility-manager/technicians/${tc.id}`)} />
                  <IconButton icon="edit" onClick={() => navigate(`/facility-manager/technicians/${tc.id}/edit`)} />
                  <IconButton icon="delete" danger onClick={() => setDeleteTech(tc)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* DELETE MODAL */}
      {deleteTech && (
        <DeleteModal
          technician={deleteTech}
          onClose={() => setDeleteTech(null)}
        />
      )}
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function IconButton({ icon, onClick, danger }) {
  return (
    <button
      onClick={onClick}
      className={`p-1 rounded hover:bg-slate-200 ${danger ? "text-red-600" : "text-slate-600"}`}
    >
      <span className="material-symbols-outlined text-[20px]">{icon}</span>
    </button>
  );
}

function StatusBadge({ status }) {
  const map = {
    active: "bg-green-100 text-green-700",
    inactive: "bg-slate-200 text-slate-600",
  };
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${map[status]}`}>
      {status}
    </span>
  );
}

function DeleteModal({ technician, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-xl w-[420px] p-6 shadow-xl">
        <h2 className="text-lg font-bold mb-2">Delete Technician</h2>
        <p className="text-slate-600 mb-6">
          Are you sure you want to delete <strong>{technician.name}</strong>? This action cannot be undone.
        </p>

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 rounded-lg border">
            Cancel
          </button>
          <button className="px-4 py-2 rounded-lg bg-red-600 text-white font-bold">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
