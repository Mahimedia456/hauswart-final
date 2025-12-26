import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";

/* ---------------- DUMMY DATA ---------------- */
const DUMMY_FACILITY_MANAGERS = [
  {
    id: "fm-1",
    name: "Innovate Facilities",
    contactPerson: "Jane Doe",
    properties: 15,
    plan: "Enterprise",
    status: "active",
    createdDate: "2023-05-12",
  },
  {
    id: "fm-2",
    name: "Apex Facility Group",
    contactPerson: "John Smith",
    properties: 5,
    plan: "Pro",
    status: "trial",
    createdDate: "2023-08-01",
  },
  {
    id: "fm-3",
    name: "Quantum Facility Management",
    contactPerson: "Emily Johnson",
    properties: 42,
    plan: "Enterprise",
    status: "active",
    createdDate: "2022-11-20",
  },
  {
    id: "fm-4",
    name: "Synergy FM Services",
    contactPerson: "Michael Brown",
    properties: 8,
    plan: "Basic",
    status: "suspended",
    createdDate: "2023-01-15",
  },
  {
    id: "fm-5",
    name: "Pinnacle Facilities",
    contactPerson: "Sarah Williams",
    properties: 23,
    plan: "Pro",
    status: "active",
    createdDate: "2023-03-30",
  },
];

/* ---------------- KPI DATA ---------------- */
const fmStats = [
  { labelKey: "fm_total", icon: "business" },
  { labelKey: "fm_active", icon: "check_circle" },
  { labelKey: "fm_trial", icon: "hourglass_top" },
  { labelKey: "fm_suspended", icon: "block" },
];

export default function FacilityManagersList() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const dict = t[lang];

  const [search, setSearch] = useState("");

  const filteredManagers = DUMMY_FACILITY_MANAGERS.filter((fm) =>
    fm.name.toLowerCase().includes(search.toLowerCase())
  );

  const getStatValue = (key) => {
    if (key === "fm_total") return DUMMY_FACILITY_MANAGERS.length;
    if (key === "fm_active")
      return DUMMY_FACILITY_MANAGERS.filter((f) => f.status === "active").length;
    if (key === "fm_trial")
      return DUMMY_FACILITY_MANAGERS.filter((f) => f.status === "trial").length;
    if (key === "fm_suspended")
      return DUMMY_FACILITY_MANAGERS.filter((f) => f.status === "suspended").length;
    return 0;
  };

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">{dict.facilityManagers}</h1>
          <p className="text-slate-500">{dict.facilityManagers_subtitle}</p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => navigate("/super-admin/facility-managers/create")}
            className="h-10 px-4 rounded-lg bg-[#F38B14] text-white font-bold hover:bg-black transition"
          >
            <span className="material-symbols-outlined text-sm mr-1">add</span>
            {dict.createFacilityManager}
          </button>

          <button className="h-10 px-4 rounded-lg border border-slate-200 font-bold">
            {dict.export_list}
          </button>
        </div>
      </header>

      {/* KPI CARDS — SAME AS TENANTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {fmStats.map((s) => (
          <div
            key={s.labelKey}
            className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm"
          >
            <div className="flex justify-between text-slate-500">
              <p className="font-medium">{dict[s.labelKey]}</p>
              <span className="material-symbols-outlined">{s.icon}</span>
            </div>
            <p className="text-3xl font-bold mt-2">
              {getStatValue(s.labelKey)}
            </p>
          </div>
        ))}
      </div>

      {/* TABLE */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-6 py-3 text-left">{dict.table_facilityManager}</th>
              <th className="px-6 py-3 text-left">{dict.table_contactPerson}</th>
              <th className="px-6 py-3 text-center">{dict.table_properties}</th>
              <th className="px-6 py-3 text-left">{dict.table_plan}</th>
              <th className="px-6 py-3 text-left">{dict.table_status}</th>
              <th className="px-6 py-3 text-left">{dict.table_created}</th>
              <th className="px-6 py-3 text-right">{dict.actions}</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200">
            {filteredManagers.map((fm) => (
              <tr
                key={fm.id}
                className="hover:bg-slate-50 cursor-pointer"
                onClick={() =>
                  navigate(`/super-admin/facility-managers/${fm.id}`)
                }
              >
                <td className="px-6 py-4 font-medium">{fm.name}</td>
                <td className="px-6 py-4">{fm.contactPerson}</td>
                <td className="px-6 py-4 text-center">{fm.properties}</td>
                <td className="px-6 py-4">{fm.plan}</td>
                <td className="px-6 py-4">
                  <StatusBadge status={fm.status} />
                </td>
                <td className="px-6 py-4">{fm.createdDate}</td>

                <td
                  className="px-6 py-4 text-right space-x-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <IconButton
                    icon="visibility"
                    onClick={() =>
                      navigate(`/super-admin/facility-managers/${fm.id}`)
                    }
                  />
                  <IconButton
                    icon="edit"
                    onClick={() =>
                      navigate(`/super-admin/facility-managers/${fm.id}/edit`)
                    }
                  />
                  <IconButton
                    icon="delete"
                    danger
                    onClick={() =>
                      navigate(`/super-admin/facility-managers/${fm.id}/delete`)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ---------------- UI HELPERS ---------------- */

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
    trial: "bg-blue-100 text-blue-700",
    suspended: "bg-red-100 text-red-700",
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${map[status]}`}>
      {status}
    </span>
  );
}
