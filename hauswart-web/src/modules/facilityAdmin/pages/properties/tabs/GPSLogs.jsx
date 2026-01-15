import { useState } from "react";
import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";

export default function GPS() {
  const { lang } = useLanguage();
  const dict = t[lang];

  const [selectedTech, setSelectedTech] = useState(null);

  // ------------------------------------------------------------
  // Dummy Technician GPS Data
  // ------------------------------------------------------------
  const technicians = [
    {
      id: 1,
      name: "Max Fischer",
      role: "HVAC Specialist",
      avatar: "https://i.pravatar.cc/40?img=12",
      status: "online",
      statusColor: "bg-green-500",
      lastUpdate: "2 min ago",
      lat: 52.5200,
      lng: 13.4050,
    },
    {
      id: 2,
      name: "Anna Schmidt",
      role: "Electrician",
      avatar: "https://i.pravatar.cc/40?img=48",
      status: "onTask",
      statusColor: "bg-primary",
      lastUpdate: "5 min ago",
      lat: 48.1351,
      lng: 11.5820,
    },
    {
      id: 3,
      name: "Lukas Weber",
      role: "General Technician",
      avatar: "https://i.pravatar.cc/40?img=23",
      status: "offline",
      statusColor: "bg-gray-400",
      lastUpdate: "1 hour ago",
      lat: 53.5511,
      lng: 9.9937,
    },
  ];

  const statusText = {
    online: dict.gps_status_online,
    offline: dict.gps_status_offline,
    onTask: dict.gps_status_onTask,
  };

  return (
    <div className="space-y-6">

      {/* ------------------------------------------------------ */}
      {/* SEARCH + FILTERS */}
      {/* ------------------------------------------------------ */}
      <div className="flex flex-wrap items-center gap-4">

        {/* Search */}
        <div className="relative w-full max-w-xs">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            search
          </span>
          <input
            placeholder={dict.gps_search_technician}
            className="w-full rounded-lg border-gray-200 bg-gray-100 py-2.5 pl-10 pr-4 text-sm"
          />
        </div>

        {/* Status Filter */}
        <select className="rounded-lg bg-gray-100 border-gray-200 py-2.5 pr-8 text-sm">
          <option>{dict.gps_filter_status}</option>
          <option>{dict.gps_status_online}</option>
          <option>{dict.gps_status_onTask}</option>
          <option>{dict.gps_status_offline}</option>
        </select>

      </div>

      {/* ------------------------------------------------------ */}
      {/* MAP VIEW */}
      {/* ------------------------------------------------------ */}
      <div className="rounded-xl bg-white p-4 border shadow-sm">
        <h3 className="text-lg font-semibold mb-4">{dict.gps_map_title}</h3>

        {/* Map Container */}
        <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-600">{dict.gps_map_placeholder}</p>
        </div>
      </div>

      {/* ------------------------------------------------------ */}
      {/* TECHNICIANS TABLE */}
      {/* ------------------------------------------------------ */}
      <div className="rounded-xl bg-white border shadow-sm overflow-hidden">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <Th>{dict.gps_col_technician}</Th>
              <Th>{dict.gps_col_role}</Th>
              <Th>{dict.gps_col_status}</Th>
              <Th>{dict.gps_col_lastUpdate}</Th>
              <Th className="text-right">{dict.col_actions}</Th>
            </tr>
          </thead>

          <tbody>
            {technicians.map((tech) => (
              <tr
                key={tech.id}
                onClick={() => setSelectedTech(tech)}
                className="hover:bg-gray-50 cursor-pointer border-b"
              >
                <Td strong>
                  <div className="flex items-center gap-2">
                    <img src={tech.avatar} className="h-7 w-7 rounded-full" />
                    <span>{tech.name}</span>
                  </div>
                </Td>

                <Td>{tech.role}</Td>

                <Td>
                  <span className={`inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs font-medium ${tech.statusColor}`}>
                    <span className="h-2 w-2 bg-white rounded-full"></span>
                    {statusText[tech.status]}
                  </span>
                </Td>

                <Td>{tech.lastUpdate}</Td>

                <td className="px-6 py-4 text-right">
                  <button className="text-gray-500 hover:text-gray-700">
                    <span className="material-symbols-outlined !text-xl">more_vert</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ------------------------------------------------------ */}
      {/* DRAWER (Technician Details) */}
      {/* ------------------------------------------------------ */}
      {selectedTech && (
        <TechDrawer tech={selectedTech} dict={dict} onClose={() => setSelectedTech(null)} />
      )}
    </div>
  );
}

function Th({ children, className }) {
  return <th className={`px-6 py-3 text-left font-semibold text-gray-700 ${className}`}>{children}</th>;
}

function Td({ children, strong }) {
  return <td className={`px-6 py-4 ${strong ? "font-semibold" : ""}`}>{children}</td>;
}


/* ------------------------------------------------------
   TECHNICIAN DRAWER
------------------------------------------------------ */

function TechDrawer({ tech, dict, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex justify-end">
      <div className="w-full max-w-md h-full bg-white shadow-xl p-6 overflow-y-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">{dict.gps_drawer_title}</h2>
          <button onClick={onClose}>
            <span className="material-symbols-outlined text-gray-600 !text-2xl">close</span>
          </button>
        </div>

        {/* TECH INFO */}
        <div className="flex items-center gap-4 mb-6">
          <img src={tech.avatar} className="h-16 w-16 rounded-full" />
          <div>
            <h3 className="text-lg font-bold">{tech.name}</h3>
            <p className="text-gray-500">{tech.role}</p>
          </div>
        </div>

        {/* Status */}
        <div className="mb-6">
          <h4 className="font-semibold mb-1">{dict.gps_drawer_status}</h4>
          <span className="inline-flex gap-2 items-center px-3 py-1 rounded-full bg-primary text-white text-xs font-bold">
            {tech.status}
          </span>
        </div>

        {/* Last Update */}
        <div className="mb-6">
          <h4 className="font-semibold mb-1">{dict.gps_drawer_lastUpdate}</h4>
          <p>{tech.lastUpdate}</p>
        </div>

        {/* Coordinates */}
        <div>
          <h4 className="font-semibold mb-1">{dict.gps_drawer_coordinates}</h4>
          <p>Lat: {tech.lat}</p>
          <p>Lng: {tech.lng}</p>
        </div>
      </div>
    </div>
  );
}
