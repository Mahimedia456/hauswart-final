// src/modules/superAdmin/pages/Properties/tabs/StructureTab.jsx

import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";
import { useState } from "react";
import {
  AddFloorModal,
  EditFloorModal,
  AddUnitModal,
  EditUnitModal
} from "@/components/modals";


export default function StructureTab() {
  const { lang } = useLanguage();
  const dict = t[lang];

  /* -------------------------------------------------------- */
  /* DUMMY FLOORS + UNITS                                     */
  /* -------------------------------------------------------- */
  const [floors, setFloors] = useState([
    { id: 0, name: "Ground Floor", units: 8 },
    { id: 1, name: "Floor 1", units: 12 },
    { id: 2, name: "Floor 2", units: 12 },
    { id: 3, name: "Floor 3", units: 12 },
    { id: 4, name: "Floor 4", units: 12 },
  ]);

  const [selectedFloor, setSelectedFloor] = useState(3);

  /* -------------------------------------------------------- */
  /* UNITS (DEMO DATA)                                        */
  /* -------------------------------------------------------- */
  const [units, setUnits] = useState([
    {
      id: "301",
      type: "Residential",
      tenant: {
        name: "John Appleseed",
        avatar:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBvQUan-MzUI-qUelPwUn_cGIRlWuLhlOK6PxJUHc_DUU1gmfcMY9IgSuapOYWObsY6C50q5xQNLv1YSTfOOH9ur7OiIj7cm8cgsvkkhoxtxR8q1cs65Re6wCRDCjyh_C98Dgshj0ujBu51Sha4fxhIufxaoxGsjbMxv9NpG8ueVRzuFHg5_KMAwh9Rpr6Pfbc66kt6_GCjgclE7SfUOIMP95k9lAfpi2L05GWA6LblIOHOqxuq4clZNcQy_pgh92VqbfVUp4RiQPM",
      },
      caretakers: [],
      rooms: ["Living Room", "Bedroom"],
      status: "Active",
    },

    {
      id: "302",
      type: "Office",
      tenant: null,
      caretakers: [],
      rooms: [],
      status: "Vacant",
    },
  ]);

  /* -------------------------------------------------------- */
  /* MODAL HANDLERS                                           */
  /* -------------------------------------------------------- */
  const [showAddFloor, setShowAddFloor] = useState(false);
  const [editFloorData, setEditFloorData] = useState(null);

  const [showAddUnit, setShowAddUnit] = useState(false);
  const [editUnitData, setEditUnitData] = useState(null);

  /* -------------------------------------------------------- */
  return (
    <div className="grid grid-cols-12 gap-6">

      {/* ---------------- LEFT SIDEBAR ---------------- */}
      <div className="col-span-12 lg:col-span-4 xl:col-span-3">
        <div className="bg-white rounded-DEFAULT shadow-sm p-4 h-full max-h-[calc(100vh-250px)] flex flex-col">

          <div className="flex items-center justify-between pb-4 border-b border-slate-200">
            <h2 className="text-lg font-bold">{dict.struct_floors}</h2>

            <button
              onClick={() => setShowAddFloor(true)}
              className="flex h-10 items-center gap-2 rounded-lg bg-[#F38B14] px-5 text-sm font-semibold text-white hover:bg-black transition"
            >
              {dict.struct_add_floor}
            </button>
          </div>

          <div className="flex-1 overflow-y-auto mt-4 space-y-1 pr-2">
            {floors.map((floor) => (
              <div
                key={floor.id}
                onClick={() => setSelectedFloor(floor.id)}
                className={`flex items-center gap-2 p-3 rounded-DEFAULT cursor-pointer hover:bg-gray-100 ${
                  selectedFloor === floor.id
                    ? "bg-primary/10 border-l-4 border-primary"
                    : ""
                }`}
              >
                <span className="material-symbols-outlined text-gray-400">
                  drag_indicator
                </span>
                <div className="flex-1">
                  <p
                    className={`${
                      selectedFloor === floor.id ? "font-bold" : "font-medium"
                    }`}
                  >
                    {floor.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {floor.units} {dict.struct_units}
                  </p>
                </div>
                <span className="material-symbols-outlined text-gray-500">
                  chevron_right
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------------- RIGHT CONTENT ---------------- */}
      <div className="col-span-12 lg:col-span-8 xl:col-span-9">

        {/* --------------------------------------------- */}
        {/* RIGHT TOP BAR — ADD UNIT + EDIT FLOOR BUTTON   */}
        {/* --------------------------------------------- */}
        <div className="sticky top-[73px] bg-white py-4 z-10 flex items-center justify-between">

          <div className="flex items-baseline gap-3">
            <h2 className="text-2xl font-bold">{floors[selectedFloor].name}</h2>
            <p className="text-base text-gray-500">
              {floors[selectedFloor].units} {dict.struct_units}
            </p>
          </div>

          <div className="flex items-center gap-3">

            {/* EDIT FLOOR (NEW BUTTON) */}
            <button
              onClick={() => setEditFloorData(floors[selectedFloor])}
              className="flex h-10 items-center gap-2 rounded-lg bg-gray-200 px-5 text-sm font-semibold text-gray-700 hover:bg-gray-300 transition"
            >
              <span className="material-symbols-outlined text-base">edit</span>
              {dict.struct_edit_floor}
            </button>

            {/* ADD UNIT */}
            <button
              onClick={() => setShowAddUnit(true)}
              className="flex h-10 items-center gap-2 rounded-lg bg-[#F38B14] px-5 text-sm font-semibold text-white hover:bg-black transition"
            >
              {dict.struct_add_unit}
            </button>

          </div>
        </div>

        {/* Units grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-2">
          {units.map((u) => (
            <UnitCard
              key={u.id}
              unit={u}
              dict={dict}
              onEdit={() => setEditUnitData(u)}
              onDelete={() => {}}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-slate-200 flex flex-wrap items-center gap-x-6">
          <a className="text-sm font-medium text-gray-500 hover:text-black" href="#">
            {dict.struct_manage_floors}
          </a>
          <a className="text-sm font-medium text-gray-500 hover:text-black" href="#">
            {dict.struct_bulk_units}
          </a>
          <a className="text-sm font-medium text-gray-500 hover:text-black" href="#">
            {dict.struct_download_diagram}
          </a>
          <a className="text-sm font-medium text-gray-500 hover:text-black" href="#">
            {dict.struct_view_hierarchy}
          </a>
        </div>
      </div>

      {/* ---------------- Modals ---------------- */}
      {showAddFloor && <AddFloorModal onClose={() => setShowAddFloor(false)} />}

      {editFloorData && (
        <EditFloorModal
          floor={editFloorData}
          onClose={() => setEditFloorData(null)}
        />
      )}

      {showAddUnit && <AddUnitModal onClose={() => setShowAddUnit(false)} />}

      {editUnitData && (
        <EditUnitModal
          unit={editUnitData}
          onClose={() => setEditUnitData(null)}
        />
      )}
    </div>
  );
}

/* -------------------------------------------------------- */
/* UNIT CARD + STATUS BADGE                                 */
/* -------------------------------------------------------- */
function UnitCard({ unit, dict, onEdit, onDelete }) {
  const color =
    unit.type === "Residential"
      ? "blue"
      : unit.type === "Office"
      ? "purple"
      : "gray";

  return (
    <div className="bg-white rounded-DEFAULT p-4 flex flex-col gap-4 border hover:shadow-lg hover:border-slate-200 transition">
      <div className="flex flex-col gap-2">
        <p className="font-bold text-lg">Unit {unit.id}</p>
        <div
          className={`inline-flex w-fit rounded-full px-2.5 py-0.5 text-xs font-semibold bg-${color}-100 text-${color}-800`}
        >
          {unit.type}
        </div>
      </div>

      {/* Tenant */}
      <div className="flex items-center gap-3">
        {unit.tenant ? (
          <>
            <img
              src={unit.tenant.avatar}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium">{unit.tenant.name}</p>
              <p className="text-xs text-gray-500">{dict.struct_assigned_tenant}</p>
            </div>
          </>
        ) : (
          <>
            <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-gray-500">person_off</span>
            </div>
            <div>
              <p className="text-sm font-medium">{dict.struct_unassigned}</p>
              <p className="text-xs text-gray-500">{dict.struct_no_tenant}</p>
            </div>
          </>
        )}
      </div>

      {/* Rooms */}
      {unit.rooms.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {unit.rooms.map((r, i) => (
            <span
              key={i}
              className="text-xs bg-gray-100 text-gray-600 rounded-full px-2 py-0.5"
            >
              {r}
            </span>
          ))}
        </div>
      )}

      {/* Status + Actions */}
      <div className="mt-auto pt-4 border-t flex items-center justify-between">
        <StatusBadge status={unit.status} />

        <div className="flex items-center gap-1 text-gray-500">
          <button onClick={onEdit} className="p-1.5 hover:text-black">
            <span className="material-symbols-outlined">edit</span>
          </button>
          <button onClick={onDelete} className="p-1.5 hover:text-red-500">
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  if (status === "Active")
    return (
      <div className="inline-flex rounded-full bg-green-100 text-green-700 px-2.5 py-0.5 text-xs font-bold">
        Active
      </div>
    );

  if (status === "Maintenance Needed")
    return (
      <div className="inline-flex rounded-full bg-orange-100 text-orange-700 px-2.5 py-0.5 text-xs font-bold">
        Maintenance Needed
      </div>
    );

  return (
    <div className="inline-flex rounded-full bg-gray-200 text-gray-600 px-2.5 py-0.5 text-xs font-bold">
      Vacant
    </div>
  );
}
