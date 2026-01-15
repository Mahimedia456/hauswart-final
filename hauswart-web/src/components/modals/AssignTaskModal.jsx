import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/i18n/translations";

export default function AssignTaskModal({
  open,
  onClose,
  onSubmit,
  task,
  currentTechnician,
}) {
  const { lang } = useLanguage();
  const dict = t[lang];

  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("john");
  const [note, setNote] = useState("");
  const [notify, setNotify] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-[520px] bg-white rounded-xl shadow-xl p-6">

        {/* HEADER */}
        <div className="flex justify-between items-start mb-5">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              {dict.assign_task_title}
            </h1>
            <p className="text-sm text-slate-500">
              {dict.assign_task_subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-800"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* BODY */}
        <div className="flex flex-col gap-5">

          {/* REASSIGN INFO */}
          {currentTechnician && (
            <div className="flex items-start gap-3 bg-orange-50/70 border border-orange-100 rounded-lg p-3">
              <span className="material-symbols-outlined text-[#F38B14] mt-0.5">
                info
              </span>
              <p className="text-sm text-slate-600">
                {dict.reassign_warning}{" "}
                <strong>{currentTechnician}</strong>
              </p>
            </div>
          )}

          {/* TASK CONTEXT */}
          <div className="bg-slate-100/70 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2 text-xs font-semibold uppercase text-slate-500">
              <span>
                #{task?.id} • {dict.task_context}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-orange-100 text-orange-700">
                {dict[`priority_${task?.priority?.toLowerCase()}`] ||
                  dict.priority_high}
              </span>
            </div>

            <h3 className="font-bold text-slate-900">
              {task?.title}
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              {task?.property} • {task?.unit}
            </p>
          </div>

          {/* SEARCH */}
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-slate-700">
              {dict.select_technician} *
            </span>

            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                search
              </span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={dict.search_technician}
                className="w-full h-12 pl-10 pr-4 rounded-lg bg-slate-100 border border-transparent text-sm focus:ring-2 focus:ring-[#F38B14]/40"
              />
            </div>
          </label>

          {/* TECHNICIANS */}
          <div className="rounded-lg border divide-y overflow-hidden">

            {/* AVAILABLE */}
            <TechRow
              active
              selected={selected === "john"}
              onClick={() => setSelected("john")}
              avatar="https://randomuser.me/api/portraits/men/32.jpg"
              name="John Smith"
              meta={`3 ${dict.active_tasks} • ${dict.available}`}
            />

            {/* BUSY */}
            <TechRow
              selected={selected === "sarah"}
              onClick={() => setSelected("sarah")}
              avatar="https://randomuser.me/api/portraits/women/45.jpg"
              name="Sarah Lee"
              meta={`8 ${dict.active_tasks} • ${dict.busy}`}
            />

            {/* OFFLINE */}
            <div className="flex items-center gap-3 p-3 bg-slate-50 opacity-60 cursor-not-allowed">
              <div className="h-10 w-10 rounded-full bg-slate-300 flex items-center justify-center text-xs font-bold">
                MC
              </div>
              <div>
                <p className="text-sm font-medium">Mike Chen</p>
                <p className="text-xs text-slate-400">
                  {dict.offline}
                </p>
              </div>
            </div>
          </div>

          {/* NOTE */}
          <label className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium text-slate-700">
                {dict.additional_note}
              </span>
              <span className="text-xs text-slate-400">
                {dict.optional}
              </span>
            </div>

            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder={dict.assign_note_placeholder}
              className="w-full min-h-[80px] rounded-lg bg-slate-100 border border-transparent p-3 text-sm focus:ring-2 focus:ring-[#F38B14]/40"
            />
          </label>

          {/* NOTIFY */}
          <label className="flex gap-3 items-start cursor-pointer">
            <input
              type="checkbox"
              checked={notify}
              onChange={() => setNotify(!notify)}
              className="mt-1 accent-[#F38B14]"
            />
            <div>
              <p className="text-sm font-medium text-slate-800">
                {dict.notify_technician}
              </p>
              <p className="text-xs text-slate-500">
                {dict.notify_hint}
              </p>
            </div>
          </label>
        </div>

        {/* FOOTER */}
        <div className="flex justify-end gap-4 pt-6">
          <button
            onClick={onClose}
            className="text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            {dict.btn_cancel}
          </button>

          <button
            onClick={() =>
              onSubmit({
                technicianId: selected,
                note,
                notify,
              })
            }
            className="h-10 px-5 rounded-lg bg-[#F38B14] text-white font-semibold hover:bg-black"
          >
            {dict.btn_assign}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------------- SUB COMPONENT ---------------- */

function TechRow({ avatar, name, meta, selected, onClick, active }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between p-3 text-left transition
        ${selected ? "bg-orange-50" : "hover:bg-slate-50"}`}
    >
      <div className="flex items-center gap-3">
        <img src={avatar} className="h-10 w-10 rounded-full" />
        <div>
          <p className={`font-semibold ${active ? "" : "font-medium"}`}>
            {name}
          </p>
          <p className={`text-xs ${active ? "text-[#F38B14]" : "text-slate-500"}`}>
            {meta}
          </p>
        </div>
      </div>

      {selected && (
        <span className="material-symbols-outlined text-[#F38B14]">
          check_circle
        </span>
      )}
    </button>
  );
}
