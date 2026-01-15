import { Routes, Route, Navigate } from "react-router-dom";

import TicketsList from "../pages/tickets/TicketsList";
import TicketCreate from "../pages/tickets/TicketCreate";
import TicketDetail from "../pages/tickets/TicketDetail";

/* TABS */
import TicketOverview from "../pages/tickets/tabs/Overview";
import TicketDetails from "../pages/tickets/tabs/Detail";
import TicketChatHub from "../pages/tickets/tabs/ChatHub";
import TicketTasks from "../pages/tickets/tabs/Tasks";

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
