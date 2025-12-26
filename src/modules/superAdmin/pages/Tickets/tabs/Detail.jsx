import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import InternalNotesModal from "../InternalNotesModal";

export default function Detail() {
  const { lang } = useLanguage();
  const dict = t[lang];
  const navigate = useNavigate();

  const [openNotesModal, setOpenNotesModal] = useState(false);

  // Dummy data – replace later with API values
  const ticket = {
    id: 4830,
    title: "Air conditioning not cooling",
    subtitle: "Unit 403",
    priority: "Critical",
    category: "HVAC",
    type: "Corrective",
    source: "Tenant via Mobile App",
    requestedBy: "Ahmed Khan",
    sla: "6 hours left",
    updatedAgo: "12 min ago",
    description:
      "The main air conditioning unit in apartment 403 is not producing any cold air...",
    notes:
      "John Mills mentioned the compressor for this unit was flagged during the last inspection.",
    notesAuthor: "Super Admin",
    notesAgo: "2 hours ago",

    timeline: [
      {
        title: "Status changed to In Progress",
        by: "John Mills (Technician)",
        time: "1 hour ago",
        color: "bg-[#F38B14]",
      },
      {
        title: "Ticket assigned to John Mills",
        by: "Super Admin",
        time: "3 hours ago",
        color: "bg-gray-300",
      },
      {
        title: "Ticket Created",
        by: "Ahmed Khan (Tenant)",
        time: "4 hours ago",
        color: "bg-gray-300",
      },
    ],
  };

  return (
    <>
      {/* INTERNAL NOTES MODAL */}
      <InternalNotesModal 
        open={openNotesModal} 
        onClose={() => setOpenNotesModal(false)} 
      />

      {/* PAGE MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT PANEL */}
        <div className="lg:col-span-2 space-y-6">

          {/* HEADER ACTION BAR */}
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-800">
              {ticket.title}
            </h1>

            <div className="flex items-center gap-3">
              
              {/* ADD INTERNAL NOTE */}
              <button
                className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center gap-2"
                onClick={() => setOpenNotesModal(true)}
              >
                <span className="material-symbols-outlined text-sm">note_add</span>
                {dict.addInternalNote ?? "Add Internal Note"}
              </button>

              {/* GO TO CONVERSATION */}
              <button
                className="px-4 py-2 rounded-lg bg-[#F38B14] text-white hover:bg-black flex items-center gap-2"
                onClick={() => navigate(`/super-admin/tickets/${ticket.id}/conversation`)}
              >
                <span className="material-symbols-outlined text-sm">forum</span>
                {dict.goToConversation ?? "Go to Conversation"}
              </button>
            </div>
          </div>

          {/* SUMMARY CARD */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">

              <Info label={dict.title} value={ticket.title} />
              <PriorityBadge level={ticket.priority} />

              <Info label={dict.category} value={ticket.category} />
              <Info label={dict.ticketType} value={ticket.type} />
              <Info label={dict.sourceOfRequest} value={ticket.source} />
              <Info label={dict.requestedBy} value={ticket.requestedBy} />
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between text-xs text-gray-500">
              <span>
                {dict.slaDue}:{" "}
                <span className="font-semibold text-orange-500">{ticket.sla}</span>
              </span>

              <span>
                {dict.lastUpdated}: {ticket.updatedAgo}
              </span>
            </div>
          </div>

          {/* DESCRIPTION & NOTES */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold">{dict.description}</h3>

            <p className="mt-2 text-gray-600">{ticket.description}</p>

            <hr className="my-6 border-gray-200" />

            <h3 className="text-lg font-semibold">{dict.internalNotes}</h3>

            <div className="mt-4 bg-gray-50 p-3 rounded-md text-sm">
              <p className="text-gray-700">{ticket.notes}</p>
              <p className="text-xs text-gray-400 mt-1">
                {ticket.notesAuthor} — {ticket.notesAgo}
              </p>
            </div>
          </div>

          {/* TIMELINE */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold mb-4">{dict.timeline}</h3>

            <div className="space-y-6">
              {ticket.timeline.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full ${item.color} mt-1`}></div>
                    {i < ticket.timeline.length - 1 && (
                      <div className="w-px h-full bg-gray-300"></div>
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.by}</p>
                    <p className="text-xs text-gray-400 mt-1">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT PANEL (PLACEHOLDER) */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <h3 className="text-base font-semibold">{dict.attachments}</h3>
            <p className="text-sm text-gray-500 mt-2">Attachments UI goes here…</p>
          </div>
        </div>
      </div>
    </>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-medium text-gray-900">{value}</p>
    </div>
  );
}

function PriorityBadge({ level }) {
  const map = {
    Critical: "bg-red-100 text-red-600",
    High: "bg-orange-100 text-orange-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-700",
  };

  return (
    <div>
      <p className="text-sm text-gray-500">Priority</p>
      <span
        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${map[level]}`}
      >
        {level}
      </span>
    </div>
  );
}
