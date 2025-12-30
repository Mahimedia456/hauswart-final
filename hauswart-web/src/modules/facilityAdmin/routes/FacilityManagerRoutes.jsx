import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "../../../router/ProtectedRoute";

import FacilityManagerLayout from "../layouts/FacilityManagerLayout";
import Dashboard from "../pages/dashboard/Dashboard";

import FacilityManagerPropertiesRoutes from "./FacilityManagerPropertiesRoutes";
import FacilityManagerTechniciansRoutes from "./FacilityManagerTechniciansRoutes";
import FacilityManagerTenantsRoutes from "./FacilityManagerTenantsRoutes";
import FacilityManagerTicketsRoutes from "./FacilityManagerTicketsRoutes";
import FacilityManagerTasksRoutes from "./FacilityManagerTasksRoutes";
import NotificationsList from "@/modules/notifications/pages/NotificationsList";

export default function FacilityManagerRoutes() {
  return (
    <Routes>
      <Route
  element={
    <ProtectedRoute allowedRoles={["FACILITY_MANAGER"]}>
      <FacilityManagerLayout />
    </ProtectedRoute>
  }
>
  <Route index element={<Dashboard />} />

  <Route path="properties/*" element={<FacilityManagerPropertiesRoutes />} />
  <Route path="tickets/*" element={<FacilityManagerTicketsRoutes />} />
  <Route path="tasks/*" element={<FacilityManagerTasksRoutes />} />
  <Route path="technicians/*" element={<FacilityManagerTechniciansRoutes />} />
  <Route path="tenants/*" element={<FacilityManagerTenantsRoutes />} />

  <Route path="*" element={<Navigate to="/facility-manager" replace />} />
  <Route path="notifications" element={<NotificationsList />} />
</Route>

    </Routes>
  );
}
