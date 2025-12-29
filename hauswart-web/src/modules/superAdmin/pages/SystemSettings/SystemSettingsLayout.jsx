import { Outlet } from "react-router-dom";

export default function SystemSettingsLayout() {
  return (
    <div className="w-full">
      <Outlet />
    </div>
  );
}