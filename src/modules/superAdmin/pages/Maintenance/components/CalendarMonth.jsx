// CalendarMonth.jsx
import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";

export default function CalendarMonth({ onTaskClick }) {
  const { lang } = useLanguage();
  const dict = t[lang];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const demoEvents = {
    "2025-01-03": [
      { title: "HVAC Check", color: "bg-blue-200 text-blue-800" },
      { title: "Plumbing Inspection", color: "bg-green-200 text-green-800" },
    ],
    "2025-01-11": [
      { title: "Fire Alarm Test", color: "bg-red-200 text-red-800" },
      { title: "Elevator Wiring", color: "bg-yellow-200 text-yellow-800" },
    ],
  };

  return (
    <div className="rounded-lg border bg-white shadow-sm p-4">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <button className="p-2 hover:bg-gray-200 rounded-full">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <h2 className="text-lg font-semibold">January 2025</h2>
        <button className="p-2 hover:bg-gray-200 rounded-full">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-7 border-t border-l">
        {daysOfWeek.map((d) => (
          <div
            key={d}
            className="p-2 text-center text-xs font-semibold border-b border-r bg-gray-50"
          >
            {d}
          </div>
        ))}

        {/* 42 cells */}
        {Array.from({ length: 42 }).map((_, index) => {
          const day = (index % 31) + 1;
          const key = `2025-01-${String(day).padStart(2, "0")}`;
          const events = demoEvents[key];

          return (
            <div
              key={index}
              className="h-28 p-2 border-b border-r relative hover:bg-gray-50 cursor-pointer"
            >
              {day}

              <div className="mt-1 space-y-1">
                {events?.slice(0, 2).map((e, i) => (
                  <div
                    onClick={() => onTaskClick(e)}
                    key={i}
                    className={`px-2 py-1 rounded text-xs truncate cursor-pointer ${e.color}`}
                  >
                    {e.title}
                  </div>
                ))}

                {events && events.length > 2 && (
                  <div className="text-xs text-blue-600 font-medium">
                    +{events.length - 2} more
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
