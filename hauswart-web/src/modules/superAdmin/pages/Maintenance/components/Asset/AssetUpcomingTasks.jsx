import { useLanguage } from "../../../../../../context/LanguageContext";
import { t } from "../../../../../../i18n/translations";

export default function AssetUpcomingTasks() {
  const { lang } = useLanguage();
  const dict = t[lang];

  const tasks = [
    {
      id: "T-1023",
      date: "28 Oct 2023, 10:00",
      overdue: true,
      assignedTo: "John Smith",
      priority: "Critical",
      status: dict.asset_status_overdue,
    },
    {
      id: "T-1025",
      date: "15 Nov 2023, 14:00",
      overdue: false,
      assignedTo: "Jane Doe",
      priority: "High",
      status: dict.asset_status_upcoming,
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e8dcce]">

      <h3 className="text-lg font-bold mb-4">{dict.asset_upcomingTasks}</h3>

      {/* Overdue Alert */}
      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md mb-4">
        <p className="font-bold">2 {dict.asset_overdue_alert}</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-[#9c7649] uppercase bg-[#f8f7f5]">
            <tr>
              <th className="px-4 py-3">{dict.asset_taskId}</th>
              <th className="px-4 py-3">{dict.asset_scheduledDate}</th>
              <th className="px-4 py-3">{dict.asset_assignedTo}</th>
              <th className="px-4 py-3">{dict.asset_priority}</th>
              <th className="px-4 py-3">{dict.asset_status}</th>
              <th className="px-4 py-3">{dict.asset_actions}</th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((task, index) => (
              <tr key={index} className="border-b border-[#e8dcce]">
                <td className="px-4 py-3 font-medium">#{task.id}</td>

                <td className={`px-4 py-3 ${task.overdue ? "text-red-500" : ""}`}>
                  {task.date}
                </td>

                <td className="px-4 py-3">{task.assignedTo}</td>

                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                    {task.priority}
                  </span>
                </td>

                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    {task.status}
                  </span>
                </td>

                <td className="px-4 py-3">
                  <button className="font-medium text-[#F38B14] hover:underline">
                    {dict.asset_openTask}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
