import { Routes, Route, Navigate } from "react-router-dom";

import TicketsList from "../pages/Tickets/TicketsList";
import TicketCreate from "../pages/Tickets/TicketCreate";
import TicketDetail from "../pages/Tickets/TicketDetail";

/* TABS */
import TicketOverview from "../pages/Tickets/tabs/Overview";
import TicketDetails from "../pages/Tickets/tabs/Detail";
import TicketChatHub from "../pages/Tickets/tabs/ChatHub";
import TicketTasks from "../pages/Tickets/tabs/Tasks";

export default function FacilityManagerTicketsRoutes() {
  return (
    <Routes>
      {/* LIST */}
      <Route index element={<TicketsList />} />
      <Route path="create" element={<TicketCreate />} />

      {/* DETAIL */}
      <Route path=":id" element={<TicketDetail />}>

        {/* DEFAULT TAB */}
        <Route index element={<Navigate to="overview" replace />} />

        {/* TABS */}
        <Route path="overview" element={<TicketOverview />} />
        <Route path="details" element={<TicketDetails />} />
        <Route path="chat" element={<TicketChatHub />} />
        <Route path="tasks" element={<TicketTasks />} />

      </Route>
    </Routes>
  );
}
