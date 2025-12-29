import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/i18n/translations";

export default function TaskHeader({ task }) {
  const { lang } = useLanguage();
  const dict = t[lang];

  return (
    <div className="bg-white rounded-2xl border p-6 shadow flex justify-between">
      <div>
        <h2 className="text-xl font-bold">{task.id}</h2>
        <p className="text-sm text-slate-500">
          {dict.ticket}: {task.ticket}
        </p>
      </div>

      <div className="flex gap-2">
        <button className="px-4 py-2 rounded-xl bg-yellow-100 text-yellow-800">
          {dict.task_hold}
        </button>
        <button className="px-4 py-2 rounded-xl bg-green-100 text-green-800">
          {dict.task_complete}
        </button>
      </div>
    </div>
  );
}
