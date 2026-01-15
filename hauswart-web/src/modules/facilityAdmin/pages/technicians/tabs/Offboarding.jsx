import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";

/* ========================================================= */
/* DUMMY DATA — TEMP (REMOVE WHEN API IS READY)              */
/* ========================================================= */

const dummyUser = {
  name: "Eleanor Vance",
  email: "eleanor.vance@hauswart.com",
  avatar:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAccYXlCMFaOrLcDdglkhnsFKS4dLYK3IG15c3MLZACdjUB7_d-tZijSXilxhH9-SyDIaTIJqjqtdDOFzOf5cpRWA1muUWMr91QZ8Wt5GL6jWMF4kW7cQ-GVSmQWr6lCEXSxz3GTlw2M69tlmrexQzL2cPwW80k8_JZqbP6SpsGgeAIY1YKS9y8lgTKNQYo7XJbcefU4c_x3dzkLTDLyoyIdeU-doW2Vs46EzVekdW8CeXYHWIQ7RA2jrHoUngHcnCENfez1bozswE",
  role: "Facility Manager",
  status: "Active",
  organization: "HQ Division",
  lastActive: "2 hours ago",
  createdAt: "June 15, 2022",
  createdBy: "admin@hauswart.com",
};

const dummyTasks = [
  {
    id: "#TKT-8912",
    type: "Ticket",
    property: "Westwood Plaza",
    dueDate: "2024-08-15",
    assignees: ["Marcus Aurelius", "Jane Doe"],
  },
  {
    id: "#MNT-4351",
    type: "Maintenance",
    property: "Downtown Center",
    dueDate: "2024-08-22",
    assignees: ["Marcus Aurelius", "Jane Doe"],
  },
];

const dummyProperties = [
  {
    name: "Westwood Plaza",
    role: "Facility Manager",
    options: ["Marcus Aurelius"],
  },
  {
    name: "Downtown Center",
    role: "Technician",
    options: ["Jane Doe"],
  },
];

/* ========================================================= */
/* MAIN COMPONENT                                            */
/* ========================================================= */

export default function Offboarding() {
  const { lang } = useLanguage();
  const dict = t[lang];
  const user = dummyUser;

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-stone-900">
            {dict.offboarding_title}
          </h1>
          <p className="text-stone-500">
            {dict.offboarding_subtitle}
          </p>
        </div>

        <div className="flex gap-2">
          <button className="h-10 px-4 rounded-lg bg-[#F38B14] font-bold hover:bg-black hover:text-white">
            {dict.action_deactivate_user}
          </button>
          <button className="h-10 px-4 rounded-lg bg-stone-200 font-bold hover:bg-stone-300">
            {dict.action_archive_user}
          </button>
          <button className="h-10 px-4 rounded-lg text-red-600 font-bold hover:bg-red-600/10">
            {dict.action_delete_user}
          </button>
        </div>
      </header>

      {/* USER SUMMARY */}
      <div className="bg-white rounded-lg border p-6 flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full" />
          <div>
            <p className="font-bold text-lg">{user.name}</p>
            <p className="text-sm text-stone-500">{user.email}</p>
            <div className="flex gap-2 mt-1">
              <Badge text={user.role} color="blue" />
              <Badge text={user.status} color="green" />
              <Badge text={user.organization} />
            </div>
          </div>
        </div>
        <div className="text-sm text-right text-stone-600">
          <p>{dict.off_last_active}: {user.lastActive}</p>
          <p>{dict.off_account_created}: {user.createdAt}</p>
          <p>{dict.off_created_by}: {user.createdBy}</p>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">

          {/* DEACTIVATION */}
          <Card title={dict.off_choose_type}>
            <RadioCard title={dict.off_temp_suspension} description={dict.off_temp_suspension_desc}>
              <select className="mt-2 w-full max-w-xs rounded-md border p-2">
                <option>1 Day</option>
                <option>1 Week</option>
                <option>1 Month</option>
                <option>Indefinite</option>
              </select>
            </RadioCard>

            <RadioCard checked title={dict.off_full_deactivation} description={dict.off_full_deactivation_desc} />

            <RadioCard danger title={dict.off_permanent_deletion} description={dict.off_permanent_deletion_desc}>
              <div className="mt-3 flex items-center gap-2 rounded bg-red-100 p-3 text-sm text-red-700">
                <span className="material-symbols-outlined">warning</span>
                {dict.off_irreversible_warning}
              </div>
            </RadioCard>
          </Card>

          {/* TASKS */}
          <Card title={dict.off_reassign_tasks}>
            <p className="text-sm text-red-600 mb-3">{dict.off_reassign_warning}</p>

            <Table
              headers={[
                dict.table_task_id,
                dict.table_task_type,
                dict.table_property,
                dict.table_due_date,
                dict.table_reassign_to,
              ]}
              rows={dummyTasks}
            />
          </Card>

          {/* PROPERTIES */}
          <Card title={dict.off_property_cleanup}>
            {dummyProperties.map(p => (
              <PropertyRow key={p.name} {...p} />
            ))}
            <button className="text-sm font-bold text-[#F38B14] hover:underline mt-2">
              {dict.off_unassign_all}
            </button>
          </Card>

          {/* NOTES */}
          <Card title={dict.off_notes_docs}>
            <Label>{dict.off_reason_label}</Label>
            <textarea className="w-full rounded-md border p-2" rows={3} />

            <Label>{dict.off_upload_docs}</Label>
            <UploadBox />

            <Label>{dict.off_hr_comments}</Label>
            <textarea className="w-full rounded-md border p-2" rows={2} />
          </Card>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          <Card title={dict.off_access_removal}>
            {[
              dict.off_disable_login,
              dict.off_terminate_sessions,
              dict.off_revoke_tokens,
              dict.off_remove_roles,
              dict.off_remove_properties,
              dict.off_remove_org_access,
              dict.off_stop_notifications,
            ].map(i => <CheckRow key={i} label={i} />)}
          </Card>

          <Card title={dict.off_data_retention}>
            <RadioOption checked title={dict.off_retain_all} description={dict.off_retain_all_desc} />
            <RadioOption title={dict.off_anonymize_pii} description={dict.off_anonymize_pii_desc} />
            <RadioOption title={dict.off_full_anonymization} description={dict.off_full_anonymization_desc} />
          </Card>

          <Card title={dict.off_summary} sticky>
            <SummaryRow label={dict.off_deactivation_type} value="Full Deactivation" />
            <SummaryRow label={dict.off_tasks_reassigned} value="2 / 2" />
            <SummaryRow label={dict.off_properties_reassigned} value="2 / 2" />
            <SummaryRow label={dict.off_access_steps} value="7 complete" success />
            <SummaryRow label={dict.off_data_retention_label} value="Retain All" />

            <button className="mt-4 h-12 w-full rounded-lg bg-[#F38B14] font-bold hover:bg-black hover:text-white">
              {dict.action_review_confirm}
            </button>
          </Card>
        </div>
      </div>
    </div>
  );
}

/* ========================================================= */
/* REUSABLE COMPONENTS                                       */
/* ========================================================= */

function Card({ title, children, sticky }) {
  return (
    <div className={`bg-white rounded-lg border p-6 ${sticky ? "sticky top-8" : ""}`}>
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Badge({ text, color }) {
  const map = {
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
    default: "bg-stone-100 text-stone-700",
  };
  return <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${map[color] || map.default}`}>{text}</span>;
}

function RadioCard({ title, description, checked, danger, children }) {
  return (
    <label className={`block rounded-lg border p-4 cursor-pointer ${danger ? "border-red-400 bg-red-50" : ""}`}>
      <div className="flex gap-3">
        <input type="radio" defaultChecked={checked} />
        <div>
          <p className={`font-semibold ${danger ? "text-red-700" : ""}`}>{title}</p>
          <p className="text-sm text-stone-500">{description}</p>
          {children}
        </div>
      </div>
    </label>
  );
}

function Table({ headers, rows }) {
  return (
    <table className="w-full text-sm border">
      <thead className="bg-stone-50">
        <tr>{headers.map(h => <th key={h} className="p-2 text-left">{h}</th>)}</tr>
      </thead>
      <tbody>
        {rows.map(r => (
          <tr key={r.id} className="border-t">
            <td className="p-2">{r.id}</td>
            <td className="p-2">{r.type}</td>
            <td className="p-2">{r.property}</td>
            <td className="p-2">{r.dueDate}</td>
            <td className="p-2">
              <select className="w-full rounded-md border p-2">
                <option>Reassign To...</option>
                {r.assignees.map(a => <option key={a}>{a}</option>)}
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function PropertyRow({ name, role, options }) {
  return (
    <div className="grid grid-cols-3 gap-4 items-center bg-stone-50 p-3 rounded">
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm text-stone-500">{role}</p>
      </div>
      <select className="col-span-2 rounded-md border p-2">
        <option>Reassign To...</option>
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

function CheckRow({ label }) {
  return (
    <label className="flex justify-between items-center text-sm">
      <span>{label}</span>
      <input type="checkbox" defaultChecked />
    </label>
  );
}

function RadioOption({ title, description, checked }) {
  return (
    <label className="flex gap-3 p-3 border rounded-lg cursor-pointer">
      <input type="radio" defaultChecked={checked} />
      <div>
        <p className="font-semibold text-sm">{title}</p>
        <p className="text-xs text-stone-500">{description}</p>
      </div>
    </label>
  );
}

function SummaryRow({ label, value, success }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-stone-500">{label}</span>
      <span className={`font-medium ${success ? "text-green-600" : ""}`}>{value}</span>
    </div>
  );
}

function UploadBox() {
  return (
    <div className="border-2 border-dashed rounded-lg p-6 text-center text-sm text-stone-500">
      Upload file or drag & drop
    </div>
  );
}

function Label({ children }) {
  return <label className="block text-sm font-medium text-stone-700">{children}</label>;
}
