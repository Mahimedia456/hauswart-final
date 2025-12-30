import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/i18n/translations";

/* ================================================= */
/* MAIN COMPONENT */
/* ================================================= */

export default function FacilityManagerProfile() {
  const { lang } = useLanguage();
  const dict = t[lang];
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto space-y-6">

      {/* PAGE HEADER */}
      <div>
        <h1 className="text-xl font-bold text-slate-900">
          {dict.fm_profile_title}
        </h1>
      </div>

      {/* IDENTITY SUMMARY */}
      <Card>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          <div className="flex items-center gap-5">
            <img
              src="https://i.pravatar.cc/150"
              className="h-20 w-20 rounded-full"
              alt="Profile"
            />

            <div>
              <h2 className="text-lg font-bold">
                Ahsan Malik
              </h2>

              <span className="inline-block mt-1 px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-[#F38B14]">
                {dict.facilityManager}
              </span>

              <p className="text-sm text-slate-500 mt-2">
                ahsan@hauswart.com
              </p>
            </div>
          </div>

          <div className="flex gap-3">
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
      </Card>

      {/* ACCOUNT DETAILS */}
      <Card
        title={dict.account_details}
        action={dict.edit_details}
        onAction={() =>
          navigate("/facility-manager/profile/edit")
        }
      >
        <TwoCol label={dict.full_name} value="Ahsan Malik" />
        <TwoCol label={dict.role} value={dict.facilityManager} />
        <TwoCol label={dict.email} value="ahsan@hauswart.com" />
        <TwoCol label={dict.phone} value="+1 (555) 012-3456" />
        <TwoCol
          label={dict.organization}
          value="Hauswart Real Estate Group"
        />
        <TwoCol
          label={dict.timezone}
          value="UTC −05:00"
        />
        <TwoCol
          label={dict.status}
          value={
            <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
              Active
            </span>
          }
        />
      </Card>

      {/* QUICK ACCESS */}
      <Card title={dict.quick_settings}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              navigate("/facility-manager/properties")
            }
          />
        </div>
      </Card>

      {/* RECENT ACTIVITY */}
      <Card
        title={dict.recent_activity}
        action={dict.view_log}
        onAction={() =>
          navigate("/facility-manager/profile/activity")
        }
      >
        <ActivityItem
          title="Updated property settings"
          meta="2 minutes ago • Grand Plaza"
        />
        <ActivityItem
          title="Login successful"
          meta="2 hours ago"
        />
        <ActivityItem
          title="Completed Task #4291"
          meta="Yesterday"
        />
      </Card>

      {/* DANGER ZONE */}
      <Card danger title={dict.danger_zone}>
        <p className="text-sm text-slate-500 mb-4">
          {dict.danger_desc}
        </p>

        <DangerButton
          icon="logout"
          onClick={() => navigate("/logout")}
        >
          {dict.sign_out_all}
        </DangerButton>

        <DangerButton
          disabled
          icon="delete_forever"
        >
          {dict.deactivate_request}
        </DangerButton>
      </Card>

    </div>
  );
}

/* ================================================= */
/* HELPERS */
/* ================================================= */

const Card = ({ title, action, onAction, children, danger }) => (
  <div
    className={`bg-white rounded-xl border p-6 space-y-4 ${
      danger ? "border-red-200" : "border-slate-200"
    }`}
  >
    {(title || action) && (
      <div className="flex items-center justify-between">
        <h3 className={`font-semibold ${danger ? "text-red-600" : ""}`}>
          {title}
        </h3>

        {action && (
          <button
            onClick={onAction}
            className="text-sm text-[#F38B14] hover:underline"
          >
            {action}
          </button>
        )}
      </div>
    )}
    {children}
  </div>
);

const TwoCol = ({ label, value }) => (
  <div className="space-y-1">
    <p className="text-xs uppercase text-slate-500 font-medium">
      {label}
    </p>
    <div className="text-sm font-semibold text-slate-900">
      {value}
    </div>
    <div className="h-px bg-slate-100 mt-2" />
  </div>
);

const QuickItem = ({ icon, title, sub, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center justify-between px-4 py-3 rounded-lg border hover:bg-slate-50 transition"
  >
    <div className="flex items-center gap-3">
      <span className="material-symbols-outlined text-[18px] text-slate-600">
        {icon}
      </span>
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
    className="bg-[#F38B14] hover:bg-black text-white font-medium text-sm px-5 py-2.5 rounded-lg transition"
  >
    {children}
  </button>
);

const SecondaryButton = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="border border-slate-200 text-slate-900 font-medium text-sm px-5 py-2.5 rounded-lg hover:bg-slate-100 transition"
  >
    {children}
  </button>
);

const DangerButton = ({ children, icon, disabled, onClick }) => (
  <button
    disabled={disabled}
    onClick={onClick}
    className={`w-full py-2.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2 ${
      disabled
        ? "bg-red-50 text-red-300 cursor-not-allowed"
        : "border border-red-200 text-red-600 hover:bg-red-50"
    }`}
  >
    {icon && (
      <span className="material-symbols-outlined text-sm">
        {icon}
      </span>
    )}
    {children}
  </button>
);

const ActivityItem = ({ title, meta }) => (
  <div className="relative pl-6">
    <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-[#F38B14]" />
    <p className="text-sm font-semibold">{title}</p>
    <p className="text-xs text-slate-500 mt-0.5">{meta}</p>
  </div>
);
