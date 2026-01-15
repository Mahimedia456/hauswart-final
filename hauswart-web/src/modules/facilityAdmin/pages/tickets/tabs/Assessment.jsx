import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";

export default function Assessment() {
  const { lang } = useLanguage();
  const dict = t[lang];

  return (
    <div className="p-6 space-y-6">

      {/* ============================= */}
      {/* HEADER */}
      {/* ============================= */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">{dict.assessment_title}</h2>
        <p className="text-sm text-slate-500 mt-1">{dict.assessment_subtitle}</p>
      </div>

      {/* ============================= */}
      {/* OVERVIEW SUMMARY */}
      {/* ============================= */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 mb-4">{dict.assessment_overview}</h3>

        <div className="flex flex-wrap gap-6 text-sm text-slate-600">
          <span><strong>{dict.priority}:</strong> <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">High</span></span>
          <span><strong>{dict.category}:</strong> HVAC</span>
          <span><strong>{dict.property}:</strong> Westend Towers</span>
          <span><strong>{dict.unit}:</strong> A-402</span>
          <span><strong>{dict.sla_remaining}:</strong> <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs">4h 12m</span></span>
        </div>

        <p className="text-xs text-slate-500 mt-3">{dict.assessment_info}</p>
      </div>

      {/* ============================= */}
      {/* ROOT CAUSE ANALYSIS */}
      {/* ============================= */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 mb-4">{dict.root_cause}</h3>

        <ul className="space-y-3 text-sm text-slate-700">
          <li className="flex items-start gap-2">
            <span className="material-symbols-outlined text-primary">fact_check</span>
            <span>{dict.cause_1}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="material-symbols-outlined text-primary">fact_check</span>
            <span>{dict.cause_2}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="material-symbols-outlined text-primary">fact_check</span>
            <span>{dict.cause_3}</span>
          </li>
        </ul>
      </div>

      {/* ============================= */}
      {/* RISK ASSESSMENT */}
      {/* ============================= */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 mb-4">{dict.risk_assessment}</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* RISK SCORE */}
          <div className="flex flex-col items-center text-center">
            <div className="relative size-28">
              <svg className="size-full" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="16" stroke="#e2e8f0" strokeWidth="3" fill="none" />
                <circle cx="18" cy="18" r="16" stroke="#f38c16" strokeWidth="3" strokeDasharray="100" strokeDashoffset="40" strokeLinecap="round" fill="none" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-slate-900">60%</span>
              </div>
            </div>
            <p className="mt-2 text-sm text-slate-600">{dict.risk_score}</p>
          </div>

          {/* IMPACT */}
          <div className="p-4 bg-slate-50 rounded-lg border border-gray-200">
            <h4 className="font-bold text-slate-800 mb-2">{dict.impact}</h4>
            <p className="text-sm text-slate-600">{dict.impact_text}</p>
          </div>

          {/* URGENCY */}
          <div className="p-4 bg-slate-50 rounded-lg border border-gray-200">
            <h4 className="font-bold text-slate-800 mb-2">{dict.urgency}</h4>
            <p className="text-sm text-slate-600">{dict.urgency_text}</p>
          </div>
        </div>
      </div>

      {/* ============================= */}
      {/* RECOMMENDED ACTIONS */}
      {/* ============================= */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 mb-4">{dict.rec_actions}</h3>

        <div className="space-y-4">

          <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-sm text-slate-700">
            <strong>{dict.action_1_title}</strong>
            <p>{dict.action_1_desc}</p>
          </div>

          <div className="p-4 rounded-lg bg-blue-50 border border-blue-200 text-sm text-slate-700">
            <strong>{dict.action_2_title}</strong>
            <p>{dict.action_2_desc}</p>
          </div>

          <div className="p-4 rounded-lg bg-yellow-50 border border-yellow-200 text-sm text-slate-700">
            <strong>{dict.action_3_title}</strong>
            <p>{dict.action_3_desc}</p>
          </div>
        </div>
      </div>

      {/* ============================= */}
      {/* ASSIGNEE SUGGESTIONS */}
      {/* ============================= */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 mb-4">{dict.suggested_personnel}</h3>

        <div className="flex items-center justify-between p-4 rounded-lg border border-primary bg-primary/10">
          <div className="flex items-center gap-3">
            <div className="size-12 bg-gray-300 rounded-full"></div>
            <div>
              <p className="font-bold text-slate-900">John Mills</p>
              <p className="text-sm text-slate-500">{dict.technician}</p>
            </div>
          </div>

          <div className="flex gap-2 flex-wrap max-w-xs justify-end">
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">{dict.skill_match}</span>
            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">{dict.fast_response}</span>
            <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">{dict.low_workload}</span>
          </div>

          <button className="px-4 py-2 bg-primary text-white rounded-xl hover:bg-black">
            {dict.assign_now}
          </button>
        </div>
      </div>
    </div>
  );
}
