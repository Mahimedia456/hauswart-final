import { t } from "../../../../../i18n/translations";
import { useLanguage } from "../../../../../context/LanguageContext";

export default function TenantOverview() {
  const { lang } = useLanguage();
  const dict = t[lang];

  // DUMMY DATA (SAFE FOR ALL IDS)
  const tenant = {
    property: "Sunrise Apartments",
    unit: "Unit 203",
    leaseExpiry: "12/31/2024",
    leaseStatus: dict.tenant_overview_active,
    tickets: "3 Open / 1 In Progress",
    maintenanceRequests: 2,

    info: {
      name: "Eleanor Vance",
      email: "eleanor.v@email.com",
      phone: "+1 (555) 123-4567",
      nationalId: "123-45-678",
      dob: "15 Aug 1990",
      gender: "Female",
      emergencyContact: "Marcus Vance",
      emergencyPhone: "+1 (555) 987-6543",
      tenantType: "Primary",
      accountStatus: dict.tenant_overview_active,
      moveInDate: "01 Jan 2023",
    },
  };

  return (
    <div className="space-y-8">

      {/* TOP SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <SummaryCard
          title={dict.tenant_overview_propertyUnit}
          value={`${tenant.property}, ${tenant.unit}`}
          action={dict.tenant_overview_viewProperty}
          icon="maps_home_work"
        />

        <SummaryCard
          title={dict.tenant_overview_leaseStatus}
          value={`${dict.tenant_overview_leaseExpires} ${tenant.leaseExpiry}`}
          badge={tenant.leaseStatus}
          button={dict.tenant_overview_viewLeaseDetails}
          icon="assignment"
        />

        <SummaryCard
          title={dict.tenant_overview_tickets}
          value={tenant.tickets}
          action={dict.tenant_overview_viewAllTickets}
          icon="support_agent"
        />

        <SummaryCard
          title={dict.tenant_overview_maintenance}
          value={`${tenant.maintenanceRequests} ${dict.tenant_overview_requests}`}
          action={dict.tenant_overview_viewMaintenanceHistory}
          icon="construction"
        />

      </div>

      {/* TENANT INFORMATION */}
      <Card title={dict.tenant_info_title}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 border-t border-slate-200 pt-4">
          <Info label={dict.tenant_info_fullName} value={tenant.info.name} />
          <Info label={dict.tenant_info_emergencyContact} value={tenant.info.emergencyContact} />
          <Info label={dict.tenant_info_email} value={tenant.info.email} />
          <Info label={dict.tenant_info_emergencyPhone} value={tenant.info.emergencyPhone} />
          <Info label={dict.tenant_info_phone} value={tenant.info.phone} />
          <Info label={dict.tenant_info_tenantType} value={tenant.info.tenantType} />
          <Info label={dict.tenant_info_nationalId} value={tenant.info.nationalId} />
          <Info label={dict.tenant_info_accountStatus} value={tenant.info.accountStatus} />
          <Info label={dict.tenant_info_dateOfBirth} value={tenant.info.dob} />
          <Info label={dict.tenant_info_moveInDate} value={tenant.info.moveInDate} />
          <Info label={dict.tenant_info_gender} value={tenant.info.gender} />
        </div>

        <div className="text-right mt-4">
          <button className="text-primary font-semibold text-sm hover:underline">
            {dict.tenant_info_edit}
          </button>
        </div>
      </Card>

    </div>
  );
}

/* ------------------ SMALL COMPONENTS ------------------ */

function SummaryCard({ title, value, action, button, badge, icon }) {
  return (
    <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
      <div className="flex justify-between">
        <p className="text-sm text-slate-500 font-medium">{title}</p>
        <span className="material-symbols-outlined text-slate-400">{icon}</span>
      </div>

      <div className="mt-2">
        <p className="text-2xl font-bold text-slate-900">{value}</p>
        {badge && (
          <span className="inline-block mt-1 bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">
            {badge}
          </span>
        )}
      </div>

      {action && (
        <button className="text-primary text-sm font-semibold mt-4 hover:underline">
          {action}
        </button>
      )}

      {button && (
        <button className="mt-4 w-full bg-primary text-white text-sm font-bold py-2 rounded-lg hover:opacity-90">
          {button}
        </button>
      )}
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
      <h2 className="text-lg font-bold text-slate-900">{title}</h2>
      {children}
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-slate-500">{label}</span>
      <span className="font-semibold text-slate-900">{value}</span>
    </div>
  );
}
