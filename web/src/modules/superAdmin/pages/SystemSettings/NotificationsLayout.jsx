import { Outlet, useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/i18n/translations";

export default function NotificationsLayout() {
  const { lang } = useLanguage();
  const dict = t[lang];
  const navigate = useNavigate();

  return (
    <div className="w-full p-8">
      {/* Back */}
      <button
        onClick={() => navigate("/super-admin/system-settings")}
        className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-3"
      >
        <span className="material-symbols-outlined">arrow_back</span>
        {dict.systemSettings}
      </button>

      {/* Header */}
      <h1 className="text-3xl font-semibold text-gray-900">
        {dict.notificationTemplates}
      </h1>
      <p className="text-gray-500 mt-1 mb-6">
        {dict.notificationTemplatesDesc}
      </p>

      {/* CHILD ROUTES */}
      <Outlet />
    </div>
  );
}
