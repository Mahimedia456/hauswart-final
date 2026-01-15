// src/modules/superAdmin/pages/Technicians/TechnicianDetail.jsx
import { NavLink, Outlet, useParams } from "react-router-dom";
import TechnicianDetailHeader from "./TechnicianDetailHeader";
import { t } from "../../../../i18n/translations";
import { useLanguage } from "../../../../context/LanguageContext";

/* BASE DUMMY TECHNICIAN */
const BASE_TECHNICIAN = {
  name: "Jordan Smith",
  email: "jordan.smith@hauswart.com",
  phone: "+1 234 567 8900",
  status: "Active",
  organization: "Global Facilities Inc.",
  properties: ["Downtown Tower", "Westside Complex"],
  joined: "Oct 15, 2021",
};

export default function TechnicianDetail() {
  const { lang } = useLanguage();
  const dict = t[lang];
  const { id } = useParams();

  const technician = {
    id,
    ...BASE_TECHNICIAN,
  };

  const tabs = [
    { id: "overview", icon: "account_circle", label: dict.tech_tab_overview },
    { id: "performance", icon: "analytics", label: dict.tech_tab_performance },
    { id: "offboarding", icon: "lock", label: dict.tech_tab_offboarding },
    { id: "tickets", icon: "assignment", label: dict.tech_tab_tasks,
}
  ];

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <TechnicianDetailHeader technician={technician} />

      {/* TABS */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {tabs.map(tab => (
          <NavLink
            key={tab.id}
            to={tab.id}
            end
            className={({ isActive }) =>
              isActive
                ? "bg-[#F38B14] text-white px-4 py-2 rounded-xl text-sm shadow flex items-center gap-2"
                : "bg-white/70 border border-slate-200 px-4 py-2 rounded-xl text-sm text-slate-700 hover:bg-slate-100 flex items-center gap-2"
            }
          >
            <span className="material-symbols-outlined text-[18px]">
              {tab.icon}
            </span>
            {tab.label}
          </NavLink>
        ))}
      </div>

      {/* TAB CONTENT */}
      <div className="bg-white/80 p-6 rounded-2xl border border-slate-200 shadow">
        <Outlet />
      </div>
    </div>
  );
}
