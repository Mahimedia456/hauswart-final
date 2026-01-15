import { useState } from "react";
import ActivityDetailsDrawer from "../components/ActivityDetailsDrawer"; 
// <-- Your required import path

export default function ActivityLogs() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedLog, setSelectedLog] = useState(null);

  const [logs] = useState([
    {
      timestamp: "2024-07-23 14:35:12",
      user: {
        name: "Eleanor Vance",
        avatar: "https://i.pravatar.cc/40?img=12",
      },
      action: "Updated Ticket #293",
      module: "Tickets",
      ip: "192.168.1.101",
      device: "Desktop",
      status: "Success",
      before: { status: "Open" },
      after: { status: "In Progress" },
      record: "Ticket #293",
      actionType: "Update",
    },
    {
      timestamp: "2024-07-23 11:05:48",
      user: {
        name: "Arthur Finch",
        avatar: "https://i.pravatar.cc/40?img=14",
      },
      action: 'Created Property "Skyline Tower"',
      module: "Properties",
      ip: "203.0.113.45",
      device: "Mobile",
      status: "Success",
      before: { property: "None" },
      after: { property: "Skyline Tower" },
      record: "Property: Skyline Tower",
      actionType: "Create",
    },
    {
      timestamp: "2024-07-22 09:15:30",
      user: {
        name: "Eleanor Vance",
        avatar: "https://i.pravatar.cc/40?img=12",
      },
      action: "User Login Attempt",
      module: "Users",
      ip: "198.51.100.2",
      device: "Desktop",
      status: "Failed",
      before: { loggedIn: false },
      after: { loggedIn: false },
      record: "User Authentication",
      actionType: "Login",
    },
  ]);

  // ---------------- OPEN DRAWER ----------------
  const openDrawer = (log) => {
    setSelectedLog(log);
    setDrawerOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* ---------------- TITLE ---------------- */}
      <h3 className="text-xl font-semibold text-gray-900">Activity Logs</h3>

      {/* ---------------- FILTERS ---------------- */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">

          {/* Search */}
          <div className="relative w-full sm:w-56">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
              search
            </span>
            <input
              type="search"
              placeholder="Search logs..."
              className="w-full rounded-lg border-gray-300 bg-gray-50 pl-10 pr-4 py-2 text-sm text-gray-900 focus:border-primary focus:ring-primary"
            />
          </div>

          <Select label="User" options={["Admin", "John Doe"]} />
          <Select label="Action Type" options={["Create", "Update", "Delete", "Login"]} />
          <Select label="Module" options={["Users", "Properties", "Tickets"]} />
          <Select label="Status" options={["Success", "Failed"]} />
        </div>

        {/* Date + Export */}
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Select date range"
              className="w-full rounded-lg border-gray-300 bg-gray-50 py-2 pl-3 pr-10 text-sm text-gray-900 focus:border-primary focus:ring-primary"
            />
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
              calendar_today
            </span>
          </div>

          <button className="flex items-center gap-2 rounded-lg h-10 px-4 text-sm font-semibold ring-1 ring-gray-300 text-gray-800 hover:bg-gray-100">
            <span className="material-symbols-outlined text-base">download</span>
            Export Logs
          </button>
        </div>
      </div>

      {/* ---------------- TABLE ---------------- */}
      <div className="overflow-x-auto rounded-xl bg-white shadow-sm border border-gray-200">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-xs uppercase text-gray-500">
            <tr>
              <Th>Date & Time</Th>
              <Th>User</Th>
              <Th>Action Performed</Th>
              <Th>Module</Th>
              <Th>IP Address</Th>
              <Th>Device</Th>
              <Th>Status</Th>
              <Th>Details</Th>
            </tr>
          </thead>

          <tbody>
            {logs.map((log, i) => (
              <tr
                key={i}
                className={`border-b hover:bg-gray-50 ${
                  i % 2 === 1 ? "bg-gray-50/50" : "bg-white"
                }`}
              >
                <Td>{log.timestamp}</Td>

                {/* USER */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={log.user.avatar}
                      className="h-8 w-8 rounded-full object-cover"
                      alt={log.user.name}
                    />
                    <span className="font-medium text-gray-900">{log.user.name}</span>
                  </div>
                </td>

                <Td strong>{log.action}</Td>

                <td className="px-6 py-4">
                  <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                    {log.module}
                  </span>
                </td>

                <Td>{log.ip}</Td>
                <Td>{log.device}</Td>

                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      log.status === "Success"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {log.status}
                  </span>
                </td>

                {/* VIEW BUTTON */}
                <td className="px-6 py-4">
                  <button
                    className="font-medium text-primary hover:underline"
                    onClick={() => openDrawer(log)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ---------------- PAGINATION ---------------- */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t p-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span>Rows per page:</span>
            <select className="rounded-md border-gray-300 bg-gray-50 px-2 py-1 text-sm focus:border-primary focus:ring-primary">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span>1–10 of 124</span>
            <div className="flex items-center">
              <button className="rounded-md p-1.5 hover:bg-gray-100">
                <span className="material-symbols-outlined text-xl">chevron_left</span>
              </button>
              <button className="rounded-md p-1.5 hover:bg-gray-100">
                <span className="material-symbols-outlined text-xl">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- DRAWER COMPONENT ---------------- */}
      <ActivityDetailsDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        data={selectedLog}
      />
    </div>
  );
}

/* ---------- Helper Components ---------- */

function Select({ label, options }) {
  return (
    <select className="w-full sm:w-auto rounded-lg border-gray-300 bg-gray-50 py-2 text-sm text-gray-900 focus:border-primary focus:ring-primary">
      <option>{label}</option>
      {options.map((opt, i) => (
        <option key={i}>{opt}</option>
      ))}
    </select>
  );
}

function Th({ children }) {
  return <th className="px-6 py-3 font-semibold text-left">{children}</th>;
}

function Td({ children, strong }) {
  return (
    <td
      className={`px-6 py-4 ${strong ? "font-medium text-gray-900" : "text-gray-700"}`}
    >
      {children}
    </td>
  );
}
