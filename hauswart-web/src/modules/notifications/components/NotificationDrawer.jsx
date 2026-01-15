import { useNavigate } from "react-router-dom";

export default function NotificationDrawer({ open, onClose, notifications = [] }) {
  const navigate = useNavigate();

  if (!open) return null;

  return (
    <>
      {/* BACKDROP */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/30 z-40"
      />

      {/* DRAWER */}
      <div
        className="
          fixed top-0 right-0 h-full w-[380px] z-50
          bg-white shadow-2xl
          flex flex-col
        "
      >
        {/* HEADER */}
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <h3 className="text-lg font-bold">Notifications</h3>
          <button onClick={onClose}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* LIST */}
        <div className="flex-1 overflow-y-auto divide-y">
          {notifications.slice(0, 5).map((n) => (
            <button
              key={n.id}
              onClick={() => {
                onClose();
                navigate(n.link);
              }}
              className="w-full text-left px-6 py-4 hover:bg-slate-50 transition"
            >
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-[#F38B14]">
                  {n.icon}
                </span>
                <div>
                  <p className="font-semibold text-sm">{n.title}</p>
                  <p className="text-xs text-slate-500">{n.message}</p>
                  <p className="text-[11px] text-slate-400 mt-1">{n.time}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* FOOTER */}
        <div className="p-4 border-t">
          <button
            onClick={() => {
              onClose();
              navigate("/super-admin/notifications");
            }}
            className="
              w-full h-11 rounded-xl
              bg-[#F38B14] text-white font-semibold
              hover:bg-black transition
            "
          >
            View All Notifications
          </button>
        </div>
      </div>
    </>
  );
}
