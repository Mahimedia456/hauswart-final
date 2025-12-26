import { Outlet } from "react-router-dom";
import SaSidebar from "./components/SaSidebar";
import SaTopbar from "./components/SaTopbar";

export default function SaLayout() {
  return (
    <div className="flex h-screen w-full font-display bg-background-light dark:bg-background-dark">
      {/* Fixed Sidebar */}
      <SaSidebar />

      {/* Main area */}
      <main className="ml-[260px] w-[calc(100%-260px)] flex flex-col">
        {/* Fixed Topbar */}
        <SaTopbar />

        {/* Scrollable content */}
        <div className="mt-[70px] h-[calc(100%-70px)] w-full overflow-y-auto bg-[#FAFAFA] dark:bg-slate-900/50 p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
