import { useParams } from "react-router-dom";
import { useState } from "react";
import TicketHeader from "./TicketHeader";
import TicketTabs from "./TicketTabs";

import AssignTicketModal from "./AssignTicketModal"; // ✅ NEW

import Overview from "./tabs/Overview";
import Detail from "./tabs/Detail";
import ChatHub from "./tabs/ChatHub";

export default function TicketDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");

  // Ticket sample (replace later)
  const ticket = {
    id,
    title: "Air conditioning not cooling",
    category: "HVAC",
    status: "In Progress",
  };

  // NEW — Assign Modal
  const [openAssignModal, setOpenAssignModal] = useState(false);

  return (
    <div className="p-6 space-y-6">

      {/* ASSIGN MODAL */}
      <AssignTicketModal 
        open={openAssignModal}
        onClose={() => setOpenAssignModal(false)}
      />

      {/* HEADER */}
      <TicketHeader 
        ticket={ticket}
        onOpenAssign={() => setOpenAssignModal(true)} // ✅ OPEN MODAL
      />

      {/* TABS */}
      <TicketTabs 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        ticketId={id} 
      />

      {/* TAB CONTENT */}
      <div>
        {activeTab === "overview" && <Overview />}
        {activeTab === "detail" && <Detail />}
        {activeTab === "chat" && <ChatHub />}
      </div>
    </div>
  );
}
