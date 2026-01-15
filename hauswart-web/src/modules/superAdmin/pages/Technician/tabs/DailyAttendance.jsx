import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";
import { useNavigate, useParams } from "react-router-dom";

export default function DailyAttendance() {
  const { lang } = useLanguage();
  const dict = t[lang];
  const navigate = useNavigate();
  const { id } = useParams();

  /* ---------------- DUMMY DATA ---------------- */
  const logs = [
    {
      date: "23 Oct 2023",
      day: "Monday",
      clockIn: "09:05 AM",
      clockOut: "05:15 PM",
      total: "8h 10m",
      status: "present",
      location: true,
    },
    {
      date: "24 Oct 2023",
      day: "Tuesday",
      clockIn: "09:20 AM",
      clockOut: "05:00 PM",
      total: "7h 40m",
      status: "late",
      location: true,
    },
    {
      date: "25 Oct 2023",
      day: "Wednesday",
      clockIn: "09:00 AM",
      clockOut: "--:--",
      total: "--",
      status: "missing",
      location: true,
    },
    {
      date: "26 Oct 2023",
      day: "Thursday",
      clockIn: "--:--",
      clockOut: "--:--",
      total: "--",
      status: "absent",
      location: false,
    },
    {
      date: "27 Oct 2023",
      day: "Friday",
      clockIn: "08:58 AM",
      clockOut: "04:30 PM",
      total: "7h 32m",
      status: "early",
      location: true,
    },
  ];

  const statusBadge = (status) => {
    switch (status) {
      case "present":
        return "bg-green-100 text-green-800";
      case "late":
        return "bg-yellow-100 text-yellow-800";
      case "missing":
        return "bg-red-100 text-red-800";
      case "absent":
        return "bg-red-100 text-red-800";
      case "early":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  /* ---------------- UI ---------------- */
  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">
            {dict.att_daily_logs}
          </h1>
          <p className="text-sm text-gray-500">
            {dict.att_daily_logs_sub}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button className="h-10 px-4 rounded-lg border bg-white text-sm font-bold">
            {dict.action_export_logs}
          </button>
          <button className="h-10 px-4 rounded-lg border bg-white text-sm font-bold">
            {dict.action_filter}
          </button>
          <button className="h-10 w-10 rounded-lg border bg-white flex items-center justify-center">
            <span className="material-symbols-outlined">refresh</span>
          </button>
        </div>
      </div>

      {/* USER STRIP */}
      <div className="bg-white rounded-lg shadow-sm p-6 flex flex-wrap justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxnJRewQCG1PAcWFoUTdalRnNmSPHvGqlAcxyB2EtwIvcAyi1OC7NdxxCrIM6cyTuZH4MbBB05BiveHcD64p9nt1cwZBF_vhar3BZiykf0woo3-ppVw51jJM9aZQWNHN8ECxgZXF3oOJ7Gw-HqSpgaHFDdNmHyUo15Yl43DRfhzEb5AA3RQRT_dssYTozc5kCcE5u3GjONcUzbZcpU0WSq-WU3b9toigIkMLSTVA4C70PDdozaKF1p-bdqiATbBlymYgr6wwSI4QI"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="font-bold">Eleanor Pena</p>
            <p className="text-sm text-gray-500">
              Facility Manager · Main Campus
            </p>
          </div>
          <span className="px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-800">
            Active
          </span>
        </div>

        <div className="flex gap-6 text-sm text-center">
          <Metric label={dict.filter_date_range} value="This Month" />
          <Metric label={dict.att_working_days} value="15" />
          <Metric label={dict.att_missing_logs} value="2" color="text-red-500" />
          <Metric label={dict.att_late_arrivals} value="3" color="text-yellow-500" />
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-6">
          <h3 className="text-lg font-bold">
            {dict.att_daily_logs}
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-xs uppercase text-gray-600">
              <tr>
                <th className="px-6 py-3">{dict.table_date}</th>
                <th className="px-6 py-3">{dict.table_day}</th>
                <th className="px-6 py-3">{dict.clock_in}</th>
                <th className="px-6 py-3">{dict.clock_out}</th>
                <th className="px-6 py-3">{dict.table_total_hours}</th>
                <th className="px-6 py-3">{dict.table_status}</th>
                <th className="px-6 py-3">{dict.table_location}</th>
                <th className="px-6 py-3">{dict.table_actions}</th>
              </tr>
            </thead>

            <tbody>
              {logs.map((row, i) => (
                <tr
                  key={i}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="px-6 py-4 font-medium">{row.date}</td>
                  <td className="px-6 py-4">{row.day}</td>
                  <td className="px-6 py-4">{row.clockIn}</td>
                  <td className="px-6 py-4">{row.clockOut}</td>
                  <td className="px-6 py-4">{row.total}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${statusBadge(
                        row.status
                      )}`}
                    >
                      {dict[`att_status_${row.status}`]}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {row.location ? (
                      <button
                        onClick={() =>
                          navigate(`/super-admin/users/${id}/attendance/map`)
                        }
                        className="text-primary hover:underline"
                      >
                        {dict.action_view_map}
                      </button>
                    ) : (
                      <span className="text-gray-400">N/A</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-gray-500 hover:text-black">
                      <span className="material-symbols-outlined">
                        more_vert
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="flex justify-between items-center p-4 border-t text-sm">
          <span className="text-gray-500">
            Showing <b>1–5</b> of <b>15</b>
          </span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded">
              {dict.action_previous}
            </button>
            <button className="px-3 py-1 border rounded">
              {dict.action_next}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- SMALL PARTS ---------------- */

function Metric({ label, value, color = "text-gray-800" }) {
  return (
    <div>
      <p className="text-gray-500 text-xs">{label}</p>
      <p className={`font-bold ${color}`}>{value}</p>
    </div>
  );
}
