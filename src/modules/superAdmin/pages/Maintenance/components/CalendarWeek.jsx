// CalendarWeek.jsx
import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";

export default function CalendarWeek({ onTaskClick }) {
  const { lang } = useLanguage();
  const dict = t[lang];

  const demo = [
    {
      day: "Mon",
      list: [{ title: "Pump Motor Check", color: "bg-blue-200 text-blue-800" }],
    },
    {
      day: "Tue",
      list: [{ title: "Fire Extinguisher Audit", color: "bg-red-200 text-red-800" }],
    },
    {
      day: "Wed",
      list: [],
    },
    {
      day: "Thu",
      list: [{ title: "Generator Test", color: "bg-yellow-200 text-yellow-800" }],
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg border shadow-sm">
      <h2 className="text-lg font-semibold mb-4">{dict.mt_calendar_week}</h2>

      <div className="grid grid-cols-7 gap-3">
        {demo.map((d, i) => (
          <div key={i} className="p-2 border rounded-lg min-h-[120px]">
            <p className="font-semibold mb-1">{d.day}</p>

            {d.list.map((task, i2) => (
              <div
                key={i2}
                onClick={() => onTaskClick(task)}
                className={`px-2 py-1 text-xs rounded mb-1 cursor-pointer ${task.color}`}
              >
                {task.title}
              </div>
            ))}

            {d.list.length === 0 && (
              <p className="text-xs text-gray-400">{dict.mt_calendar_noTasks}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
