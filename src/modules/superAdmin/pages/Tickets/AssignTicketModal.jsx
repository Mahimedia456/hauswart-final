import { useState } from "react";
import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";

export default function AssignTicketModal({ open, onClose }) {
  const { lang } = useLanguage();
  const dict = t[lang];

  const [role, setRole] = useState("technician");
  const [date, setDate] = useState("2025-01-12");
  const [selectedUser, setSelectedUser] = useState(null);
  const [note, setNote] = useState("");

  if (!open) return null;

  const USERS = [
    {
      id: 1,
      name: "John Mills",
      role: "Facility Manager",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAkNYikUTLG_ugY5bZPXv63ph5OrFeRMvCVOIaLqNk7MpfDMMgsBVJ6Nl1g3NxG43QLHHhjfdy558Ri0ffToe2U7FwtBe6_h0c6-RSgAWief09i2d05Eryzxe194sVQRWpCrI08TYkmufly1-yzEvIEaeJf6oKFGxEcQes53xkvNnGv1VCO1x0IyfaXxeVKX0LxYlrfl9sw05HWTqIxiyzh9rXi1kQxvXerRJHJtpFNaj_57TZj2SeDYcDihbxTqxopVOdSjMYbvSI",
      workload: "Low",
      tasks: 3,
      openTickets: 5,
      assigned: "Building A",
      workloadColor: "green",
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Technician",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBAXLxPHFZt3_8QI68c7BRMP4jTaqbrswl__6hE7Z9Gy66EzKSXJv-l4K3139AcuynWRmPaVw0IhlzcAfyij1-8-2RS9h7o2S-sfHa5E_MD1bDD9crHgOiLdc1w-Ylu6G2Jrps24sZzApfKVu3xfxzxpr1XczCh8FwkyUxE00zyJMRAZH-3Vi8cuC83tFPQU67xHKWEjyHfTIl8TT20nrAcGNSQRCLmlmQp1E3DjhywUfO7JJ2J0a7PsOgvzIhyu-BM9Y-PYCeNvho",
      workload: "Medium",
      tasks: 6,
      openTickets: 12,
      assigned: "Complex B",
      workloadColor: "yellow",
    },
    {
      id: 3,
      name: "David Kim",
      role: "Caretaker",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDiTY4mZReREFLmcJe_T2oQGvE6HapUbpA-aIVjZnanokBlfUdvE2Y5woBLa5Sr0Yf0K9ltMQ3ApUpWmasHXcPzGS6kNm591pdF27a4mV76Thpci9izr5rjdPBtpLR20E52uqf5B3glEtQX1SClYZzFFh5pE9sb946kdWirlbiuw3sEXbv6qLcEm94oinD5snXJbWdQufyzcE_v9OzL0eo7eMVI-RL9F6RERNZdirh2WFMS9EpB9Y5HMjHzPw4_TJwdjnQR5Y0pERw",
      workload: "High",
      tasks: 8,
      openTickets: 18,
      assigned: "Building C",
      workloadColor: "red",
    },
  ];

  const handleAssign = () => {
    console.log("Assigned Role:", role);
    console.log("Assigned User:", selectedUser);
    console.log("Expected Date:", date);
    console.log("Note:", note);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-3xl rounded-xl shadow-xl flex flex-col">

        {/* HEADER */}
        <header className="border-b p-5 relative">
          <div>
            <h1 className="text-xl font-bold">{dict.assign_title}</h1>
            <p className="text-sm text-gray-500">{dict.assign_desc}</p>
          </div>

          <button
            className="absolute right-5 top-5"
            onClick={onClose}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </header>

        {/* BODY */}
        <div className="p-6 space-y-6 overflow-y-auto max-h-[70vh]">

          {/* ROLE + DATE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="flex flex-col">
              <span className="text-sm font-medium">{dict.assign_role}</span>
              <select
                className="h-11 rounded-lg border px-3 bg-gray-50"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="fm">Facility Manager</option>
                <option value="ct">Caretaker</option>
                <option value="technician">Technician</option>
                <option value="sp">Service Provider</option>
              </select>
            </label>

            <label className="flex flex-col">
              <span className="text-sm font-medium">{dict.expected_date}</span>
              <input
                type="date"
                className="h-11 rounded-lg border px-3 bg-gray-50"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>
          </div>

          {/* USERS */}
          <h2 className="font-bold">{dict.available_users}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {USERS.map((u) => (
              <div
                key={u.id}
                onClick={() => setSelectedUser(u)}
                className={`p-4 rounded-lg cursor-pointer border ${
                  selectedUser?.id === u.id
                    ? "border-primary bg-primary/5"
                    : "border-gray-200 hover:border-gray-400"
                }`}
              >
                <div className="flex items-center gap-3">
                  <img src={u.avatar} className="h-10 w-10 rounded-full" />
                  <div>
                    <p className="font-semibold">{u.name}</p>
                    <p className="text-xs text-gray-500">{u.role}</p>
                  </div>
                </div>

                <hr className="my-2" />

                <div className="flex justify-between text-xs text-gray-500">
                  <span>{dict.assigned_to}: {u.assigned}</span>
                  <span>{dict.tasks_today}: {u.tasks}</span>
                </div>
              </div>
            ))}
          </div>

          {/* NOTE */}
          <label className="flex flex-col">
            <span className="text-sm font-medium">{dict.assignment_note}</span>
            <textarea
              rows={4}
              className="border rounded-lg p-3 bg-gray-50"
              placeholder={dict.assignment_note_placeholder}
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </label>
        </div>

        {/* FOOTER */}
        <footer className="border-t p-4 flex justify-end gap-3">
          <button className="px-4 py-2" onClick={onClose}>
            {dict.cancel}
          </button>

          <button
            onClick={handleAssign}
            className="px-5 py-2 bg-[#F38B14] text-white rounded-lg"
          >
            {dict.assign_btn}
          </button>
        </footer>
      </div>
    </div>
  );
}
