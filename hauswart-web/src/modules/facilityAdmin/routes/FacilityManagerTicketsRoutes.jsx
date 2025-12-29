import { Routes, Route } from "react-router-dom";

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
      <Route index element={<TicketsList />} />
      <Route path="create" element={<TicketCreate />} />

      <Route path=":id" element={<TicketDetail />}>
        <Route index element={<TicketOverview />} />
        <Route path="overview" element={<TicketOverview />} />
        <Route path="details" element={<TicketDetails />} />
        <Route path="chat" element={<TicketChatHub />} />
        <Route path="tasks" element={<TicketTasks />} />
      </Route>
    </Routes>
  );
}
