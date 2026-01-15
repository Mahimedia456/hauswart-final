// src/modules/superAdmin/pages/Properties/tabs/Staff.jsx
import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";
import { useState } from "react";

export default function PropertyStaff() {
  const { lang } = useLanguage();
  const dict = t[lang];

  // ----------------------------
  // DUMMY TECHNICIAN DATA
  // ----------------------------
  const technicians = [
    {
      id: 1,
      name: "Jane Doe",
      role: "HVAC Specialist",
      avatar: "https://i.pravatar.cc/60?img=20",
      phone: "+1 (234) 567-980",
      email: "jane.doe@example.com",
      skills: ["HVAC", "Electrical"],
      assignedFloors: "Floors 1–10",
      status: "active",
    },
    {
      id: 2,
      name: "John Smith",
      role: "General Technician",
      avatar: "https://i.pravatar.cc/60?img=11",
      phone: "+1 (408) 123-4890",
      email: "john.smith@example.com",
      skills: ["Plumbing", "General Maintenance"],
      assignedFloors: "Floors 11–20",
      status: "active",
    },
    {
      id: 3,
      name: "Emily White",
      role: "Electrician",
      avatar: "https://i.pravatar.cc/60?img=24",
      phone: "+1 (512) 561-7788",
      email: "emily.white@example.com",
      skills: ["Electrical"],
      assignedFloors: "Basement + Rooftop",
      status: "inactive",
    },
  ];

  const [search, setSearch] = useState("");

  const filtered = technicians.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  // ----------------------------

  return (
    <div className="space-y-8">

      {/* HEADER SECTION */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{dict.prop_staff_title}</h1>

        <button className="px-4 py-2 bg-primary text-white font-bold rounded-lg hover:bg-black">
          {dict.prop_staff_assign}
        </button>
      </div>

      {/* SEARCH BAR */}
      <div className="relative max-w-xs">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          search
        </span>
        <input
          type="text"
          placeholder={dict.prop_staff_search}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 border-gray-200 text-sm"
        />
      </div>

      {/* TECHNICIAN LIST */}
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="divide-y">
          {filtered.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center gap-4 p-4 hover:bg-gray-50"
            >
              {/* Avatar */}
              <img
                src={tech.avatar}
                className="h-12 w-12 rounded-full"
                alt="tech-avatar"
              />

              {/* Main Info */}
              <div className="flex-1">
                <p className="font-bold text-gray-900">{tech.name}</p>
                <p className="text-sm text-gray-500">{tech.role}</p>

                {/* Skills */}
                <div className="flex gap-2 mt-2 flex-wrap">
                  {tech.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-0.5 bg-gray-100 rounded-full text-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Assignment Info */}
              <div className="hidden md:block w-48 text-sm">
                <p className="text-gray-500">{dict.prop_staff_assignedFloors}</p>
                <p className="font-medium">{tech.assignedFloors}</p>
              </div>

              {/* Contact */}
              <div className="hidden lg:block w-56 text-sm">
                <p className="text-gray-500">{tech.email}</p>
                <p className="text-gray-500">{tech.phone}</p>
              </div>

              {/* Status */}
              <span
                className={`text-xs font-bold px-3 py-1 rounded-full ${
                  tech.status === "active"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {tech.status === "active"
                  ? dict.common_active
                  : dict.common_inactive}
              </span>

              {/* Actions */}
              <button className="ml-4 text-gray-500 hover:text-gray-700">
                <span className="material-symbols-outlined !text-xl">more_vert</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
