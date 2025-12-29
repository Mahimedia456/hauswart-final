// CalendarFilters.jsx
import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";

export default function CalendarFilters() {
  const { lang } = useLanguage();
  const dict = t[lang];

  return (
    <div className="bg-white p-3 rounded-lg border shadow-sm text-xs flex flex-wrap gap-6">

      <div className="flex items-center gap-2 font-medium">
        <span className="font-bold">{dict.category}:</span>
        <span className="w-3 h-3 bg-blue-500 rounded-full"></span> HVAC
        <span className="w-3 h-3 bg-yellow-400 rounded-full"></span> Electrical
        <span className="w-3 h-3 bg-green-500 rounded-full"></span> Plumbing
        <span className="w-3 h-3 bg-red-500 rounded-full"></span> Fire
      </div>

      <div className="flex items-center gap-2 font-medium">
        <span className="font-bold">{dict.priority}:</span>
        <span className="w-3 h-3 bg-red-500 rounded-full"></span> Critical
        <span className="w-3 h-3 bg-orange-500 rounded-full"></span> High
        <span className="w-3 h-3 bg-yellow-400 rounded-full"></span> Medium
      </div>

    </div>
  );
}
