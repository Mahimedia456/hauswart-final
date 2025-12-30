import { Routes, Route } from "react-router-dom";

import TechniciansList from "../pages/technicians/TechniciansList";
import TechnicianCreate from "../pages/technicians/TechnicianCreate";
import TechnicianDetail from "../pages/technicians/TechnicianDetail";
import TechnicianEdit from "../pages/technicians/TechnicianEdit";
import DeleteTechnician from "../pages/technicians/DeleteTechnician";

import TechnicianOverview from "../pages/technicians/tabs/Overview";
import TechnicianPerformance from "../pages/technicians/tabs/Performance";
import TechnicianAttendance from "../pages/technicians/tabs/Attendance";
import TechnicianTasks from "../pages/technicians/tabs/Tasks";
import TechnicianOffboarding from "../pages/technicians/tabs/Offboarding";

export default function FacilityManagerTechniciansRoutes() {
  return (
    <Routes>
      <Route index element={<TechniciansList />} />
      <Route path="create" element={<TechnicianCreate />} />

      <Route path=":id" element={<TechnicianDetail />}>
        <Route index element={<TechnicianOverview />} />
        <Route path="overview" element={<TechnicianOverview />} />
        <Route path="performance" element={<TechnicianPerformance />} />
        <Route path="attendance" element={<TechnicianAttendance />} />
        <Route path="tasks" element={<TechnicianTasks />} />
        <Route path="offboarding" element={<TechnicianOffboarding />} />
      </Route>

      <Route path=":id/edit" element={<TechnicianEdit />} />
      <Route path=":id/delete" element={<DeleteTechnician />} />
    </Routes>
  );
}
