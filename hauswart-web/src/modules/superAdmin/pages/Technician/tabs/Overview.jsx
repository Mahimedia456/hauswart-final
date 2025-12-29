import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";

export default function UserOverview() {
  const { lang } = useLanguage();
  const dict = t[lang];

  // TEMP MOCK DATA (replace with API later)
  const user = {
    name: "Jordan Smith",
    email: "jordan.smith@hauswart.com",
    phone: "+1 234 567 890",
    role: "Technician",
    status: "Active",
    joined: "Oct 15, 2021",
    lastLogin: "Today, 9:45 AM",
    mfa: "Yes",
    organization: "Global Facilities Inc.",
    properties: [
      "Downtown Tower (Floors 5–10)",
      "Westside Complex (All Units)",
      "Northgate Plaza",
    ],
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

      {/* LEFT COLUMN */}
      <div className="xl:col-span-2 space-y-6">

        {/* BASIC INFORMATION */}
        <Card
          title={dict.user_overview_basic}
          action={dict.action_edit_information}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">

            <Info label={dict.user_full_name} value={user.name} />
            <Info label={dict.user_email} value={user.email} />

            <Info label={dict.user_phone} value={user.phone} />
            <Info label={dict.user_role} value={user.role} />

            <Info
              label={dict.user_status}
              value={
                <span className="text-green-600 font-semibold">
                  {user.status}
                </span>
              }
            />
            <Info label={dict.user_joined_date} value={user.joined} />

            <Info label={dict.user_last_login} value={user.lastLogin} />
            <Info label={dict.user_mfa_enabled} value={user.mfa} />

          </div>
        </Card>

        {/* ORGANIZATION & PROPERTY ACCESS */}
        <Card
          title={dict.user_overview_access}
          action={dict.action_edit_access}
        >
          <div className="space-y-4 text-sm">
            <Info
              label={dict.user_organization}
              value={user.organization}
            />

            <div>
              <p className="text-gray-500 mb-1">
                {dict.user_assigned_properties}
              </p>
              <ul className="list-disc pl-5 space-y-1">
                {user.properties.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        </Card>

      </div>

      {/* RIGHT COLUMN */}
      <div className="space-y-6">

        {/* QUICK ACTIONS */}
        <Card title={dict.user_quick_actions}>
          <div className="space-y-2">
            <ActionButton>{dict.action_reset_password}</ActionButton>
            <ActionButton danger>
              {dict.action_deactivate_user}
            </ActionButton>
            <ActionButton>{dict.action_view_audit_log}</ActionButton>
            <ActionButton>{dict.action_download_report}</ActionButton>
          </div>
        </Card>

        {/* RECENT ACTIVITY */}
        <Card
          title={dict.user_recent_activity}
          action={dict.action_view_full_log}
        >
          <ul className="space-y-3 text-sm">
            <ActivityItem
              text="Completed Ticket #1023"
              time="5 minutes ago"
            />
            <ActivityItem
              text="Checked in at Downtown Tower"
              time="2 hours ago"
            />
            <ActivityItem
              text="Uploaded inspection photo"
              time="4 hours ago"
            />
          </ul>
        </Card>

        {/* UPCOMING ASSIGNMENTS */}
        <Card title={dict.user_upcoming_assignments}>
          <ul className="space-y-3 text-sm">
            <AssignmentItem
              title="Ticket #1023 – HVAC Inspection"
              meta="Due Today · Downtown Tower"
            />
            <AssignmentItem
              title="Maintenance Routine"
              meta="Due Tomorrow · Westside Complex"
            />
          </ul>
        </Card>

      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* SMALL UI PARTS                                                      */
/* ------------------------------------------------------------------ */

function Card({ title, action, children }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-base font-bold">{title}</h3>
        {action && (
          <button className="text-sm font-semibold text-[#F38B14] hover:underline">
            {action}
          </button>
        )}
      </div>
      {children}
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-gray-500">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}

function ActionButton({ children, danger }) {
  return (
    <button
      className={`
        w-full text-left px-4 py-2 rounded-lg text-sm font-semibold
        ${danger
          ? "bg-red-50 text-red-700 hover:bg-red-100"
          : "bg-gray-100 hover:bg-gray-200"}
      `}
    >
      {children}
    </button>
  );
}

function ActivityItem({ text, time }) {
  return (
    <li className="flex justify-between gap-3">
      <span>{text}</span>
      <span className="text-gray-400 text-xs">{time}</span>
    </li>
  );
}

function AssignmentItem({ title, meta }) {
  return (
    <li className="bg-gray-50 rounded-lg p-3">
      <p className="font-semibold">{title}</p>
      <p className="text-xs text-gray-500">{meta}</p>
    </li>
  );
}
