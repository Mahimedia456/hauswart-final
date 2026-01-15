import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/i18n/translations";


export default function AddFloorModal({ onClose, onSave }) {
  const { lang } = useLanguage();
  const dict = t[lang];

  const [floorName, setFloorName] = useState("");
  const [floorLabel, setFloorLabel] = useState("");
  const [units, setUnits] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = () => {
    if (!floorName.trim()) return;

    onSave({
      id: Date.now(),
      name: floorName.trim(),
      label: floorLabel.trim(),
      units: Number(units) || 0,
      notes: notes.trim(),
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[520px] rounded-xl bg-white shadow-xl p-6">

        {/* HEADER */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold text-slate-800">
              {dict.floor_add_title}
            </h1>
            <p className="text-sm text-slate-500">
              {dict.floor_add_subtitle}
            </p>
          </div>

          <button
            className="text-slate-500 hover:text-slate-800 transition-colors"
            onClick={onClose}
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* FORM */}
        <div className="flex flex-col gap-5">

          {/* FLOOR NAME */}
          <label className="flex flex-col w-full">
            <p className="text-sm font-medium text-slate-700 pb-2">
              {dict.floor_field_name} *
            </p>
            <input
              className="form-input w-full h-12 rounded-lg bg-slate-100 border border-transparent px-4 text-sm focus:ring-2 focus:ring-primary/50"
              placeholder={dict.floor_placeholder_name}
              value={floorName}
              onChange={(e) => setFloorName(e.target.value)}
            />
          </label>

          {/* FLOOR LABEL */}
          <label className="flex flex-col w-full">
            <p className="text-sm font-medium text-slate-700 pb-2">
              {dict.floor_field_label}
            </p>
            <input
              className="form-input w-full h-12 rounded-lg bg-slate-100 border border-transparent px-4 text-sm focus:ring-2 focus:ring-primary/50"
              placeholder={dict.floor_placeholder_label}
              value={floorLabel}
              onChange={(e) => setFloorLabel(e.target.value)}
            />
          </label>

          {/* NUMBER OF UNITS */}
          <div className="flex flex-col w-full">
            <p className="text-sm font-medium text-slate-700 pb-2">
              {dict.floor_field_units}
            </p>

            <div className="relative">
              <input
                type="number"
                min="0"
                className="form-input w-full h-12 rounded-lg bg-slate-100 border border-transparent px-4 text-sm focus:ring-2 focus:ring-primary/50"
                placeholder="0"
                value={units}
                onChange={(e) => setUnits(e.target.value)}
              />
              {/* Up/Down icon arrows (visual only) */}
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col text-slate-500">
                <span className="material-symbols-outlined text-base leading-none cursor-pointer">
                  arrow_drop_up
                </span>
                <span className="material-symbols-outlined text-base leading-none cursor-pointer -mt-1">
                  arrow_drop_down
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-500 pt-2 px-1">
              {dict.floor_units_hint}
            </p>
          </div>

          {/* NOTES */}
          <label className="flex flex-col w-full">
            <p className="text-sm font-medium text-slate-700 pb-2">
              {dict.floor_field_notes}
            </p>
            <textarea
              className="form-textarea w-full min-h-[70px] rounded-lg bg-slate-100 border border-transparent p-4 text-sm focus:ring-2 focus:ring-primary/50 placeholder:text-slate-400"
              placeholder={dict.floor_placeholder_notes}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </label>

          {/* INFO BOX */}
          <div className="flex items-start gap-3 bg-slate-100/80 rounded-lg p-3">
            <span className="material-symbols-outlined text-slate-500 mt-0.5">
              info
            </span>
            <p className="text-xs text-slate-600">
              {dict.floor_info_text}
            </p>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-end items-center gap-4 pt-6">
          <button
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            onClick={onClose}
          >
            {dict.btn_cancel}
          </button>

          <button
            disabled={!floorName.trim()}
            onClick={handleSubmit}
            className="flex h-10 items-center gap-2 rounded-lg bg-[#F38B14] px-5 text-sm font-semibold text-white hover:bg-black transition" >
            {dict.floor_btn_add}
          </button>
        </div>
      </div>
    </div>
  );
}
