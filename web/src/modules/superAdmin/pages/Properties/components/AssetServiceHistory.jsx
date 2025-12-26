import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";

export default function AssetServiceHistory() {
  const { lang } = useLanguage();
  const dict = t[lang];

  // Dummy timeline entries
  const timeline = [
    {
      id: 1,
      type: "maintenance",
      title: dict.prop_asset_history_maintenanceCompleted,
      date: "March 05, 2024",
      description: dict.prop_asset_history_desc_maintenance1,
      technician: "Jane Doe",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDFz29gDQEq3xZxD2VOCsLOetNgD7h3sfV_sUeAr8h5K_n917P6L_hEreuwPMyZcaP9w8qOXBQ4fQpjnLQLd5-ggNA8Lz7zeKdjzPsZB4NMwXWZGaNgzjoV20y7A-y5GwY7LpWnrxHyPiWefxRP2v8qofSfq0TejQuKSu55w1y84mtjDJ-a-E2i6RHYtf3Z3wDb3bRSxv0JgCzw7LtCfKPD2lOPD-7f2CFak9PKw1knuCq_xJGQKQKRCRIdKi_gdcxf4WNDrz7sdME",
      ticket: "#54321",
      icon: "build",
      iconColor: "bg-primary",
    },
    {
      id: 2,
      type: "issue",
      title: dict.prop_asset_history_issueReported,
      date: "Dec 12, 2023",
      description: dict.prop_asset_history_desc_issue1,
      icon: "error",
      iconColor: "bg-red-500",
    },
    {
      id: 3,
      type: "installation",
      title: dict.prop_asset_history_installed,
      date: "Jan 20, 2022",
      description: dict.prop_asset_history_desc_install1,
      icon: "sticky_note_2",
      iconColor: "bg-gray-400",
    },
  ];

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <h3 className="text-lg font-bold mb-6">{dict.prop_asset_history_title}</h3>

      <div className="relative pl-8">
        {/* Vertical line */}
        <div className="absolute left-3 top-0 h-full w-0.5 bg-gray-200"></div>

        {/* Timeline Items */}
        {timeline.map((item) => (
          <div key={item.id} className="relative mb-8">
            {/* Icon Circle */}
            <div
              className={`absolute -left-5 top-1.5 flex h-6 w-6 items-center justify-center rounded-full ring-8 ring-white ${item.iconColor}`}
            >
              <span className="material-symbols-outlined text-white text-sm">
                {item.icon}
              </span>
            </div>

            {/* Content Box */}
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <div className="flex items-center justify-between">
                <p className="font-bold text-black">{item.title}</p>
                <p className="text-xs text-gray-500">{item.date}</p>
              </div>

              <p className="mt-1 text-sm text-gray-600">{item.description}</p>

              {/* Maintenance item extra fields */}
              {item.technician && (
                <div className="mt-2 flex items-center gap-2 text-xs">
                  <span className="text-gray-500">{dict.prop_asset_history_performedBy}</span>

                  <img
                    src={item.avatar}
                    className="h-5 w-5 rounded-full"
                    alt=""
                  />

                  <span className="font-medium text-black">{item.technician}</span>
                  <span className="text-gray-400">|</span>

                  <a className="text-primary hover:underline" href="#">
                    {dict.prop_asset_history_ticket} {item.ticket}
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
