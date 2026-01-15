import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";

export default function TicketsList() {
  const { lang } = useLanguage();
  const dict = t[lang];
  const navigate = useNavigate();

  // ---------------------------------------
  // Dummy Tickets Data
  // ---------------------------------------
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

  const [dropdownOpen, setDropdownOpen] = useState(null);

  return (
    <div className="p-6 space-y-6">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            {dict.tickets || "All Tickets"}
          </h1>
          <p className="text-slate-500">
            {dict.tickets_subtitle ||
              "Manage tickets across all organizations, properties, and technicians."}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="h-10 px-4 rounded-lg bg-white border border-slate-200 text-sm font-medium">
            Export CSV
          </button>

          <button
            onClick={() => navigate("/super-admin/tickets/create")}
            className="h-10 px-4 rounded-lg bg-[#F38B14] text-white font-semibold hover:bg-black transition"
          >
            {dict.createTicket || "Create Ticket"}
          </button>
        </div>
      </div>

      {/* FILTERS */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
        <div className="flex flex-wrap gap-3">
          {[
            "Organization",
            "Property",
            "Priority",
            "Category",
            "Status",
            "Assigned To",
            "Created Date",
            "SLA Status",
          ].map((f) => (
            <FilterButton key={f} label={f} />
          ))}

          <button className="ml-auto text-[#F38B14] text-sm font-medium hover:underline">
            Clear All
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <Th />
              <Th>TICKET ID</Th>
              <Th>TITLE / SUMMARY</Th>
              <Th>PRIORITY</Th>
              <Th>CATEGORY</Th>
              <Th>ORGANIZATION</Th>
              <Th>PROPERTY</Th>
              <Th>ASSIGNED TO</Th>
              <Th>STATUS</Th>
              <Th>CREATED</Th>
              <Th>SLA</Th>
              <Th />
            </tr>
          </thead>

          <tbody>
            {ticketsData.map((t) => (
              <tr
                key={t.id}
                className="hover:bg-slate-50 transition cursor-pointer"
              >
                <td className="px-6 py-4">
                  <input type="checkbox" className="h-4 w-4" />
                </td>

                <td
                  className="px-6 py-4 font-semibold text-[#F38B14]"
                  onClick={() => navigate(`/super-admin/tickets/${t.id}`)}
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

                <td className="px-6 py-4">
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-xs font-medium">
                    {t.category}
                  </span>
                </td>

                <td className="px-6 py-4">{t.org}</td>

                <td
                  className="px-6 py-4 text-[#F38B14] hover:underline"
                  onClick={() => navigate(`/super-admin/tickets/${t.id}`)}
                >
                  {t.property}
                </td>

                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <img
                      src={t.avatar}
                      className="h-6 w-6 rounded-full"
                      alt=""
                    />
                    <span>{t.assignedTo}</span>
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

                <td className="relative px-6 py-4">
                  <button
                    onClick={() =>
                      setDropdownOpen(dropdownOpen === t.id ? null : t.id)
                    }
                    className="text-slate-500 hover:text-black"
                  >
                    <span className="material-symbols-outlined">
                      more_vert
                    </span>
                  </button>

                  {dropdownOpen === t.id && (
                    <MenuActionDropdown
                      onView={() =>
                        navigate(`/super-admin/tickets/${t.id}`)
                      }
                      onEdit={() =>
                        navigate(`/super-admin/tickets/${t.id}/edit`)
                      }
                      onDelete={() => alert("Delete clicked")}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* PAGINATION */}
        <div className="px-6 py-4 flex justify-between text-sm text-slate-500">
          <span>
            Showing {ticketsData.length} of {ticketsData.length}
          </span>

          <div className="flex gap-1">
            <PageBtn disabled>&lt;</PageBtn>
            <PageBtn active>1</PageBtn>
            <PageBtn>2</PageBtn>
            <PageBtn>&gt;</PageBtn>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

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
    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
      {children}
    </th>
  );
}

function PageBtn({ children, active, disabled }) {
  return (
    <button
      disabled={disabled}
      className={`h-8 w-8 rounded-lg flex items-center justify-center ${
        active
          ? "bg-[#F38B14]/20 text-[#F38B14] font-bold"
          : "hover:bg-slate-100"
      }`}
    >
      {children}
    </button>
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

function MenuActionDropdown({ onView, onEdit, onDelete }) {
  return (
    <div className="absolute right-0 top-10 w-32 bg-white border border-slate-200 rounded-lg shadow-lg z-50">
      <button onClick={onView} className="w-full px-3 py-2 text-left hover:bg-slate-100">
        View
      </button>
      <button onClick={onEdit} className="w-full px-3 py-2 text-left hover:bg-slate-100">
        Edit
      </button>
      <button
        onClick={onDelete}
        className="w-full px-3 py-2 text-left text-red-600 hover:bg-red-50"
      >
        Delete
      </button>
    </div>
  );
}
