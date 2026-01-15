import { Outlet } from "react-router-dom";
import FacilityManagerProfileSidebar from "../pages/profile/FacilityManagerProfileSidebar";

export default function FacilityManagerProfileLayout() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* LEFT – PERMANENT SIDEBAR */}
      <div className="lg:col-span-4 xl:col-span-3">
        <FacilityManagerProfileSidebar />
      </div>

      {/* RIGHT – ROUTED CONTENT */}
      <div className="lg:col-span-8 xl:col-span-9">
        <Outlet />
      </div>
    </div>
  );
}
