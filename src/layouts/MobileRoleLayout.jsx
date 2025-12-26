import { Outlet } from "react-router-dom";

export default function MobileRoleLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Simple top bar */}
      <header className="h-14 border-b border-[#E5E5E5] flex items-center px-4">
        <span className="font-semibold text-sm">Hauswart Mobile</span>
      </header>

      <main className="flex-1 bg-background-light">
        <Outlet />
      </main>

      {/* Bottom nav placeholder */}
      <footer className="h-14 border-t border-[#E5E5E5] flex items-center justify-center text-xs text-[#777]">
        Mobile tabs coming soon…
      </footer>
    </div>
  );
}
