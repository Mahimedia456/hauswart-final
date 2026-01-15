import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";

/* ================= KPIs ================= */

const ticketStats = [
  { key: "tickets_total", value: "128", icon: "confirmation_number" },
  { key: "tickets_open", value: "42", icon: "mark_email_unread" },
  { key: "tickets_in_progress", value: "63", icon: "sync" },
  { key: "tickets_overdue", value: "23", icon: "schedule" },
];

/* ================= DUMMY DATA ================= */

const ticketsData = [
  {
    id: 4830,
    title: "Air conditioning not cooling",
    summary: "Tenant-issued | Unit 403",
    priority: "Critical",
    category: "HVAC",
    org: "Sunrise Towers LLC",
    property: "Building A — Unit 403",
    assignedTo: "John Mills",
    avatar: "https://randomuser.me/api/portraits/men/40.jpg",
    status: "Open",
    created: "12 Nov 2025 — 3:45 PM",
    sla: "Overdue by 1d 3h",
    slaColor: "text-red-600",
  },
  {
    id: 4829,
    title: "Lobby door lock broken",
    summary: "Staff-issued | Main Entrance",
    priority: "High",
    category: "Safety",
    org: "Metro Properties",
    property: "Downtown Plaza",
    assignedTo: "Sarah Jenkins",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    status: "Awaiting Approval",
    created: "12 Nov 2025 — 1:15 PM",
    sla: "2 hrs left",
    slaColor: "text-orange-600",
  },
  {
    id: 4828,
    title: "Leaky faucet in breakroom",
    summary: "Staff-issued | Floor 3",
    priority: "Medium",
    category: "Plumbing",
    org: "Sunrise Towers LLC",
    property: "Building B — Floor 3",
    assignedTo: "Mike Ross",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    status: "In Progress",
    created: "11 Nov 2025 — 9:00 AM",
    sla: "6 hrs left",
    slaColor: "text-green-600",
  },
];

export default function TicketsList() {
  const { lang } = useLanguage();
  const dict = t[lang];
  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(null);

  return (
    <div className="p-6 space-y-6">

      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            {dict.tickets}
          </h1>
          <p className="text-slate-500">
            {dict.tickets_subtitle}
          </p>
        </div>

        <div className="flex gap-3">
          <button className="h-10 px-4 rounded-lg border border-slate-200 text-sm font-medium">
            {dict.export_list || "Export CSV"}
          </button>

          <button
            onClick={() => navigate("/facility-manager/tickets/create")}
            className="h-10 px-4 rounded-lg bg-[#F38B14] text-white font-semibold hover:bg-black transition"
          >
            {dict.createTicket}
          </button>
        </div>
      </div>

      {/* ================= KPIs ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ticketStats.map((s) => (
          <div
            key={s.key}
            className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm"
          >
            <div className="flex justify-between text-slate-500">
              <p className="font-medium">{dict[s.key]}</p>
              <span className="material-symbols-outlined">{s.icon}</span>
            </div>
            <p className="text-3xl font-bold mt-2">{s.value}</p>
          </div>
        ))}
      </div>

      {/* ================= FILTERS ================= */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
        <div className="flex flex-wrap gap-3">
          {[
            dict.filter_org,
            dict.filter_property,
            dict.filter_priority,
            dict.filter_category,
            dict.filter_status,
            dict.filter_assigned,
            dict.filter_created_date,
            dict.filter_sla,
          ].map((f) => (
            <FilterButton key={f} label={f} />
          ))}

          <button className="ml-auto text-[#F38B14] text-sm font-medium hover:underline">
            {dict.clear_all || "Clear All"}
          </button>
        </div>
      </div>

      {/* ================= TABLE ================= */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b">
            <tr>
              <Th />
              <Th>{dict.col_ticket_id}</Th>
              <Th>{dict.col_title}</Th>
              <Th>{dict.col_priority}</Th>
              <Th>{dict.col_category}</Th>
              <Th>{dict.col_organization}</Th>
              <Th>{dict.col_property}</Th>
              <Th>{dict.col_assigned_to}</Th>
              <Th>{dict.col_status}</Th>
              <Th>{dict.col_created}</Th>
              <Th>{dict.col_sla}</Th>
              <Th />
            </tr>
          </thead>

          <tbody>
            {ticketsData.map((t) => (
              <tr
                key={t.id}
                className="hover:bg-slate-50 cursor-pointer"
              >
                <td className="px-6 py-4">
                  <input type="checkbox" className="h-4 w-4" />
                </td>

                <td
                  className="px-6 py-4 font-semibold text-[#F38B14]"
                  onClick={() => navigate(`/facility-manager/tickets/${t.id}`)}
                >
                  #{t.id}
                </td>

                <td className="px-6 py-4">
                  <p className="font-semibold">{t.title}</p>
                  <p className="text-xs text-slate-500">{t.summary}</p>
                </td>

                <td className="px-6 py-4">
                  <PriorityBadge level={t.priority} />
                </td>

                <td className="px-6 py-4">{t.category}</td>
                <td className="px-6 py-4">{t.org}</td>

                <td
                  className="px-6 py-4 text-[#F38B14] hover:underline"
                  onClick={() => navigate(`/facility-manager/tickets/${t.id}`)}
                >
                  {t.property}
                </td>

                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <img src={t.avatar} className="h-6 w-6 rounded-full" />
                    {t.assignedTo}
                  </div>
                </td>

                <td className="px-6 py-4">
                  <StatusBadge status={t.status} />
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  {t.created}
                </td>

                <td className={`px-6 py-4 font-semibold ${t.slaColor}`}>
                  {t.sla}
                </td>

                <td className="px-6 py-4 text-right">
                  <span className="material-symbols-outlined text-slate-500">
                    more_vert
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ================= UI ================= */

function FilterButton({ label }) {
  return (
    <button className="flex items-center gap-2 h-8 px-3 rounded-lg bg-slate-100 text-sm">
      {label}
      <span className="material-symbols-outlined text-base">
        expand_more
      </span>
    </button>
  );
}

function Th({ children }) {
  return (
    <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-slate-500">
      {children}
    </th>
  );
}

function PriorityBadge({ level }) {
  const styles = {
    Critical: "bg-red-100 text-red-700",
    High: "bg-orange-100 text-orange-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-700",
  };
  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${styles[level]}`}>
      {level}
    </span>
  );
}

function StatusBadge({ status }) {
  const styles = {
    Open: "bg-blue-100 text-blue-700",
    "Awaiting Approval": "bg-purple-100 text-purple-700",
    "In Progress": "bg-[#F38B14]/20 text-[#F38B14] font-semibold",
    Completed: "bg-green-100 text-green-700",
    Closed: "bg-slate-200 text-slate-700",
  };

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${styles[status]}`}>
      {status}
    </span>
  );
}
