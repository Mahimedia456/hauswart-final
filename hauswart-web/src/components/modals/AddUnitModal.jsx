import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/i18n/translations";


export default function AddUnitModal({ floorNumber, onClose, onSave }) {
  const { lang } = useLanguage();
  const dict = t[lang];

  const [unitName, setUnitName] = useState("");
  const [unitType, setUnitType] = useState("residential");
  const [tenant, setTenant] = useState("");
  const [sqft, setSqft] = useState("");
  const [status, setStatus] = useState("active");
  const [notes, setNotes] = useState("");

  const [staffInput, setStaffInput] = useState("");
  const [assignedStaff, setAssignedStaff] = useState([]);

  const [roomInput, setRoomInput] = useState("");
  const [rooms, setRooms] = useState([]);

  /* ---------------------- ROOM ADD ---------------------- */
  const handleAddRoom = () => {
    if (!roomInput.trim()) return;
    setRooms((prev) => [...prev, roomInput.trim()]);
    setRoomInput("");
  };

  /* ---------------------- SAVE UNIT ---------------------- */
  const handleSave = () => {
    onSave({
      id: unitName.trim(),
      name: unitName.trim(),
      type: unitType,
      tenant: tenant || null,
      sqft,
      status,
      notes,
      staff: assignedStaff,
      rooms,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="relative flex flex-col w-full max-w-[620px] max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden">

        {/* HEADER */}
        <div className="flex items-start justify-between p-6 border-b border-slate-200">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold text-slate-900">{dict.unit_add_title}</h1>
            <p className="text-sm text-slate-500">{dict.unit_add_subtitle}</p>
          </div>

          <button onClick={onClose} className="text-slate-500 hover:text-slate-800">
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* BODY */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* UNIT NAME */}
            <label className="flex flex-col">
              <p className="pb-2 text-sm font-medium">
                {dict.unit_field_name} <span className="text-red-500">*</span>
              </p>
              <input
                value={unitName}
                onChange={(e) => setUnitName(e.target.value)}
                placeholder={dict.unit_placeholder_name}
                className="rounded-lg border bg-slate-100 h-11 px-4"
              />
            </label>

            {/* UNIT TYPE */}
            <label className="flex flex-col">
              <p className="pb-2 text-sm font-medium">
                {dict.unit_field_type} <span className="text-red-500">*</span>
              </p>
              <div className="relative">
                <select
                  value={unitType}
                  onChange={(e) => setUnitType(e.target.value)}
                  className="rounded-lg border bg-slate-100 h-11 px-4 appearance-none w-full"
                >
                  <option value="residential">{dict.unit_type_residential}</option>
                  <option value="office">{dict.unit_type_office}</option>
                  <option value="retail">{dict.unit_type_retail}</option>
                  <option value="storage">{dict.unit_type_storage}</option>
                  <option value="warehouse">{dict.unit_type_warehouse}</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                  expand_more
                </span>
              </div>
            </label>

            {/* TENANT */}
            <label className="flex flex-col">
              <p className="pb-2 text-sm font-medium">{dict.unit_field_tenant}</p>
              <div className="relative">
                <input
                  value={tenant}
                  onChange={(e) => setTenant(e.target.value)}
                  placeholder={dict.unit_placeholder_tenant}
                  className="rounded-lg border bg-slate-100 h-11 px-4 w-full"
                />
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
              </div>
            </label>

            {/* SQUARE FOOTAGE */}
            <label className="flex flex-col">
              <p className="pb-2 text-sm font-medium">{dict.unit_field_sqft}</p>
              <input
                value={sqft}
                onChange={(e) => setSqft(e.target.value)}
                placeholder={dict.unit_placeholder_sqft}
                className="rounded-lg border bg-slate-100 h-11 px-4"
              />
            </label>

            {/* FLOOR NUMBER */}
            <label className="flex flex-col opacity-70">
              <p className="pb-2 text-sm font-medium">{dict.unit_field_floor}</p>
              <input
                disabled
                value={`${dict.prop_floor_label} ${floorNumber}`}
                className="rounded-lg h-11 px-4 border bg-slate-200 text-slate-500"
              />
            </label>

            {/* STATUS */}
            <label className="flex flex-col">
              <p className="pb-2 text-sm font-medium">{dict.unit_field_status}</p>
              <div className="relative">
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="rounded-lg border bg-slate-100 h-11 px-4 appearance-none w-full"
                >
                  <option value="active">{dict.unit_status_active}</option>
                  <option value="vacant">{dict.unit_status_vacant}</option>
                  <option value="maintenance">{dict.unit_status_maintenance}</option>
                  <option value="renovation">{dict.unit_status_renovation}</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                  expand_more
                </span>
              </div>
            </label>

            {/* NOTES */}
            <label className="flex flex-col md:col-span-2">
              <p className="pb-2 text-sm font-medium">{dict.unit_field_notes}</p>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={dict.unit_placeholder_notes}
                className="rounded-lg border bg-slate-100 min-h-24 px-4 py-3"
              ></textarea>
            </label>
          </div>

          {/* STAFF SECTION */}
          <div className="pt-6 mt-6 border-t border-slate-200">
            <h3 className="text-base font-semibold">{dict.unit_assign_staff}</h3>
            <p className="text-sm text-slate-500">{dict.unit_assign_staff_desc}</p>

            <div className="relative mt-3">
              <input
                value={staffInput}
                onChange={(e) => setStaffInput(e.target.value)}
                placeholder={dict.unit_placeholder_staff}
                className="rounded-lg border bg-slate-100 h-11 pl-10 pr-4 w-full"
              />
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              {assignedStaff.map((s, i) => (
                <div key={i} className="inline-flex items-center gap-2 pl-3 pr-1 py-1 bg-primary/10 rounded-full">
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
          </div>

          {/* ROOMS SECTION */}
          <div className="pt-6 mt-6 border-t border-slate-200">
            <h3 className="text-base font-semibold">{dict.unit_rooms_title}</h3>
            <p className="text-sm text-slate-500">{dict.unit_rooms_desc}</p>

            <div className="flex gap-2 mt-3">
              <input
                value={roomInput}
                onChange={(e) => setRoomInput(e.target.value)}
                placeholder={dict.unit_placeholder_room}
                className="rounded-lg border bg-slate-100 flex-1 px-3 py-2"
              />
              <button
                onClick={handleAddRoom}
                className="flex h-10 items-center gap-2 rounded-lg bg-[#F38B14] px-5 text-sm font-semibold text-white hover:bg-black transition"
              >
                <span className="material-symbols-outlined text-base">add</span>
                {dict.btn_add}
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              {rooms.map((room, i) => (
                <div key={i} className="bg-slate-200 px-3 py-1 rounded-full flex items-center gap-2">
                  <span>{room}</span>
                  <button
                    onClick={() => setRooms(rooms.filter((_, idx) => idx !== i))}
                    className="material-symbols-outlined text-sm text-slate-500"
                  >
                    close
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-end items-center gap-4 p-6 border-t border-slate-200">
          <button onClick={onClose} className="text-sm font-semibold text-slate-600">
            {dict.btn_cancel}
          </button>

          <button
            onClick={handleSave}
            disabled={!unitName.trim()}
            className="flex h-10 items-center gap-2 rounded-lg bg-[#F38B14] px-5 text-sm font-semibold text-white hover:bg-black transition disabled:bg-primary/40"
          >
            {dict.unit_add_action}
          </button>
        </div>
      </div>
    </div>
  );
}
