import { useState } from "react";
import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";
import TicketDrawer from "../components/TicketDrawer";

export default function Tickets() {
  const { lang } = useLanguage();
  const dict = t[lang];

  const [selected, setSelected] = useState(null);

  // ------------------------------
  // Dummy Tickets
  // ------------------------------
  const tickets = [
    {
      id: "#TKT-83472",
      category: "Electrical",
      categoryColor: "blue",
      property: "Hauptgebäude Berlin",
      assigned: { name: "Max Fischer", avatar: "https://i.pravatar.cc/40?img=12" },
      priority: "High",
      priorityTone: "red",
      status: "Open",
      statusTone: "orange",
      date: "2024-07-23",
      description:
        "Main circuit breaker in the basement server room is tripping repeatedly. Needs immediate investigation.",
    },
    {
      id: "#TKT-83471",
      category: "Plumbing",
      categoryColor: "purple",
      property: "Bürokomplex München",
      assigned: { name: "Julia Schneider", avatar: "https://i.pravatar.cc/40?img=32" },
      priority: "Medium",
      priorityTone: "yellow",
      status: "In Progress",
      statusTone: "slate",
      date: "2024-07-22",
      description: "Routine plumbing check required due to slow drainage.",
    },
    {
      id: "#TKT-83470",
      category: "Maintenance",
      categoryColor: "green",
      property: "Lagerhaus Hamburg",
      assigned: { name: "Lukas Weber", avatar: "https://i.pravatar.cc/40?img=23" },
      priority: "Low",
      priorityTone: "gray",
      status: "Completed",
      statusTone: "green",
      date: "2024-07-21",
      description: "Preventive ventilation maintenance completed.",
    },
    {
      id: "#TKT-83469",
      category: "General Issue",
      categoryColor: "gray",
      property: "Hauptgebäude Berlin",
      assigned: { name: "Anna Schmidt", avatar: "https://i.pravatar.cc/40?img=48" },
      priority: "Critical",
      priorityTone: "red",
      status: "Closed",
      statusTone: "dark",
      date: "2024-07-20",
      description: "Issue resolved and closed.",
    },
  ];

  // Badge Colors
  const catColor = {
    blue: "bg-blue-100 text-blue-800",
    purple: "bg-purple-100 text-purple-800",
    green: "bg-green-100 text-green-800",
    gray: "bg-gray-200 text-gray-800",
  };

  const priorityColor = {
    red: "bg-red-100 text-red-700",
    yellow: "bg-yellow-100 text-yellow-700",
    gray: "bg-gray-100 text-gray-700",
  };

  const statusColor = {
    orange: "bg-orange-100 text-orange-700",
    slate: "bg-slate-100 text-slate-700",
    green: "bg-green-100 text-green-700",
    dark: "bg-gray-700 text-white",
  };

  return (
    <div className="space-y-8">

      {/* ---------------------------------------- */}
      {/* FILTER BAR (Simple placeholder for now) */}
      {/* ---------------------------------------- */}
      <div className="flex flex-wrap items-center gap-4">

        {/* Search */}
        <div className="relative flex-grow max-w-xs">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            search
          </span>
          <input
            placeholder={dict.searchProperty}
            className="w-full rounded-lg border-gray-200 bg-gray-100 py-2.5 pl-10 pr-4 text-sm"
          />
        </div>

        <select className="rounded-lg bg-gray-100 border-gray-200 py-2.5 pr-8 text-sm">
          <option>{dict.filter_status}</option>
        </select>

        <select className="rounded-lg bg-gray-100 border-gray-200 py-2.5 pr-8 text-sm">
          <option>{dict.filter_propertyType}</option>
        </select>

        <input
          type="date"
          className="rounded-lg bg-gray-100 border-gray-200 py-2.5 px-4 text-sm"
        />
      </div>

      {/* ---------------------------------------- */}
      {/* TICKET STATUS DONUT (Static Placeholder) */}
      {/* ---------------------------------------- */}

      <div className="rounded-xl p-6 bg-white border shadow-sm">
        <h3 className="text-lg font-semibold mb-4">
          {dict.prop_tickets_overview || "Ticket Status Overview"}
        </h3>

        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Donut */}
          <div className="relative h-48 w-48">
            <svg className="h-full w-full" viewBox="0 0 36 36">
              <circle className="text-gray-300" cx="18" cy="18" r="15.9" fill="none" stroke="currentColor" strokeWidth="3" />
              <circle className="text-primary" cx="18" cy="18" r="15.9" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="30, 100" />
              <circle className="text-slate-500" cx="18" cy="18" r="15.9" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="20, 100" strokeDashoffset="-30" />
              <circle className="text-yellow-500" cx="18" cy="18" r="15.9" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="10, 100" strokeDashoffset="-50" />
              <circle className="text-green-500" cx="18" cy="18" r="15.9" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="25, 100" strokeDashoffset="-60" />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="text-2xl font-bold">128</span>
              <span className="text-sm text-gray-500">{dict.tickets_total || "Total"}</span>
            </div>
          </div>

          {/* Legends */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 flex-1">
            <Legend color="bg-primary" label="Open" percent="29.7%" count="38" />
            <Legend color="bg-slate-500" label="In Progress" percent="20.3%" count="26" />
            <Legend color="bg-yellow-500" label="On Hold" percent="10.1%" count="13" />
            <Legend color="bg-green-500" label="Completed" percent="25%" count="32" />
            <Legend color="bg-gray-700" label="Closed" percent="14.9%" count="19" />
          </div>
        </div>
      </div>

      {/* ---------------------------------------- */}
      {/* TICKETS TABLE */}
      {/* ---------------------------------------- */}
      <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <Th>{dict.tkt_id || "Ticket ID"}</Th>
              <Th>{dict.col_type || "Category"}</Th>
              <Th>{dict.col_propertyName || "Property"}</Th>
              <Th>{dict.col_facilityManager || "Assigned To"}</Th>
              <Th>{dict.tkt_priority || "Priority"}</Th>
              <Th>{dict.tkt_status || "Status"}</Th>
              <Th>{dict.tkt_date || "Created Date"}</Th>
              <Th className="text-right">{dict.col_actions}</Th>
            </tr>
          </thead>

          <tbody>
            {tickets.map((t, i) => (
              <tr
                key={i}
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => setSelected(t)}
              >
                <Td strong>{t.id}</Td>

                <Td>
                  <span className={`inline-flex items-center gap-2 rounded-full px-2.5 py-0.5 text-xs font-medium ${catColor[t.categoryColor]}`}>
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    {t.category}
                  </span>
                </Td>

                <Td>{t.property}</Td>

                <Td>
                  <div className="flex items-center gap-2">
                    <img src={t.assigned.avatar} className="h-6 w-6 rounded-full" />
                    <span>{t.assigned.name}</span>
                  </div>
                </Td>

                <Td>
                  <span className={`rounded-md px-2 py-1 text-xs font-medium ${priorityColor[t.priorityTone]}`}>
                    {t.priority}
                  </span>
                </Td>

                <Td>
                  <span className={`rounded-md px-2 py-1 text-xs font-medium ${statusColor[t.statusTone]}`}>
                    {t.status}
                  </span>
                </Td>

                <Td>{t.date}</Td>

                <td className="px-6 py-4 text-right">
                  <button className="text-gray-500 hover:text-gray-700">
                    <span className="material-symbols-outlined !text-xl">more_vert</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ------------------------------ */}
      {/* TICKET DETAILS DRAWER */}
      {/* ------------------------------ */}
      {selected && (
        <TicketDrawer ticket={selected} onClose={() => setSelected(null)} />
      )}

    </div>
  );
}

/* Helpers */
function Legend({ color, label, percent, count }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className={`h-3 w-3 rounded-full ${color}`} />
        <span className="text-sm">{label}</span>
      </div>
      <div className="text-right">
        <p className="font-semibold">{count}</p>
        <p className="text-xs text-gray-500">{percent}</p>
      </div>
    </div>
  );
}

function Th({ children, className }) {
  return (
    <th className={`px-6 py-3 text-left font-medium text-gray-600 ${className || ""}`}>
      {children}
    </th>
  );
}

function Td({ children, strong }) {
  return (
    <td className={`px-6 py-4 ${strong ? "font-semibold" : ""}`}>{children}</td>
  );
}
