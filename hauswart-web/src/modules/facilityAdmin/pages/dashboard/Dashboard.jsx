import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";

// CHART.JS
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const { lang } = useLanguage();
  const dict = t[lang];

  /* ---------------- LINE CHART ---------------- */
  const lineData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: dict.fm_dash_taskTrend,
        data: [12, 18, 9, 22, 16, 25, 19],
        borderColor: "#F38B14",
        backgroundColor: "rgba(243,139,20,0.25)",
        tension: 0.4,
        borderWidth: 3,
        fill: true,
      },
    ],
  };

  /* ---------------- DOUGHNUT ---------------- */
  const doughnutData = {
    labels: [
      dict.fm_dash_completedTasks,
      dict.fm_dash_openTasks,
    ],
    datasets: [
      {
        data: [78, 22],
        backgroundColor: ["#F38B14", "#FFE3C2"],
        cutout: "75%",
      },
    ],
  };

  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          {dict.fm_dash_title}
        </h1>
        <p className="text-slate-500 text-sm">
          {dict.fm_dash_subtitle}
        </p>
      </div>

      {/* KPI GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <KpiCard
          title={dict.fm_dash_properties}
          value="6"
          icon="apartment"
        />
        <KpiCard
          title={dict.fm_dash_openTasks}
          value="18"
          icon="assignment"
        />
        <KpiCard
          title={dict.fm_dash_technicians}
          value="4"
          icon="engineering"
        />
        <KpiCard
          title={dict.fm_dash_pendingApprovals}
          value="3"
          icon="task_alt"
        />
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title={dict.fm_dash_taskTrend}>
          <Line data={lineData} height={130} />
        </Card>

        <Card title={dict.fm_dash_completionRate}>
          <div className="w-[260px] mx-auto mt-6">
            <Doughnut data={doughnutData} />
            <p className="text-center mt-3 text-lg font-semibold">
              78% {dict.fm_dash_completed}
            </p>
          </div>
        </Card>
      </div>

      {/* ALERTS + ACTIVITY */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] gap-6">

        {/* ALERTS */}
        <Card title={dict.fm_dash_attention}>
          <Alert
            type="warning"
            text={dict.fm_dash_alert_overdueTasks}
          />
          <Alert
            type="info"
            text={dict.fm_dash_alert_pendingApprovals}
          />
        </Card>

        {/* ACTIVITY */}
        <Card title={dict.section_recent_activity}>
          <div className="space-y-3">
            <Activity
              icon="assignment_turned_in"
              text={dict.fm_activity_taskCompleted}
              time={dict.activity_just_now}
            />
            <Activity
              icon="engineering"
              text={dict.fm_activity_taskAssigned}
              time={dict.activity_15min}
            />
            <Activity
              icon="report"
              text={dict.fm_activity_issueReported}
              time={dict.activity_1h}
            />
          </div>
        </Card>
      </div>

      {/* TABLES */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Recent Tasks */}
        <MiniTable
          title={dict.fm_dash_recentTasks}
          headers={[
            dict.table_task,
            dict.table_property,
            dict.table_status,
            dict.table_date,
          ]}
          rows={[
            ["#TSK-2101", "Tower A", "In Progress", "2025-01-12"],
            ["#TSK-2100", "Tower B", "Completed", "2025-01-11"],
            ["#TSK-2099", "Block C", "Pending", "2025-01-10"],
          ]}
        />

        {/* Recent Tenant Issues */}
        <MiniTable
          title={dict.fm_dash_recentIssues}
          headers={[
            dict.table_issue,
            dict.table_unit,
            dict.table_status,
            dict.table_date,
          ]}
          rows={[
            ["Water Leakage", "Unit 302", "Open", "2025-01-12"],
            ["Power Issue", "Unit 114", "Assigned", "2025-01-11"],
          ]}
        />
      </div>
    </div>
  );
}

/* ---------------- SUB COMPONENTS ---------------- */

function KpiCard({ title, value, icon }) {
  return (
    <div className="bg-white/70 backdrop-blur-xl border border-slate-200 shadow-md rounded-2xl p-6">
      <div className="flex justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <p className="text-3xl font-bold text-slate-900">{value}</p>
        </div>
        <div className="h-10 w-10 rounded-xl bg-orange-100 flex items-center justify-center text-[#F38B14]">
          <span className="material-symbols-outlined">{icon}</span>
        </div>
      </div>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="bg-white/70 backdrop-blur-xl border border-slate-200 shadow-md rounded-2xl p-6">
      <h3 className="text-sm font-semibold text-slate-700 mb-4">
        {title}
      </h3>
      {children}
    </div>
  );
}

function Alert({ type, text }) {
  const colors = {
    warning: "bg-yellow-50 border-yellow-200 text-yellow-700",
    info: "bg-blue-50 border-blue-200 text-blue-700",
  };

  const icons = {
    warning: "warning",
    info: "info",
  };

  return (
    <div className={`flex items-center gap-3 px-4 py-2 rounded-xl border ${colors[type]}`}>
      <span className="material-symbols-outlined">
        {icons[type]}
      </span>
      <p className="text-sm">{text}</p>
    </div>
  );
}

function Activity({ icon, text, time }) {
  return (
    <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition">
      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
        <span className="material-symbols-outlined text-[#F38B14]">
          {icon}
        </span>
      </div>
      <div>
        <p className="text-sm font-medium text-slate-900">{text}</p>
        <p className="text-xs text-slate-500">{time}</p>
      </div>
    </div>
  );
}

function MiniTable({ title, headers, rows }) {
  return (
    <div className="bg-white/70 backdrop-blur-xl border border-slate-200 shadow-md rounded-2xl p-5">
      <h3 className="text-sm font-semibold text-slate-700 mb-4">
        {title}
      </h3>

      <div className="overflow-hidden rounded-xl border border-slate-200">
        <table className="w-full text-sm">
          <thead className="bg-slate-50">
            <tr>
              {headers.map((h, i) => (
                <th
                  key={i}
                  className="px-4 py-2 text-left text-slate-600 font-medium"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, r) => (
              <tr key={r} className="border-t border-slate-200">
                {row.map((col, c) => (
                  <td key={c} className="px-4 py-2 text-slate-700">
                    {col}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
