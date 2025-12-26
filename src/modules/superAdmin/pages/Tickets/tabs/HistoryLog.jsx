import { useState } from "react";
import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";

export default function HistoryLog() {
  const { lang } = useLanguage();
  const dict = t[lang];

  // ---------------------------------------------------
  // Dummy History Events
  // ---------------------------------------------------
  const events = [
    {
      id: 1,
      type: "sla",
      color: "bg-red-500",
      icon: "timer_off",
      title: dict.slaBreach,
      time: "12 Nov 2025 — 4:32 PM",
      performer: "System Automation",
      description: `${dict.slaFirstResponse} breached by 2h 15m.`,
      badge: dict.firstResponseTime,
    },
    {
      id: 2,
      type: "status",
      color: "bg-[#F38B14]",
      icon: "change_circle",
      title: dict.statusChanged,
      time: "12 Nov 2025 — 2:17 PM",
      performer: "John Mills (Technician)",
      statusFrom: "In Progress",
      statusTo: "On Hold",
    },
    {
      id: 3,
      type: "attachment",
      color: "bg-blue-500",
      icon: "attachment",
      title: dict.attachmentUploaded,
      time: "12 Nov 2025 — 11:05 AM",
      performer: "Sarah Lee (Facility Manager)",
      files: [
        {
          name: "leaking_pipe.jpg",
          preview:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCAD3leJ7I5Kh1nTVv...",
        },
        {
          name: "invoice_345.pdf",
          preview: null,
          isPDF: true,
        },
      ],
    },
    {
      id: 4,
      type: "created",
      color: "bg-gray-500",
      icon: "add_circle",
      title: dict.ticketCreated,
      time: "11 Nov 2025 — 9:00 AM",
      performer: "Jane Doe (Tenant)",
      subject: "Leaking pipe under kitchen sink",
      message:
        "There's a constant drip from the pipe under my kitchen sink. It's been getting worse over the last day.",
    },
  ];

  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="flex gap-6">

      {/* LEFT SECTION — Timeline */}
      <div className="flex-1 flex flex-col gap-6">

        {/* PAGE HEADER */}
        <header className="flex justify-between items-center pb-4">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900">
              {dict.ticketHistoryLog}
            </h1>
            <p className="text-neutral-500">{dict.historySubtitle}</p>
          </div>

          <div className="flex gap-3">
            <button className="h-10 px-4 text-sm font-semibold flex items-center text-neutral-500">
              <span className="material-symbols-outlined mr-1">arrow_back</span>
              {dict.backToTicket}
            </button>

            <button className="h-10 px-4 text-sm font-semibold border rounded-lg bg-white border-neutral-200 hover:bg-neutral-100">
              {dict.exportLog}
            </button>

            <button className="h-10 px-4 text-sm font-bold rounded-lg bg-[#F38B14] text-white hover:bg-primary/90">
              {dict.filterEvents}
            </button>
          </div>
        </header>

        {/* FILTER BAR */}
        <div className="p-4 bg-white rounded-xl border border-neutral-200 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">

            {/* Performed By */}
            <label className="flex flex-col">
              <p className="text-sm font-medium pb-1">{dict.performedBy}</p>
              <select className="h-10 rounded-lg bg-neutral-100 border neutral-200 text-sm">
                <option>{dict.allUsers}</option>
                <option>{dict.tenant}</option>
                <option>{dict.technician}</option>
                <option>{dict.admin}</option>
              </select>
            </label>

            {/* Date Range */}
            <label className="flex flex-col">
              <p className="text-sm font-medium pb-1">{dict.dateRange}</p>
              <input type="date" className="h-10 rounded-lg bg-neutral-100 border text-sm" />
            </label>

            {/* Impact Level */}
            <label className="flex flex-col">
              <p className="text-sm font-medium pb-1">{dict.impactLevel}</p>
              <select className="h-10 rounded-lg bg-neutral-100 border text-sm">
                <option>{dict.allLevels}</option>
                <option>{dict.low}</option>
                <option>{dict.medium}</option>
                <option>{dict.high}</option>
              </select>
            </label>

            {/* Search */}
            <div className="relative">
              <p className="invisible">Search</p>
              <span className="material-symbols-outlined absolute left-3 top-3 text-neutral-500">
                search
              </span>
              <input
                placeholder={dict.searchHistory}
                className="pl-10 h-10 w-full rounded-lg bg-neutral-100 border text-sm"
              />
            </div>
          </div>

          {/* EVENT TYPE FILTER BUTTONS */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium">{dict.eventType}:</span>
            {[
              dict.created,
              dict.assignmentChange,
              dict.statusChange,
              dict.noteAdded,
              dict.slaEvent,
            ].map((label, i) => (
              <button
                key={i}
                className="h-8 px-3 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-medium"
              >
                {label}
              </button>
            ))}
            <button className="ml-auto text-sm text-neutral-500 hover:text-primary">
              {dict.clearFilters}
            </button>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="relative pl-8">

          {/* Vertical line */}
          <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-neutral-200"></div>

          <div className="space-y-4">
            {events.map((ev) => (
              <div key={ev.id} className="relative cursor-pointer group" onClick={() => setSelectedEvent(ev)}>

                {/* DOT */}
                <div
                  className={`absolute -left-5 top-3 h-3 w-3 rounded-full ${ev.color} border-2 border-white`}
                ></div>

                {/* CARD */}
                <div className="bg-white border border-neutral-200 shadow-sm rounded-lg p-4">
                  <header className="flex justify-between pb-2">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">{ev.icon}</span>
                      <h3 className="font-semibold">{ev.title}</h3>
                    </div>
                    <p className="text-xs text-neutral-500">{ev.time}</p>
                  </header>

                  <div className="border-b my-2"></div>

                  {/* CONTENT TYPES */}
                  {ev.type === "sla" && (
                    <>
                      <p className="text-sm text-neutral-500 pb-2">
                        {dict.performedBy}: {ev.performer}
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-800 text-xs font-medium">
                          {ev.badge}
                        </span>
                        {ev.description}
                      </div>
                    </>
                  )}

                  {ev.type === "status" && (
                    <>
                      <p className="text-sm text-neutral-500 pb-2">
                        {dict.performedBy}: {ev.performer}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-neutral-100 rounded-full text-xs">
                          {ev.statusFrom}
                        </span>
                        <span className="material-symbols-outlined text-neutral-500 text-base">
                          arrow_forward
                        </span>
                        <span className="px-2 py-0.5 bg-yellow-100 rounded-full text-xs">
                          {ev.statusTo}
                        </span>
                      </div>
                    </>
                  )}

                  {ev.type === "attachment" && (
                    <>
                      <p className="text-sm text-neutral-500 pb-2">
                        {dict.performedBy}: {ev.performer}
                      </p>
                      <div className="flex gap-4">
                        {ev.files.map((f, i) => (
                          <div key={i} className="flex items-center gap-2 border p-2 rounded-lg flex-1">
                            {f.isPDF ? (
                              <div className="w-10 h-10 flex items-center justify-center bg-neutral-100 rounded">
                                <span className="material-symbols-outlined text-red-500">
                                  picture_as_pdf
                                </span>
                              </div>
                            ) : (
                              <div
                                className="w-10 h-10 bg-cover bg-center rounded"
                                style={{ backgroundImage: `url(${f.preview})` }}
                              ></div>
                            )}
                            <div className="text-sm">
                              <p className="font-medium">{f.name}</p>
                              <a className="text-primary text-xs" href="#">
                                {dict.download}
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {ev.type === "created" && (
                    <>
                      <p className="text-sm text-neutral-500 pb-2">
                        {dict.performedBy}: {ev.performer}
                      </p>
                      <div className="p-3 rounded-lg bg-neutral-100/50">
                        <p className="font-medium">{dict.subject}: {ev.subject}</p>
                        <p className="text-neutral-600 mt-1">"{ev.message}"</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT PANEL — Metadata Inspector */}
      <aside className="w-96 flex-shrink-0">
        <div className="sticky top-8 bg-white p-4 rounded-lg border shadow-sm h-[600px]">
          <h3 className="text-lg font-bold mb-3">{dict.auditInspector}</h3>
          {!selectedEvent ? (
            <p className="text-neutral-500 text-center mt-20">{dict.selectEvent}</p>
          ) : (
            <pre className="text-xs bg-neutral-100 p-4 rounded-lg overflow-auto h-full">
              {JSON.stringify(selectedEvent, null, 2)}
            </pre>
          )}
        </div>
      </aside>
    </div>
  );
}
