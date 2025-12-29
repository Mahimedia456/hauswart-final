import { Routes, Route } from "react-router-dom";

import RootLayout from "../layouts/RootLayout";
import AuthLayout from "../layouts/AuthLayout";
import SuperAdminLayout from "../layouts/SuperAdminLayout";

import Splash from "../modules/auth/pages/Splash";
import Onboarding from "../modules/auth/pages/Onboarding";
import Login from "../modules/auth/pages/Login";
import Register from "../modules/auth/pages/Register";
import ForgotPassword from "../modules/auth/pages/ForgotPassword";
import VerifyOTP from "../modules/auth/pages/VerifyOTP";
import ResetPassword from "../modules/auth/pages/ResetPassword";

import ProtectedRoute from "./ProtectedRoute";

/* ===================== */
/* SUPER ADMIN */
/* ===================== */
import SaDashboard from "../modules/superAdmin/pages/Dashboard";

/* FACILITY MANAGERS */
import FacilityManagersList from "@/modules/superAdmin/pages/FacilityManagers/FacilityManagersList";
import FacilityManagerCreate from "@/modules/superAdmin/pages/FacilityManagers/FacilityManagerCreate";
import FacilityManagerDetails from "@/modules/superAdmin/pages/FacilityManagers/FacilityManagerDetails";
import FacilityManagerEdit from "@/modules/superAdmin/pages/FacilityManagers/FacilityManagerEdit";
import FacilityManagerDelete from "@/modules/superAdmin/pages/FacilityManagers/FacilityManagerDelete";

/* Facility Manager Tabs */
import FMOverview from "@/modules/superAdmin/pages/FacilityManagers/tabs/Overview";
import FMBilling from "@/modules/superAdmin/pages/FacilityManagers/tabs/Billing";
import FMUsers from "@/modules/superAdmin/pages/FacilityManagers/tabs/Users";
import FMProperties from "@/modules/superAdmin/pages/FacilityManagers/tabs/Properties";
import FMTickets from "@/modules/superAdmin/pages/FacilityManagers/tabs/Tickets";

/* ===================== */
/* BILLING (FIXED) */
/* ===================== */
import BillingSubscriptions from "@/modules/superAdmin/pages/Billing/Subscriptions/BillingSubscriptions";
import SubscriptionDetail from "@/modules/superAdmin/pages/Billing/Subscriptions/SubscriptionDetail";

import BillingInvoices from "@/modules/superAdmin/pages/Billing/Invoices/BillingInvoices";
import InvoiceDetail from "@/modules/superAdmin/pages/Billing/Invoices/InvoiceDetail";

/* ===================== */
/* TENANTS */
/* ===================== */
import TenantsList from "../modules/superAdmin/pages/Tenants/TenantsList";
import AddTenant from "../modules/superAdmin/pages/Tenants/AddTenant";
import TenantDetails from "../modules/superAdmin/pages/Tenants/TenantDetails";
import EditTenant from "../modules/superAdmin/pages/Tenants/EditTenant";

import TenantOverview from "../modules/superAdmin/pages/Tenants/tabs/Overview";
import TenantDetailsTab from "../modules/superAdmin/pages/Tenants/tabs/Details";
import TenantPropertyUnit from "../modules/superAdmin/pages/Tenants/tabs/PropertyUnit";
import TenantTickets from "../modules/superAdmin/pages/Tenants/tabs/Tickets";

/* ===================== */
/* TECHNICIANS */
/* ===================== */
import TechniciansList from "@/modules/superAdmin/pages/Technician/TechniciansList";
import TechnicianCreate from "@/modules/superAdmin/pages/Technician/TechnicianCreate";
import TechnicianDetail from "@/modules/superAdmin/pages/Technician/TechnicianDetail";
import TechnicianEdit from "@/modules/superAdmin/pages/Technician/TechnicianEdit";
import DeleteTechnician from "@/modules/superAdmin/pages/Technician/DeleteTechnician";

import TechnicianOverview from "@/modules/superAdmin/pages/Technician/tabs/Overview";
import TechnicianPerformance from "@/modules/superAdmin/pages/Technician/tabs/Performance";
import TechnicianAttendance from "@/modules/superAdmin/pages/Technician/tabs/Attendance";
import TechnicianTasks from "@/modules/superAdmin/pages/Technician/tabs/Tasks";
import TechnicianOffboarding from "@/modules/superAdmin/pages/Technician/tabs/Offboarding";

/* ===================== */
/* MISC */
/* ===================== */
import NotificationsList from "@/modules/notifications/pages/NotificationsList";
import SuperAdminProfile from "../modules/superAdmin/pages/Profile/Profile";

/* ===================== */
/* ROUTER */
/* ===================== */
export default function AppRouter() {
  return (
    <Routes>
      <Route element={<RootLayout />}>

        {/* PUBLIC */}
        <Route path="/" element={<Splash />} />
        <Route path="auth/onboarding" element={<Onboarding />} />

        {/* AUTH */}
        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="verify-otp" element={<VerifyOTP />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>

        {/* SUPER ADMIN */}
        <Route
          path="super-admin/*"
          element={
            <ProtectedRoute allowedRoles={["SUPER_ADMIN"]}>
              <SuperAdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<SaDashboard />} />

          <Route path="profile" element={<SuperAdminProfile />} />
          <Route path="notifications" element={<NotificationsList />} />

          {/* FACILITY MANAGERS */}
          <Route path="facility-managers" element={<FacilityManagersList />} />
          <Route path="facility-managers/create" element={<FacilityManagerCreate />} />

          <Route path="facility-managers/:id" element={<FacilityManagerDetails />}>
            <Route index element={<FMOverview />} />
            <Route path="overview" element={<FMOverview />} />
            <Route path="billing" element={<FMBilling />} />
            <Route path="users" element={<FMUsers />} />
            <Route path="properties" element={<FMProperties />} />
            <Route path="tickets" element={<FMTickets />} />
          </Route>

          <Route path="facility-managers/:id/edit" element={<FacilityManagerEdit />} />
          <Route path="facility-managers/:id/delete" element={<FacilityManagerDelete />} />

          {/* BILLING */}
          <Route path="billing/subscriptions" element={<BillingSubscriptions />} />
          <Route path="billing/subscriptions/:id" element={<SubscriptionDetail />} />

          <Route path="billing/invoices" element={<BillingInvoices />} />
          <Route path="billing/invoices/:id" element={<InvoiceDetail />} />

          {/* TECHNICIANS */}
          <Route path="technicians">
            <Route index element={<TechniciansList />} />
            <Route path="create" element={<TechnicianCreate />} />
            <Route path=":id/edit" element={<TechnicianEdit />} />
            <Route path=":id/delete" element={<DeleteTechnician />} />

            <Route path=":id" element={<TechnicianDetail />}>
              <Route index element={<TechnicianOverview />} />
              <Route path="overview" element={<TechnicianOverview />} />
              <Route path="performance" element={<TechnicianPerformance />} />
              <Route path="attendance" element={<TechnicianAttendance />} />
              <Route path="tickets" element={<TechnicianTasks />} />
              <Route path="offboarding" element={<TechnicianOffboarding />} />
            </Route>
          </Route>

          {/* TENANTS */}
          <Route path="tenants" element={<TenantsList />} />
          <Route path="tenants/create" element={<AddTenant />} />

          <Route path="tenants/:id" element={<TenantDetails />}>
            <Route index element={<TenantOverview />} />
            <Route path="overview" element={<TenantOverview />} />
            <Route path="details" element={<TenantDetailsTab />} />
            <Route path="property-unit" element={<TenantPropertyUnit />} />
            <Route path="tickets" element={<TenantTickets />} />
          </Route>

          <Route path="tenants/:id/edit" element={<EditTenant />} />
        </Route>
      </Route>
    </Routes>
  );
}
