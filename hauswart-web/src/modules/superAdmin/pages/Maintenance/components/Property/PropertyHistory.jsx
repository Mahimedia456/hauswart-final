export default function PropertyHistory({ dict }) {
  return (
    <div className="p-6 rounded-xl bg-white shadow">
      <div className="flex justify-between mb-4">
        <h3 className="text-lg font-bold">{dict.mt_property_history}</h3>
        <button className="text-sm font-bold text-[#F38B14] hover:underline">
          {dict.mt_property_viewFullHistory}
        </button>
      </div>

      <div className="relative pl-6">
        <div className="absolute left-0 w-0.5 bg-gray-300 h-full"></div>

        <HistoryItem
          date="2024-07-25, 11:30 AM"
          user="Emily Carter"
          action={dict.mt_property_history_item1}
        />
        <HistoryItem
          date="2024-07-22, 03:15 PM"
          user="David Lee"
          action={dict.mt_property_history_item2}
        />
      </div>
    </div>
  );
}

function HistoryItem({ date, user, action }) {
  return (
    <div className="relative mb-6">
      <div className="absolute -left-6 top-1.5 h-5 w-5 bg-orange-200 rounded-full flex items-center justify-center">
        <div className="h-2 w-2 bg-[#F38B14] rounded-full" />
      </div>

      <p className="text-xs text-gray-500 mb-1">{date}</p>
      <p className="text-sm">
        <span className="font-medium">{user}</span> – {action}
      </p>
    </div>
  );
}
