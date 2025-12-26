import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";

export default function MaintenanceDashboard() {
  const { lang } = useLanguage();
  const dict = t[lang];

  // Dummy data – replace later with API values
  const kpis = [
    {
      id: "upcoming",
      label: dict.maintenance_kpi_upcoming,
      value: 142,
      hint: dict.maintenance_kpi_upcoming_hint,
      icon: "calendar_month",
      accent: "text-gray-500",
    },
    {
      id: "overdue",
      label: dict.maintenance_kpi_overdue,
      value: 18,
      hint: dict.maintenance_kpi_overdue_hint,
      icon: "warning",
      accent: "text-red-500",
    },
    {
      id: "warningAssets",
      label: dict.maintenance_kpi_warningAssets,
      value: 27,
      hint: dict.maintenance_kpi_warningAssets_hint,
      icon: "monitor_heart",
      accent: "text-gray-500",
    },
    {
      id: "certificates",
      label: dict.maintenance_kpi_certificates,
      value: 12,
      hint: dict.maintenance_kpi_certificates_hint,
      icon: "shield",
      accent: "text-gray-500",
    },
  ];

  const overdueTasks = [
    {
      id: 1,
      name: "Quarterly HVAC Inspection",
      asset: "HVAC-01",
      property: "Main Office",
      assignedTo: "John Doe",
      dueDate: "2023-10-15",
      status: "Overdue",
      statusTone: "red",
    },
    {
      id: 2,
      name: "Fire Extinguisher Check",
      asset: "Corridor B",
      property: "Warehouse",
      assignedTo: "Jane Smith",
      dueDate: "2023-10-28",
      status: "Due Soon",
      statusTone: "yellow",
    },
    {
      id: 3,
      name: "Roof Leak Inspection",
      asset: "Main Roof",
      property: "Main Office",
      assignedTo: "Service Co.",
      dueDate: "2023-10-01",
      status: "Overdue",
      statusTone: "red",
    },
  ];

  const upcomingPm = [
    {
      id: 1,
      icon: "air",
      title: "Weekly Air Filter Cleaning",
      subtitle: "AHU-03 | West Wing",
      date: "2023-11-05",
      risk: "Low",
      tone: "green",
    },
    {
      id: 2,
      icon: "local_fire_department",
      title: "Monthly Fire Alarm Test",
      subtitle: "Main Building | All Floors",
      date: "2023-11-07",
      risk: "Medium",
      tone: "orange",
    },
    {
      id: 3,
      icon: "elevator",
      title: "Elevator Safety Check",
      subtitle: "Elevator 1 | Main Lobby",
      date: "2023-11-08",
      risk: "High",
      tone: "red",
    },
  ];

  const recentCompleted = [
    {
      id: 1,
      time: "2023-11-02, 10:30 AM",
      title: "Generator Fuel Check",
      description:
        "Performed by: Mark Johnson (Technician) | Asset: GEN-01",
      badgeLabel: dict.maintenance_result_passed,
      badgeTone: "green",
    },
    {
      id: 2,
      time: "2023-11-01, 02:00 PM",
      title: "Lighting Inspection – Floor 3",
      description:
        "Performed by: John Doe (Caretaker) | Area: Floor 3 West",
      badgeLabel: dict.maintenance_result_observations,
      badgeTone: "yellow",
    },
    {
      id: 3,
      time: "2023-11-01, 09:15 AM",
      title: "Plumbing Leak Fix",
      description:
        "Performed by: Jane Smith (Technician) | Area: 2nd Floor Restroom",
      badgeLabel: dict.maintenance_result_failed,
      badgeTone: "red",
    },
  ];

  return (
    <div className="p-6">
      <div className="mx-auto space-y-6">
        {/* PAGE HEADER */}
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold text-gray-900">
              {dict.maintenanceDashboardPageTitle ?? "Maintenance Dashboard"}
            </h1>
            <p className="text-sm text-gray-500">
              {dict.maintenanceDashboardSub ??
                "Global overview of all preventive and corrective maintenance activities."}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button className="h-10 px-4 rounded-lg text-sm font-semibold text-gray-800 hover:bg-black/5">
              {dict.maintenance_exportSummary}
            </button>

            <button className="h-10 px-4 rounded-lg text-sm font-semibold border border-gray-300 text-gray-800 hover:bg-black/5">
              {dict.maintenance_openReports}
            </button>

            <button className="h-10 px-4 rounded-lg text-sm font-semibold bg-[#F38B14] text-white hover:bg-black hover:text-white">
              {dict.maintenance_createTask}
            </button>
          </div>
        </header>

        {/* KPI ROW */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((card) => (
            <div
              key={card.id}
              className="flex flex-col gap-2 p-6 bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-500">
                  {card.label}
                </p>
                <span
                  className={`material-symbols-outlined text-base ${card.accent}`}
                >
                  {card.icon}
                </span>
              </div>
              <p className="text-4xl font-bold tracking-tight">
                {card.value}
              </p>
              <p className="text-xs text-gray-500">{card.hint}</p>
            </div>
          ))}
        </section>

        {/* CHARTS & ANALYTICS */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            {/* Workload Distribution */}
            <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold">
                {dict.maintenance_workload_title}
              </h3>
              <p className="text-sm text-gray-500">
                {dict.maintenance_workload_sub}
              </p>

              <div className="grid min-h-[200px] grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center mt-2">
                <div
                  className="w-full rounded-t-md bg-primary/20"
                  style={{ height: "25%" }}
                />
                <p className="text-xs font-semibold text-gray-500">
                  {dict.maintenance_role_manager}
                </p>

                <div
                  className="w-full rounded-t-md bg-primary/20"
                  style={{ height: "60%" }}
                />
                <p className="text-xs font-semibold text-gray-500">
                  {dict.maintenance_role_caretaker}
                </p>

                <div
                  className="w-full rounded-t-md bg-primary/20"
                  style={{ height: "40%" }}
                />
                <p className="text-xs font-semibold text-gray-500">
                  {dict.maintenance_role_technician}
                </p>

                <div
                  className="w-full rounded-t-md bg-primary/20"
                  style={{ height: "90%" }}
                />
                <p className="text-xs font-semibold text-gray-500">
                  {dict.maintenance_role_provider}
                </p>
              </div>
            </div>

            {/* Maintenance Trend */}
            <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold">
                {dict.maintenance_trend_title}
              </h3>
              <p className="text-sm text-gray-500">
                {dict.maintenance_trend_sub}
              </p>

              <div className="relative h-56 mt-2">
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 400 200"
                  preserveAspectRatio="none"
                >
                  {/* Corrective (grey dashed) */}
                  <path
                    d="M0 150 C 66 120, 133 160, 200 140 C 266 120, 333 80, 400 100"
                    stroke="#9ca3af"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    fill="none"
                  />
                  {/* Preventive (orange) */}
                  <path
                    d="M0 80 C 66 100, 133 60, 200 70 C 266 80, 333 130, 400 120"
                    stroke="#f38b14"
                    strokeWidth="2.5"
                    fill="none"
                  />
                </svg>
              </div>

              <div className="flex justify-around text-xs font-semibold text-gray-400">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            {/* Asset Health Overview */}
            <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold">
                {dict.maintenance_assetHealth_title}
              </h3>

              <div className="relative flex items-center justify-center h-48">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    className="text-green-500"
                    strokeWidth="3"
                    strokeDasharray="60 100"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    className="text-yellow-400"
                    strokeWidth="3"
                    strokeDasharray="25 100"
                    strokeDashoffset="-60"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    className="text-red-500"
                    strokeWidth="3"
                    strokeDasharray="10 100"
                    strokeDashoffset="-85"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    className="text-gray-300"
                    strokeWidth="3"
                    strokeDasharray="5 100"
                    strokeDashoffset="-95"
                  />
                </svg>

                <div className="absolute flex flex-col items-center">
                  <span className="text-3xl font-bold">315</span>
                  <span className="text-sm text-gray-500">
                    {dict.maintenance_assetHealth_assetsLabel}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm">
                <LegendDot color="bg-green-500" label={dict.maintenance_assetHealth_healthy} />
                <LegendDot color="bg-yellow-400" label={dict.maintenance_assetHealth_warning} />
                <LegendDot color="bg-red-500" label={dict.maintenance_assetHealth_critical} />
                <LegendDot color="bg-gray-300" label={dict.maintenance_assetHealth_unknown} />
              </div>
            </div>

            {/* Risk Score */}
            <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold">
                {dict.maintenance_risk_title}
              </h3>

              <div className="flex flex-col items-center gap-2">
                {/* Gauge */}
                <div className="relative h-24 w-48 overflow-hidden">
                  <div className="absolute top-0 left-0 h-24 w-48 rounded-t-full border-t-[20px] border-l-[20px] border-r-[20px] border-green-500 border-b-0" />
                  <div
                    className="absolute top-0 left-0 h-24 w-48 rounded-t-full border-t-[20px] border-l-[20px] border-r-[20px] border-yellow-400 border-b-0"
                    style={{
                      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                      transform: "rotate(45deg)",
                      transformOrigin: "bottom center",
                    }}
                  />
                  <div
                    className="absolute top-0 left-0 h-24 w-48 rounded-t-full border-t-[20px] border-l-[20px] border-r-[20px] border-primary border-b-0"
                    style={{
                      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                      transform: "rotate(90deg)",
                      transformOrigin: "bottom center",
                    }}
                  />
                  <div
                    className="absolute top-0 left-0 h-24 w-48 rounded-t-full border-t-[20px] border-l-[20px] border-r-[20px] border-red-500 border-b-0"
                    style={{
                      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                      transform: "rotate(135deg)",
                      transformOrigin: "bottom center",
                    }}
                  />
                  {/* Needle */}
                  <div
                    className="absolute bottom-0 left-1/2 -ml-0.5 h-24 w-1 bg-gray-900 origin-bottom"
                    style={{ transform: "rotate(27deg)" }}
                  />
                  <div className="absolute inset-0 flex items-end justify-center pb-2">
                    <div className="w-4 h-4 rounded-full border-2 border-gray-900 bg-white" />
                  </div>
                </div>

                <p className="text-2xl font-bold">63%</p>
                <p className="text-sm font-semibold text-yellow-500">
                  {dict.maintenance_risk_moderate}
                </p>
              </div>

              <div className="border-t border-gray-200 pt-3 text-sm space-y-2">
                <h4 className="font-semibold">
                  {dict.maintenance_risk_upcomingTitle}
                </h4>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>HVAC Unit 3 – Main Hall</li>
                  <li>Elevator 2 – West Wing</li>
                  <li>Boiler Room Pump</li>
                </ul>
                <button className="mt-2 text-primary text-sm font-semibold">
                  {dict.maintenance_risk_viewAll}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* LOWER TABLES / LISTS */}
        <section className="flex flex-col gap-6">
          {/* Overdue Tasks */}
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">
                {dict.maintenance_overdue_title}
              </h3>

              <button className="h-9 px-3 rounded-lg text-xs font-semibold border border-gray-300 text-gray-800 hover:bg-black/5">
                {dict.maintenance_overdue_viewAll}
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="border-b border-gray-200 text-xs text-gray-500">
                  <tr>
                    <th className="p-2">{dict.maintenance_table_taskName}</th>
                    <th className="p-2">{dict.maintenance_table_assetArea}</th>
                    <th className="p-2">{dict.maintenance_table_property}</th>
                    <th className="p-2">{dict.maintenance_table_assignedTo}</th>
                    <th className="p-2">{dict.maintenance_table_dueDate}</th>
                    <th className="p-2">{dict.maintenance_table_status}</th>
                    <th className="p-2">{dict.maintenance_table_actions}</th>
                  </tr>
                </thead>
                <tbody>
                  {overdueTasks.map((row) => (
                    <tr
                      key={row.id}
                      className={
                        row.statusTone === "red"
                          ? "bg-red-50 border-b border-gray-200"
                          : "bg-yellow-50 border-b border-gray-200"
                      }
                    >
                      <td className="p-2">{row.name}</td>
                      <td className="p-2">{row.asset}</td>
                      <td className="p-2">{row.property}</td>
                      <td className="p-2">{row.assignedTo}</td>
                      <td
                        className={`p-2 font-semibold ${
                          row.statusTone === "red"
                            ? "text-red-600"
                            : "text-yellow-700"
                        }`}
                      >
                        {row.dueDate}
                      </td>
                      <td className="p-2">
                        <span
                          className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${
                            row.statusTone === "red"
                              ? "bg-red-100 text-red-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className="p-2">
                        <button className="text-primary font-semibold text-xs">
                          {dict.action_view ?? "View"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Upcoming PM */}
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">
              {dict.maintenance_upcoming_title}
            </h3>

            <div className="flex flex-col gap-4">
              {upcomingPm.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-3 rounded-lg bg-gray-50"
                >
                  <span className="material-symbols-outlined text-gray-500">
                    {item.icon}
                  </span>

                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-500">{item.subtitle}</p>
                  </div>

                  <p className="text-sm text-gray-700">{item.date}</p>

                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      item.tone === "green"
                        ? "bg-green-100 text-green-700"
                        : item.tone === "orange"
                        ? "bg-primary/20 text-primary"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.risk}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 text-center">
              <button className="text-primary text-sm font-semibold">
                {dict.maintenance_upcoming_seeCalendar}
              </button>
            </div>
          </div>

          {/* Recently Completed */}
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">
              {dict.maintenance_recent_title}
            </h3>

            <div className="relative pl-6 border-l-2 border-gray-200">
              {recentCompleted.map((item, index) => (
                <div key={item.id} className="mb-6 last:mb-0 relative">
                  <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-primary" />

                  <p className="text-xs text-gray-500">{item.time}</p>
                  <p className="font-semibold text-gray-900">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-600">
                    {item.description}
                  </p>

                  <span
                    className={`inline-block mt-1 px-2 py-1 rounded-full text-xs font-semibold ${
                      item.badgeTone === "green"
                        ? "bg-green-100 text-green-700"
                        : item.badgeTone === "yellow"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.badgeLabel}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

/* SMALL HELPER */

function LegendDot({ color, label }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`w-3 h-3 rounded-full ${color}`} />
      <span>{label}</span>
    </div>
  );
}
