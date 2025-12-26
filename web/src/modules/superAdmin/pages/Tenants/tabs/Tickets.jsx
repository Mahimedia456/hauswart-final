import { useNavigate, useParams } from "react-router-dom";
import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";

export default function TenantTickets() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { lang } = useLanguage();
  const dict = t[lang];

  const tickets = [
    {
      id: "HW-3462",
      category: "Plumbing",
      property: "123 Maple St / 4B",
      assignedTo: "John Doe (FM)",
      status: "completed",
      priority: "medium",
      created: "2023-10-26",
      updated: "2023-10-28",
    },
    {
      id: "HW-3455",
      category: "Electrical",
      property: "123 Maple St / 4B",
      assignedTo: "Jane Smith (SP)",
      status: "inProgress",
      priority: "high",
      created: "2023-10-24",
      updated: "2023-10-29",
    },
  ];

  return (
    <div className="space-y-6">

      {/* TOOLBAR */}
      <div className="flex flex-wrap justify-between items-center gap-4">
        <input
          type="text"
          placeholder={dict.searchTickets}
          className="h-10 w-72 px-4 rounded-lg border border-slate-200"
        />

        <button
          onClick={() => navigate(`/super-admin/tickets/create?tenant=${id}`)}
          className="h-10 px-4 rounded-lg bg-[#F38B14] text-white font-semibold hover:bg-black"
        >
          {dict.createTicket}
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-6 py-3 text-left">{dict.ticketId}</th>
              <th className="px-6 py-3 text-left">{dict.category}</th>
              <th className="px-6 py-3 text-left">{dict.propertyUnit}</th>
              <th className="px-6 py-3 text-left">{dict.assignedTo}</th>
              <th className="px-6 py-3 text-left">{dict.status}</th>
              <th className="px-6 py-3 text-left">{dict.priority}</th>
              <th className="px-6 py-3 text-left">{dict.createdDate}</th>
              <th className="px-6 py-3 text-left">{dict.lastUpdated}</th>
            </tr>
          </thead>

          <tbody>
            {tickets.map((tkt) => (
              <tr
                key={tkt.id}
                onClick={() => navigate(`/super-admin/tickets/${tkt.id}`)}
                className="border-t hover:bg-slate-50 cursor-pointer"
              >
                <td className="px-6 py-4 font-medium">#{tkt.id}</td>
                <td className="px-6 py-4">{tkt.category}</td>
                <td className="px-6 py-4">{tkt.property}</td>
                <td className="px-6 py-4">{tkt.assignedTo}</td>
                <td className="px-6 py-4">
                  <StatusBadge value={tkt.status} dict={dict} />
                </td>
                <td className="px-6 py-4">
                  <PriorityBadge value={tkt.priority} dict={dict} />
                </td>
                <td className="px-6 py-4">{tkt.created}</td>
                <td className="px-6 py-4">{tkt.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* BADGES                                                                     */
/* -------------------------------------------------------------------------- */

function StatusBadge({ value, dict }) {
  const map = {
    completed: "bg-green-100 text-green-700",
    inProgress: "bg-blue-100 text-blue-700",
    overdue: "bg-red-100 text-red-700",
    open: "bg-slate-100 text-slate-700",
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${map[value]}`}>
      {dict[`status_${value}`]}
    </span>
  );
}

function PriorityBadge({ value, dict }) {
  const map = {
    low: "bg-slate-100 text-slate-700",
    medium: "bg-yellow-100 text-yellow-700",
    high: "bg-orange-100 text-orange-700",
    critical: "bg-red-100 text-red-700",
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${map[value]}`}>
      {dict[`priority_${value}`]}
    </span>
  );
}
