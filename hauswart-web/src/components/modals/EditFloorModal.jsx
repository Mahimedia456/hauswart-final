import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/i18n/translations";


import AddUnitModal from "./AddUnitModal";
import EditUnitModal from "./EditUnitModal";

export default function EditFloorModal({ floor, onClose, onSave }) {
  const { lang } = useLanguage();
  const dict = t[lang];

  // ------------------------------
  // FLOOR STATE
  // ------------------------------
  const [floorName, setFloorName] = useState(floor?.name || "");
  const [floorLabel, setFloorLabel] = useState(floor?.label || "");
  const [notes, setNotes] = useState(floor?.notes || "");

  // Dummy units (if missing)
  const defaultDummyUnits = [
    {
      id: 201,
      unitName: "Unit 201",
      type: "Residential",
      tenant: "Liam Johnson",
      status: "Active",
    },
    {
      id: 202,
      unitName: "Unit 202",
      type: "Office",
      tenant: null,
      badge: "Maintenance",
    },
    {
      id: 203,
      unitName: "Unit 203",
      type: "Storage",
      tenant: null,
      badge: "Vacant",
    },
  ];

  const [units, setUnits] = useState(floor?.units?.length ? floor.units : defaultDummyUnits);

  const [deleteIndex, setDeleteIndex] = useState(null);

  // Modals
  const [openAddUnit, setOpenAddUnit] = useState(false);
  const [editingUnit, setEditingUnit] = useState(null);

  // ------------------------------
  // UNIT CRUD
  // ------------------------------

  const handleAddUnit = (unit) => {
    const newUnit = {
      id: Date.now(),
      unitName: `Unit ${Date.now().toString().slice(-3)}`,
      ...unit,
    };
    setUnits((prev) => [...prev, newUnit]);
  };

  const handleUpdateUnit = (updatedUnit) => {
    setUnits((prev) =>
      prev.map((u) => (u.id === updatedUnit.id ? updatedUnit : u))
    );
  };

  const handleDeleteUnit = (index) => {
    setUnits((prev) => prev.filter((_, i) => i !== index));
    setDeleteIndex(null);
  };

  // ------------------------------
  // SAVE FLOOR
  // ------------------------------

  const handleSave = () => {
    onSave({
      ...floor,
      name: floorName,
      label: floorLabel,
      notes,
      units,
    });
    onClose();
  };

  // ------------------------------
  // RENDER
  // ------------------------------

  return (
    <>
      {/* ADD UNIT MODAL */}
      {openAddUnit && (
        <AddUnitModal
          floorName={floorName}
          onClose={() => setOpenAddUnit(false)}
          onSave={(unit) => {
            handleAddUnit(unit);
            setOpenAddUnit(false);
          }}
        />
      )}

      {/* EDIT UNIT MODAL */}
      {editingUnit && (
        <EditUnitModal
          unit={editingUnit}
          onClose={() => setEditingUnit(null)}
          onSave={(unit) => {
            handleUpdateUnit(unit);
            setEditingUnit(null);
          }}
        />
      )}

      {/* MAIN MODAL */}
      <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
        <div className="relative flex flex-col w-full max-w-[680px] max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden">

          {/* HEADER */}
          <div className="flex items-start justify-between p-6 border-b border-slate-200">
            <div>
              <h1 className="text-xl font-bold text-slate-900">
                {dict.floor_edit_title}
              </h1>
              <p className="text-sm text-slate-500">{dict.floor_edit_subtitle}</p>
            </div>

            <button
              className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-slate-100"
              onClick={onClose}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* BODY */}
          <div className="flex-1 overflow-y-auto px-6 pb-24">

            {/* FLOOR DETAILS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">

              {/* Floor Name */}
              <label className="flex flex-col">
                <p className="text-sm font-medium text-slate-700 pb-2">
                  {dict.floor_field_name}
                </p>
                <input
                  className="h-11 rounded-lg bg-slate-100 border px-4"
                  placeholder={dict.floor_placeholder_name}
                  value={floorName}
                  onChange={(e) => setFloorName(e.target.value)}
                />
              </label>

              {/* Floor Label */}
              <label className="flex flex-col">
                <p className="text-sm font-medium text-slate-700 pb-2">
                  {dict.floor_field_label}
                </p>
                <input
                  className="h-11 rounded-lg bg-slate-100 border px-4"
                  placeholder={dict.floor_placeholder_label}
                  value={floorLabel}
                  onChange={(e) => setFloorLabel(e.target.value)}
                />
              </label>

              {/* Notes */}
              <label className="flex flex-col md:col-span-2">
                <p className="text-sm font-medium text-slate-700 pb-2">
                  {dict.floor_field_notes}
                </p>
                <textarea
                  className="rounded-lg bg-slate-100 border px-4 p-3 min-h-[80px]"
                  placeholder={dict.floor_placeholder_notes}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </label>
            </div>

            {/* DIVIDER */}
            <hr className="my-6 border-slate-200" />

            {/* UNITS SECTION */}
            <div className="flex items-start justify-between pb-2">
              <div>
                <h2 className="text-base font-bold">{dict.floor_units_title}</h2>
                <p className="text-sm text-slate-500">
                  {dict.floor_units_subtitle}
                </p>
              </div>

              <button
                onClick={() => setOpenAddUnit(true)}
                className="flex h-10 items-center gap-2 rounded-lg bg-[#F38B14] px-5 text-sm font-semibold text-white hover:bg-black transition"
              >
                <span className="material-symbols-outlined text-lg">add</span>
                {dict.floor_units_addUnit}
              </button>
            </div>

            {/* UNITS LIST */}
            <div className="flex flex-col gap-3 mt-4">
              {units.map((unit, index) => (
                <div key={unit.id || index}>
                  {/* DELETE CONFIRM */}
                  {deleteIndex === index ? (
                    <div className="rounded-lg bg-red-50 p-3 border border-red-200">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-red-600">
                          warning
                        </span>

                        <p className="flex-1 text-sm text-red-700 font-medium">
                          {dict.floor_units_deleteWarning}
                        </p>

                        <button
                          className="rounded-md px-3 py-1.5 text-sm font-semibold text-slate-600 hover:bg-slate-200"
                          onClick={() => setDeleteIndex(null)}
                        >
                          {dict.btn_cancel}
                        </button>

                        <button
                          className="rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-red-700"
                          onClick={() => handleDeleteUnit(index)}
                        >
                          {dict.btn_deletePermanent}
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* NORMAL UNIT ROW */
                    <div className="group flex cursor-grab items-center gap-3 rounded-lg bg-white p-3 shadow-sm ring-1 ring-slate-100 hover:bg-slate-50">

                      <span className="material-symbols-outlined text-slate-400">
                        drag_indicator
                      </span>

                      <div className="flex flex-1 flex-col sm:flex-row sm:items-center gap-4">

                        <span className="w-20 font-semibold text-slate-900">
                          {unit.unitName}
                        </span>

                        <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                          {unit.type}
                        </span>

                        {unit.tenant ? (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-slate-600">
                              {unit.tenant}
                            </span>
                          </div>
                        ) : (
                          <span className="text-sm text-slate-400">
                            {dict.unit_noTenant}
                          </span>
                        )}

                        <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                          {dict.unit_status_active}
                        </span>
                      </div>

                      {/* ACTION BUTTONS */}
                      <div className="flex opacity-0 group-hover:opacity-100 gap-2 transition">
                        <button
                          className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-slate-200"
                          onClick={() => setEditingUnit(unit)}
                        >
                          <span className="material-symbols-outlined">edit</span>
                        </button>

                        <button
                          className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-slate-200"
                          onClick={() => setDeleteIndex(index)}
                        >
                          <span className="material-symbols-outlined text-red-500">
                            delete
                          </span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* FOOTER */}
          <div className="absolute bottom-0 left-0 right-0 border-t border-slate-200 bg-white p-4">
            <div className="flex justify-end gap-4">
              <button
                className="rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-100"
                onClick={onClose}
              >
                {dict.btn_cancel}
              </button>

              <button
                className="rounded-lg bg-[#F38B14] px-4 py-2.5 text-sm font-semibold text-white hover:bg-black"
                onClick={handleSave}
              >
                {dict.btn_saveChanges}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
