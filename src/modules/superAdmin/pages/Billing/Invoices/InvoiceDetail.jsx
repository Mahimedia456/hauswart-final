import { useNavigate, useParams } from "react-router-dom";
import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";

export default function InvoiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const dict = t[lang];

  const invoice = {
    id: "INV-2025-00421",
    facilityManager: "Innovate Facilities",
    plan: "Enterprise",
    amount: "€1,200.00",
    status: "Paid",
    date: "02 Feb 2025",
    paymentMethod: "Credit Card",
  };

  return (
    <div className="space-y-8 max-w-4xl">

      {/* HEADER */}
      <header className="flex justify-between items-center">
        <div>
          <button
            onClick={() => navigate("/super-admin/billing/invoices")}
            className="text-sm text-slate-500 hover:underline"
          >
            ← {dict.invoices}
          </button>

          <h1 className="text-3xl font-bold mt-2">
            {dict.invoiceId}: {invoice.id}
          </h1>
        </div>

        <div className="flex gap-3">
          <ActionBtn label={dict.downloadInvoice} icon="download" />
          <ActionBtn label={dict.viewInvoice} icon="visibility" />
        </div>
      </header>

      {/* DETAILS */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-3">
        <Row label={dict.facilityManager} value={invoice.facilityManager} />
        <Row label={dict.plan} value={invoice.plan} />
        <Row label={dict.amount} value={invoice.amount} />
        <Row label={dict.status} value={invoice.status} />
        <Row label={dict.date} value={invoice.date} />
        <Row label={dict.paymentMethod} value={invoice.paymentMethod} />
      </div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-slate-500">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

function ActionBtn({ label, icon }) {
  return (
    <button className="px-4 h-10 rounded-lg border border-slate-200 flex items-center gap-2 hover:bg-slate-100">
      <span className="material-symbols-outlined text-[18px]">{icon}</span>
      {label}
    </button>
  );
}
