import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const stats = [
  { labelKey: "tenants_total", value: "1,450", icon: "groups" },
  { labelKey: "tenants_active", value: "1,230", icon: "person_check" },
  { labelKey: "tenants_pending", value: "25", icon: "pending_actions" },
  { labelKey: "tenants_recent", value: "15", icon: "history_toggle_off" },
];

const tenants = [
  {
    id: "1",
    name: "Olivia Rhye",
    email: "olivia@hauswart.com",
    phone: "(219) 555-0114",
    property: "Maple Creek Apartments",
    unit: "A-101",
    moveIn: "2023-08-15",
    status: "active",
    lastActivity: "2024-05-10 09:30 AM",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDk8I5fAeCjw9agMOMg4qgIEKPtdKCvnADBeCdLBVuhNER8wTo4Lg93IbDEWu_4Rhbe4z1PrlJxhX3t3oYjwKZGekK_bGIxicj0UKMH29y5lPE4l7J0xWZ0FJsEmrFOjs-fHKkj0WokQ4e0cEbljMXAtaKLtsVxMVJ0su9AKos78JJ4BCP4NeDh0yoFFiodQrvkiKmJhd71KbyYfzJlJTTjeG_RZTUJoQJbVjd2hi_4qEgt3lauj1jaV5Vdd1G3uh9sI3ZAvmXPtkI",
  },
  {
    id: "2",
    name: "Phoenix Baker",
    email: "phoenix@hauswart.com",
    phone: "(319) 555-0115",
    property: "Oakwood Towers",
    unit: "12B",
    moveIn: "2024-05-01",
    status: "pending",
    lastActivity: "2024-05-01 02:15 PM",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYVB4043a33ylJFwtHts05rFl2lvmV3g1UPla0E_VIQBmQUxiaVax2GoHydACxVs5QIrcwZxWdY4yVrSTB0b8FyddMgaLmUT7VcBwFzBS_YhWTx3AKGjeYOjbxOxc1Jy7Hx7vnZL_yiMt8U9XfLCnDuDm2wRcz545Il6qCuiRBZdWLLBsqiqJnnL0rrOyl1nqElK2Lh8DVj9KRWfLE-QDeADktKODiY8GIURVSKuipija6L-ruo4of3qxEriqBiVn5GjlVSRANvpw",
  },
];

export default function TenantsList() {
  const { lang } = useLanguage();
  const dict = t[lang];
  const navigate = useNavigate();

  const [deleteTenant, setDeleteTenant] = useState(null);

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">{dict.tenants}</h1>
          <p className="text-slate-500">{dict.tenants_subtitle}</p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => navigate("/super-admin/tenants/create")}
            className="h-10 px-4 rounded-lg bg-[#F38B14] text-white font-bold hover:bg-black transition"
          >
            <span className="material-symbols-outlined text-sm mr-1">add</span>
            {dict.add_tenant}
          </button>
          <button className="h-10 px-4 rounded-lg border border-slate-200 font-bold">
            {dict.export_list}
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
              <th className="px-6 py-3 text-left">{dict.tenant_name}</th>
              <th className="px-6 py-3 text-left">{dict.property}</th>
              <th className="px-6 py-3 text-left">{dict.unit}</th>
              <th className="px-6 py-3 text-left">{dict.move_in}</th>
              <th className="px-6 py-3 text-left">{dict.status}</th>
              <th className="px-6 py-3 text-left">{dict.last_activity}</th>
              <th className="px-6 py-3 text-right">{dict.actions}</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200">
            {tenants.map(tn => (
              <tr key={tn.id} className="hover:bg-slate-50">
                <td className="px-6 py-4 flex items-center gap-3 font-medium">
                  <img src={tn.avatar} className="w-8 h-8 rounded-full" />
                  {tn.name}
                </td>
                <td className="px-6 py-4">{tn.property}</td>
                <td className="px-6 py-4">{tn.unit}</td>
                <td className="px-6 py-4">{tn.moveIn}</td>
                <td className="px-6 py-4"><StatusBadge status={tn.status} /></td>
                <td className="px-6 py-4">{tn.lastActivity}</td>

                {/* ACTIONS */}
                <td className="px-6 py-4 text-right space-x-2">
                  <IconButton icon="visibility" onClick={() => navigate(`/super-admin/tenants/${tn.id}`)} />
                  <IconButton icon="edit" onClick={() => navigate(`/super-admin/tenants/${tn.id}/edit`)} />
                  <IconButton icon="delete" danger onClick={() => setDeleteTenant(tn)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* DELETE MODAL */}
      {deleteTenant && (
        <DeleteModal
          tenant={deleteTenant}
          onClose={() => setDeleteTenant(null)}
        />
      )}
    </div>
  );
}

/* ---------- COMPONENTS ---------- */

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
    pending: "bg-yellow-100 text-yellow-700",
    inactive: "bg-slate-200 text-slate-600",
  };
  return <span className={`px-2 py-1 rounded-full text-xs font-semibold ${map[status]}`}>{status}</span>;
}

function DeleteModal({ tenant, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-xl w-[420px] p-6 shadow-xl">
        <h2 className="text-lg font-bold mb-2">Delete Tenant</h2>
        <p className="text-slate-600 mb-6">
          Are you sure you want to delete <strong>{tenant.name}</strong>? This action cannot be undone.
        </p>

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 rounded-lg border">Cancel</button>
          <button className="px-4 py-2 rounded-lg bg-red-600 text-white font-bold">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
