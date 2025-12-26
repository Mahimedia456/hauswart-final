// src/modules/superAdmin/pages/SystemSettings/SystemSettings.jsx
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/i18n/translations";

const settingsTiles = [
  {
    key: "general",
    icon: "settings",
    titleKey: "settings_general_title",
    descKey: "settings_general_desc",
    route: "/super-admin/system-settings/general",
  },
  {
    key: "branding",
    icon: "palette",
    titleKey: "settings_branding_title",
    descKey: "settings_branding_desc",
    route: "/super-admin/system-settings/branding",
  },
  {
    key: "localization",
    icon: "language",
    titleKey: "settings_localization_title",
    descKey: "settings_localization_desc",
    route: "/super-admin/system-settings/localization",
  },
  {
    key: "notifications",
    icon: "notifications",
    titleKey: "settings_notifications_title",
    descKey: "settings_notifications_desc",
    route: "/super-admin/system-settings/notifications",
  },
  {
    key: "email",
    icon: "mail",
    titleKey: "settings_email_title",
    descKey: "settings_email_desc",
    route: "/super-admin/system-settings/email-smtp",
  },
  {
    key: "push",
    icon: "smartphone",
    titleKey: "settings_push_title",
    descKey: "settings_push_desc",
    route: "/super-admin/system-settings/push-notifications",
  },
  {
    key: "integrations",
    icon: "cable",
    titleKey: "settings_integrations_title",
    descKey: "settings_integrations_desc",
    route: "/super-admin/system-settings/integrations",
  },
];

export default function SystemSettings() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const dict = t[lang];

  return (
    <div className="p-10">
      {/* PAGE HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-slate-900">
          {dict.systemSettings}
        </h1>
        <p className="mt-1 text-slate-500 text-base">
          {dict.systemSettingsDesc}
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-x-6 gap-y-8">
        {settingsTiles.map(tile => (
          <div
            key={tile.key}
            onClick={() => navigate(tile.route)}
            className="
              group cursor-pointer
              flex flex-col justify-between
              rounded-xl bg-white
              p-6 h-[180px]
              border border-slate-200
              shadow-sm
              hover:border-slate-300
              hover:-translate-y-0.5
              transition-all
            "
          >
            <div className="flex flex-col gap-3">
              <span className="material-symbols-outlined text-3xl text-slate-400">
                {tile.icon}
              </span>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {dict[tile.titleKey]}
                </h3>
                <p className="text-sm text-slate-500 max-w-[220px]">
                  {dict[tile.descKey]}
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <span className="material-symbols-outlined text-transparent group-hover:text-slate-700 transition">
                arrow_forward
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
