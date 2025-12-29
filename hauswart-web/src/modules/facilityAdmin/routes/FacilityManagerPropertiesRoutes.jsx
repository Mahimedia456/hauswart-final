import { Routes, Route } from "react-router-dom";

import PropertiesList from "../pages/Properties/PropertiesList";
import PropertyCreate from "../pages/Properties/PropertyCreate";
import PropertyEdit from "../pages/Properties/PropertyEdit";
import PropertyDelete from "../pages/Properties/PropertyDelete";
import PropertyDetails from "../pages/Properties/PropertyDetails";

import {
  PropOverview,
  PropDetailsTab,
  PropStructure,
  PropAssets,
  PropMaintenance,
  PropTickets,
  PropStaff,
  PropGPSLogs,
  PropActivity,
} from "../pages/Properties";

export default function FacilityManagerPropertiesRoutes() {
  return (
    <Routes>
      <Route index element={<PropertiesList />} />
      <Route path="create" element={<PropertyCreate />} />
      <Route path=":id/edit" element={<PropertyEdit />} />
      <Route path=":id/delete" element={<PropertyDelete />} />

      <Route path=":id" element={<PropertyDetails />}>
        <Route index element={<PropOverview />} />
        <Route path="overview" element={<PropOverview />} />
        <Route path="details" element={<PropDetailsTab />} />
        <Route path="structure" element={<PropStructure />} />
        <Route path="assets" element={<PropAssets />} />
        <Route path="maintenance" element={<PropMaintenance />} />
        <Route path="tickets" element={<PropTickets />} />
        <Route path="staff" element={<PropStaff />} />
        <Route path="gps" element={<PropGPSLogs />} />
        <Route path="activity" element={<PropActivity />} />
      </Route>
    </Routes>
  );
}
