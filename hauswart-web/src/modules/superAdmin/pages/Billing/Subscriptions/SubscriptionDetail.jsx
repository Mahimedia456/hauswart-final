import { useNavigate, useParams } from "react-router-dom";
import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";
import { useState } from "react";

export default function SubscriptionDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const dict = t[lang];

  const [confirmStop, setConfirmStop] = useState(false);

  /* DUMMY DATA */
  const subscription = {
    id: "SUB-ENT-9981",
    facilityManager: "Innovate Facilities",
    plan: "Enterprise",
    amount: "€1,200 / year",
    status: "Active",
    startDate: "01 Feb 2025",
    endDate: "31 Jan 2026",
    autoRenew: true,
    nextBilling: "01 Feb 2026",
  };

  return (
    <div className="space-y-8 max-w-5xl">

      {/* HEADER */}
      <header className="flex justify-between items-center">
        <div>
          <button
            onClick={() => navigate("/super-admin/billing/subscriptions")}
            className="text-sm text-slate-500 hover:underline"
          >
            ← {dict.subscriptions}
          </button>

          <h1 className="text-3xl font-bold mt-2">
            {dict.subscriptionId}: {subscription.id}
          </h1>
          <p className="text-slate-500">
            {dict.facilityManager}: {subscription.facilityManager}
          </p>
        </div>

        <button
          onClick={() => setConfirmStop(true)}
          className="px-4 h-10 rounded-lg bg-red-600 text-white font-bold hover:bg-red-700"
        >
          {dict.stopSubscription}
        </button>
      </header>

      {/* KPI */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <KPI label={dict.plan} value={subscription.plan} />
        <KPI label={dict.status} value={subscription.status} />
        <KPI label={dict.amount} value={subscription.amount} />
      </div>

      {/* DETAILS */}
      <Card title={dict.subscriptionDetails}>
        <Row label={dict.startDate} value={subscription.startDate} />
        <Row label={dict.endDate} value={subscription.endDate} />
        <Row label={dict.autoRenew} value={subscription.autoRenew ? "Yes" : "No"} />
        <Row label={dict.nextBilling} value={subscription.nextBilling} />
      </Card>

      {/* CONFIRM STOP */}
      {confirmStop && (
        <ConfirmModal
          onClose={() => setConfirmStop(false)}
          onConfirm={() => {
            alert("Subscription stopped");
            setConfirmStop(false);
          }}
        />
      )}
    </div>
  );
}

/* UI HELPERS */

function KPI({ label, value }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="text-xl font-bold mt-1">{value}</p>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <h3 className="font-bold mb-4">{title}</h3>
      <div className="space-y-3">{children}</div>
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

function ConfirmModal({ onClose, onConfirm }) {
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl w-[420px] p-6 shadow-xl">
        <h2 className="text-lg font-bold mb-2">Stop Subscription</h2>
        <p className="text-slate-600 mb-6">
          This will stop future billing for this facility manager.
        </p>

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 rounded-lg border">
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg bg-red-600 text-white font-bold"
          >
            Stop
          </button>
        </div>
      </div>
    </div>
  );
}
