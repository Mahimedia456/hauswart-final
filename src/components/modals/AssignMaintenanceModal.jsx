import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/i18n/translations";

export default function AssignMaintenanceModal({ open, onClose, asset }) {
  const { lang } = useLanguage();
  const dict = t[lang];

  if (!open) return null;

  const [selectedUser, setSelectedUser] = useState(null);

  /* Dummy Users */
  const users = [
    {
      id: 1,
      name: "John Mills",
      role: "Facility Manager",
      workload: "Low",
      workloadTone: "green",
      property: "Building A",
      tasksToday: 3,
      openTickets: 5,
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAkNYikUTLG_ugY5bZPXv63ph5OrFeRMvCVOIaLqNk7MpfDMMgsBVJ6Nl1g3NxG43QLHHhjfdy558Ri0ffToe2U7FwtBe6_h0c6-RSgAWief09i2d05Eryzxe194sVQRWpCrI08TYkmufly1-yzEvIEaeJf6oKFGxEcQes53xkvNnGv1VCO1x0IyfaXxeVKX0LxYlrfl9sw05HWTqIxiyzh9rXi1kQxvXerRJHJtpFNaj_57TZj2SeDYcDihbxTqxopVOdSjMYbvSI",
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Technician",
      workload: "Medium",
      workloadTone: "yellow",
      property: "Complex B",
      tasksToday: 6,
      openTickets: 12,
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBAXLxPHFZt3_8QI68c7BRMP4jTaqbrswl__6hE7Z9Gy66EzKSXJv-l4K3139AcuynWRmPaVw0IhlzcAfyij1-8-2RS9h7o2S-sfHa5E_MD1bDD9crHgOiLdc1w-Ylu6G2Jrps24sZzApfKVu3xfxzxpr1XczCh8FwkyUxE00zyJMRAZH-3Vi8cuC83tFPQU67xHKWEjyHfTIl8TT20nrAcGNSQRCLmlmQp1E3DjhywUfO7JJ2J0a7PsOgvzIhyu-BM9Y-PYCeNvho",
    },
    {
      id: 3,
      name: "David Kim",
      role: "Caretaker",
      workload: "High",
      workloadTone: "red",
      property: "Building C",
      tasksToday: 8,
      openTickets: 18,
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDiTY4mZReREFLmcJe_T2oQGvE6HapUbpA-aIVjZnanokBlfUdvE2Y5woBLa5Sr0Yf0K9ltMQ3ApUpWmasHXcPzGS6kNm591pdF27a4mV76Thpci9izr5rjdPBtpLR20E52uqf5B3glEtQX1SClYZzFFh5pE9sb946kdWirlbiuw3sEXbv6qLcEm94oinD5snXJbWdQufyzcE_v9OzL0eo7eMVI-RL9F6RERNZdirh2WFMS9EpB9Y5HMjHzPw4_TJwdjnQR5Y0pERw",
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-2xl flex flex-col">

        {/* HEADER */}
        <header className="relative border-b border-zinc-200 px-6 py-5">
          <h1 className="text-xl font-bold text-zinc-900">{dict.maint_assign_title}</h1>
          <p className="text-sm text-zinc-500">{dict.maint_assign_subtitle}</p>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-800"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </header>

        {/* BODY */}
        <div className="px-6 py-6 overflow-y-auto max-h-[75vh] space-y-8">

          {/* SECTION 1 — ROLE + DATE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex flex-col">
              <span className="pb-2 text-sm font-medium">{dict.maint_assign_role}</span>
              <select className="form-select h-11 rounded-lg border border-zinc-300 bg-white px-3">
                <option>Facility Manager</option>
                <option>Technician</option>
                <option>Caretaker</option>
                <option>Service Provider</option>
              </select>
            </label>

            <label className="flex flex-col">
              <span className="pb-2 text-sm font-medium">{dict.maint_assign_due}</span>
              <input
                type="date"
                className="form-input h-11 rounded-lg border border-zinc-300 px-3"
              />
            </label>

            <div className="md:col-span-2 text-xs text-zinc-500 pt-1">
              {dict.maint_assign_filter_note}
            </div>
          </div>

          {/* SECTION 2 — USER LIST */}
          <div>
            <h2 className="text-base font-bold pb-3 text-zinc-900">{dict.maint_assign_users}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {users.map((u) => (
                <div
                  key={u.id}
                  onClick={() => setSelectedUser(u.id)}
                  className={`flex flex-col gap-3 p-4 rounded-lg cursor-pointer border transition ${
                    selectedUser === u.id
                      ? "border-2 border-primary bg-primary/5"
                      : "border-zinc-200 hover:border-zinc-400"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <img src={u.avatar} className="h-10 w-10 rounded-full object-cover" />
                    <div className="flex-1">
                      <p className="font-bold text-sm text-zinc-900">{u.name}</p>
                      <p className="text-xs text-zinc-500">{u.role}</p>
                    </div>

                    {/* Workload Badge */}
                    <div className="flex items-center gap-2">
                      <div
                        className={`px-2.5 text-xs rounded-full ${
                          u.workloadTone === "green"
                            ? "bg-green-100 text-green-800"
                            : u.workloadTone === "yellow"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {u.workload}
                      </div>
                      <div
                        className={`h-2 w-2 rounded-full ${
                          u.workloadTone === "green"
                            ? "bg-green-500"
                            : u.workloadTone === "yellow"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                      ></div>
                    </div>
                  </div>

                  <div className="h-px bg-zinc-200"></div>

                  <div className="flex justify-between text-xs text-zinc-600">
                    <span>{dict.maint_assign_property}: {u.property}</span>

                    <div className="flex gap-4">
                      <span>{dict.maint_assign_tasks}: {u.tasksToday}</span>
                      <span>{dict.maint_assign_open}: {u.openTickets}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 3 — NOTE */}
          <label className="flex flex-col">
            <span className="pb-2 text-sm font-medium text-zinc-900">{dict.maint_assign_note}</span>
            <textarea
              className="h-24 rounded-lg border border-zinc-300 p-3 text-sm"
              placeholder={dict.maint_assign_note_ph}
            ></textarea>
          </label>
        </div>

        {/* FOOTER */}
        <footer className="border-t border-zinc-200 px-6 py-4 flex justify-end gap-3 bg-white">
          <button
            onClick={onClose}
            className="px-4 h-10 rounded-lg text-sm font-semibold text-zinc-600 hover:bg-zinc-100"
          >
            {dict.cancel}
          </button>

          <button
            className="px-5 h-10 rounded-lg bg-[#F38B14] text-white font-semibold hover:bg-black"
          >
            {dict.maint_assign_button}
          </button>
        </footer>
      </div>
    </div>
  );
}
