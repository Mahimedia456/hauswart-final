import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

/* ---------------- KPI DATA ---------------- */
const stats = [
  { labelKey: "properties_total", value: "128", icon: "apartment" },
  { labelKey: "properties_active", value: "114", icon: "check_circle" },
  { labelKey: "properties_archived", value: "14", icon: "archive" },
  { labelKey: "properties_units", value: "3,420", icon: "home_work" },
];

/* ---------------- TABLE DATA ---------------- */
const properties = [
  {
    id: "prop-1",
    name: "Hauswart Tower",
    organization: "Global Holdings Inc.",
    type: "Commercial",
    floors: 45,
    units: 320,
    fm: "Elena Rodriguez",
    status: "active",
    created: "2025-03-12",
  },
  {
    id: "prop-2",
    name: "Maplewood Gardens",
    organization: "GreenLeaf Properties",
    type: "Residential",
    floors: 12,
    units: 84,
    fm: "Marcus Chen",
    status: "active",
    created: "2025-03-10",
  },
  {
    id: "prop-3",
    name: "The Grand Plaza",
    organization: "Global Holdings Inc.",
    type: "Mixed Use",
    floors: 25,
    units: 150,
    fm: "Aisha Khan",
    status: "archived",
    created: "2025-02-28",
  },
];

export default function PropertiesList() {
  const { lang } = useLanguage();
  const dict = t[lang];
  const navigate = useNavigate();

  const [deleteProperty, setDeleteProperty] = useState(null);

  return (
    <div className="space-y-6">

      {/* ================= HEADER ================= */}
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">{dict.properties}</h1>
          <p className="text-slate-500">{dict.properties_subtitle}</p>
        </div>

        <div className="flex gap-3">
          <button className="h-10 px-4 rounded-lg border border-slate-200 font-bold">
            {dict.export_list}
          </button>

          <button
            onClick={() => navigate("create")}
            className="h-10 px-4 rounded-lg bg-[#F38B14] text-white font-bold hover:bg-black transition"
          >
            <span className="material-symbols-outlined text-sm mr-1">add</span>
            {dict.createProperty}
          </button>
        </div>
      </header>

      {/* ================= KPI CARDS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div
            key={s.labelKey}
            className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm"
          >
            <div className="flex justify-between text-slate-500">
              <p className="font-medium">{dict[s.labelKey]}</p>
              <span className="material-symbols-outlined">{s.icon}</span>
            </div>
            <p className="text-3xl font-bold mt-2">{s.value}</p>
          </div>
        ))}
      </div>

      {/* ================= TABLE ================= */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-600 uppercase text-xs">
            <tr>
              <th className="px-6 py-3 text-left">{dict.col_propertyName}</th>
              <th className="px-6 py-3 text-left">{dict.organization}</th>
              <th className="px-6 py-3 text-left">{dict.col_type}</th>
              <th className="px-6 py-3 text-left">{dict.col_floorsUnits}</th>
              <th className="px-6 py-3 text-left">{dict.col_facilityManager}</th>
              <th className="px-6 py-3 text-left">{dict.col_status}</th>
              <th className="px-6 py-3 text-left">{dict.col_createdDate}</th>
              <th className="px-6 py-3 text-right">{dict.actions}</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200">
            {properties.map((p) => (
              <tr
                key={p.id}
                className="hover:bg-slate-50 cursor-pointer"
                onClick={() => navigate(p.id)}
              >
                <td className="px-6 py-4 font-medium text-slate-900">
                  {p.name}
                </td>
                <td className="px-6 py-4">{p.organization}</td>
                <td className="px-6 py-4">{p.type}</td>
                <td className="px-6 py-4">
                  {p.floors} {dict.label_floors} / {p.units} {dict.label_units}
                </td>
                <td className="px-6 py-4">{p.fm}</td>
                <td className="px-6 py-4">
                  <StatusBadge status={p.status} />
                </td>
                <td className="px-6 py-4">{p.created}</td>

                {/* ACTIONS */}
                <td
                  className="px-6 py-4 text-right space-x-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <IconButton
                    icon="visibility"
                    onClick={() => navigate(p.id)}
                  />
                  <IconButton
                    icon="edit"
                    onClick={() => navigate(`${p.id}/edit`)}
                  />
                  <IconButton
                    icon="delete"
                    danger
                    onClick={() => setDeleteProperty(p)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= DELETE MODAL ================= */}
      {deleteProperty && (
        <DeleteModal
          property={deleteProperty}
          onClose={() => setDeleteProperty(null)}
        />
      )}
    </div>
  );
}

/* ================= SHARED UI ================= */

function IconButton({ icon, onClick, danger }) {
  return (
    <button
      onClick={onClick}
      className={`p-1 rounded hover:bg-slate-200 ${
        danger ? "text-red-600" : "text-slate-600"
      }`}
    >
      <span className="material-symbols-outlined text-[20px]">{icon}</span>
    </button>
  );
}

function StatusBadge({ status }) {
  const map = {
    active: "bg-green-100 text-green-700",
    archived: "bg-slate-200 text-slate-600",
  };

  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-semibold ${
        map[status] || "bg-slate-100 text-slate-600"
      }`}
    >
      {status}
    </span>
  );
}

function DeleteModal({ property, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-xl w-[420px] p-6 shadow-xl">
        <h2 className="text-lg font-bold mb-2">
          {`Delete Property`}
        </h2>
        <p className="text-slate-600 mb-6">
          Are you sure you want to delete{" "}
          <strong>{property.name}</strong>? This action cannot be undone.
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border"
          >
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
