import React from "react";
import Chart from "react-apexcharts";

export default function Overview() {
  /* ---------------- KPI STATS (NO MAINTENANCE) ---------------- */
  const stats = [
    { label: "Total Properties", value: 84, icon: "apartment" },
    { label: "Assigned Users", value: 127, icon: "group" },
    { label: "Open Tickets", value: 32, icon: "confirmation_number" },
  ];

  /* ---------------- TICKET TREND ---------------- */
  const ticketTrendOptions = {
    chart: { type: "line", toolbar: { show: false } },
    colors: ["#F38B14"],
    stroke: { width: 3, curve: "smooth" },
    markers: {
      size: 4,
      colors: ["#F38B14"],
      strokeColors: "#fff",
      strokeWidth: 2,
    },
    grid: { borderColor: "#e5e7eb" },
    xaxis: {
      categories: ["Day 1", "Day 5", "Day 10", "Day 15", "Day 20", "Day 25", "Day 30"],
      labels: { style: { colors: "#6b7280" } },
    },
    yaxis: { labels: { style: { colors: "#6b7280" } } },
  };

  const ticketTrendSeries = [
    { name: "Tickets", data: [5, 9, 7, 14, 18, 12, 20] },
  ];

  /* ---------------- TICKETS BY CATEGORY (NEW GRAPH) ---------------- */
  const categoryOptions = {
    chart: { type: "bar", toolbar: { show: false } },
    colors: ["#2563eb"],
    plotOptions: {
      bar: { borderRadius: 6, columnWidth: "45%" },
    },
    grid: { borderColor: "#e5e7eb" },
    xaxis: {
      categories: ["Plumbing", "Electrical", "HVAC", "Cleaning", "Security"],
      labels: { style: { colors: "#6b7280" } },
    },
    yaxis: {
      labels: { style: { colors: "#6b7280" } },
    },
  };

  const categorySeries = [
    { name: "Tickets", data: [12, 9, 6, 3, 2] },
  ];

  /* ---------------- RECENT TICKETS ---------------- */
  const recentTickets = [
    {
      id: "#TKT-5823",
      category: "Plumbing",
      property: "Quantum Towers A",
      assigned: "Leo Maxwell",
      status: "In Progress",
      statusTone: "blue",
      date: "Jul 22, 2024",
    },
    {
      id: "#TKT-5822",
      category: "Electrical",
      property: "Apex Plaza",
      assigned: "Nora Fields",
      status: "Open",
      statusTone: "red",
      date: "Jul 21, 2024",
    },
    {
      id: "#TKT-5820",
      category: "HVAC",
      property: "Starlight Business Center",
      assigned: "N/A",
      status: "Completed",
      statusTone: "green",
      date: "Jul 20, 2024",
    },
  ];

  /* ---------------- ACTIVITY ---------------- */
  const activity = [
    { icon: "edit", color: "blue", text: "John updated ticket #243", time: "10m ago" },
    { icon: "add", color: "green", text: "New user 'Sarah Jenkins' added.", time: "2h ago" },
    { icon: "verified", color: "yellow", text: "Compliance document verified.", time: "1d ago" },
  ];

  /* ---------------- COMPLIANCE ---------------- */
  const compliance = [
    {
      title: "Fire Safety Certificate",
      property: "Quantum Towers A",
      date: "Aug 15, 2024",
      tag: "Expires in 22 days",
      tagColor: "yellow",
    },
    {
      title: "Elevator Inspection Permit",
      property: "Apex Plaza",
      date: "Jul 1, 2024",
      tag: "Overdue",
      tagColor: "red",
    },
  ];

  const badgeClass = (tone) => {
    if (tone === "blue") return "bg-blue-100 text-blue-800";
    if (tone === "red") return "bg-red-100 text-red-800";
    if (tone === "green") return "bg-green-100 text-green-800";
    return "bg-gray-100 text-gray-700";
  };

  const tagColor = {
    yellow: "bg-yellow-100 text-yellow-800",
    red: "bg-red-100 text-red-800",
  };

  return (
    <div className="space-y-6">

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <div
            key={i}
            className="rounded-xl bg-white p-6 shadow-sm border border-gray-200 flex justify-between"
          >
            <div>
              <p className="text-4xl font-bold text-gray-900">{s.value}</p>
              <p className="text-sm text-gray-500 mt-1">{s.label}</p>
            </div>
            <span className="material-symbols-outlined text-gray-300 text-[36px]">
              {s.icon}
            </span>
          </div>
        ))}
      </div>

      {/* GRAPHS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Ticket Trend */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Ticket Trend (30 Days)
          </h3>
          <Chart
            options={ticketTrendOptions}
            series={ticketTrendSeries}
            type="line"
            height={260}
          />
        </div>

        {/* Tickets by Category */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Tickets by Category
          </h3>
          <Chart
            options={categoryOptions}
            series={categorySeries}
            type="bar"
            height={260}
          />
        </div>

      </div>

      {/* RECENT TICKETS */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900">Recent Tickets</h3>
        </div>

        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <Th>Ticket ID</Th>
              <Th>Category</Th>
              <Th>Property</Th>
              <Th>Assigned To</Th>
              <Th>Status</Th>
              <Th>Created Date</Th>
            </tr>
          </thead>
          <tbody>
            {recentTickets.map((t, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <Td strong>{t.id}</Td>
                <Td>{t.category}</Td>
                <Td>{t.property}</Td>
                <Td>{t.assigned}</Td>
                <Td>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${badgeClass(t.statusTone)}`}>
                    {t.status}
                  </span>
                </Td>
                <Td>{t.date}</Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ACTIVITY & COMPLIANCE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActivityPanel activity={activity} />
        <CompliancePanel compliance={compliance} tagColor={tagColor} />
      </div>
    </div>
  );
}

/* ---------------- HELPERS ---------------- */
function Th({ children }) {
  return <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">{children}</th>;
}

function Td({ children, strong }) {
  return <td className={`px-6 py-4 text-sm ${strong ? "font-semibold text-gray-900" : "text-gray-600"}`}>{children}</td>;
}

function ActivityPanel({ activity }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
      <ul className="space-y-5">
        {activity.map((a, i) => (
          <li key={i} className="flex gap-4">
            <span className="material-symbols-outlined">{a.icon}</span>
            <div>
              <p className="text-sm">{a.text}</p>
              <p className="text-xs text-gray-400">{a.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CompliancePanel({ compliance, tagColor }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Compliance</h3>
      <div className="space-y-4">
        {compliance.map((c, i) => (
          <div key={i}>
            <p className="font-medium">{c.title}</p>
            <p className="text-sm text-gray-500">{c.property}</p>
            <span className={`text-xs px-2 py-0.5 rounded-full ${tagColor[c.tagColor]}`}>
              {c.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
