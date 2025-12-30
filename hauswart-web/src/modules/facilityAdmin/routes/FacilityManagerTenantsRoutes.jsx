import { Routes, Route } from "react-router-dom";

import TenantsList from "../pages/tenants/TenantsList";
import AddTenant from "../pages/tenants/AddTenant";
import TenantDetails from "../pages/tenants/TenantDetails";
import EditTenant from "../pages/tenants/EditTenant";

import TenantOverview from "../pages/tenants/tabs/Overview";
import TenantDetailsTab from "../pages/tenants/tabs/Details";
import TenantPropertyUnit from "../pages/tenants/tabs/PropertyUnit";
import TenantTickets from "../pages/tenants/tabs/Tickets";

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
