import { ResponsiveLine } from "@nivo/line";
import { ResponsiveBar } from "@nivo/bar";
import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";

/* ===================================================== */
/* ATTENDANCE OVERVIEW TAB                               */
/* ===================================================== */

export default function Attendance() {
  const { lang } = useLanguage();
  const dict = t[lang];

  /* ---------------- MOCK DATA (REPLACE WITH API) ---------------- */

  const dailyHoursData = [
    {
      id: dict.att_daily_hours,
      color: "#F38B14",
      data: [
        { x: "Week 1", y: 7.5 },
        { x: "Week 2", y: 8.1 },
        { x: "Week 3", y: 8.4 },
        { x: "Week 4", y: 8.2 },
      ],
    },
  ];

  const lateVsEarlyData = [
    { period: "Week 1", late: 2, early: 1 },
    { period: "Week 2", late: 1, early: 0 },
    { period: "Week 3", late: 3, early: 1 },
    { period: "Week 4", late: 2, early: 0 },
  ];

  /* ===================================================== */

  return (
    <div className="space-y-6">

      {/* PAGE HEADER (NO BACK BUTTON) */}
      <header className="flex flex-wrap justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-black">
            {dict.attendance_overview}
          </h1>
          <p className="text-gray-500">
            {dict.attendance_subtitle}
          </p>
        </div>

        <div className="flex gap-3">
          <ActionButton>{dict.action_export_attendance}</ActionButton>
          <ActionButton>{dict.action_filter}</ActionButton>
          <ActionButton primary>{dict.action_view_daily_logs}</ActionButton>
        </div>
      </header>

      {/* USER SUMMARY */}
      <div className="bg-white rounded-xl border p-6 flex flex-wrap justify-between gap-6">
        <div className="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/100"
            alt="User"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="font-bold text-lg">Brooklyn Simmons</p>
            <div className="flex gap-2 mt-1">
              <Badge color="blue">{dict.role_facility_manager}</Badge>
              <Badge color="green">{dict.status_active}</Badge>
            </div>
          </div>
        </div>

        <Summary value={22} label={dict.att_working_days} />
        <Summary value={20} label={dict.att_present_days} />
        <Summary value={1} label={dict.att_absent_days} />
        <Summary value={3} label={dict.att_late_arrivals} />
        <Summary value={1} label={dict.att_early_clockouts} />
      </div>

      {/* FILTER BAR */}
      <div className="bg-white rounded-xl border p-4 flex justify-between flex-wrap gap-3">
        <div className="flex gap-3 flex-wrap">
          <FilterPill>{dict.filter_date_range}</FilterPill>
          <FilterPill>{dict.filter_organization}</FilterPill>
          <FilterPill>{dict.filter_property}</FilterPill>
          <FilterPill>{dict.filter_status}</FilterPill>
        </div>

        <button className="text-sm text-gray-500 hover:text-black">
          {dict.action_reset_filters}
        </button>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 space-y-6">

          {/* HEATMAP (STATIC GRID — MATCHES UI) */}
          <Card title={dict.att_monthly_heatmap}>
            <HeatmapGrid />
          </Card>

          {/* ATTENDANCE STATS + GRAPHS */}
          <Card title={dict.att_statistics}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-center">
              <StatBox value="8.2 hrs" label={dict.att_avg_daily_hours} />
              <StatBox value="92%" label={dict.att_punctuality_score} />
              <StatBox value="2" label={dict.att_avg_breaks} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* LINE CHART */}
              <div className="h-64">
                <h4 className="font-semibold mb-2">
                  {dict.att_daily_hours_trend}
                </h4>
                <ResponsiveLine
                  data={dailyHoursData}
                  margin={{ top: 20, right: 20, bottom: 40, left: 50 }}
                  xScale={{ type: "point" }}
                  yScale={{ type: "linear", min: 0, max: 10 }}
                  colors={["#F38B14"]}
                  pointSize={8}
                  useMesh
                />
              </div>

              {/* BAR CHART */}
              <div className="h-64">
                <h4 className="font-semibold mb-2">
                  {dict.att_late_vs_early}
                </h4>
                <ResponsiveBar
                  data={lateVsEarlyData}
                  keys={["late", "early"]}
                  indexBy="period"
                  margin={{ top: 20, right: 20, bottom: 40, left: 40 }}
                  padding={0.3}
                  colors={["#F38B14", "#999999"]}
                  axisBottom={{ tickSize: 5, tickPadding: 5 }}
                  axisLeft={{ tickSize: 5, tickPadding: 5 }}
                />
              </div>
            </div>
          </Card>

          {/* LEAVE TRACKER */}
          <Card title={dict.att_leave_tracker} action={dict.action_request_leave}>
            <LeaveTable />
          </Card>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">

          {/* RECENT CLOCK INS */}
          <Card title={dict.att_recent_logs}>
            <TimelineItem
              title={dict.clock_out}
              meta="Oct 31, 5:32 PM · On-site"
            />
            <TimelineItem
              title={dict.clock_in}
              meta="Oct 31, 8:58 AM · On-site"
            />
            <TimelineItem
              title={dict.clock_out}
              meta="Oct 30, 6:05 PM · On-site"
            />

            <button className="text-primary text-sm font-bold mt-4">
              {dict.action_view_full_history}
            </button>
          </Card>

          {/* COMPLIANCE */}
          <Card title={dict.att_compliance}>
            <ComplianceRow
              label={dict.att_avg_weekly_hours}
              value={dict.compliant}
              badge
            />
            <ComplianceRow label={dict.att_overtime} value="2.5" />
            <ComplianceRow label={dict.att_undertime} value="0" />
            <ComplianceRow label={dict.att_missing_logs} value="0" />

            <div className="mt-4 p-3 bg-yellow-50 rounded text-sm text-yellow-700 flex gap-2">
              <span className="material-symbols-outlined">warning</span>
              {dict.att_frequent_late_warning}
            </div>
          </Card>

          {/* QUICK ACTIONS */}
          <Card title={dict.quick_actions}>
            <PrimaryButton>{dict.action_approve_leave}</PrimaryButton>
            <SecondaryButton>{dict.action_manual_entry}</SecondaryButton>
            <SecondaryButton>{dict.action_send_reminder}</SecondaryButton>
          </Card>
        </div>
      </div>
    </div>
  );
}

/* ===================================================== */
/* COMPONENTS                                            */
/* ===================================================== */

function ActionButton({ children, primary }) {
  return (
    <button
      className={`h-10 px-4 rounded-lg text-sm font-bold ${
        primary
          ? "bg-[#F38B14] text-white hover:bg-black"
          : "bg-white border hover:bg-gray-50"
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
    <span className={`px-2 py-0.5 text-xs rounded-full ${map[color]}`}>
      {children}
    </span>
  );
}

function Summary({ value, label }) {
  return (
    <div className="text-center">
      <p className="text-xl font-bold">{value}</p>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  );
}

function Card({ title, children, action }) {
  return (
    <div className="bg-white rounded-xl border p-6">
      <div className="flex justify-between mb-4">
        <h3 className="font-bold">{title}</h3>
        {action && (
          <button className="text-sm font-bold text-primary">
            {action}
          </button>
        )}
      </div>
      {children}
    </div>
  );
}

function FilterPill({ children }) {
  return (
    <button className="h-9 px-4 rounded-lg bg-gray-100 text-sm">
      {children}
    </button>
  );
}

function StatBox({ value, label }) {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  );
}

function TimelineItem({ title, meta }) {
  return (
    <div className="flex gap-3 mb-3">
      <div className="w-2 h-2 mt-2 rounded-full bg-[#F38B14]" />
      <div>
        <p className="font-semibold text-sm">{title}</p>
        <p className="text-xs text-gray-500">{meta}</p>
      </div>
    </div>
  );
}

function ComplianceRow({ label, value, badge }) {
  return (
    <div className="flex justify-between text-sm mb-2">
      <span className="text-gray-500">{label}</span>
      {badge ? (
        <span className="px-2 py-0.5 text-xs bg-green-100 text-green-700 rounded-full">
          {value}
        </span>
      ) : (
        <span className="font-medium">{value}</span>
      )}
    </div>
  );
}

function PrimaryButton({ children }) {
  return (
    <button className="w-full h-10 rounded-lg bg-[#F38B14] text-white font-bold mb-2">
      {children}
    </button>
  );
}

function SecondaryButton({ children }) {
  return (
    <button className="w-full h-10 rounded-lg border font-bold mb-2">
      {children}
    </button>
  );
}

function HeatmapGrid() {
  return (
    <div className="grid grid-cols-7 gap-1 text-xs text-center">
      {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(d => (
        <div key={d} className="font-medium text-gray-500">{d}</div>
      ))}
      {Array.from({ length: 31 }).map((_, i) => (
        <div
          key={i}
          className={`h-10 rounded flex items-center justify-center ${
            i === 10 ? "bg-red-200" :
            i === 16 || i === 17 ? "bg-blue-200" :
            "bg-green-200"
          }`}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
}

function LeaveTable() {
  return (
    <table className="w-full text-sm">
      <thead className="bg-gray-50 text-xs">
        <tr>
          <th className="px-4 py-3">Type</th>
          <th className="px-4 py-3">Start</th>
          <th className="px-4 py-3">End</th>
          <th className="px-4 py-3">Status</th>
          <th className="px-4 py-3">Reason</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr className="border-t">
          <td className="px-4 py-3 font-medium">Sick Leave</td>
          <td className="px-4 py-3">Oct 11</td>
          <td className="px-4 py-3">Oct 11</td>
          <td className="px-4 py-3">
            <Badge color="green">Approved</Badge>
          </td>
          <td className="px-4 py-3">Doctor visit</td>
          <td className="px-4 py-3 text-right">•••</td>
        </tr>
      </tbody>
    </table>
  );
}
