import { useNotifications } from "../hooks/useNotifications";

export default function NotificationsList() {
  const { notifications } = useNotifications("SUPER_ADMIN");

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">All Notifications</h1>

      {notifications.map(n => (
        <div
          key={n.id}
          className="bg-white border border-slate-200 rounded-xl p-4"
        >
          <p className="font-semibold">{n.title}</p>
          <p className="text-sm text-slate-600">{n.message}</p>
          <p className="text-xs text-slate-400 mt-1">{n.time}</p>
        </div>
      ))}
    </div>
  );
}
