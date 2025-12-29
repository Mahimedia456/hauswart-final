// src/modules/superAdmin/pages/Tickets/TicketDetail.jsx
import { NavLink, Outlet, useParams } from "react-router-dom";
import { useState } from "react";
import TicketHeader from "./TicketHeader";
import TicketTabs from "./TicketTabs";
import AssignTicketModal from "./AssignTicketModal";

export default function TicketDetail() {
  const { id } = useParams();

  // TEMP ticket (replace later)
  const ticket = {
    id,
    title: "Air conditioning not cooling",
    category: "HVAC",
    status: "In Progress",
  };

  const [openAssignModal, setOpenAssignModal] = useState(false);

  return (
    <div className="space-y-6">

      {/* ASSIGN MODAL */}
      <AssignTicketModal
        open={openAssignModal}
        onClose={() => setOpenAssignModal(false)}
      />

      {/* HEADER */}
      <TicketHeader
        ticket={ticket}
        onOpenAssign={() => setOpenAssignModal(true)}
      />

      {/* TABS */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        <NavLink
          to="overview"
          end
          className={({ isActive }) =>
            `
            px-4 py-2 rounded-xl text-sm transition
            ${
              isActive
                ? "bg-[#F38B14] text-white shadow"
                : "bg-white/70 border border-slate-200 text-slate-700 hover:bg-slate-100"
            }
          `
          }
        >
          Overview
        </NavLink>

        <NavLink
          to="details"
          className={({ isActive }) =>
            `
            px-4 py-2 rounded-xl text-sm transition
            ${
              isActive
                ? "bg-[#F38B14] text-white shadow"
                : "bg-white/70 border border-slate-200 text-slate-700 hover:bg-slate-100"
            }
          `
          }
        >
          Details
        </NavLink>

        <NavLink
          to="chat"
          className={({ isActive }) =>
            `
            px-4 py-2 rounded-xl text-sm transition
            ${
              isActive
                ? "bg-[#F38B14] text-white shadow"
                : "bg-white/70 border border-slate-200 text-slate-700 hover:bg-slate-100"
            }
          `
          }
        >
          Chat
        </NavLink>
      </div>

      {/* TAB CONTENT */}
      <div className="bg-white/80 p-6 rounded-2xl border border-slate-200 shadow">
        <Outlet />
      </div>
    </div>
  );
}
