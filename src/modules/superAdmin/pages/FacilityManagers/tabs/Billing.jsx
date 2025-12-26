// src/modules/superAdmin/pages/Organizations/tabs/Billing.jsx
import React from "react";

export default function Billing() {
  // ------------------ Dummy Data ------------------
  const plan = {
    name: "Enterprise",
    type: "Annual",
    status: "Active",
    renews: "August 1, 2025",
  };

  const limits = {
    users: "50 Users",
    properties: "10 Properties",
    storage: "100 GB",
    tickets: "Unlimited",
  };

  const usage = {
    users: { used: 12, limit: 50 },
    properties: { used: 5, limit: 10 },
    storage: { used: 22.5, limit: 100 }, // GB
  };

  const invoices = [
    {
      id: "INV-20240701",
      period: "Jul 1, 2024 - Jul 31, 2024",
      amount: "€299.00",
      status: "Paid",
    },
    {
      id: "INV-20240601",
      period: "Jun 1, 2024 - Jun 30, 2024",
      amount: "€299.00",
      status: "Paid",
    },
    {
      id: "INV-20240501",
      period: "May 1, 2024 - May 31, 2024",
      amount: "€299.00",
      status: "Pending",
    },
    {
      id: "INV-20240401",
      period: "Apr 1, 2024 - Apr 30, 2024",
      amount: "€299.00",
      status: "Failed",
    },
  ];

  const paymentMethod = {
    card: "Visa ending in 1234",
    expires: "12/2026",
    email: "billing@innovatech.de",
  };

  const statusBadge = (status) => {
    if (status === "Paid")
      return "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300";
    if (status === "Pending")
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300";
    return "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300";
  };

  // ----------------------------------------------------------------
  return (
    <div className="space-y-8">

      {/* ------------------ Current Subscription Card ------------------ */}
      <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <h3 className="text-base font-medium text-gray-700">Current Subscription Plan</h3>

            <div className="flex items-center gap-3 mt-1">
              <p className="text-3xl font-bold text-gray-900">{plan.name}</p>

              <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600">
                {plan.type}
              </span>

              <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                {plan.status}
              </span>
            </div>

            <p className="text-sm text-gray-500 mt-1">
              Renews on: {plan.renews}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-gray-600 hover:text-gray-900">
              View Billing History
            </button>

            <button className="px-5 h-10 rounded-lg bg-[#F38B14] text-white text-sm font-semibold hover:bg-black transition">
              Change Plan
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* ------------------ Plan Limits ------------------ */}
        <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200 h-full">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Plan Limits</h3>
          <div className="space-y-4">
            <LimitRow label="User Limit" value={limits.users} />
            <LimitRow label="Property Limit" value={limits.properties} />
            <LimitRow label="Storage Limit" value={limits.storage} />
            <LimitRow label="Ticket Limit" value={limits.tickets} />
          </div>
        </div>

        {/* ------------------ Usage Summary ------------------ */}
        <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200 h-full">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Usage Summary</h3>

          <div className="space-y-6">
            <UsageBar label="Users" used={usage.users.used} total={usage.users.limit} color="bg-green-600" />
            <UsageBar label="Properties" used={usage.properties.used} total={usage.properties.limit} color="bg-[#F38B14]" />
            <UsageBar label="Storage" used={usage.storage.used} total={usage.storage.limit} color="bg-gray-500" unit="GB" />
          </div>
        </div>

      </div>

      {/* ------------------ Invoices Table ------------------ */}
      <div className="rounded-xl bg-white shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 flex flex-wrap items-center justify-between gap-4">
          <h3 className="text-lg font-semibold text-gray-900">Invoices & Payment History</h3>

          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Select date range"
              className="w-48 rounded-md border-gray-300 shadow-sm text-sm px-3 py-2"
            />

            <select className="w-40 rounded-md border-gray-300 shadow-sm text-sm px-3 py-2">
              <option>All Statuses</option>
              <option>Paid</option>
              <option>Pending</option>
              <option>Failed</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <Th>Invoice ID</Th>
                <Th>Billing Period</Th>
                <Th>Amount</Th>
                <Th>Status</Th>
                <Th></Th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 bg-white">
              {invoices.map((inv, idx) => (
                <tr
                  key={inv.id}
                  className={idx % 2 === 1 ? "bg-gray-50" : ""}
                >
                  <Td strong>{inv.id}</Td>
                  <Td>{inv.period}</Td>
                  <Td>{inv.amount}</Td>
                  <Td>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${statusBadge(inv.status)}`}>
                      {inv.status}
                    </span>
                  </Td>
                  <Td className="text-right">
                    <button className="text-gray-500 hover:text-[#F38B14]">
                      <span className="material-symbols-outlined !text-xl">download</span>
                    </button>
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ------------------ Payment Method ------------------ */}
      <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h3>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-gray-600">credit_card</span>

            <div>
              <p className="text-sm font-medium text-gray-800">{paymentMethod.card}</p>
              <p className="text-xs text-gray-500">Expires {paymentMethod.expires}</p>
            </div>
          </div>

          <div className="text-right">
            <button className="text-sm font-semibold text-[#F38B14] hover:underline">
              Update Payment Method
            </button>
            <p className="text-xs text-gray-500 mt-1">
              Billing email: {paymentMethod.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ------------------ Reusable Components ------------------

function LimitRow({ label, value }) {
  return (
    <div className="flex justify-between items-center">
      <p className="text-sm font-semibold text-gray-800">{label}</p>
      <p className="text-sm text-gray-500">{value}</p>
    </div>
  );
}

function UsageBar({ label, used, total, color, unit }) {
  const percent = (used / total) * 100;

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm font-medium text-gray-500">
          {used} / {total} {unit || ""}
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className={`${color} h-2.5 rounded-full`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}

function Th({ children }) {
  return (
    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
      {children}
    </th>
  );
}

function Td({ children, strong }) {
  return (
    <td
      className={
        "px-6 py-4 text-sm " +
        (strong ? "font-semibold text-gray-900" : "text-gray-600")
      }
    >
      {children}
    </td>
  );
}
