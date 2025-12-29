import React from "react";

export default function PropertyDrawer({ property, onClose }) {
  if (!property) return null;

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl">
      <div className="flex h-full flex-col">

        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-gray-200">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold">{property.name}</h2>
              <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                {property.status}
              </span>
            </div>
            <p className="text-sm text-gray-500">{property.address}</p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full p-1 hover:bg-gray-100 text-gray-500"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">

          {/* Structure */}
          <div>
            <h3 className="text-sm font-semibold uppercase text-gray-500 tracking-wider">
              Structure Overview
            </h3>

            <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
              <div>
                <p className="text-gray-500">Floors</p>
                <p className="font-medium">{property.floors}</p>
              </div>

              <div>
                <p className="text-gray-500">Units</p>
                <p className="font-medium">{property.units}</p>
              </div>

              <div>
                <p className="text-gray-500">Property Type</p>
                <p className="font-medium">{property.type}</p>
              </div>

              <div>
                <p className="text-gray-500">Created Date</p>
                <p className="font-medium">2023-03-10</p>
              </div>
            </div>
          </div>

          {/* Personnel */}
          <div>
            <h3 className="text-sm font-semibold uppercase text-gray-500 tracking-wider">
              Assigned Personnel
            </h3>

            <div className="mt-4 space-y-4">
              {property.personnel?.map((person, i) => (
                <div key={i} className="flex items-center gap-3">
                  <img
                    src={person.avatar}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{person.name}</p>
                    <p className="text-xs text-gray-500">{person.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-6">
          <h3 className="text-xs font-semibold uppercase text-gray-500 mb-3">
            Quick Actions
          </h3>

          <div className="space-y-3">
            <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-F38b14 text-white px-4 py-2 text-sm font-semibold hover:bg-black">
              <span className="material-symbols-outlined text-base">open_in_new</span>
              Open Property Details
            </button>

            <button className="flex w-full items-center justify-center gap-2 rounded-lg ring-1 ring-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100">
              <span className="material-symbols-outlined text-base">assignment_ind</span>
              Manage Assignments
            </button>

            <button className="flex w-full items-center justify-center gap-2 rounded-lg ring-1 ring-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100">
              <span className="material-symbols-outlined text-base">folder_open</span>
              Open Documents
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
