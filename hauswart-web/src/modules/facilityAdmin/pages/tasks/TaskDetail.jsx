import { NavLink, Outlet, useParams } from "react-router-dom";
import TaskHeader from "./TaskHeader";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/i18n/translations";

export default function TaskDetail() {
  const { id } = useParams();
  const { lang } = useLanguage();
  const dict = t[lang];

  return (
    <div className="space-y-6">

      {/* ================= HEADER ================= */}
      <TaskHeader
        task={{
          id,
          title: "HVAC Leak Repair - North Wing",
          status: "In Progress",
          priority: "High",
          property: "Building A",
          unit: "Floor 2",
          category: "Maintenance",
          created: "Oct 20, 2023",
          technician: {
            name: "John Doe",
            avatar: "https://randomuser.me/api/portraits/men/40.jpg",
          },
        }}
      />

      {/* ================= TABS ================= */}
      {/* Matches FacilityManagerTasksRoutes exactly */}
      <div className="flex gap-2 overflow-x-auto pb-2">

        <TaskTab to="overview">
          {dict.overview || "Overview"}
        </TaskTab>

        <TaskTab to="activity">
          {dict.activity || "Activity"}
        </TaskTab>

        <TaskTab to="comments">
          {dict.comments || "Comments"}
        </TaskTab>

        <TaskTab to="approvals">
          {dict.approvals || "Approvals"}
        </TaskTab>

      </div>

      {/* ================= TAB CONTENT ================= */}
      <div className="bg-white/80 p-6 rounded-2xl border border-slate-200 shadow">
        <Outlet />
      </div>

    </div>
  );
}

/* ================================================= */
/* TAB BUTTON COMPONENT                              */
/* ================================================= */

function TaskTab({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `
        px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition
        ${
          isActive
            ? "bg-[#F38B14] text-white shadow"
            : "bg-white/70 border border-slate-200 text-slate-700 hover:bg-slate-100"
        }
      `
      }
    >
      {children}
    </NavLink>
  );
}
