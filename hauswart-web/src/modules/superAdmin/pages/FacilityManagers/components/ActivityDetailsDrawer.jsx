import React from "react";

export default function ActivityDetailsDrawer({ open, onClose, data }) {
  return (
    <div
      className={`fixed inset-0 z-50 flex transition-opacity duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* BACKDROP */}
      <div
        className="flex-1 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* DRAWER PANEL */}
      <div
        className={`
          w-full max-w-md lg:max-w-lg xl:max-w-[420px]
          bg-white dark:bg-gray-900/95 dark:backdrop-blur-sm
          border-l border-gray-200 dark:border-gray-700
          shadow-2xl rounded-l-xl
          p-6 h-full overflow-y-auto
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* HEADER */}
        <div className="flex items-start justify-between">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Activity Details
          </h2>
          <button
            className="rounded-md p-1 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={onClose}
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {!data ? (
          <p className="mt-6 text-sm text-gray-400">No data selected.</p>
        ) : (
          <div className="mt-6 space-y-6 text-sm">

            <Item label="Timestamp" value={data.timestamp} />
            <Item
              label="Performed By"
              value={
                <div className="flex items-center gap-2">
                  <img
                    src={data.user.avatar}
                    className="h-6 w-6 rounded-full"
                    alt=""
                  />
                  <span>{data.user.name}</span>
                </div>
              }
            />

            <Item label="Action Type" value={data.actionType} />
            <Item label="Module" value={data.module} />
            <Item label="Affected Record" value={data.record} />
            <Item label="IP Address" value={data.ip} />
            <Item label="Device Info" value={data.device} />

            {/* BEFORE / AFTER */}
            <div className="space-y-2">
              <p className="font-medium text-gray-500 dark:text-gray-400">
                Before / After Data
              </p>

              <div className="flex gap-4">
                <JsonBlock title="BEFORE" json={data.before} />
                <JsonBlock title="AFTER" json={data.after} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------- Item Row Component ---------- */
function Item({ label, value }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-1 font-medium text-gray-500 dark:text-gray-400">
        {label}
      </div>
      <div className="col-span-2 text-gray-900 dark:text-gray-100">
        {value}
      </div>
    </div>
  );
}

/* ---------- JSON BLOCK ---------- */
function JsonBlock({ title, json }) {
  return (
    <div className="w-1/2 rounded-lg bg-gray-50 dark:bg-gray-800 p-3">
      <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 mb-2">
        {title}
      </p>
      <pre className="text-xs text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
        {JSON.stringify(json, null, 2)}
      </pre>
    </div>
  );
}
