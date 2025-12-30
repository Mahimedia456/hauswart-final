import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/i18n/translations";

export default function FacilityManagerProfileSidebar() {
  const { lang } = useLanguage();
  const dict = t[lang];
  const navigate = useNavigate();

  return (
    <div className="space-y-6">

      {/* IDENTITY CARD */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <div className="flex flex-col items-center text-center">
          <img
            src="https://i.pravatar.cc/150"
            className="h-24 w-24 rounded-full mb-4"
            alt="Profile"
          />

          <h2 className="text-lg font-bold">Ahsan Malik</h2>

          <span className="mt-1 px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-[#F38B14]">
            {dict.facilityManager}
          </span>

          <p className="text-sm text-slate-500 mt-2">
            ahsan@hauswart.com
          </p>

          <div className="w-full border-t my-4" />

          <Meta label={dict.phone} value="+1 (555) 012-3456" />
          <Meta label={dict.location} value="New York, NY" />
          <Meta label={dict.organization} value="Hauswart HQ" />
          <Meta label={dict.timezone} value="UTC −05:00" />

          <div className="mt-4 w-full space-y-2">
            <PrimaryButton
              onClick={() =>
                navigate("/facility-manager/profile/edit")
              }
            >
              {dict.edit_profile}
            </PrimaryButton>

            <SecondaryButton
              onClick={() =>
                navigate("/facility-manager/profile/security")
              }
            >
              {dict.change_password}
            </SecondaryButton>
          </div>
        </div>
      </div>

      {/* QUICK SETTINGS */}
      <div className="bg-white rounded-xl border border-slate-200 p-2">
        <QuickItem
          icon="notifications"
          title={dict.notifications}
          sub="Email & Push: On"
          onClick={() =>
            navigate("/facility-manager/profile/notifications")
          }
        />
        <QuickItem
          icon="tune"
          title={dict.preferences}
          sub="Language: EN"
          onClick={() =>
            navigate("/facility-manager/profile/edit")
          }
        />
        <QuickItem
          icon="security"
          title={dict.security}
          sub="2FA Enabled"
          onClick={() =>
            navigate("/facility-manager/profile/security")
          }
        />
        <QuickItem
          icon="domain"
          title={dict.default_property}
          sub="Grand Plaza"
          onClick={() =>
            navigate("/facility-manager/profile/edit")
          }
        />
      </div>

      {/* SUPPORT */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h3 className="font-semibold mb-2">{dict.need_help}</h3>
        <p className="text-sm text-slate-500 mb-4">
          {dict.support_desc}
        </p>
        <SecondaryButton
          icon="chat"
          onClick={() => navigate("/support")}
        >
          {dict.open_support}
        </SecondaryButton>
      </div>
    </div>
  );
}

/* HELPERS */

const Meta = ({ label, value }) => (
  <div className="flex justify-between w-full text-sm py-1">
    <span className="text-slate-500 uppercase text-xs font-medium">
      {label}
    </span>
    <span className="font-semibold text-slate-900">
      {value}
    </span>
  </div>
);

const QuickItem = ({ icon, title, sub, onClick }) => (
  <button
    onClick={onClick}
    className="w-full flex items-center justify-between px-4 py-3 hover:bg-slate-50 rounded-lg transition"
  >
    <div className="flex items-center gap-3">
      <div className="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center">
        <span className="material-symbols-outlined text-[18px]">
          {icon}
        </span>
      </div>
      <div className="text-left">
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-xs text-slate-500">{sub}</p>
      </div>
    </div>
    <span className="material-symbols-outlined text-slate-400">
      chevron_right
    </span>
  </button>
);

const PrimaryButton = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="w-full bg-[#F38B14] hover:bg-black text-white font-medium text-sm py-2.5 rounded-lg transition"
  >
    {children}
  </button>
);

const SecondaryButton = ({ children, icon, onClick }) => (
  <button
    onClick={onClick}
    className="w-full border border-slate-200 text-slate-900 font-medium text-sm py-2.5 rounded-lg hover:bg-slate-100 transition flex items-center justify-center gap-2"
  >
    {icon && (
      <span className="material-symbols-outlined text-sm">
        {icon}
      </span>
    )}
    {children}
  </button>
);
