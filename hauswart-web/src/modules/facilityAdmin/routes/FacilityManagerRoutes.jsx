import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "../../../router/ProtectedRoute";

import FacilityManagerLayout from "../layouts/FacilityManagerLayout";
import FacilityManagerProfileLayout from "../layouts/FacilityManagerProfileLayout";

import Dashboard from "../pages/dashboard/Dashboard";

import FacilityManagerPropertiesRoutes from "./FacilityManagerPropertiesRoutes";
import FacilityManagerTechniciansRoutes from "./FacilityManagerTechniciansRoutes";
import FacilityManagerTenantsRoutes from "./FacilityManagerTenantsRoutes";
import FacilityManagerTicketsRoutes from "./FacilityManagerTicketsRoutes";
import FacilityManagerTasksRoutes from "./FacilityManagerTasksRoutes";

import NotificationsList from "@/modules/notifications/pages/NotificationsList";

/* PROFILE PAGES */
import FacilityManagerProfile from "../pages/profile/FacilityManagerProfile";
import FacilityManagerEditProfile from "../pages/profile/FacilityManagerEditProfile";
import FacilityManagerSecuritySessions from "../pages/profile/FacilityManagerSecuritySessions";
import FacilityManagerNotificationSettings from "../pages/profile/FacilityManagerNotificationSettings";

import FacilityManagerSettings from "../pages/settings/FacilityManagerSettings";

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
        {/* DASHBOARD */}
        <Route index element={<Dashboard />} />

        {/* PROFILE – PERMANENT SIDEBAR */}
        <Route path="profile" element={<FacilityManagerProfileLayout />}>
          <Route index element={<FacilityManagerProfile />} />
          <Route path="edit" element={<FacilityManagerEditProfile />} />
          <Route path="security" element={<FacilityManagerSecuritySessions />} />
          <Route
            path="notifications"
            element={<FacilityManagerNotificationSettings />}
          />
        </Route>

        {/* SETTINGS */}
        <Route path="settings" element={<FacilityManagerSettings />} />

        {/* DOMAIN MODULES */}
        <Route path="properties/*" element={<FacilityManagerPropertiesRoutes />} />
        <Route path="tickets/*" element={<FacilityManagerTicketsRoutes />} />
        <Route path="tasks/*" element={<FacilityManagerTasksRoutes />} />
        <Route path="technicians/*" element={<FacilityManagerTechniciansRoutes />} />
        <Route path="tenants/*" element={<FacilityManagerTenantsRoutes />} />

        {/* GLOBAL NOTIFICATIONS */}
        <Route path="notifications" element={<NotificationsList />} />

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/facility-manager" replace />} />
      </Route>
    </Routes>
  );
}
