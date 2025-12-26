// src/modules/superAdmin/pages/MaintenanceEdit.jsx

import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";
import { useState } from "react";

export default function MaintenanceEdit() {
  const { lang } = useLanguage();
  const dict = t[lang];

  const [priority, setPriority] = useState("Medium");
  const [frequency, setFrequency] = useState("Monthly");

  return (
    <div className="p-6 space-y-8">

      {/* PAGE HEADER */}
      <header className="flex flex-wrap justify-between items-center gap-4 mb-4">
        <div className="flex flex-col gap-3">
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-bold hover:bg-gray-200">
            ← {dict.ms_edit_back}
          </button>

          <div>
            <h1 className="text-3xl font-bold">{dict.ms_edit_title}</h1>
            <p className="text-gray-500 text-sm">{dict.ms_edit_subtitle}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm font-medium bg-gray-100 px-3 py-1 rounded-full">
            {dict.ms_edit_scheduleId}: #PM-2381
          </span>
          <button className="text-sm font-bold text-gray-600 hover:underline">
            {dict.ms_edit_viewDetails}
          </button>
        </div>
      </header>

      {/* MAIN GRID */}
      <div className="flex flex-col lg:flex-row gap-8">

        {/* LEFT COLUMN */}
        <div className="w-full lg:w-2/3 space-y-6">

          {/* SCHEDULE INFORMATION */}
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h3 className="text-lg font-bold border-b pb-4 mb-6">
              {dict.ms_edit_scheduleInfo}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <label className="flex flex-col col-span-2">
                <p className="text-sm font-bold mb-1">{dict.ms_edit_name}</p>
                <input
                  className="h-11 rounded-lg border px-3"
                  defaultValue="Monthly HVAC Filter Replacement"
                />
              </label>

              <label className="flex flex-col col-span-2">
                <p className="text-sm font-bold mb-1">{dict.ms_edit_description}</p>
                <textarea
                  className="rounded-lg border px-3 py-2"
                  rows={3}
                  defaultValue="Routine replacement of all HVAC air filters across the main building."
                />
              </label>

              <label className="flex flex-col">
                <p className="text-sm font-bold mb-1">{dict.ms_edit_category}</p>
                <select className="h-11 rounded-lg border px-3">
                  <option>Preventative Maintenance</option>
                  <option selected>HVAC</option>
                  <option>Plumbing</option>
                </select>
                <p className="text-xs text-gray-500 mt-1">
                  {dict.ms_edit_category_note}
                </p>
              </label>

              <label className="flex flex-col">
                <p className="text-sm font-bold mb-1">{dict.ms_edit_priority}</p>
                <select
                  className="h-11 rounded-lg border px-3"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                  <option>Urgent</option>
                </select>
              </label>

            </div>
          </div>

          {/* FREQUENCY & TIMING */}
          <div className="bg-white p-8 rounded-lg border shadow-sm">
            <h3 className="text-lg font-bold border-b pb-4 mb-6">
              {dict.ms_edit_freqTiming}
            </h3>

            {/* Warning Bar */}
            <div className="p-4 rounded-lg bg-yellow-50 border border-yellow-200 text-yellow-700 flex items-start gap-3 mb-6">
              <span className="material-symbols-outlined mt-0.5">warning</span>
              <p className="text-sm">{dict.ms_edit_freqWarning}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <label className="flex flex-col">
                <p className="text-sm font-bold mb-1">{dict.ms_edit_frequency}</p>
                <select
                  className="h-11 rounded-lg border px-3"
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value)}
                >
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option selected>Monthly</option>
                  <option>Quarterly</option>
                </select>
              </label>

              <label className="flex flex-col">
                <p className="text-sm font-bold mb-1">{dict.ms_edit_onThe}</p>
                <input className="h-11 rounded-lg border px-3" type="number" defaultValue="15" />
              </label>

              <div className="flex flex-col">
                <p className="text-sm font-bold mb-1 flex items-center gap-1">
                  {dict.ms_edit_startDate}
                  <span className="material-symbols-outlined text-gray-400 !text-sm">lock</span>
                </p>

                <input
                  disabled
                  className="h-11 rounded-lg border bg-gray-100 px-3"
                  type="date"
                  defaultValue="2023-01-15"
                />
              </div>

              <label className="flex flex-col">
                <p className="text-sm font-bold mb-1">{dict.ms_edit_prefTime}</p>
                <input className="h-11 rounded-lg border px-3" type="time" defaultValue="09:00" />
              </label>

            </div>
          </div>

          {/* CHANGE IMPACT PREVIEW */}
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h3 className="text-lg font-bold border-b pb-4 mb-6">
              {dict.ms_edit_impactPreview}
            </h3>

            <div className="p-6 rounded-lg border-l-4 border-[#F38B14] bg-[#F38B1420]">
              <div className="flex justify-between items-center mb-4">
                <p className="font-bold">{dict.ms_edit_futureTasks}</p>
                <span className="text-sm font-bold bg-orange-100 text-[#F38B14] px-3 py-1 rounded-full">
                  12 {dict.ms_edit_tasks}
                </span>
              </div>

              <div className="text-sm space-y-3">

                <p>
                  <strong>{dict.ms_edit_freqImpactTitle}</strong>
                  {dict.ms_edit_freqImpact}
                </p>

                <p>
                  <strong>{dict.ms_edit_assignImpactTitle}</strong>
                  {dict.ms_edit_assignImpact}
                </p>

                <div className="p-3 rounded-lg bg-red-50 border border-red-200 flex gap-3">
                  <span className="material-symbols-outlined mt-0.5 text-red-500">dangerous</span>
                  <p className="text-sm">{dict.ms_edit_overdueNotice}</p>
                </div>
              </div>

              <div className="border-t pt-4 mt-4 space-y-3">

                <label className="flex items-center gap-2">
                  <input type="radio" name="apply" defaultChecked />
                  {dict.ms_edit_applyNewOnly}
                </label>

                <label className="flex items-center gap-2">
                  <input type="radio" name="apply" />
                  {dict.ms_edit_applyAllFuture}
                </label>

              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: VERSION HISTORY */}
        <aside className="w-full lg:w-1/3">
          <div className="bg-white p-6 rounded-lg shadow-sm border sticky top-6">
            <h3 className="text-lg font-bold border-b pb-4 mb-6">{dict.ms_edit_versionHistory}</h3>

            <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-2">

              {/* Dummy History Entry */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-300" />
                <div>
                  <p className="font-bold">
                    Super Admin <span className="text-gray-500 font-normal">{dict.ms_edit_madeChanges}</span>
                  </p>
                  <p className="text-sm text-gray-500">2 days ago</p>
                  <p className="text-sm mt-1">{dict.ms_edit_historyExample1}</p>
                </div>
              </div>

              {/* Duplicate dummy items for scrolling */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-300" />
                <div>
                  <p className="font-bold">
                    John Doe <span className="text-gray-500 font-normal">{dict.ms_edit_created}</span>
                  </p>
                  <p className="text-sm text-gray-500">1 month ago</p>
                  <p className="text-sm mt-1">{dict.ms_edit_historyExample2}</p>
                </div>
              </div>

            </div>
          </div>
        </aside>

      </div>

      {/* FOOTER */}
      <footer className="flex justify-end gap-4 border-t pt-4">
        <button className="px-6 h-12 rounded-lg bg-gray-200 text-sm font-bold hover:bg-gray-300">
          {dict.ms_edit_cancel}
        </button>

        <button className="px-6 h-12 rounded-lg bg-[#F38B14] text-white text-sm font-bold hover:bg-black">
          {dict.ms_edit_save}
        </button>
      </footer>
    </div>
  );
}
