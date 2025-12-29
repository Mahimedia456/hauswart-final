import { Outlet } from "react-router-dom";
import FacilityManagerSidebar from "./FacilityManagerSidebar";
import FacilityManagerTopbar from "./FacilityManagerTopbar";

export default function FacilityManagerLayout() {
  return (
    <div className="flex h-screen w-full font-display bg-background-light">
      {/* Fixed Sidebar */}
      <FacilityManagerSidebar />

      {/* Main area */}
      <main className="ml-[260px] w-[calc(100%-260px)] flex flex-col">
        {/* Fixed Topbar */}
        <FacilityManagerTopbar />

        {/* Scrollable content */}
        <div className="mt-[70px] h-[calc(100%-70px)] w-full overflow-y-auto bg-[#FAFAFA] p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
