import { NavLink, useParams } from "react-router-dom";
import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";

export default function MaintenanceTabs() {
  const { id } = useParams();
  const { lang } = useLanguage();
  const dict = t[lang];

  const tabs = [
    {
      to: `/super-admin/maintenance/${id}/overview`,
      label: dict.mt_tab_overview,
      icon: "home",
    },
    {
      to: `/super-admin/maintenance/${id}/detail`,
      label: dict.mt_tab_detail,
      icon: "info",
    },
    {
      to: `/super-admin/maintenance/${id}/upcoming`,
      label: dict.mt_tab_upcomingTasks,
      icon: "event_upcoming",
    },
    {
      to: `/super-admin/maintenance/${id}/overdue`,
      label: dict.mt_tab_overdueTasks,
      icon: "warning",
    },
    {
      to: `/super-admin/maintenance/${id}/calendar`,
      label: dict.mt_tab_calendar,
      icon: "calendar_month",
    },
    {
      to: `/super-admin/maintenance/${id}/preventive`,
      label: dict.mt_tab_preventive,
      icon: "list_alt",
    },
    {
      to: `/super-admin/maintenance/${id}/asset`,
      label: dict.mt_tab_assetMaintenance,
      icon: "build",
    },
    {
      to: `/super-admin/maintenance/${id}/property`,
      label: dict.mt_tab_propertyMaintenance,
      icon: "apartment",
    },
  ];

  return (
    <div className="flex gap-2 overflow-x-auto py-3 px-2">
      {tabs.map((tab) => (
        <NavLink
          key={tab.to}
          to={tab.to}
          className={({ isActive }) =>
            `
              flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border 
              transition whitespace-nowrap
              ${
                isActive
                  ? "bg-[#F38B14] text-white border-[#F38B14]"
                  : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
              }
            `
          }
        >
          <span className="material-symbols-outlined text-[18px]">
            {tab.icon}
          </span>
          {tab.label}
        </NavLink>
      ))}
    </div>
  );
}
