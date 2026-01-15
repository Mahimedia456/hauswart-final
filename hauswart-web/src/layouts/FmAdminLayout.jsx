import { Outlet } from "react-router-dom";

export default function FmAdminLayout() {
  return (
    <div className="min-h-screen flex bg-[#F5F5F5]">
      <aside className="w-64 bg-white border-r border-[#E5E5E5] p-4 hidden md:block">
        <h2 className="font-bold text-lg mb-4">Facility Manager</h2>
        <p className="text-xs text-[#777]">Sidebar coming soon…</p>
      </aside>
      <main className="flex-1 p-4 md:p-6">
        <Outlet />
      </main>
    </div>
  );
}
