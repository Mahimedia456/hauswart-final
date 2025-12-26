export default function NotificationBadge({ count }) {
  if (!count) return null;

  return (
    <span className="
      absolute top-1.5 right-1.5
      min-w-[16px] h-[16px]
      rounded-full
      bg-[#F38B14]
      text-white
      text-[10px]
      flex items-center justify-center
      font-bold
    ">
      {count}
    </span>
  );
}
