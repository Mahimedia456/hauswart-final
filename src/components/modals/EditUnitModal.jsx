import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/i18n/translations";


export default function EditUnitModal({ unit, floorNumber, onClose, onSave }) {
  const { lang } = useLanguage();
  const dict = t[lang];

  // PREFILLED FIELDS
  const [unitName, setUnitName] = useState(unit.name || "");
  const [unitType, setUnitType] = useState(unit.type || "residential");
  const [sqft, setSqft] = useState(unit.sqft || "");
  const [status, setStatus] = useState(unit.status || "active");
  const [notes, setNotes] = useState(unit.notes || "");

  const [tenant, setTenant] = useState(unit.tenant || "");
  const [assignedStaff, setAssignedStaff] = useState(unit.staff || []);
  const [staffInput, setStaffInput] = useState("");

  const [rooms, setRooms] = useState(unit.rooms || []);
  const [roomInput, setRoomInput] = useState("");

  const handleAddRoom = () => {
    if (!roomInput.trim()) return;
    setRooms([...rooms, roomInput.trim()]);
    setRoomInput("");
  };

  const handleSave = () => {
    onSave({
      id: unitName,
      name: unitName,
      type: unitType,
      sqft,
      status,
      notes,
      tenant,
      staff: assignedStaff,
      rooms,
    });
    onClose();
  };

  const handleDelete = () => {
    onSave(null, "delete");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
      <div className="flex flex-col w-full max-w-4xl h-[90vh] rounded-xl bg-white shadow-2xl overflow-hidden">

        {/* HEADER */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-bold text-slate-900">{dict.unit_edit_title}</h1>
            <p className="text-sm text-slate-500">{dict.unit_edit_subtitle}</p>
          </div>
          <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded-full" onClick={onClose}>
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* SCROLL AREA */}
        <div className="flex-1 overflow-y-auto p-6 space-y-10">

          {/* SECTION — UNIT INFO */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Name */}
              <label className="flex flex-col">
                <p className="pb-2 text-sm font-medium">{dict.unit_field_name}</p>
                <input
                  className="rounded-lg border bg-slate-100 h-11 px-4"
                  value={unitName}
                  onChange={(e) => setUnitName(e.target.value)}
                  placeholder={dict.unit_placeholder_name}
                />
              </label>

              {/* Type */}
              <label className="flex flex-col">
                <p className="pb-2 text-sm font-medium">{dict.unit_field_type}</p>
                <select
                  className="rounded-lg border bg-slate-100 h-11 px-4"
                  value={unitType}
                  onChange={(e) => setUnitType(e.target.value)}
                >
                  <option value="residential">{dict.unit_type_residential}</option>
                  <option value="office">{dict.unit_type_office}</option>
                  <option value="retail">{dict.unit_type_retail}</option>
                  <option value="storage">{dict.unit_type_storage}</option>
                  <option value="warehouse">{dict.unit_type_warehouse}</option>
                  <option value="custom">{dict.unit_type_custom}</option>
                </select>
              </label>

              {/* Sqft */}
              <label className="flex flex-col">
                <p className="pb-2 text-sm font-medium">{dict.unit_field_sqft}</p>
                <input
                  className="rounded-lg border bg-slate-100 h-11 px-4"
                  value={sqft}
                  placeholder={dict.unit_placeholder_sqft}
                  onChange={(e) => setSqft(e.target.value)}
                />
              </label>

              {/* Status */}
              <label className="flex flex-col">
                <p className="pb-2 text-sm font-medium">{dict.unit_field_status}</p>
                <select
                  className="rounded-lg border bg-slate-100 h-11 px-4"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="active">{dict.unit_status_active}</option>
                  <option value="vacant">{dict.unit_status_vacant}</option>
                  <option value="maintenance">{dict.unit_status_maintenance}</option>
                  <option value="renovation">{dict.unit_status_renovation}</option>
                </select>
              </label>

              {/* Notes */}
              <label className="flex flex-col md:col-span-2">
                <p className="pb-2 text-sm font-medium">{dict.unit_field_notes}</p>
                <textarea
                  className="rounded-lg border bg-slate-100 min-h-24 px-4 py-3"
                  placeholder={dict.unit_placeholder_notes}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </label>
            </div>
          </section>

          {/* SECTION — TENANT */}
          <section>
            <h3 className="text-base font-bold mb-2">{dict.unit_tenant_section}</h3>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
              <input
                className="rounded-lg border bg-slate-100 h-11 pl-10 pr-4 w-full"
                placeholder={dict.unit_placeholder_tenant}
                value={tenant}
                onChange={(e) => setTenant(e.target.value)}
              />
            </div>
            <p className="text-xs text-slate-500 mt-2">{dict.unit_tenant_note}</p>
          </section>

          {/* SECTION — STAFF */}
          <section>
            <h3 className="text-base font-bold">{dict.unit_assign_staff}</h3>
            <p className="text-sm text-slate-500">{dict.unit_assign_staff_desc}</p>

            {/* Input */}
            <div className="relative mt-3">
              <input
                className="rounded-lg border bg-slate-100 h-11 pl-10 pr-4 w-full"
                placeholder={dict.unit_placeholder_staff}
                value={staffInput}
                onChange={(e) => setStaffInput(e.target.value)}
              />
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">add</span>
            </div>

            {/* Chips */}
            <div className="flex flex-wrap gap-2 mt-3">
              {assignedStaff.map((s, i) => (
                <div key={i} className="flex items-center gap-2 bg-slate-200 rounded-full px-3 py-1">
                  <span className="text-sm">{s}</span>
                  <button
                    onClick={() => setAssignedStaff(assignedStaff.filter((_, idx) => idx !== i))}
                    className="material-symbols-outlined text-sm"
                  >
                    close
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION — ROOMS */}
          <section>
            <h3 className="text-base font-bold">{dict.unit_rooms_title}</h3>
            <p className="text-sm text-slate-500">{dict.unit_rooms_desc}</p>

            <div className="flex gap-2 mt-3">
              <input
                className="rounded-lg border bg-slate-100 flex-1 px-3 py-2"
                placeholder={dict.unit_placeholder_room}
                value={roomInput}
                onChange={(e) => setRoomInput(e.target.value)}
              />
              <button
                className="flex h-10 items-center gap-2 rounded-lg bg-[#F38B14] px-5 text-sm font-semibold text-white hover:bg-black transition"
                onClick={handleAddRoom}
              >
                <span className="material-symbols-outlined text-base">add</span>
                {dict.btn_add}
              </button>
            </div>

            {/* Room chips */}
            <div className="flex flex-wrap gap-2 mt-3">
              {rooms.map((room, i) => (
                <div key={i} className="flex items-center gap-2 bg-slate-200 rounded-full px-3 py-1">
                  <span>{room}</span>
                  <button
                    className="material-symbols-outlined text-sm text-slate-500"
                    onClick={() => setRooms(rooms.filter((_, idx) => idx !== i))}
                  >
                    close
                  </button>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* FOOTER */}
        <div className="p-6 border-t border-slate-200 flex justify-between items-center">
          <button
            className="text-sm font-semibold text-red-600 hover:text-red-800"
            onClick={handleDelete}
          >
            {dict.unit_delete_action}
          </button>

          <div className="flex gap-4">
            <button onClick={onClose} className="text-sm font-semibold text-slate-600">
              {dict.btn_cancel}
            </button>

            <button
              onClick={handleSave}
              disabled={!unitName.trim()}
              className="flex h-10 items-center gap-2 rounded-lg bg-[#F38B14] px-5 text-sm font-semibold text-white hover:bg-black transition disabled:bg-primary/40"
            >
              {dict.unit_edit_action}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
