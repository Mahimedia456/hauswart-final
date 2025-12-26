import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/i18n/translations";

export default function GeneralSettings() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const dict = t[lang];

  const inputBase =
    "w-full h-11 rounded-xl bg-slate-100 border border-slate-200 px-4 text-sm text-slate-900 " +
    "focus:ring-2 focus:ring-[#F38B14] focus:border-[#F38B14] outline-none";

  return (
    <div className="w-full">

      {/* HEADER */}
      <div className="mb-8">
        <button
          onClick={() => navigate("/super-admin/system-settings")}
          className="mb-2 flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700"
        >
          <span className="material-symbols-outlined text-base">
            arrow_back
          </span>
          {dict.systemSettings}
        </button>

        <h1 className="text-3xl font-semibold text-slate-900">
          {dict.generalSettings}
        </h1>
        <p className="mt-1 text-slate-500">
          {dict.generalSettingsDesc}
        </p>
      </div>

      {/* CARD */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 w-full">

        {/* SECTION HEADER */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900">
            {dict.systemConfiguration}
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            {dict.systemConfigurationDesc}
          </p>
        </div>

        {/* FORM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">

          {/* SYSTEM NAME */}
          <div className="md:col-span-2 flex flex-col gap-2">
            <label className="text-sm text-slate-600">
              {dict.systemName}
            </label>
            <input
              className={inputBase}
              placeholder={dict.systemNamePlaceholder}
            />
          </div>

          <div className="md:col-span-2 my-2">
            <hr className="border-slate-200" />
          </div>

          {/* TIMEZONE */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-slate-600">
              {dict.defaultTimezone}
            </label>
            <select className={inputBase}>
              <option>UTC +04:00 — Dubai</option>
              <option>UTC +00:00 — London</option>
              <option>UTC -05:00 — New York</option>
            </select>
          </div>

          {/* LANGUAGE */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-slate-600">
              {dict.defaultLanguage}
            </label>
            <select className={inputBase}>
              <option>English</option>
              <option>German</option>
              <option>Arabic</option>
            </select>
          </div>

          {/* DATE FORMAT */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-slate-600">
              {dict.dateFormat}
            </label>
            <select className={inputBase}>
              <option>DD/MM/YYYY</option>
              <option>MM/DD/YYYY</option>
              <option>YYYY-MM-DD</option>
            </select>
          </div>

          {/* TIME FORMAT */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-slate-600">
              {dict.timeFormat}
            </label>
            <select className={inputBase}>
              <option>24-hour</option>
              <option>12-hour</option>
            </select>
          </div>

          {/* CURRENCY */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-slate-600">
              {dict.currency}
            </label>
            <select className={inputBase}>
              <option>AED (United Arab Emirates Dirham)</option>
              <option>USD (United States Dollar)</option>
              <option>EUR (Euro)</option>
            </select>
          </div>

          {/* NUMBER FORMAT */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-slate-600">
              {dict.numberFormat}
            </label>
            <select className={inputBase}>
              <option>1,234.56</option>
              <option>1.234,56</option>
              <option>1 234,56</option>
            </select>
          </div>

          {/* WEEK START */}
          <div className="md:col-span-2 flex flex-col gap-2">
            <label className="text-sm text-slate-600">
              {dict.weekStartDay}
            </label>
            <select className={`${inputBase} md:w-1/2`}>
              <option>Monday</option>
              <option>Sunday</option>
            </select>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="mt-10 flex items-center gap-6">
          <button className="h-11 px-6 rounded-xl bg-[#F38B14] text-white text-sm font-medium hover:bg-black transition">
            {dict.saveSettings}
          </button>
          <button
            onClick={() => navigate("/super-admin/system-settings")}
            className="text-sm text-slate-500 hover:text-slate-700"
          >
            {dict.cancel}
          </button>
        </div>
      </div>
    </div>
  );
}
