// src/modules/superAdmin/components/SaTopbar.jsx
import { useState } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { t } from "../../../i18n/translations";
import { useNavigate } from "react-router-dom";

import NotificationDropdown from "@/modules/notifications/components/NotificationDropdown";
import { mockNotifications } from "@/modules/notifications/data/mockNotifications";

export default function SaTopbar() {
  const { lang, setLang } = useLanguage();
  const navigate = useNavigate();
  const dict = t[lang];

  const [openNotifications, setOpenNotifications] = useState(false);

  return (
    <header
      className="
        sticky top-4 z-30
        mx-4 mb-6
        rounded-2xl
        bg-white/70 backdrop-blur-xl
        border border-slate-200
        shadow-[0_8px_30px_rgba(0,0,0,0.05)]
        h-[72px]
        flex items-center justify-between
        px-6
      "
    >
      {/* LEFT */}
      <div className="flex flex-col">
        <span className="text-sm text-slate-500">{dict.superAdmin}</span>
        <h2 className="text-base font-semibold text-slate-900">
          {dict.dashboard}
        </h2>
      </div>

      {/* RIGHT CONTROLS */}
      <div className="relative flex items-center gap-4">

        {/* Search */}
        <div className="relative hidden md:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">
            search
          </span>
          <input
            className="
              h-10 w-80 pl-10 pr-3 rounded-xl
              bg-slate-100 border border-slate-200
              text-sm text-slate-700
              focus:ring-2 focus:ring-[#F38B14]
            "
            placeholder={dict.search}
          />
        </div>

        {/* 🔔 Notifications */}
        <button
          onClick={() => setOpenNotifications((v) => !v)}
          className="relative h-10 w-10 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200"
        >
          <span className="material-symbols-outlined text-[22px]">
            notifications
          </span>

          {mockNotifications.some((n) => !n.read) && (
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-[#F38B14]" />
          )}
        </button>

        {/* Notifications Dropdown */}
        <NotificationDropdown
          open={openNotifications}
          onClose={() => setOpenNotifications(false)}
          notifications={mockNotifications}
        />

        {/* ⚙️ Settings */}
        <button
          onClick={() => navigate("/super-admin/system-settings")}
          className="relative h-10 w-10 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200"
        >
          <span className="material-symbols-outlined text-[22px]">
            settings
          </span>
        </button>

        {/* Language Switch */}
        <div className="flex items-center rounded-xl bg-slate-100 border border-slate-200">
          <button
            onClick={() => setLang("EN")}
            className={`px-3 py-1.5 rounded-xl text-sm ${
              lang === "EN"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-600"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLang("DE")}
            className={`px-3 py-1.5 rounded-xl text-sm ${
              lang === "DE"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-600"
            }`}
          >
            DE
          </button>
        </div>

        {/* Profile */}
        <button
          onClick={() => navigate("/super-admin/profile")}
          className="flex items-center gap-3 rounded-xl bg-slate-100 py-1.5 px-2 hover:bg-slate-200"
        >
          <img
            src="https://i.pravatar.cc/100"
            className="h-9 w-9 rounded-full"
            alt="Profile"
          />
          <div className="hidden md:block text-sm">
            <p className="font-semibold text-slate-900">Jane Doe</p>
            <p className="text-slate-500 text-xs">{dict.superAdmin}</p>
          </div>
        </button>
      </div>
    </header>
  );
}