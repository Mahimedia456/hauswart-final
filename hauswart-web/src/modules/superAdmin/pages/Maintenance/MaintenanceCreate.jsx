// src/modules/superAdmin/pages/Maintenance/MaintenanceCreate.jsx

import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";
import { useState } from "react";

export default function MaintenanceCreate() {
  const { lang } = useLanguage();
  const dict = t[lang];

  // Dummy state values
  const [selectedAsset, setSelectedAsset] = useState("AC-001");

  return (
    <div className="p-6 space-y-8">

      {/* PAGE HEADER */}
      <header className="flex flex-col gap-3 mb-4">
        <button className="w-fit px-3 py-2 rounded-lg bg-gray-100 text-sm text-gray-700 hover:bg-gray-200">
          ← {dict.ms_backToSchedules}
        </button>

        <h1 className="text-3xl font-bold text-[#111]">
          {dict.ms_title}
        </h1>

        <p className="text-gray-500 text-sm">
          {dict.ms_subtitle}
        </p>
      </header>

      {/* FORM CARD */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/** ----------------------------------------------------- */}
          {/** 1. SCHEDULE INFORMATION */}
          {/** ----------------------------------------------------- */}
          <div className="flex flex-col gap-6 border-r pr-6">
            <h3 className="text-lg font-bold text-[#111]">
              {dict.ms_scheduleInfo}
            </h3>

            <label className="flex flex-col">
              <span className="text-sm font-medium">{dict.ms_scheduleName}</span>
              <input
                className="h-10 mt-1 rounded-lg border border-gray-300 px-3"
                placeholder={dict.ms_scheduleName_placeholder}
              />
            </label>

            <label className="flex flex-col">
              <span className="text-sm font-medium">{dict.ms_description}</span>
              <textarea
                className="h-24 mt-1 rounded-lg border border-gray-300 px-3 py-2"
                placeholder={dict.ms_description_placeholder}
              />
            </label>

            <label className="flex flex-col">
              <span className="text-sm font-medium">{dict.ms_category}</span>
              <select className="h-10 mt-1 rounded-lg border border-gray-300 px-3">
                <option>HVAC</option>
                <option>Electrical</option>
                <option>Plumbing</option>
                <option>Fire Safety</option>
                <option>General Maintenance</option>
              </select>
            </label>

            <label className="flex flex-col">
              <span className="text-sm font-medium">{dict.ms_priority}</span>
              <select className="h-10 mt-1 rounded-lg border border-gray-300 px-3">
                <option>Critical</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </label>
          </div>

          {/** ----------------------------------------------------- */}
          {/** 2. ORGANIZATION + PROPERTY + ASSET SELECTION */}
          {/** ----------------------------------------------------- */}
          <div className="flex flex-col gap-6 pr-6">

            {/* ORG SECTION */}
            <h3 className="text-lg font-bold text-[#111]">
              {dict.ms_orgProperty}
            </h3>

            <label className="flex flex-col">
              <span className="text-sm font-medium">{dict.ms_org}</span>
              <select className="h-10 mt-1 rounded-lg border border-gray-300 px-3">
                <option>{dict.ms_selectOrg}</option>
                <option>Global Tech</option>
                <option>Innovate Solutions</option>
              </select>
            </label>

            <label className="flex flex-col">
              <span className="text-sm font-medium">{dict.ms_property}</span>
              <select className="h-10 mt-1 rounded-lg border border-gray-300 px-3">
                <option>{dict.ms_selectProperty}</option>
                <option>HQ – Silicon Valley</option>
              </select>
            </label>

            <label className="flex flex-col">
              <span className="text-sm font-medium">{dict.ms_area}</span>
              <select className="h-10 mt-1 rounded-lg border border-gray-300 px-3">
                <option>{dict.ms_allFloors}</option>
              </select>
            </label>

            <label className="flex flex-col">
              <span className="text-sm font-medium">{dict.ms_locationNotes}</span>
              <textarea
                className="h-24 mt-1 rounded-lg border border-gray-300 px-3 py-2"
                placeholder={dict.ms_locationNotes_placeholder}
              />
            </label>

            <hr className="border-gray-200" />

            {/* ASSET SELECTION */}
            <h3 className="text-lg font-bold text-[#111]">
              {dict.ms_assetSelection}
            </h3>

            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input type="radio" name="assetSelect" defaultChecked />
                <span className="text-sm">{dict.ms_selectSpecificAsset}</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" name="assetSelect" />
                <span className="text-sm">{dict.ms_applyToCategory}</span>
              </label>
            </div>

            <label className="flex flex-col">
              <span className="text-sm font-medium">{dict.ms_asset}</span>
              <select
                className="h-10 mt-1 rounded-lg border border-gray-300 px-3"
                value={selectedAsset}
                onChange={(e) => setSelectedAsset(e.target.value)}
              >
                <option value="AC-001">AC-001 | HVAC | Active</option>
                <option value="PMP-005">PMP-005 | Pump | Under Repair</option>
              </select>
            </label>

            <div className="bg-gray-50 p-4 rounded-lg border text-sm">
              <p className="font-bold mb-2">{dict.ms_assetDetails}</p>
              <div className="grid grid-cols-2 gap-2">
                <span>{dict.ms_model}:</span> <span>Trane XR14</span>
                <span>{dict.ms_serial}:</span> <span>SN58292B34</span>
                <span>{dict.ms_lastMaint}:</span> <span>15-May-2024</span>
                <span>{dict.ms_warranty}:</span> <span>21-Oct-2025</span>
              </div>
            </div>
          </div>

          {/** ----------------------------------------------------- */}
          {/** 3. FREQUENCY + TIMING + ASSIGNMENT + EXTRA SETTINGS */}
          {/** ----------------------------------------------------- */}
          <div className="flex flex-col gap-6">

            {/* Frequency */}
            <h3 className="text-lg font-bold text-[#111]">
              {dict.ms_frequencyTiming}
            </h3>

            <label className="flex flex-col">
              <span className="text-sm font-medium">{dict.ms_frequency}</span>
              <select className="h-10 mt-1 rounded-lg border border-gray-300 px-3">
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Quarterly</option>
                <option>Annual</option>
              </select>
            </label>

            {/* Repeat On */}
            <div>
              <p className="text-sm font-medium mb-1">{dict.ms_repeatOn}</p>
              <div className="flex gap-2">
                {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                  <button
                    key={i}
                    className="size-8 rounded-full border border-gray-300 hover:bg-gray-100 text-xs"
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-2 gap-4">
              <label className="flex flex-col">
                <span className="text-sm font-medium">{dict.ms_startDate}</span>
                <input type="date" className="h-10 mt-1 rounded-lg border px-3" />
              </label>

              <label className="flex flex-col">
                <span className="text-sm font-medium">{dict.ms_preferredTime}</span>
                <select className="h-10 mt-1 rounded-lg border px-3">
                  <option>Morning (8am-12pm)</option>
                  <option>Afternoon (12pm-5pm)</option>
                </select>
              </label>
            </div>

            {/* End Date */}
            <div className="flex flex-col">
              <p className="text-sm font-medium">{dict.ms_endDate}</p>

              <label className="flex items-center gap-2 mt-2">
                <input type="radio" name="end" defaultChecked />
                {dict.ms_noEndDate}
              </label>

              <label className="flex items-center gap-2 mt-1">
                <input type="radio" name="end" />
                {dict.ms_endOn}
              </label>
            </div>

            <hr className="border-gray-200" />

            {/* Assignment */}
            <h3 className="text-lg font-bold text-[#111]">
              {dict.ms_assignment}
            </h3>

            <label className="flex flex-col">
              <span className="text-sm font-medium">{dict.ms_assignedTo}</span>
              <select className="h-10 mt-1 rounded-lg border px-3">
                <option>John Doe</option>
                <option>Jane Smith</option>
              </select>
            </label>

            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" />
              {dict.ms_autoAssign}
            </label>

            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" />
              {dict.ms_assignExpertise}
            </label>

            <hr className="border-gray-200" />

            {/* Additional */}
            <h3 className="text-lg font-bold text-[#111]">
              {dict.ms_additional}
            </h3>

            <label className="flex flex-col">
              <span className="text-sm font-medium">{dict.ms_checklistTemplate}</span>
              <select className="h-10 mt-1 rounded-lg border px-3">
                <option>Monthly HVAC Inspection</option>
                <option>Annual Fire Safety Check</option>
              </select>
            </label>

            <label className="flex items-start gap-2 text-sm">
              <input type="checkbox" className="mt-1" />
              {dict.ms_autoReminder}
            </label>

            <label className="flex items-start gap-2 text-sm text-gray-400">
              <input type="checkbox" className="mt-1" disabled />
              {dict.ms_autoTenantNotice}
            </label>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="flex justify-end gap-3 border-t pt-4">
        <button className="h-10 px-4 rounded-lg hover:bg-gray-100">
          {dict.ms_cancel}
        </button>

        <button className="h-10 px-4 rounded-lg bg-[#F38B14] text-white hover:bg-black">
          {dict.ms_save}
        </button>
      </footer>
    </div>
  );
}
