import { useLanguage } from "../../../../../../context/LanguageContext";
import { t } from "../../../../../../i18n/translations";

export default function MaintenanceCalendar() {
  const { lang } = useLanguage();
  const dict = t[lang];

  const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

  const dummyEvents = {
    3: ["Quarterly HVAC Check"],
    10: ["Generator Test"],
    15: ["Fire Safety Inspection"],
    28: ["Smoke Detector Check"],
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">{dict.maint_calendar_title}</h2>

        <div className="flex gap-2">
          <button className="px-3 py-1 bg-gray-100 rounded-lg">&lt;</button>
          <button className="px-3 py-1 bg-gray-100 rounded-lg">&gt;</button>
        </div>
      </div>

      {/* WEEK DAYS */}
      <div className="grid grid-cols-7 text-center font-semibold text-gray-600 mb-2">
        {days.map((d) => <div key={d}>{d}</div>)}
      </div>

      {/* DAYS GRID */}
      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
          <div key={day} className="border rounded-lg h-24 p-2 relative">

            <span className="text-sm font-medium">{day}</span>

            {/* EVENTS */}
            {dummyEvents[day] && (
              <div className="absolute bottom-2 left-2 right-2 bg-primary/10 text-primary text-xs p-1 rounded">
                {dummyEvents[day][0]}
              </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
}
