import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";

/* ---------------- KPI DATA ---------------- */

const invoiceStats = [
  { key: "invoices_total", value: 128, icon: "receipt_long" },
  { key: "invoices_paid", value: 96, icon: "check_circle" },
  { key: "invoices_unpaid", value: 32, icon: "error" },
  { key: "invoices_revenue", value: "$124,500", icon: "payments" },
];

/* ---------------- DUMMY DATA ---------------- */

const invoices = [
  {
    id: "INV-9011",
    fm: "Innovate Facilities",
    date: "2024-03-01",
    month: "March",
    amount: "$400",
    status: "Paid",
  },
  {
    id: "INV-9012",
    fm: "Apex Facility Group",
    date: "2024-03-05",
    month: "March",
    amount: "$150",
    status: "Unpaid",
  },
  {
    id: "INV-9013",
    fm: "Quantum Facility Management",
    date: "2024-02-10",
    month: "February",
    amount: "$400",
    status: "Paid",
  },
];

export default function BillingInvoices() {
  const { lang } = useLanguage();
  const dict = t[lang];
  const navigate = useNavigate();

  const [month, setMonth] = useState("All");

  const filtered =
    month === "All" ? invoices : invoices.filter(i => i.month === month);

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <header>
        <h1 className="text-3xl font-bold">{dict.invoices}</h1>
        <p className="text-slate-500">{dict.invoices_subtitle}</p>
      </header>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {invoiceStats.map(stat => (
          <div
            key={stat.key}
            className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm"
          >
            <div className="flex justify-between text-slate-500">
              <p className="font-medium">{dict[stat.key]}</p>
              <span className="material-symbols-outlined">
                {stat.icon}
              </span>
            </div>
            <p className="text-3xl font-bold mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* FILTER */}
      <div className="bg-white border border-slate-200 rounded-xl p-4">
        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="h-10 px-3 rounded-lg border bg-slate-50"
        >
          <option>All</option>
          <option>January</option>
          <option>February</option>
          <option>March</option>
        </select>
      </div>

      {/* INVOICES TABLE */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50">
            <tr>
              <Th>{dict.invoiceId}</Th>
              <Th>{dict.facilityManager}</Th>
              <Th>{dict.date}</Th>
              <Th>{dict.amount}</Th>
              <Th>{dict.status}</Th>
              <Th right>{dict.actions}</Th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {filtered.map(inv => (
              <tr key={inv.id} className="hover:bg-slate-50">
                <Td strong>{inv.id}</Td>
                <Td>{inv.fm}</Td>
                <Td>{inv.date}</Td>
                <Td>{inv.amount}</Td>
                <Td>
                  <StatusBadge status={inv.status} />
                </Td>

                {/* ACTIONS */}
                <Td right>
                  <div className="flex justify-end gap-2">
                    <Action
                      icon="visibility"
                      onClick={() =>
                        navigate(`/super-admin/billing/invoices/${inv.id}`)
                      }
                    />
                    <Action
                      icon="download"
                      onClick={() =>
                        alert(`Downloading invoice ${inv.id}`)
                      }
                    />
                  </div>
                </Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

/* ---------------- UI HELPERS ---------------- */

function Th({ children, right }) {
  return (
    <th
      className={`px-6 py-3 text-xs font-semibold text-slate-500 uppercase ${
        right ? "text-right" : "text-left"
      }`}
    >
      {children}
    </th>
  );
}

function Td({ children, strong, right }) {
  return (
    <td
      className={`px-6 py-4 ${
        strong ? "font-medium" : ""
      } ${right ? "text-right" : ""}`}
    >
      {children}
    </td>
  );
}

function Action({ icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className="p-1 rounded hover:bg-slate-200 text-slate-600"
    >
      <span className="material-symbols-outlined text-[20px]">
        {icon}
      </span>
    </button>
  );
}

function StatusBadge({ status }) {
  const map = {
    Paid: "bg-green-100 text-green-700",
    Unpaid: "bg-red-100 text-red-700",
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${map[status]}`}>
      {status}
    </span>
  );
}
