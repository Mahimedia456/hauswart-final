import { useState } from "react";
import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";

import MaintenanceTaskDrawer from "../components/maintenance/MaintenanceTaskDrawer";
import { MaintenanceTaskCreate, AssignMaintenanceModal } from "@/components/modals";
import MaintenanceCalendar from "../components/maintenance/MaintenanceCalendar";

export default function Maintenance() {
  const { lang } = useLanguage();
  const dict = t[lang];

  /* ---------------- STATE ---------------- */
  const [selectedTask, setSelectedTask] = useState(null);
  const [createOpen, setCreateOpen] = useState(false);
  const [assignOpen, setAssignOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const [assignAsset, setAssignAsset] = useState(null);   // ✅ FIXED

  /* ------------ Dummy Tasks ------------ */
  const tasks = [
    {
      id: 1,
      name: "HVAC Filter Replacement",
      asset: "HVAC Unit 3",
      property: "Main Office Building",
      assigned: "Technician",
      frequency: "Quarterly",
      nextDue: "2025-07-15",
      status: "overdue",
      tone: "red",
      description: "Quarterly filter service and airflow inspection."
    },
    {
      id: 2,
      name: "Elevator Maintenance",
      asset: "Elevator Bank A",
      property: "West Tower",
      assigned: "Service Provider",
      frequency: "Monthly",
      nextDue: "2025-08-01",
      status: "inprogress",
      tone: "yellow",
      description: "Monthly lubrication and safety diagnostics."
    },
    {
      id: 3,
      name: "Fire Exit C2 Check",
      asset: "Fire Exit C2",
      property: "East Wing",
      assigned: "Caretaker",
      frequency: "Weekly",
      nextDue: "2025-08-05",
      status: "upcoming",
      tone: "blue",
      description: "Ensure doors, alarms, and lights are functional."
    }
  ];

  const badgeTone = {
    red: "bg-red-100 text-red-700",
    yellow: "bg-yellow-100 text-yellow-700",
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
  };

  /* ---------------- HANDLERS ---------------- */

  const openView = (task) => {
    setSelectedTask(task);
    setDrawerOpen(true);
    setOpenMenu(null);
  };

  const openEdit = (task) => {
    setSelectedTask(task);
    setCreateOpen(true);
    setOpenMenu(null);
  };

  /** FIXED — build proper asset object for modal */
  const openAssignModal = (task) => {
    setAssignAsset({
      unit: task.asset,          // e.g., "HVAC Unit 3"
      floor: "Not specified",    // No floor info in dummy tasks, so using placeholder
      property: task.property    // e.g., "Main Office Building"
    });

    setAssignOpen(true);
    setOpenMenu(null);
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{dict.tab_maintenance}</h2>

        <button
          className="bg-[#F38B14] text-white px-4 py-2 rounded-lg hover:bg-black"
          onClick={() => setCreateOpen(true)}
        >
          {dict.maint_action_create}
        </button>
      </div>

      {/* CALENDAR */}
      <div className="rounded-xl bg-white p-4 shadow-sm border">
        <MaintenanceCalendar />
      </div>

      {/* TASK TABLE */}
      <div className="rounded-xl bg-white shadow-sm overflow-hidden border">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-xs uppercase">
            <tr>
              <Th>Task</Th>
              <Th>Asset</Th>
              <Th>Property</Th>
              <Th>Assigned</Th>
              <Th>Frequency</Th>
              <Th>Next Due</Th>
              <Th>Status</Th>
              <Th></Th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((task) => (
              <tr key={task.id} className="border-b hover:bg-gray-50">

                <Td strong>{task.name}</Td>
                <Td>{task.asset}</Td>
                <Td>{task.property}</Td>
                <Td>{task.assigned}</Td>
                <Td>{task.frequency}</Td>
                <Td>{task.nextDue}</Td>

                <Td>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${badgeTone[task.tone]}`}>
                    {task.status}
                  </span>
                </Td>

                {/* ACTION MENU */}
                <td className="relative px-6 py-4 text-right">
                  <button
                    onClick={() => setOpenMenu(openMenu === task.id ? null : task.id)}
                    className="text-gray-500 hover:text-black"
                  >
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>

                  {openMenu === task.id && (
                    <div className="absolute right-0 mt-2 w-44 bg-white border rounded-lg shadow-xl z-50 animate-fadeIn">
                      <MenuItem label="View Task" onClick={() => openView(task)} />
                      <MenuItem label="Edit Task" onClick={() => openEdit(task)} />
                      <MenuItem label="Assign Maintenance" onClick={() => openAssignModal(task)} />
                    </div>
                  )}
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ------------------------ MODALS ------------------------ */}

      {/* DRAWER */}
      {drawerOpen && (
        <MaintenanceTaskDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          task={selectedTask}
        />
      )}

      {/* CREATE MODAL */}
      {createOpen && (
        <MaintenanceTaskCreate
          open={createOpen}
          onClose={() => setCreateOpen(false)}
        />
      )}

      {/* ASSIGN MODAL — FIXED */}
      {assignOpen && (
        <AssignMaintenanceModal
          open={assignOpen}
          asset={assignAsset}
          onClose={() => setAssignOpen(false)}
        />
      )}

    </div>
  );
}

/* ----------------- HELPER COMPONENTS ----------------- */
function MenuItem({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
    >
      {label}
    </button>
  );
}

function Th({ children }) {
  return (
    <th className="px-6 py-3 text-left font-medium text-gray-600">{children}</th>
  );
}

function Td({ children, strong }) {
  return (
    <td className={`px-6 py-4 ${strong ? "font-semibold" : ""}`}>{children}</td>
  );
}
