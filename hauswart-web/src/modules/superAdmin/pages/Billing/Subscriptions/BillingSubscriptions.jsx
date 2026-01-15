import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";

/* ---------------- KPI DATA ---------------- */

const stats = [
  { key: "subs_total", value: 42, icon: "business" },
  { key: "subs_active", value: 36, icon: "check_circle" },
  { key: "subs_expiring", value: 4, icon: "event_busy" },
  { key: "subs_revenue", value: "$84,200", icon: "payments" },
];

/* ---------------- TABLE DATA ---------------- */

const subscriptions = [
  {
    id: "SUB-1001",
    fm: "Innovate Facilities",
    plan: "Enterprise",
    start: "2024-01-01",
    end: "2024-12-31",
    amount: "$4,800",
    status: "Active",
  },
  {
    id: "SUB-1002",
    fm: "Apex Facility Group",
    plan: "Pro",
    start: "2024-02-01",
    end: "2024-08-01",
    amount: "$1,800",
    status: "Expiring",
  },
];

export default function BillingSubscriptions() {
  const { lang } = useLanguage();
  const dict = t[lang];
  const navigate = useNavigate();

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <header>
        <h1 className="text-3xl font-bold">{dict.subscriptionInvoices}</h1>
        <p className="text-slate-500">{dict.subscriptions_subtitle}</p>
      </header>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(stat => (
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

      {/* SUBSCRIPTIONS TABLE */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50">
            <tr>
              <Th>{dict.facilityManager}</Th>
              <Th>{dict.plan}</Th>
              <Th>{dict.startDate}</Th>
              <Th>{dict.endDate}</Th>
              <Th>{dict.amount}</Th>
              <Th>{dict.status}</Th>
              <Th right>{dict.actions}</Th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {subscriptions.map(sub => (
              <tr key={sub.id} className="hover:bg-slate-50">
                <Td strong>{sub.fm}</Td>
                <Td>{sub.plan}</Td>
                <Td>{sub.start}</Td>
                <Td>{sub.end}</Td>
                <Td>{sub.amount}</Td>
                <Td>
                  <StatusBadge status={sub.status} />
                </Td>

                {/* ACTION */}
                <Td right>
                  <Action
                    icon="visibility"
                    onClick={() =>
                      navigate(`/super-admin/billing/subscriptions/${sub.id}`)
                    }
                  />
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
    Active: "bg-green-100 text-green-700",
    Expiring: "bg-yellow-100 text-yellow-700",
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${map[status]}`}>
      {status}
    </span>
  );
}
