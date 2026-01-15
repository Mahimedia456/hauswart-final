import { NavLink, Outlet, useParams } from "react-router-dom";
import TenantDetailHeader from "./TenantDetailHeader";
import { t } from "../../../../i18n/translations";
import { useLanguage } from "../../../../context/LanguageContext";

// BASE DUMMY TENANT (DEV SAFE)
const BASE_TENANT = {
  name: "Jane Doe",
  email: "jane.doe@example.com",
  phone: "(555) 123-4567",
  status: "Active",
  tenantType: "Primary Tenant",
  organization: "Assigned Organization",
  property: "Building A",
  unit: "Unit 101",
  moveIn: "Jan 15, 2023",
  leaseEnd: "Jan 14, 2024",
};

export default function TenantDetail() {
  const { lang } = useLanguage();
  const dict = t[lang];
  const { id } = useParams();

  const tenant = {
    id,
    ...BASE_TENANT,
  };

  const tabs = [
    { id: "overview", icon: "dashboard", label: dict.tab_overview },
    { id: "property-unit", icon: "apartment", label: dict.tab_propertyUnit },
    { id: "tickets", icon: "confirmation_number", label: dict.tab_tickets },

  ];

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <TenantDetailHeader tenant={tenant} />

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
