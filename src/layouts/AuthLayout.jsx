// src/layouts/AuthLayout.jsx
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div
      className="
        min-h-screen w-full flex flex-col items-center justify-center px-4 
        bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100
        font-display relative
      "
    >
      <Outlet />

      <p className="absolute bottom-6 text-xs text-slate-700">
        © 2024 Hauswart. All rights reserved.
      </p>
    </div>
  );
}
