import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

// Modals already in your folder:
import AssignTicketModal from "../AssignTicketModal";
import InternalNotesModal from "../InternalNotesModal";

// NEW — simple confirmation modal for closing a ticket
function CloseTicketModal({ open, onClose, onConfirm }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-md rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-2 text-gray-900">Close Ticket?</h2>
        <p className="text-gray-600 text-sm mb-6">
          Are you sure you want to close this ticket? This action cannot be undone.
        </p>

        <div className="flex justify-end gap-3">
          <button
            className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
            onClick={onConfirm}
          >
            Yes, Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Overview() {
  const { lang } = useLanguage();
  const dict = t[lang];
  const navigate = useNavigate();
  const { id } = useParams();

  // ---------------------------
  // NEW UI STATES FOR MODALS
  // ---------------------------
  const [openAssign, setOpenAssign] = useState(false);
  const [openInternalNotes, setOpenInternalNotes] = useState(false);
  const [openCloseTicket, setOpenCloseTicket] = useState(false);

  // Dummy ticket data (replace later)
  const ticket = {
    id,
    title: "Air conditioning not cooling",
    status: "In Progress",
    priority: "Critical",
    category: "HVAC",
    requestedBy: "Ahmed Khan (Tenant)",
    assignedTo: "John Mills (Technician)",
    createdAt: "12 Nov 2025 — 3:45 PM",
    sla: "Overdue by 1d 3h",
    lastUpdated: "12 min ago",
    summary:
      "The AC is running but blowing warm air. Tenant attempted troubleshooting with no success.",
    timeline: [
      {
        title: "Status changed to In Progress",
        by: "John Mills",
        time: "1 hour ago",
      },
      {
        title: "Ticket assigned to John Mills",
        by: "Super Admin",
        time: "3 hours ago",
      },
      {
        title: "Ticket Created",
        by: "Ahmed Khan",
        time: "4 hours ago",
      },
    ],

    stats: {
      attachments: 3,
      messages: 12,
      history: 8,
      assessment: "Pending",
    },
  };

  return (
    <>
      {/* --------------------------- */}
      {/* MODALS */}
      {/* --------------------------- */}

      <AssignTicketModal
        open={openAssign}
        onClose={() => setOpenAssign(false)}
      />

      <InternalNotesModal
        open={openInternalNotes}
        onClose={() => setOpenInternalNotes(false)}
      />

      <CloseTicketModal
        open={openCloseTicket}
        onClose={() => setOpenCloseTicket(false)}
        onConfirm={() => {
          console.log("Ticket Closed");
          setOpenCloseTicket(false);
        }}
      />

      {/* --------------------------- */}
      {/* MAIN OVERVIEW UI */}
      {/* --------------------------- */}
      <div className="space-y-6">

        {/* TICKET SUMMARY CARD */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900">
            {ticket.title}
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            #{ticket.id} · {ticket.category}
          </p>

          <div className="mt-4 flex flex-wrap gap-3 items-center">
            <Badge label={ticket.status} color="orange" />
            <Badge label={ticket.priority} color="red" />
            <Badge label={ticket.category} color="gray" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <Info label={dict.requestedBy} value={ticket.requestedBy} />
            <Info label={dict.assignedTo} value={ticket.assignedTo} />
            <Info label={dict.createdAt} value={ticket.createdAt} />
            <Info label={dict.slaDue} value={ticket.sla} highlight />
          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div className="flex gap-3 flex-wrap">
          
          {/* EDIT BUTTON */}
          <ActionButton
            label={dict.action_edit}
            color="gray"
            onClick={() => navigate(`/super-admin/tickets/${ticket.id}/edit`)}
          />

          {/* ASSIGN MODAL */}
          <ActionButton
            label={dict.ticket_assign}
            color="orange"
            onClick={() => setOpenAssign(true)}
          />

          {/* INTERNAL NOTES MODAL */}
          <ActionButton
            label={dict.addInternalNote}
            color="gray"
            onClick={() => setOpenInternalNotes(true)}
          />

          {/* CLOSE TICKET CONFIRMATION */}
          <ActionButton
            label={dict.closeTicket}
            color="red"
            onClick={() => setOpenCloseTicket(true)}
          />
        </div>

        {/* HIGHLIGHTS */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold">{dict.highlights}</h3>

          <ul className="mt-4 space-y-3 text-gray-700 text-sm">
            <li>• {ticket.summary}</li>
            <li>• {dict.assignedTo}: {ticket.assignedTo}</li>
            <li>• {dict.lastUpdated}: {ticket.lastUpdated}</li>
            <li>• {dict.latestEvent}: {ticket.timeline[0].title}</li>
          </ul>
        </div>

        {/* MINI STATISTICS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard label={dict.attachments} value={ticket.stats.attachments} />
          <StatCard label={dict.messages} value={ticket.stats.messages} />
          <StatCard label={dict.historyLog} value={ticket.stats.history} />
          <StatCard label={dict.assessment} value={ticket.stats.assessment} />
        </div>

        {/* MINI TIMELINE */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold mb-4">{dict.recentTimeline}</h3>

          <div className="space-y-4">
            {ticket.timeline.map((item, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-[#F38B14]" />
                <div>
                  <p className="font-medium text-gray-800">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.by}</p>
                  <p className="text-xs text-gray-400 mt-1">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}

/* SUB COMPONENTS */

function Info({ label, value, highlight }) {
  return (
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className={`font-medium ${highlight ? "text-red-600" : "text-gray-900"}`}>
        {value}
      </p>
    </div>
  );
}

function Badge({ label, color }) {
  const styles = {
    orange: "bg-orange-100 text-orange-700",
    red: "bg-red-100 text-red-700",
    gray: "bg-gray-100 text-gray-700",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${styles[color]}`}
    >
      {label}
    </span>
  );
}

function ActionButton({ label, color, onClick }) {
  const style = {
    gray: "bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200",
    orange: "bg-[#F38B14] text-white hover:bg-black",
    red: "bg-red-50 text-red-600 border border-red-300 hover:bg-red-100",
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 h-10 rounded-lg text-sm font-semibold ${style[color]}`}
    >
      {label}
    </button>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 text-center">
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  );
}
