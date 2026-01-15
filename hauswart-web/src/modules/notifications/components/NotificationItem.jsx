export default function NotificationItem({ notification, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`
        p-4 rounded-xl cursor-pointer
        border
        ${notification.read
          ? "bg-white border-slate-200"
          : "bg-[#FFF7ED] border-orange-200"}
        hover:bg-slate-100
      `}
    >
      <p className="font-semibold text-sm text-slate-900">
        {notification.title}
      </p>
      <p className="text-sm text-slate-600 mt-1">
        {notification.message}
      </p>
      <p className="text-xs text-slate-400 mt-2">
        {new Date(notification.createdAt).toLocaleString()}
      </p>
    </div>
  );
}
