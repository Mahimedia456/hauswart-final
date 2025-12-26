import { useState } from "react";
import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";

export default function PreventiveSchedule() {
  const { lang } = useLanguage();
  const dict = t[lang];

  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");

  // Demo Data
  const schedules = [
    {
      id: "PM-1024",
      name: "Monthly HVAC Inspection",
      org: "Global Real Estate",
      orgRegion: "North America",
      property: "Downtown Tower",
      propertyDetail: "12 Floors / 150 Units",
      asset: "Rooftop Unit 1",
      assetTag: "HVAC",
      frequency: "Monthly",
      dueDate: "Mar 15, 2025",
      dueStatus: "Overdue",
      assignee: "Alex Johnson",
      assigneeImg: "https://i.pravatar.cc/150?img=15",
      status: "Active",
    },
    {
      id: "PM-1025",
      name: "Quarterly Fire Drill",
      org: "Innovate Corp",
      orgRegion: "Europe",
      property: "Berlin HQ",
      propertyDetail: "8 Floors / 40 Units",
      asset: "Fire Suppression System",
      assetTag: "Fire Safety",
      frequency: "Quarterly",
      dueDate: "Apr 22, 2025",
      dueStatus: "",
      assignee: "Maria Garcia",
      assigneeImg: "https://i.pravatar.cc/150?img=32",
      status: "Paused",
    },
    {
      id: "PM-1026",
      name: "Weekly Plumbing Check",
      org: "Sunrise Properties",
      orgRegion: "Asia-Pacific",
      property: "Pacific Mall",
      propertyDetail: "3 Floors / 250 Units",
      asset: "Public Restrooms",
      assetTag: "Plumbing",
      frequency: "Weekly",
      dueDate: "Mar 30, 2025",
      dueStatus: "",
      assignee: "Unassigned",
      assigneeImg: null,
      status: "Active",
    },
  ];

  function toggleSelect(id) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
  }

  return (
    <div className="p-6 space-y-6">

      {/* PAGE HEADER */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">{dict.mt_pm_title}</h1>
          <p className="text-gray-500">{dict.mt_pm_subtitle}</p>
        </div>

        {/* SEARCH + IMPORT + CREATE */}
        <div className="flex flex-wrap gap-3 items-center">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              search
            </span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={dict.mt_pm_search}
              className="h-11 w-64 pl-10 rounded-lg border border-gray-300 bg-white"
            />
          </div>

          <button className="h-11 px-4 border border-gray-300 rounded-lg bg-white flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">upload</span>
            {dict.mt_pm_import}
          </button>

          <button className="h-11 px-4 rounded-lg text-white bg-[#F38B14] hover:bg-black flex items-center gap-2">
            <span className="material-symbols-outlined">add</span>
            {dict.mt_pm_create}
          </button>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="bg-white p-4 rounded-xl shadow-sm border flex flex-wrap gap-3 items-center">

        {[
          dict.mt_pm_filter_org,
          dict.mt_pm_filter_property,
          dict.mt_pm_filter_assetCategory,
          dict.mt_pm_filter_frequency,
          dict.mt_pm_filter_status,
          dict.mt_pm_filter_dateRange,
        ].map((label, i) => (
          <button
            key={i}
            className="flex items-center h-9 px-3 rounded-lg border border-gray-300 bg-gray-100 hover:bg-gray-200 gap-1 text-sm"
          >
            {label}
            <span className="material-symbols-outlined text-sm">expand_more</span>
          </button>
        ))}

        <button className="text-sm text-gray-500 hover:text-black">
          {dict.mt_pm_resetFilters}
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow-sm border overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600 text-xs uppercase border-b">
            <tr>
              <th className="p-4">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setSelected(e.target.checked ? schedules.map((s) => s.id) : [])
                  }
                  checked={selected.length === schedules.length}
                />
              </th>
              <th className="p-3">{dict.mt_pm_table_name}</th>
              <th className="p-3">{dict.mt_pm_table_org}</th>
              <th className="p-3">{dict.mt_pm_table_property}</th>
              <th className="p-3">{dict.mt_pm_table_asset}</th>
              <th className="p-3">{dict.mt_pm_table_frequency}</th>
              <th className="p-3">{dict.mt_pm_table_due}</th>
              <th className="p-3">{dict.mt_pm_table_assigned}</th>
              <th className="p-3">{dict.mt_pm_table_status}</th>
              <th className="p-3"></th>
            </tr>
          </thead>

          <tbody>
            {schedules.map((row) => (
              <tr key={row.id} className="border-b hover:bg-gray-50">
                {/* CHECKBOX */}
                <td className="p-4">
                  <input
                    type="checkbox"
                    checked={selected.includes(row.id)}
                    onChange={() => toggleSelect(row.id)}
                  />
                </td>

                {/* NAME */}
                <td className="p-3">
                  <div className="font-semibold">{row.name}</div>
                  <div className="text-xs text-gray-500">ID: {row.id}</div>
                </td>

                {/* ORG */}
                <td className="p-3">
                  <div>{row.org}</div>
                  <div className="text-xs text-gray-500">{row.orgRegion}</div>
                </td>

                {/* PROPERTY */}
                <td className="p-3">
                  <div>{row.property}</div>
                  <div className="text-xs text-gray-500">{row.propertyDetail}</div>
                </td>

                {/* ASSET */}
                <td className="p-3">
                  <div>{row.asset}</div>
                  <span className="inline-block mt-1 bg-gray-100 px-2 py-1 rounded-full text-xs">
                    {row.assetTag}
                  </span>
                </td>

                {/* FREQUENCY */}
                <td className="p-3">{row.frequency}</td>

                {/* NEXT DUE */}
                <td className="p-3">
                  <div className={row.dueStatus === "Overdue" ? "text-red-600 font-semibold" : ""}>
                    {row.dueDate}
                  </div>
                  {row.dueStatus && (
                    <div className="text-xs text-red-600 font-semibold">
                      {dict.mt_pm_overdue}
                    </div>
                  )}
                </td>

                {/* ASSIGNED */}
                <td className="p-3">
                  {row.assigneeImg ? (
                    <div className="flex items-center gap-2">
                      <img src={row.assigneeImg} className="w-8 h-8 rounded-full" />
                      {row.assignee}
                    </div>
                  ) : (
                    <span className="bg-gray-200 px-2 py-1 rounded-full text-xs">
                      {dict.unassigned}
                    </span>
                  )}
                </td>

                {/* STATUS */}
                <td className="p-3">
                  <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">
                    {row.status}
                  </span>
                </td>

                {/* ACTIONS */}
                <td className="p-3 text-right">
                  <button className="material-symbols-outlined text-gray-600 hover:text-black">
                    more_vert
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* BOTTOM ACTION BAR */}
      {selected.length > 0 && (
        <div className="fixed bottom-3 left-84 right-10 bg-[#1A1A1A] text-white p-4 shadow-lg flex items-center justify-between">
          <p className="text-sm">
            <b>{selected.length}</b> {dict.mt_pm_selected}
          </p>

          <div className="flex items-center gap-5">
            <button className="flex items-center gap-1 text-sm">
              <span className="material-symbols-outlined">pause</span>
              {dict.mt_pm_pause}
            </button>

            <button className="flex items-center gap-1 text-sm">
              <span className="material-symbols-outlined">play_arrow</span>
              {dict.mt_pm_resume}
            </button>

            <button className="flex items-center gap-1 text-sm">
              <span className="material-symbols-outlined">person_add</span>
              {dict.mt_pm_assign}
            </button>

            <button className="flex items-center gap-1 text-sm text-red-400">
              <span className="material-symbols-outlined">delete</span>
              {dict.mt_pm_delete}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
