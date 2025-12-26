export default function MaintenanceDrawer({ task, onClose }) {
  return (
    <div className="fixed inset-y-0 right-0 w-[420px] bg-white shadow-2xl border-l p-6 overflow-y-auto z-50">

      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">{task.drawer.title}</h2>
          <p className="text-sm text-gray-500">{task.drawer.location}</p>
        </div>

        <button
          className="text-gray-500 hover:text-black"
          onClick={onClose}
        >
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      {/* Status */}
      <span className="inline-flex items-center rounded-full bg-yellow-100 text-yellow-800 px-2.5 py-0.5 text-sm font-medium mb-4">
        {task.status}
      </span>

      {/* Schedule */}
      <div className="mb-4">
        <h3 className="text-xs font-semibold uppercase text-gray-500">Schedule</h3>
        <p className="text-sm mt-1">{task.date} · {task.frequency}</p>
      </div>

      {/* Description */}
      <div className="mb-4">
        <h3 className="text-xs font-semibold uppercase text-gray-500">Description</h3>
        <p className="text-sm text-gray-700 mt-1">
          Monthly preventive maintenance including inspection of components and safety systems.
        </p>
      </div>

      {/* Checklist */}
      <div className="mb-6">
        <h3 className="text-xs font-semibold uppercase text-gray-500 mb-2">Checklist Preview</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-sm">
            <span className="material-symbols-outlined text-green-500">check_circle</span>
            Inspect hoist cables for wear
          </li>
          <li className="flex items-center gap-2 text-sm">
            <span className="material-symbols-outlined text-green-500">check_circle</span>
            Test door safety sensors
          </li>
          <li className="flex items-center gap-2 text-sm">
            <span className="material-symbols-outlined text-gray-400">radio_button_unchecked</span>
            Verify emergency phone line
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div className="space-y-3 border-t pt-6">
        <button className="w-full rounded-lg bg-[#F38B14] text-white rounded-lg h-10 font-semibold hover:bg-black">
          Open Full Maintenance Details
        </button>
        <button className="w-full ring-1 ring-gray-300 text-gray-800 rounded-lg h-10 font-semibold hover:bg-gray-100">
          View History
        </button>
        <button className="w-full ring-1 ring-gray-300 text-gray-800 rounded-lg h-10 font-semibold hover:bg-gray-100">
          Edit Task
        </button>
      </div>
    </div>
  );
}
