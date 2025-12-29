import { NavLink } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { useLanguage } from "../../../context/LanguageContext";
import { t } from "../../../i18n/translations";

export default function FacilityManagerSidebar() {
  const { logout } = useAuth();
  const { lang } = useLanguage();
  const dict = t[lang];

  return (
    <aside
      className="
        fixed left-4 top-4 bottom-4 z-40
        w-[260px]
        rounded-2xl
        bg-white/70 backdrop-blur-xl
        border border-slate-200
        shadow-[0_8px_30px_rgba(0,0,0,0.08)]
        flex flex-col
        overflow-hidden
      "
    >
      {/* LOGO */}
      <div className="px-6 py-5 flex items-center gap-3 border-b border-slate-200">
        <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-[#F38B14] text-white">
          <span className="material-symbols-outlined text-[26px]">
            apartment
          </span>
        </div>
        <h1 className="text-xl font-bold text-slate-900">
          {dict.appName}
        </h1>
      </div>

      {/* NAV */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-6">

        {/* DASHBOARD */}
        <SidebarSection label={dict.dashboard}>
          <SidebarItem
            to="/facility-manager"
            icon="dashboard"
            label={dict.dashboard}
          />
        </SidebarSection>

        {/* PEOPLE */}
        <SidebarSection label={dict.people || "People"}>
          <SidebarItem
            to="/facility-manager/technicians"
            icon="engineering"
            label={dict.technicians}
          />
          <SidebarItem
            to="/facility-manager/tenants"
            icon="groups"
            label={dict.tenants}
          />
        </SidebarSection>

        {/* PROPERTIES */}
        <SidebarSection label={dict.properties}>
          <SidebarItem
            to="/facility-manager/properties"
            icon="apartment"
            label={dict.properties}
          />
        </SidebarSection>

        {/* TICKETS & TASKS */}
        <SidebarSection label={dict.tickets}>
          <SidebarItem
            to="/facility-manager/tickets"
            icon="confirmation_number"
            label={dict.tickets}
          />
          <SidebarItem
            to="/facility-manager/tasks"
            icon="assignment"
            label={dict.tasks}
          />
        </SidebarSection>

        {/* APPROVALS */}
        <SidebarSection label={dict.approvals}>
          <SidebarItem
            to="/facility-manager/approvals"
            icon="task_alt"
            label={dict.approvals}
          />
        </SidebarSection>

      </nav>

      {/* LOGOUT */}
      <div className="p-4 border-t border-slate-200">
        <button
          onClick={logout}
          className="
            w-full flex items-center justify-center gap-2
            bg-red-50 text-red-600
            px-4 py-2 rounded-xl
            font-medium
            hover:bg-red-100 transition
          "
        >
          <span className="material-symbols-outlined text-[20px]">
            logout
          </span>
          {dict.logout}
        </button>
      </div>
    </aside>
  );
}

/* -------------------- */
/* REUSABLE UI         */
/* -------------------- */

function SidebarSection({ label, children }) {
  return (
    <div>
      <p className="px-2 text-[11px] uppercase font-semibold tracking-wide text-slate-400 mb-2">
        {label}
      </p>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

function SidebarItem({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `
        flex items-center gap-3 px-3 py-2 rounded-xl transition
        ${
          isActive
            ? "bg-[#FFF3E5] text-[#F38B14] font-semibold shadow-sm border border-orange-100"
            : "text-slate-700 hover:bg-slate-100"
        }
      `
      }
    >
      <span className="material-symbols-outlined text-[20px]">
        {icon}
      </span>
      <span>{label}</span>
    </NavLink>
  );
}
