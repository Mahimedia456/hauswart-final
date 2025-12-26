import React, { useState } from "react";
import PropertyDrawer from "../components/PropertyDrawer";

export default function Properties() {
  // ------------------ Dummy Property List ------------------
  const PROPERTIES = [
    {
      id: 1,
      name: "Apex Towers",
      address: "Hauptstrasse 123, 10115 Berlin",
      floors: 22,
      units: 180,
      type: "Residential",
      status: "Active",
      lastUpdated: "2024-07-20",
      manager: {
        name: "Liam Schmidt",
        avatar:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDgR1tNiIHiG6CwkKRgkrJZwR5Uc1NhjIPP6i6-vD4XN-juwJEGzqfzoHdktgoCtQpgCyM9h8u_T6L_ihFwroHdjh6ZXVEJqIUkLVE939Teg44riOq7e_o6_0_Eeo3ssjfGF3etJDW4pk4AvgLRCx9cd7RLlw7kERkWngRNhNcDj2FyLIPGdVdA9OTsjcdLTRdvElfuKPGugKT0RDiIR5mU9vQNRKbPYcGvB0AR0X18sABIl0kXh8GlmAlxWx_Hgvj-gFb6Qh9tLas",
      },
      personnel: [
        {
          name: "Liam Schmidt",
          role: "Facility Manager",
          avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAlPYc6k30O64Yyhefk0eg8DB-XGSjCAZU_qiXda2_I8_K-nNuyeSlfcJySYS_egLg6iT6sw5i5qiWxVMaEslqUHlrQbX3NmtbstyEmzDdpHQYgYIMyx9DdEzhJMOaITaLxK1Ns8Iu3XCA8sITy64gLuq19Xmjol0DhOJzj-z7nYUOEfXQsHWNdpr-n83peUT4hq27A-q5RoPv9U8-tId5b2qfUi9s8d3oL4GoyACEP3C4H2uay0OrNLk7ukHcE7p9DNegu_3DKu5Y",
        },
        {
          name: "Max Weber",
          role: "Caretaker",
          avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCr6gvST1oGDyJqp3NFu2aku84swpbdlw59A0z0jLcEjeBc67_HkHfRt9LRo55ZqZ1bCVZfJo_fZ47qug_tuJoRx7s0SWujV8Tib1n1Obw8xRpbbPRRXH3DsxeUr1nTBNwrlFmcy0K28o_V8aA3y-oPts7i-eaQQl3WO-wRxI_0rKpsJ4k_2hA20tJLTZdtDo7zwNpgu1QhnLjEXJfChL4LzEPXHGYfQXNymR_pthZZw9NajM50aireyP188iENzW8sYam9sBzv8KI",
        },
      ],
    },
    {
      id: 2,
      name: "Riverfront Lofts",
      address: "Am Ufer 45, 20457 Hamburg",
      floors: 8,
      units: 64,
      type: "Residential",
      status: "Active",
      lastUpdated: "2024-07-18",
      manager: {
        name: "Sophia Müller",
        avatar:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCvYNI7HTOOq9AR0FbcaUv6IxUU-bGMikmulPKIF_pGlVMhF-xz3OlXqJd76wyfD0ac1q6ZSXKxugpgO37qTpPFt3R2W8rxGBp7_MyGgFpFbPXVtMB06akONrPhbF59xhxjMa7mxj5nGRVpZqTFY8uFV8FIWdRxbi9KLPuEBY9sLybhKXrCdWhl4_Z2ou3ctKurg8tH8OfCGwgKQ-YrFvfdvSdt7MmHTFGiv6E_jVbLOBueHQuD8vhK8P83774HIs2Bpqj_3sbc5Uw",
      },
    },
    {
      id: 3,
      name: "Marienplatz Offices",
      address: "Marienplatz 8, 80331 Munich",
      floors: 6,
      units: 40,
      type: "Commercial",
      status: "Inactive",
      lastUpdated: "2024-06-30",
      manager: {
        name: "Jonas Fischer",
        avatar:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuC-qjforciMKrdUWatKsPemoWA2tw5gPLvyHakXSu54w7uqhWjuD0tNGGhD6e07LlupY6XGeedfhCgkcTY_qWOLepS3Dcyi5BmEasiGE61hoP1jCUfqXtMKsiKRGEViQmcUT6EIvRADb_BqgZKan-VXP-cjjByd4cRqbH-LPwzfVKbVLcvErzPGiKKFoYPzpKzqBOiP0Gdv_AMjaQWGv4mkz4fsvGZduOLr3dr_T9pBLwrOY5Cv_wkIkRiF1UlKIzicXkfj9W6-7No",
      },
    },
  ];

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const openDrawer = (property) => {
    setSelectedProperty(property);
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setSelectedProperty(null);
  };

  return (
    <div className="space-y-8">

      {/* ------------------ Filters Bar ------------------ */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        
        <div className="flex flex-wrap items-center gap-4">
          {/* Search */}
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              search
            </span>
            <input
              type="search"
              placeholder="Search properties..."
              className="rounded-lg border-gray-300 bg-gray-50 py-2 pl-10 pr-4 text-sm focus:border-primary focus:ring-primary"
            />
          </div>

          {/* Property Type */}
          <select className="rounded-lg border-gray-300 bg-gray-50 py-2 pl-3 pr-8 text-sm">
            <option>Property Type</option>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Mixed Use</option>
          </select>

          {/* Status */}
          <select className="rounded-lg border-gray-300 bg-gray-50 py-2 pl-3 pr-8 text-sm">
            <option>Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        {/* Add Property Button */}
        <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-black">
          <span className="material-symbols-outlined text-base">add_home</span>
          Add Property
        </button>
      </div>

      {/* ------------------ Table ------------------ */}
      <div className="overflow-x-auto border border-gray-200 rounded-xl">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <Th>Property Name</Th>
              <Th>Address</Th>
              <Th>Floors / Units</Th>
              <Th>Assigned Facility Manager</Th>
              <Th>Status</Th>
              <Th>Last Updated</Th>
              <Th></Th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 bg-white">
            {PROPERTIES.map((p, i) => (
              <tr
                key={p.id}
                className={`cursor-pointer hover:bg-gray-50 ${
                  i % 2 === 1 ? "bg-gray-50" : ""
                }`}
                onClick={() => openDrawer(p)}
              >
                <Td strong>{p.name}</Td>
                <Td>{p.address}</Td>
                <Td>{p.floors} Floors / {p.units} Units</Td>

                {/* Manager avatar + name */}
                <Td>
                  <div className="flex items-center gap-3">
                    <img
                      src={p.manager.avatar}
                      alt=""
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <span className="font-medium">{p.manager.name}</span>
                  </div>
                </Td>

                {/* Status */}
                <Td>
                  {p.status === "Active" ? (
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Active
                    </span>
                  ) : (
                    <span className="inline-flex items-center rounded-full bg-gray-200 px-2.5 py-0.5 text-xs font-medium text-gray-700">
                      Inactive
                    </span>
                  )}
                </Td>

                <Td>{p.lastUpdated}</Td>

                <Td>
                  <button className="text-gray-500 hover:text-gray-700">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between py-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          Rows per page:
          <select className="rounded-md border-gray-300 text-sm">
            <option>10</option>
            <option>25</option>
          </select>
        </div>

        <div className="flex items-center gap-4">
          <span>1–3 of 3</span>
          <div className="flex items-center gap-1">
            <button disabled className="rounded p-1 opacity-50">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="rounded p-1 hover:bg-gray-100">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Drawer */}
      {drawerOpen && (
        <PropertyDrawer property={selectedProperty} onClose={closeDrawer} />
      )}
    </div>
  );
}

/* ---------- TABLE HELPERS ---------- */
function Th({ children }) {
  return (
    <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-gray-600">
      {children}
    </th>
  );
}

function Td({ children, strong }) {
  return (
    <td
      className={
        "px-6 py-4 " +
        (strong ? "font-medium text-gray-900" : "text-gray-600")
      }
    >
      {children}
    </td>
  );
}
