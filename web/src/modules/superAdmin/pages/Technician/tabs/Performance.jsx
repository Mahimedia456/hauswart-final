import { ResponsiveLine } from "@nivo/line";
import { ResponsivePie } from "@nivo/pie";
import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";

/* ===================================================== */
/* USER PERFORMANCE TAB                                  */
/* ===================================================== */

export default function Performance() {
  const { lang } = useLanguage();
  const dict = t[lang];

  /* ---------------- MOCK DATA (REPLACE WITH API) ---------------- */

  const kpis = [
    { label: dict.perf_total_tickets, value: 152, trend: "up" },
    { label: dict.perf_sla_adherence, value: "98%", trend: "up" },
    { label: dict.perf_avg_resolution, value: "4.2h", trend: "down" },
    { label: dict.perf_overdue_tasks, value: 3, trend: "up" },
    { label: dict.perf_maintenance, value: 48, trend: "up" },
    { label: dict.perf_rework_rate, value: "1.2%", trend: "down" },
  ];

  const tasksCompletedData = [
    {
      id: dict.perf_tasks_completed,
      color: "#F38B14",
      data: [
        { x: "Mon", y: 12 },
        { x: "Tue", y: 18 },
        { x: "Wed", y: 15 },
        { x: "Thu", y: 22 },
        { x: "Fri", y: 30 },
        { x: "Sat", y: 28 },
        { x: "Sun", y: 35 },
      ],
    },
  ];

  const taskDistributionData = [
    { id: "HVAC", label: "HVAC", value: 35 },
    { id: "Electrical", label: "Electrical", value: 30 },
    { id: "Plumbing", label: "Plumbing", value: 20 },
    { id: "Fire Safety", label: "Fire Safety", value: 15 },
  ];

  /* ===================================================== */

  return (
    <div className="space-y-6">

      {/* ACTION BAR */}
      <div className="flex flex-wrap justify-between gap-3">
        <div className="flex gap-2">
          <ActionButton>{dict.action_download_performance}</ActionButton>
          <ActionButton>{dict.action_filter}</ActionButton>
        </div>

        <ActionButton primary>
          {dict.action_compare_user}
        </ActionButton>
      </div>

      {/* USER SUMMARY STRIP */}
      <div className="bg-white rounded-xl border p-6 flex flex-wrap justify-between gap-6">
        <div className="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/100"
            className="w-12 h-12 rounded-full"
            alt="User"
          />
          <div>
            <p className="font-bold">John Doe</p>
            <div className="flex gap-2 mt-1">
              <Badge color="blue">Technician</Badge>
              <Badge color="green">Active</Badge>
            </div>
          </div>
        </div>

        <SummaryStat value="98%" label={dict.perf_sla_compliance} />
        <SummaryStat value="4.2h" label={dict.perf_avg_completion} />
        <SummaryStat value="152" label={dict.perf_total_orders} />
        <SummaryStat value="99%" label={dict.perf_attendance} />
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-3 gap-6">

        {/* LEFT COLUMN */}
        <div className="col-span-3 lg:col-span-2 space-y-6">

          {/* KPI GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {kpis.map((kpi, i) => (
              <KpiCard key={i} {...kpi} />
            ))}
          </div>

          {/* PERFORMANCE GRAPHS */}
          <div className="bg-white rounded-xl border p-6">
            <h3 className="text-lg font-bold mb-4">
              {dict.perf_graphs}
            </h3>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

              {/* LINE CHART */}
              <div className="h-64">
                <p className="text-sm font-semibold mb-2">
                  {dict.perf_tasks_completed}
                </p>
                <ResponsiveLine
                  data={tasksCompletedData}
                  margin={{ top: 20, right: 20, bottom: 40, left: 50 }}
                  xScale={{ type: "point" }}
                  yScale={{ type: "linear", min: 0, max: "auto" }}
                  axisBottom={{ tickSize: 5, tickPadding: 5 }}
                  axisLeft={{ tickSize: 5, tickPadding: 5 }}
                  colors={["#F38B14"]}
                  pointSize={8}
                  pointBorderWidth={2}
                  pointBorderColor={{ from: "serieColor" }}
                  useMesh
                />
              </div>

              {/* PIE CHART */}
              <div className="h-64">
                <p className="text-sm font-semibold mb-2">
                  {dict.perf_task_distribution}
                </p>
                <ResponsivePie
                  data={taskDistributionData}
                  innerRadius={0.6}
                  padAngle={1}
                  cornerRadius={3}
                  colors={{ scheme: "orange_red" }}
                  enableArcLabels={false}
                  legends={[
                    {
                      anchor: "bottom",
                      direction: "row",
                      translateY: 40,
                      itemWidth: 80,
                      itemHeight: 14,
                    },
                  ]}
                />
              </div>

            </div>
          </div>

          {/* TICKET PERFORMANCE TABLE (STATIC FOR NOW) */}
          <div className="bg-white rounded-xl border overflow-hidden">
            <div className="p-6 font-bold">
              {dict.perf_ticket_performance}
            </div>

            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-xs uppercase">
                <tr>
                  <th className="px-6 py-3">{dict.ticket_id}</th>
                  <th className="px-6 py-3">{dict.ticket_property}</th>
                  <th className="px-6 py-3">{dict.ticket_category}</th>
                  <th className="px-6 py-3">{dict.ticket_priority}</th>
                  <th className="px-6 py-3">{dict.ticket_resolution_time}</th>
                  <th className="px-6 py-3">{dict.ticket_sla}</th>
                </tr>
              </thead>
              <tbody>
                <TicketRow />
                <TicketRow />
                <TicketRow />
              </tbody>
            </table>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-span-3 lg:col-span-1 space-y-6">

          {/* TASK STRENGTHS */}
          <Card title={dict.perf_task_strengths}>
            <Progress label="HVAC" value={85} color="green" />
            <Progress label="Electrical" value={92} color="green" />
            <Progress label="Plumbing" value={75} color="orange" />
            <Progress label="Fire Safety" value={60} color="red" />
          </Card>

          {/* ATTENDANCE */}
          <Card title={dict.perf_attendance_summary}>
            <AttendanceGrid />
          </Card>

          {/* PRODUCTIVITY SCORE */}
          <Card center>
            <h3 className="font-bold mb-2">{dict.perf_productivity}</h3>
            <p className="text-6xl font-black text-[#F38B14]">92</p>
            <Badge color="green">{dict.perf_excellent}</Badge>
          </Card>

        </div>
      </div>
    </div>
  );
}

/* ===================================================== */
/* SMALL COMPONENTS                                      */
/* ===================================================== */

function ActionButton({ children, primary }) {
  return (
    <button
      className={`h-10 px-4 rounded-xl text-sm font-bold ${
        primary
          ? "bg-[#F38B14] text-white hover:bg-black"
          : "bg-gray-200 hover:bg-gray-300"
      }`}
    >
      {children}
    </button>
  );
}

function Badge({ children, color }) {
  const map = {
    green: "bg-green-100 text-green-700",
    blue: "bg-blue-100 text-blue-700",
  };
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full ${map[color]}`}>
      {children}
    </span>
  );
}

function SummaryStat({ value, label }) {
  return (
    <div className="text-center">
      <p className="text-lg font-bold">{value}</p>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  );
}

function KpiCard({ label, value, trend }) {
  return (
    <div className="bg-white rounded-xl border p-6">
      <div className="flex justify-between">
        <p className="text-sm text-gray-500">{label}</p>
        <span
          className={`material-symbols-outlined ${
            trend === "up" ? "text-green-500" : "text-red-500"
          }`}
        >
          {trend === "up" ? "trending_up" : "trending_down"}
        </span>
      </div>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}

function Card({ title, children, center }) {
  return (
    <div className={`bg-white rounded-xl border p-6 ${center && "text-center"}`}>
      {title && <h3 className="font-bold mb-4">{title}</h3>}
      {children}
    </div>
  );
}

function Progress({ label, value, color }) {
  const colors = {
    green: "bg-green-600",
    orange: "bg-[#F38B14]",
    red: "bg-red-500",
  };
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full">
        <div
          className={`h-2 rounded-full ${colors[color]}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function AttendanceGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 text-center">
      <Stat label="Days Present" value={21} />
      <Stat label="Days Absent" value={1} />
      <Stat label="Late Check-ins" value={2} />
      <Stat label="Early Outs" value={0} />
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  );
}

function TicketRow() {
  return (
    <tr className="border-t">
      <td className="px-6 py-4 font-medium">#T12345</td>
      <td className="px-6 py-4">Building A</td>
      <td className="px-6 py-4">Plumbing</td>
      <td className="px-6 py-4">High</td>
      <td className="px-6 py-4">2.5h</td>
      <td className="px-6 py-4 text-green-600">Yes</td>
    </tr>
  );
}
