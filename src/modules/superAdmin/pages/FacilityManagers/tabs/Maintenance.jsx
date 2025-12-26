import { useState } from "react";
import MaintenanceDrawer from "../components/MaintenanceDrawer";

export default function Maintenance() {
  const [selected, setSelected] = useState(null);

  // ------------------------------
  // Dummy Data
  // ------------------------------
  const overdue = [
    {
      name: "HVAC Filter Replacement",
      location: "Main Office Building",
      overdueDays: 12,
      status: "Overdue",
      icon: "error",
    },
    {
      name: "Fire Extinguisher Inspection",
      location: "Warehouse Unit A",
      overdueDays: 3,
      status: "Overdue",
      icon: "warning",
    },
  ];

  const upcoming = [
    {
      name: "Quarterly HVAC Inspection",
      date: "Aug 05, 2024",
      location: "Main Office Building",
      status: "Upcoming",
      icon: "ac_unit",
    },
    {
      name: "Electrical System Check",
      date: "Aug 10, 2024",
      location: "Research Lab",
      status: "Upcoming",
      icon: "electric_bolt",
    },
    {
      name: "Plumbing System Flush",
      date: "Aug 12, 2024",
      location: "East Wing Offices",
      status: "Due Soon",
      icon: "plumbing",
    },
  ];

  const tasks = [
    {
      name: "HVAC Filter Replacement",
      asset: "HVAC Unit 3",
      property: "Main Office Building",
      assigned: "Tech",
      frequency: "Quarterly",
      date: "Jul 15, 2024",
      status: "Overdue",
      statusTone: "red",
      drawer: {
        title: "HVAC Filter Replacement",
        location: "Main Office Building",
      },
    },
    {
      name: "Elevator Maintenance",
      asset: "Elevator Bank A",
      property: "West Tower",
      assigned: "Service Provider",
      frequency: "Monthly",
      date: "Aug 01, 2024",
      status: "In Progress",
      statusTone: "yellow",
      drawer: {
        title: "Elevator Maintenance",
        location: "West Tower · Elevator Bank A",
      },
    },
    {
      name: "Fire Exit C2 Check",
      asset: "Fire Exit C2",
      property: "Main Office Building",
      assigned: "Caretaker",
      frequency: "Weekly",
      date: "Aug 05, 2024",
      status: "Upcoming",
      statusTone: "blue",
      drawer: {
        title: "Fire Exit C2 Check",
        location: "Main Office Building",
      },
    },
  ];

  const badgeColor = {
    red: "bg-red-100 text-red-800",
    yellow: "bg-yellow-100 text-yellow-800",
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
  };

  return (
    <div className="space-y-6">

      {/* ----------------------------- FILTERS ----------------------------- */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative w-full max-w-xs">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              search
            </span>
            <input
              placeholder="Search tasks..."
              className="w-full rounded-lg border-0 bg-gray-100 pl-10 pr-4 py-2 text-sm"
            />
          </div>

          <select className="rounded-lg border-0 bg-gray-100 text-sm py-2 px-3">
            <option>Maintenance Type</option>
            <option>Preventive</option>
            <option>Corrective</option>
            <option>Inspection</option>
          </select>

          <select className="rounded-lg border-0 bg-gray-100 text-sm py-2 px-3">
            <option>Status</option>
            <option>Upcoming</option>
            <option>In Progress</option>
            <option>Completed</option>
            <option>Overdue</option>
          </select>

          <select className="rounded-lg border-0 bg-gray-100 text-sm py-2 px-3">
            <option>Assigned To</option>
            <option>FM</option>
            <option>Caretaker</option>
            <option>Technician</option>
            <option>Service Provider</option>
          </select>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="date"
            className="w-64 rounded-lg border-0 bg-gray-100 text-sm py-2 px-3"
          />
          <button className="flex size-9 items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300">
            <span className="material-symbols-outlined">refresh</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        
        {/* ----------------------------- LEFT 8 COL ----------------------------- */}
        <div className="col-span-12 lg:col-span-8 space-y-6">

          {/* ------------------- Overdue Maintenance ------------------- */}
          <div className="rounded-xl bg-orange-50 p-6 border border-orange-200">
            <h3 className="text-base font-semibold mb-4">Overdue Maintenance</h3>

            <div className="space-y-4">
              {overdue.map((o, i) => (
                <div className="flex items-center gap-4" key={i}>
                  <span className="material-symbols-outlined text-destructive">{o.icon}</span>

                  <div className="flex-grow">
                    <p className="font-medium text-sm">{o.name}</p>
                    <p className="text-xs text-gray-500">{o.location}</p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm font-bold text-destructive">{o.overdueDays} days overdue</p>
                    <span className="inline-flex items-center rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800">
                      Overdue
                    </span>
                  </div>

                  <button className="text-primary hover:text-black text-sm font-medium ml-4">
                    View Task
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* ------------------- Upcoming Maintenance ------------------- */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold mb-4">Upcoming Maintenance Tasks</h3>

            <div className="space-y-3">
              {upcoming.map((u, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 border-b border-gray-100 pb-3 last:border-0"
                >
                  <span className="material-symbols-outlined text-gray-500">{u.icon}</span>

                  <div className="flex-grow">
                    <p className="font-medium text-sm">{u.name}</p>
                    <p className="text-xs text-gray-500">{u.date} · {u.location}</p>
                  </div>

                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    u.status === "Due Soon"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-blue-100 text-blue-800"
                  }`}>
                    {u.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ----------------------------- RIGHT 4 COL ----------------------------- */}
        <div className="col-span-12 lg:col-span-4">
          <div className="rounded-xl bg-white p-4 shadow-sm">
            <h3 className="text-base font-semibold mb-4 px-2">Calendar View</h3>

            <CalendarUI />
          </div>
        </div>
      </div>

      {/* ----------------------------- MAIN TABLE ----------------------------- */}
      <div className="rounded-xl bg-white shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="text-xs uppercase bg-gray-50">
            <tr>
              <Th>Task Name</Th>
              <Th>Asset / Area</Th>
              <Th>Property Name</Th>
              <Th>Assigned To</Th>
              <Th>Frequency</Th>
              <Th>Next Scheduled Date</Th>
              <Th>Status</Th>
              <Th></Th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((t, i) => (
              <tr
                key={i}
                className="border-b hover:bg-gray-50 cursor-pointer"
                onClick={() => setSelected(t)}
              >
                <Td strong>{t.name}</Td>
                <Td>{t.asset}</Td>
                <Td>{t.property}</Td>
                <Td>{t.assigned}</Td>
                <Td>{t.frequency}</Td>
                <Td>{t.date}</Td>
                <Td>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      badgeColor[t.statusTone]
                    }`}
                  >
                    {t.status}
                  </span>
                </Td>
                <Td>
                  <button className="text-gray-500 hover:text-black">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Drawer */}
      {selected && (
        <MaintenanceDrawer
          task={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}

/* ----------------------------------- */
function CalendarUI() {
  return (
    <div className="">
      <div className="flex items-center justify-between px-2 mb-2">
        <button className="text-gray-500 hover:text-gray-800">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <p className="text-sm font-semibold">August 2024</p>
        <button className="text-gray-500 hover:text-gray-800">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>

      <div className="grid grid-cols-7 text-center text-xs text-gray-500">
        {["Su","Mo","Tu","We","Th","Fr","Sa"].map((d,i)=>(
          <div key={i} className="py-2">{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 text-center text-sm">
        {[28,29,30,31,1,2,3].map((d,i)=>(
          <div key={i} className="py-1 text-gray-800 relative">
            {d}
            {d===3 && <div className="size-1 bg-primary rounded-full absolute bottom-1 left-1/2 -translate-x-1/2"></div>}
          </div>
        ))}

        {/* Continue with 4–31 as in your screenshot */}
      </div>
    </div>
  );
}

/* ----------------------------------- */
function Th({ children }) {
  return (
    <th className="px-6 py-3 text-left font-medium text-gray-600">{children}</th>
  );
}

function Td({ children, strong }) {
  return (
    <td className={`px-6 py-4 ${strong ? "font-semibold" : ""}`}>
      {children}
    </td>
  );
}
