export default function TicketDrawer({ ticket, onClose }) {
  return (
    <div className="fixed inset-y-0 right-0 z-40 w-full max-w-md bg-white shadow-2xl">
      <div className="flex h-full flex-col">

        {/* HEADER */}
        <div className="border-b p-4 flex items-start justify-between">
          <div>
            <h2 className="text-lg font-semibold">{ticket.id}</h2>
            <p className="text-sm text-blue-600">{ticket.category}</p>
          </div>

          <button
            onClick={onClose}
            className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* CONTENT */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">

          <Section label="Status">
            <Badge tone={ticket.statusTone}>{ticket.status}</Badge>
          </Section>

          <Section label="Property">
            <p>{ticket.property}</p>
          </Section>

          <Section label="Assigned To">
            <div className="flex items-center gap-3">
              <img src={ticket.assigned.avatar} className="h-8 w-8 rounded-full" />
              <div>
                <p className="font-medium">{ticket.assigned.name}</p>
              </div>
            </div>
          </Section>

          <Section label="Priority">
            <Badge tone={ticket.priorityTone}>{ticket.priority}</Badge>
          </Section>

          <Section label="Description">
            <p className="text-sm text-gray-700">{ticket.description}</p>
          </Section>

        </div>

        {/* FOOTER */}
        <div className="border-t p-4 flex justify-end gap-3">
          <button className="h-10 px-4 rounded-lg ring-1 ring-gray-300 hover:bg-gray-100">
            View Timeline
          </button>

          <button className="h-10 px-4 rounded-lg bg-primary text-white hover:bg-black">
            Open Full Ticket Details
          </button>
        </div>
      </div>
    </div>
  );
}

function Section({ label, children }) {
  return (
    <div>
      <h3 className="text-sm font-medium text-gray-500">{label}</h3>
      <div className="mt-1">{children}</div>
    </div>
  );
}

function Badge({ children, tone }) {
  const colors = {
    red: "bg-red-100 text-red-700",
    yellow: "bg-yellow-100 text-yellow-700",
    gray: "bg-gray-100 text-gray-700",
    orange: "bg-orange-100 text-orange-700",
    slate: "bg-slate-100 text-slate-700",
    green: "bg-green-100 text-green-700",
    dark: "bg-gray-700 text-white",
  };

  return (
    <span className={`px-2 py-1 text-xs rounded-md font-medium ${colors[tone]}`}>
      {children}
    </span>
  );
}
