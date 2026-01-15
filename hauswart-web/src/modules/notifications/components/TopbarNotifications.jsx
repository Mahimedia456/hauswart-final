import { useState } from "react";
import { useNotifications } from "../hooks/useNotifications";
import NotificationDropdown from "./NotificationDropdown";
import NotificationBadge from "./NotificationBadge";

export default function TopbarNotifications() {
  const [open, setOpen] = useState(false);
  const { notifications, unreadCount } = useNotifications();

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(v => !v)}
        className="relative h-10 w-10 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200"
      >
        <span className="material-symbols-outlined text-[22px]">
          notifications
        </span>
        <NotificationBadge count={unreadCount} />
      </button>

      <NotificationDropdown
        open={open}
        onClose={() => setOpen(false)}
        notifications={notifications}
      />
    </div>
  );
}
