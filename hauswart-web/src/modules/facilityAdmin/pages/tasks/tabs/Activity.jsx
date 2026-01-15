import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/i18n/translations";

export default function Activity() {
  const { lang } = useLanguage();
  const dict = t[lang];
  const [filter, setFilter] = useState("all");

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div>
        <h2 className="text-2xl font-bold">{dict.activity_timeline}</h2>
        <p className="text-sm text-slate-500">
          {dict.task} #4092 — HVAC Unit 3 Maintenance
        </p>
      </div>

      {/* FILTER BAR */}
      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b -mx-6 px-6 py-3">
        <div className="flex gap-2 overflow-x-auto">
          {FILTERS(dict).map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`h-8 px-4 rounded-full text-xs font-semibold uppercase whitespace-nowrap
                ${
                  filter === f.id
                    ? "bg-[#F38B14] text-white"
                    : "border border-slate-300 text-slate-600 hover:border-[#F38B14] hover:text-[#F38B14]"
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* TIMELINE */}
      <div className="relative pl-6">

        {/* VERTICAL LINE */}
        <div className="absolute left-[18px] top-0 bottom-0 w-[2px] bg-slate-200" />

        {/* TODAY */}
        <DateLabel>{dict.today}</DateLabel>

        <TimelineEvent
          icon="image"
          color="orange"
          title={dict.photo_uploaded}
          time="10:45 AM"
          user="Alex Kowalski"
          role={dict.technician}
          media
        />

        <TimelineEvent
          icon="update"
          color="blue"
          title={dict.status_update}
          time="09:30 AM"
          user="Alex Kowalski"
          role={dict.technician}
        >
          <p className="text-sm text-slate-600">
            {dict.changed_status_from}{" "}
            <Badge>Assigned</Badge>{" "}
            →{" "}
            <Badge tone="blue">In Progress</Badge>
          </p>
        </TimelineEvent>

        {/* YESTERDAY */}
        <DateLabel>{dict.yesterday}</DateLabel>

        <TimelineEvent
          icon="sticky_note_2"
          color="yellow"
          title={dict.manager_note}
          time="4:00 PM"
          user="Sarah Jenkins"
          role={dict.facility_manager}
          roleTone="purple"
        >
          <p className="text-sm text-slate-700 leading-relaxed">
            Please ensure the intake filters on Unit 3 are checked for dust
            accumulation. We had a complaint about airflow on the 3rd floor.
          </p>
        </TimelineEvent>

        <TimelineEvent
          icon="add_task"
          color="gray"
          title={dict.task_created}
          time="9:00 AM"
          user={dict.system}
        >
          <p className="text-sm text-slate-500">
            {dict.task_generated_via}{" "}
            <strong>{dict.maintenance_schedule}</strong>
          </p>
        </TimelineEvent>

        {/* START */}
        <div className="pl-12 pt-6 flex items-center gap-2 text-xs text-slate-400 uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
          {dict.start_of_history}
        </div>
      </div>
    </div>
  );
}

/* ---------------- UI PARTS ---------------- */

function FILTERS(dict) {
  return [
    { id: "all", label: dict.all },
    { id: "system", label: dict.system },
    { id: "technician", label: dict.technician },
    { id: "manager", label: dict.manager },
    { id: "status", label: dict.status_changes },
    { id: "notes", label: dict.notes },
    { id: "media", label: dict.media },
  ];
}

function DateLabel({ children }) {
  return (
    <div className="relative z-10 mb-6 pl-12">
      <span className="px-2 py-1 text-xs font-medium rounded bg-slate-100 text-slate-600">
        {children}
      </span>
    </div>
  );
}

function TimelineEvent({
  icon,
  color,
  title,
  time,
  user,
  role,
  roleTone = "gray",
  media,
  children,
}) {
  return (
    <div className="relative mb-8 pl-12">

      {/* NODE */}
      <div
        className={`absolute left-[9px] top-4 h-9 w-9 rounded-full flex items-center justify-center
        bg-${color}-50 border border-${color}-200 ring-4 ring-white`}
      >
        <span className="material-symbols-outlined text-[18px] text-[#F38B14]">
          {icon}
        </span>
      </div>

      {/* CARD */}
      <div className="bg-white border rounded-xl p-5 shadow-sm space-y-3">
        <div className="flex justify-between">
          <h3 className="font-bold">{title}</h3>
          <span className="text-xs text-slate-400">{time}</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <Avatar />
          <span className="font-medium text-slate-700">{user}</span>
          {role && (
            <RolePill tone={roleTone}>{role}</RolePill>
          )}
        </div>

        {children}

        {media && (
          <div className="mt-3 max-w-sm rounded-lg overflow-hidden border">
            <div className="aspect-video bg-slate-200 flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl text-slate-400">
                image
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Avatar() {
  return <div className="h-5 w-5 rounded-full bg-slate-300" />;
}

function RolePill({ children, tone = "gray" }) {
  const map = {
    gray: "bg-slate-100 text-slate-600",
    purple: "bg-purple-100 text-purple-700",
  };
  return (
    <span className={`px-1.5 py-0.5 text-[10px] rounded ${map[tone]}`}>
      {children}
    </span>
  );
}

function Badge({ children, tone = "gray" }) {
  const map = {
    gray: "bg-slate-100 text-slate-600",
    blue: "bg-blue-100 text-blue-700",
  };
  return (
    <span className={`px-2 py-0.5 text-xs rounded ${map[tone]}`}>
      {children}
    </span>
  );
}
