import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";
import { useState } from "react";

export default function MaintenanceList() {
  const { lang } = useLanguage();
  const dict = t[lang];
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [deleteId, setDeleteId] = useState(null);

  // TEMP Demo Data
  const tasks = [
    {
      id: "MT-1234",
      title: "Replace air filter",
      organization: "Facility Group",
      property: "Main Building (Floor 2, Unit 201)",
      asset: "HVAC Unit 1",
      technician: "Ava Carter",
      dueDate: "2025-03-15",
      priority: "Medium",
      status: "Open",
      sla: "Within SLA",
    },
    {
      id: "MT-5678",
      title: "Fix leaky faucet",
      organization: "Facility Group",
      property: "Guest House (Floor 1, Unit 102)",
      asset: "Bathroom Sink",
      technician: "Ethan Bennett",
      dueDate: "2025-03-10",
      priority: "High",
      status: "Scheduled",
      sla: "At Risk",
    },
  ];

  return (
    <>
      <div className="p-6 space-y-6">

        {/* HEADER */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {dict.maintenanceListPageTitle}
            </h1>
            <p className="text-sm text-gray-500">
              {dict.maintenanceListPageSub}
            </p>
          </div>

          <button
            onClick={() => navigate(`/super-admin/maintenance/create`)}
            className="h-10 px-4 rounded-lg text-sm font-semibold text-white"
            style={{ backgroundColor: "#F38B14" }}
          >
            {dict.maintenance_createTask}
          </button>
        </div>

        {/* SEARCH BAR */}
        <div className="w-full max-w-md">
          <input
            placeholder={dict.search}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-11 rounded-lg bg-gray-100 px-4 text-sm focus:outline-none border border-gray-200"
          />
        </div>

        {/* FILTER ROW */}
        <div className="flex flex-wrap gap-2">
          {[
            dict.filter_organization,
            dict.filter_property,
            dict.filter_assetCategory,
            dict.filter_taskType,
            dict.filter_priority,
            dict.filter_status,
            dict.filter_technician,
            dict.filter_sla,
          ].map((label, i) => (
            <button
              key={i}
              className="flex items-center gap-2 bg-gray-100 text-gray-900 px-3 h-9 rounded-lg text-sm"
            >
              {label}
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
          ))}
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50 text-gray-600 text-xs border-b border-gray-200">
              <tr>
                <th className="p-3">{dict.mt_table_id}</th>
                <th className="p-3">{dict.mt_table_title}</th>
                <th className="p-3">{dict.mt_table_org}</th>
                <th className="p-3">{dict.mt_table_property}</th>
                <th className="p-3">{dict.mt_table_asset}</th>
                <th className="p-3">{dict.mt_table_technician}</th>
                <th className="p-3">{dict.mt_table_dueDate}</th>
                <th className="p-3">{dict.mt_table_priority}</th>
                <th className="p-3">{dict.mt_table_status}</th>
                <th className="p-3">{dict.mt_table_sla}</th>
                <th className="p-3 text-right">{dict.mt_table_actions}</th>
              </tr>
            </thead>

            <tbody>
              {tasks.map((task) => (
                <tr key={task.id} className="border-b border-gray-200">
                  {/* VIEW CLICK */}
                  <td
                    onClick={() => navigate(`/super-admin/maintenance/${task.id}`)}
                    className="p-3 cursor-pointer hover:text-primary font-semibold"
                  >
                    {task.id}
                  </td>

                  <td className="p-3">{task.title}</td>
                  <td className="p-3">{task.organization}</td>
                  <td className="p-3">{task.property}</td>
                  <td className="p-3">{task.asset}</td>
                  <td className="p-3">{task.technician}</td>
                  <td className="p-3">{task.dueDate}</td>
                  <td className="p-3">{task.priority}</td>
                  <td className="p-3">{task.status}</td>
                  <td className="p-3">{task.sla}</td>

                  {/* ACTION BUTTONS */}
                  <td className="p-3 flex gap-3 justify-end">
                    <span
                      className="material-symbols-outlined cursor-pointer text-blue-600"
                      onClick={() =>
                        navigate(`/super-admin/maintenance/${task.id}`)
                      }
                    >
                      visibility
                    </span>

                    <span
                      className="material-symbols-outlined cursor-pointer text-orange-500"
                      onClick={() =>
                        navigate(`/super-admin/maintenance/${task.id}/edit`)
                      }
                    >
                      edit
                    </span>

                    <span
                      className="material-symbols-outlined cursor-pointer text-red-600"
                      onClick={() => setDeleteId(task.id)}
                    >
                      delete
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end">
          <button className="text-sm font-semibold text-gray-500 hover:text-black">
            {dict.resetFilters}
          </button>
        </div>
      </div>

      {/* DELETE POPUP */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-sm">
            <h2 className="text-lg font-bold text-red-600">
              {dict.confirm_delete_title}
            </h2>

            <p className="text-sm text-gray-600 mt-2">
              {dict.confirm_delete_message} <strong>{deleteId}</strong>?
            </p>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setDeleteId(null)}
                className="px-4 py-2 text-gray-600 hover:text-black"
              >
                {dict.action_cancel}
              </button>

              <button
                className="px-4 py-2 bg-red-600 text-white rounded-lg"
              >
                {dict.action_delete}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
