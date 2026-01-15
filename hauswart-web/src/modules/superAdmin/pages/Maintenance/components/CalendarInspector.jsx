// CalendarInspector.jsx
import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";

export default function CalendarInspector({ task }) {
  const { lang } = useLanguage();
  const dict = t[lang];

  if (!task) {
    return (
      <div className="w-80 bg-white border rounded-lg p-4 shadow-sm text-gray-400 text-sm">
        {dict.mt_calendar_selectTask}
      </div>
    );
  }

  return (
    <div className="w-80 bg-white border rounded-lg p-4 shadow-sm space-y-3">
      <h3 className="text-lg font-bold">{task.title}</h3>

      <div className="text-sm text-gray-600">
        {dict.mt_calendar_exampleDesc}
      </div>

      <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
        <button className="border rounded-lg py-2 hover:bg-gray-100">
          {dict.openTaskDetail}
        </button>
        <button className="border rounded-lg py-2 hover:bg-gray-100">
          {dict.reschedule}
        </button>
        <button className="bg-[#F38B14] text-white py-2 rounded-lg hover:bg-black">
          {dict.reassignTask}
        </button>
        <button className="border border-red-500 text-red-500 rounded-lg py-2 hover:bg-red-50">
          {dict.deleteTask}
        </button>
      </div>
    </div>
  );
}
