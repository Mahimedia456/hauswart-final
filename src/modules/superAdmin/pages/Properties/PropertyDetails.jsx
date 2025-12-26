// src/modules/superAdmin/pages/Properties/PropertyDetail.jsx
import { NavLink, Outlet, useParams } from "react-router-dom";
import PropertyHeader from "./PropertyHeader";
import { t } from "../../../../i18n/translations";
import { useLanguage } from "../../../../context/LanguageContext";

// TEMPORARY DUMMY DATA
const PROPERTIES = {
  "prop-1": {
    id: "prop-1",
    name: "Sunset Residency Tower A",
    organization: "Global Real Estate Holdings",
    type: "Residential Tower",
    floors: 25,
    units: 150,
    facilityManager: "Jane Doe",
    status: "Active",
    updated: "2 hours ago",
    gps: "34.05, -118.24",
    openTickets: 3,
    upcomingMaintenance: 2,
    staffCount: 8,
    lastActivity: "Today, 10:32 AM",
  },
};

export default function PropertyDetails() {
  const { lang } = useLanguage();
  const dict = t[lang];

  const { id } = useParams();
  const prop = PROPERTIES[id];

  const tabs = [
    { id: "overview", icon: "home", label: dict.tab_overview },
    { id: "details", icon: "info", label: dict.tab_details },
    { id: "structure", icon: "account_tree", label: dict.tab_structure },
    { id: "assets", icon: "inventory_2", label: dict.tab_assets },
    { id: "maintenance", icon: "build", label: dict.tab_maintenance },
    { id: "tickets", icon: "confirmation_number", label: dict.tab_tickets },
    { id: "staff", icon: "group", label: dict.tab_staff },
    { id: "gps", icon: "map", label: dict.tab_gpsLogs },
    { id: "activity", icon: "history", label: dict.tab_activity },
  ];

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <PropertyHeader prop={prop} />

      {/* TABS */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {tabs.map((tab) => (
          <NavLink
            key={tab.id}
            to={tab.id}
            end
            className={({ isActive }) =>
              `
                flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition
                ${
                  isActive
                    ? "bg-[#F38B14] text-white shadow"
                    : "bg-white/70 border border-slate-200 text-slate-700 hover:bg-slate-100"
                }
              `
            }
          >
            <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
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
