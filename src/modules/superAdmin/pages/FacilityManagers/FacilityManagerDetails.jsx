import { NavLink, Outlet, useParams } from "react-router-dom";
import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";
import FacilityManagerHeader from "./FacilityManagerHeader";

/* TEMP DUMMY DATA */
const FACILITY_MANAGERS = {
  "fm-1": {
    id: "fm-1",
    name: "Innovate Facilities",
    contactPerson: "Jane Doe",
    email: "jane@innovate.com",
    phone: "+1 555 123 456",
    createdDate: "2023-05-12",
    properties: 15,
    status: "Active",
  },
};

export default function FacilityManagerDetails() {
  const { id } = useParams();
  const { lang } = useLanguage();
  const dict = t[lang];

  const facilityManager = FACILITY_MANAGERS[id];

  /* SAFETY GUARD */
  if (!facilityManager) {
    return (
      <div className="bg-white/80 p-6 rounded-2xl border border-slate-200 shadow">
        <p className="text-slate-600 text-sm">
          {dict.loadingFacilityManager}
        </p>
      </div>
    );
  }

  const tabs = [
    { id: "overview", label: dict.tab_overview, icon: "home" },
    { id: "billing", label: dict.tab_billing, icon: "credit_card" },
    { id: "users", label: dict.tab_users, icon: "group" },
    { id: "properties", label: dict.tab_properties, icon: "domain" },
    { id: "tickets", label: dict.tab_tickets, icon: "confirmation_number" },
  ];

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <FacilityManagerHeader facilityManager={facilityManager} />

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
