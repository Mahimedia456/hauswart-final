import { Routes, Route } from "react-router-dom";

import TechniciansList from "../pages/Technicians/TechniciansList";
import TechnicianCreate from "../pages/Technicians/TechnicianCreate";
import TechnicianDetail from "../pages/Technicians/TechnicianDetail";
import TechnicianEdit from "../pages/Technicians/TechnicianEdit";
import DeleteTechnician from "../pages/Technicians/DeleteTechnician";

import TechnicianOverview from "../pages/Technicians/tabs/Overview";
import TechnicianPerformance from "../pages/Technicians/tabs/Performance";
import TechnicianAttendance from "../pages/Technicians/tabs/Attendance";
import TechnicianTasks from "../pages/Technicians/tabs/Tasks";
import TechnicianOffboarding from "../pages/Technicians/tabs/Offboarding";

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
