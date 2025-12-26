// src/modules/superAdmin/pages/Properties/PropertyHeader.jsx
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { t } from "../../../../i18n/translations";
import { useLanguage } from "../../../../context/LanguageContext";

export default function PropertyHeader({ prop }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const { lang } = useLanguage();
  const dict = t[lang];

  const [showArchive, setShowArchive] = useState(false);

  return (
    <>
      {/* HEADER CARD */}
      <div className="bg-white/80 rounded-2xl border border-slate-200 p-6 shadow-md flex justify-between items-start">

        {/* LEFT */}
        <div>
          <h2 className="text-xl font-bold text-slate-900">{prop.name}</h2>

          <p className="text-sm text-slate-600">
            {dict.label_propertyId}: {prop.id}
          </p>

          <p className="text-sm text-slate-500">
            {prop.type} · {prop.floors} {dict.label_floors} / {prop.units} {dict.label_units}
          </p>

          <p className="text-sm mt-1">
            <span className="font-semibold">{dict.label_organization}: </span>
            {prop.organization}
          </p>
        </div>

        {/* RIGHT */}
        <div className="text-right space-y-3">

          {/* STATUS */}
          <span className="inline-flex rounded-full bg-green-100 text-green-700 px-3 py-1 text-sm font-medium">
            {prop.status}
          </span>

          {/* ACTION BUTTONS */}
          <div className="flex gap-2 justify-end">

            {/* EDIT */}
            <button
              onClick={() => navigate(`/super-admin/properties/${id}/edit`)}
              className="
                px-4 py-2 rounded-xl text-sm font-medium
                bg-[#F38B14]/10 text-[#F38B14] border border-[#F38B14]/30
                hover:bg-[#F38B14]/20 transition
              "
            >
              {dict.action_edit}
            </button>

            {/* ARCHIVE */}
            <button
              onClick={() => setShowArchive(true)}
              className="
                px-4 py-2 rounded-xl text-sm font-medium
                bg-yellow-50 text-yellow-700 border border-yellow-200
                hover:bg-yellow-100 transition
              "
            >
              {dict.action_archive}
            </button>

            {/* DELETE */}
            <button
              onClick={() => navigate(`/super-admin/properties/${id}/delete`)}
              className="
                px-4 py-2 rounded-xl text-sm font-medium
                bg-red-50 text-red-600 border border-red-200
                hover:bg-red-100 transition
              "
            >
              {dict.action_delete}
            </button>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------- */}
      {/* ARCHIVE MODAL */}
      {/* --------------------------------------------------- */}
      {showArchive && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl p-8">

            <h2 className="text-xl font-bold text-yellow-700">
              {dict.modal_archive_title}
            </h2>

            <p className="text-slate-600 mt-2 text-sm">
              {dict.modal_archive_description}
            </p>

            <div className="flex justify-between mt-8">
              <button
                className="px-4 py-2 text-slate-600 hover:text-slate-900"
                onClick={() => setShowArchive(false)}
              >
                {dict.action_cancel}
              </button>

              <button
                className="
                  px-6 py-2 rounded-xl bg-yellow-600 text-white font-medium
                  hover:bg-yellow-700 transition
                "
              >
                {dict.modal_archive_confirm}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
