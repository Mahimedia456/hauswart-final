// CalendarDay.jsx
import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";

export default function CalendarDay({ onTaskClick }) {
  const { lang } = useLanguage();
  const dict = t[lang];

  const events = [
    {
      time: "09:00 AM",
      title: "Generator Test",
      color: "bg-yellow-200 text-yellow-800",
    },
    {
      time: "02:00 PM",
      title: "Fire Panel Inspection",
      color: "bg-red-200 text-red-800",
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg border shadow-sm">
      <h2 className="text-lg font-semibold mb-4">{dict.mt_calendar_day}</h2>

      <div className="space-y-4">
        {events.map((e, idx) => (
          <div
            key={idx}
            onClick={() => onTaskClick(e)}
            className={`p-3 rounded-lg border cursor-pointer hover:bg-gray-50 ${e.color}`}
          >
            <p className="text-xs font-bold">{e.time}</p>
            <p>{e.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
