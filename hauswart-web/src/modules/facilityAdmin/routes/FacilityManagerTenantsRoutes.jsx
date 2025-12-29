import { Routes, Route } from "react-router-dom";

import TenantsList from "../pages/Tenants/TenantsList";
import AddTenant from "../pages/Tenants/AddTenant";
import TenantDetails from "../pages/Tenants/TenantDetails";
import EditTenant from "../pages/Tenants/EditTenant";

import TenantOverview from "../pages/Tenants/tabs/Overview";
import TenantDetailsTab from "../pages/Tenants/tabs/Details";
import TenantPropertyUnit from "../pages/Tenants/tabs/PropertyUnit";
import TenantTickets from "../pages/Tenants/tabs/Tickets";

export default function FacilityManagerTenantsRoutes() {
  return (
    <Routes>
      <Route index element={<TenantsList />} />
      <Route path="create" element={<AddTenant />} />

      <Route path=":id" element={<TenantDetails />}>
        <Route index element={<TenantOverview />} />
        <Route path="overview" element={<TenantOverview />} />
        <Route path="details" element={<TenantDetailsTab />} />
        <Route path="property-unit" element={<TenantPropertyUnit />} />
        <Route path="tickets" element={<TenantTickets />} />
      </Route>

      <Route path=":id/edit" element={<EditTenant />} />
    </Routes>
  );
}
