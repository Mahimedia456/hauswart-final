import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export default function NotificationDropdown({ open, onClose, notifications }) {
  const navigate = useNavigate();
  const { role } = useAuth();

  if (!open) return null;

  const basePath =
    role === "SUPER_ADMIN" ? "/super-admin" :
    role === "FACILITY_MANAGER" ? "/facility-manager" :
    role === "TECHNICIAN" ? "/technician" :
    role === "TENANT" ? "/tenant" :
    "";

  return (
    <div className="absolute right-0 top-14 w-96 bg-white/80 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-xl z-50">
      {/* HEADER */}
      <div className="px-4 py-3 border-b flex justify-between items-center">
        <h4 className="font-semibold">Notifications</h4>
        <button
          onClick={() => {
            navigate(`${basePath}/notifications`);
            onClose();
          }}
          className="text-sm text-[#F38B14] font-semibold"
        >
          View all
        </button>
      </div>

      {/* LIST */}
      <div className="max-h-80 overflow-y-auto">
        {notifications.slice(0, 5).map(n => (
          <button
            key={n.id}
            onClick={() => {
              navigate(n.route);
              onClose();
            }}
            className="w-full text-left px-4 py-3 hover:bg-slate-100 border-b"
          >
            <p className="font-medium text-sm">{n.title}</p>
            <p className="text-xs text-slate-500">{n.message}</p>
            <p className="text-xs text-slate-400 mt-1">{n.time}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
