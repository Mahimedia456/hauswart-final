import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/i18n/translations";

export default function Overview() {
  const { lang } = useLanguage();
  const dict = t[lang];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

      {/* LEFT COLUMN */}
      <div className="lg:col-span-8 flex flex-col gap-6">

        {/* DESCRIPTION */}
        <Card title={dict.task_description}>
          <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>
              The central AC unit in Server Room B is emitting a loud rattling noise
              and is failing to maintain the set temperature of 20°C.
            </p>
            <p>
              Reported by tenant via mobile app. Please inspect the fan belt and
              bearings immediately.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            <Tag color="orange">{dict.emergency}</Tag>
            <Tag>{dict.hvac}</Tag>
            <Tag>{dict.tenant_reported}</Tag>
          </div>
        </Card>

        {/* LOCATION */}
        <Card title={dict.location}>
          <div className="flex flex-col md:flex-row gap-6">

            {/* MAP */}
            <div className="relative w-full md:w-1/3 h-40 rounded-xl bg-slate-100 border">
              <div className="absolute inset-0 bg-cover bg-center opacity-60" />
              <button className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-white text-xs font-bold shadow">
                {dict.open_map}
              </button>
            </div>

            {/* DETAILS */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Meta icon="apartment" label={dict.property} value="Skyline Tower" />
              <Meta icon="meeting_room" label={dict.building_floor} value="Main Building — Floor 12" />
              <Meta icon="grid_view" label={dict.unit_area} value="Server Room B" />
              <Meta icon="location_on" label={dict.address} value="123 Business Park Blvd, Metropolis" />
            </div>
          </div>
        </Card>

        {/* CHECKLIST */}
        <Card
          title={dict.checklist}
          right={<span className="text-sm text-slate-500">3 / 6</span>}
        >
          <Progress value={50} />

          <ChecklistItem done text="Isolate power supply" />
          <ChecklistItem done text="Lockout / Tagout procedure" />
          <ChecklistItem done text="Remove unit casing" />
          <ChecklistItem active text="Inspect fan belt tension" />
          <ChecklistItem text="Check bearings for wear" />
          <ChecklistItem text="Test run system" />
        </Card>
      </div>

      {/* RIGHT COLUMN */}
      <div className="lg:col-span-4 flex flex-col gap-6">

        {/* TECHNICIAN */}
        <SideCard title={dict.assigned_technician} action={dict.change}>
          <div className="flex items-center gap-4">
            <Avatar />
            <div>
              <p className="font-bold">Mike Builder</p>
              <StatusPill text={dict.on_duty} />
            </div>
          </div>

          <Divider />

          <SmallMeta icon="event_available" text={`${dict.assigned_at}: Oct 24, 09:05`} />
        </SideCard>

        {/* TIMING */}
        <SideCard title={dict.task_timing}>
          <TimingRow label={dict.created_at} value="Oct 24, 09:00" />
          <TimingRow label={dict.started_at} value="Oct 24, 09:30" />
          <TimingRow label={dict.due_date} value="Oct 24, 17:00" />
          <TimingRow
            label={dict.sla_status}
            value={`${dict.sla_risk} (1h)`}
            danger
          />
        </SideCard>

        {/* PRIORITY */}
        <SideCard title={dict.priority_rules}>
          <GridMeta label={dict.priority} value={dict.high} icon="flag" />
          <GridMeta label={dict.sla_level} value="Gold" icon="verified" />
          <GridMeta label={dict.auto_close} value={dict.disabled} icon="toggle_off" />
          <GridMeta label={dict.tenant_visible} value={dict.yes} icon="visibility" />
        </SideCard>

        {/* HELP */}
        <div className="rounded-xl border border-dashed p-4 text-sm text-slate-600">
          {dict.need_help}{" "}
          <span className="text-[#F38B14] font-semibold cursor-pointer">
            {dict.view_sop}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------------- UI HELPERS ---------------- */

function Card({ title, right, children }) {
  return (
    <div className="bg-white rounded-xl border p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-lg">{title}</h3>
        {right}
      </div>
      {children}
    </div>
  );
}

function SideCard({ title, action, children }) {
  return (
    <div className="bg-white rounded-xl border p-5 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-bold text-sm">{title}</h4>
        {action && <button className="text-xs text-[#F38B14] font-bold">{action}</button>}
      </div>
      {children}
    </div>
  );
}

function Tag({ children, color }) {
  const styles = color === "orange"
    ? "bg-orange-100 text-orange-800"
    : "bg-slate-100 text-slate-700";
  return <span className={`px-3 py-1 rounded-full text-xs font-medium ${styles}`}>{children}</span>;
}

function Meta({ icon, label, value }) {
  return (
    <div>
      <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase">
        <span className="material-symbols-outlined text-[18px]">{icon}</span>
        {label}
      </div>
      <p className="pl-6 font-semibold">{value}</p>
    </div>
  );
}

function ChecklistItem({ done, active, text }) {
  return (
    <div className={`flex items-start gap-3 p-2 rounded-lg ${active ? "bg-orange-50 border" : ""}`}>
      <span className="material-symbols-outlined text-[20px]">
        {done ? "check_circle" : "radio_button_unchecked"}
      </span>
      <span className={`${done ? "line-through text-slate-400" : ""} text-sm`}>
        {text}
      </span>
    </div>
  );
}

function Progress({ value }) {
  return (
    <div className="w-full bg-slate-100 rounded-full h-2 mb-4">
      <div className="bg-[#F38B14] h-2 rounded-full" style={{ width: `${value}%` }} />
    </div>
  );
}

function Avatar() {
  return <div className="h-12 w-12 rounded-full bg-slate-200" />;
}

function StatusPill({ text }) {
  return (
    <span className="inline-flex px-2 py-0.5 rounded bg-green-100 text-green-800 text-[10px] font-bold uppercase">
      {text}
    </span>
  );
}

function Divider() {
  return <div className="my-4 border-t" />;
}

function SmallMeta({ icon, text }) {
  return (
    <div className="flex items-center gap-2 text-xs text-slate-500">
      <span className="material-symbols-outlined text-[16px]">{icon}</span>
      {text}
    </div>
  );
}

function TimingRow({ label, value, danger }) {
  return (
    <div className="flex justify-between text-sm border-b py-2">
      <span className="uppercase text-xs font-bold text-slate-400">{label}</span>
      <span className={`${danger ? "text-red-600 font-bold" : ""}`}>{value}</span>
    </div>
  );
}

function GridMeta({ label, value, icon }) {
  return (
    <div className="p-3 rounded-lg border bg-slate-50">
      <span className="text-[10px] font-bold uppercase text-slate-400">{label}</span>
      <div className="flex items-center gap-1 font-bold text-sm">
        <span className="material-symbols-outlined text-[16px]">{icon}</span>
        {value}
      </div>
    </div>
  );
}
