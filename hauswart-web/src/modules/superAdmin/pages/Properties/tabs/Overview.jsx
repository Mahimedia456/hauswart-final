import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";

export default function PropertyOverview({ property }) {
  const { lang } = useLanguage();
  const dict = t[lang];

  // Prevent crash by providing fallback dummy data
  const data = property ?? {
    organization: "Hauswart GmbH",
    type: "Residential",
    floors: 10,
    units: 80,
    manager: "Jane Doe",
    updated: "Dec 08, 2025",
    gps: "52.5200° N, 13.4050° E",
    openTickets: 12,
    maintenance: 4,
    staff: 6,
    activity: "Ticket #482 resolved",
  };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">

      {/* LEFT SUMMARY CARD */}
      <aside className="lg:col-span-1">
        <div className="rounded-2xl bg-white border border-slate-200 p-4 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-4">
            {dict.prop_overview_summary}
          </h3>

          <div className="space-y-4">

            <div className="flex flex-col">
              <span className="text-xs font-medium text-slate-500">
                {dict.prop_overview_organization}
              </span>
              <span className="font-semibold text-slate-900">{data.organization}</span>
            </div>

            <div className="flex flex-col">
              <span className="text-xs font-medium text-slate-500">
                {dict.prop_overview_type}
              </span>
              <div className="mt-1 inline-flex w-fit items-center justify-center rounded-full bg-[#F38B14]/20 px-2.5 py-0.5 text-xs font-semibold text-[#F38B14]">
                {data.type}
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-xs font-medium text-slate-500">
                {dict.prop_overview_floors_units}
              </span>
              <span className="font-semibold text-slate-900">
                {data.floors} Floors / {data.units} Units
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-xs font-medium text-slate-500">
                {dict.prop_overview_manager}
              </span>
              <span className="font-semibold text-slate-900">{data.manager}</span>
            </div>

            <div className="flex flex-col">
              <span className="text-xs font-medium text-slate-500">
                {dict.prop_overview_updated}
              </span>
              <span className="font-semibold text-slate-900">{data.updated}</span>
            </div>

          </div>
        </div>
      </aside>

      {/* RIGHT GRID */}
      <div className="lg:col-span-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <OverviewCard icon="pin_drop" label={dict.prop_overview_gps} value={data.gps} />
          <OverviewCard icon="confirmation_number" label={dict.prop_overview_openTickets} value={`${data.openTickets} ${dict.prop_overview_activeTickets}`} />
          <OverviewCard icon="calendar_month" label={dict.prop_overview_upcomingMaintenance} value={`${data.maintenance} ${dict.prop_overview_scheduled}`} />
          <OverviewCard icon="group" label={dict.prop_overview_staff} value={`${data.staff} ${dict.prop_overview_members}`} />
          <OverviewCard icon="update" label={dict.prop_overview_lastActivity} value={data.activity} />

        </div>
      </div>

    </div>
  );
}

function OverviewCard({ icon, label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-xl bg-[#F38B14]/20">
          <span className="material-symbols-outlined text-[#F38B14]">{icon}</span>
        </div>
        <div>
          <p className="text-sm text-slate-500">{label}</p>
          <p className="font-bold text-base text-slate-900">{value}</p>
        </div>
      </div>
    </div>
  );
}
