import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";
import { useState } from "react";

export default function MaintenanceHeader({ item }) {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const dict = t[lang];

  const [showDelete, setShowDelete] = useState(false);

  return (
    <>
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-md flex justify-between">

        {/* LEFT */}
        <div>
          <h2 className="text-xl font-bold text-gray-900">{item.title}</h2>

          <p className="text-sm text-gray-500 mt-1">
            {dict.label_mtId}: {item.id}
          </p>

          <p className="text-sm text-gray-600 mt-1">
            {dict.label_asset}: {item.asset}
          </p>

          <p className="text-sm text-gray-600">
            {dict.label_property}: {item.property}
          </p>
        </div>

        {/* RIGHT */}
        <div className="text-right space-y-3">

          {/* STATUS */}
          <span className="inline-flex rounded-full bg-green-100 text-green-700 px-3 py-1 text-sm font-medium">
            {item.status}
          </span>

          {/* ACTION BUTTONS */}
          <div className="flex gap-2 justify-end">
            {/* EDIT */}
            <button
              onClick={() => navigate(`/super-admin/maintenance/${item.id}/edit`)}
              className="px-4 py-2 rounded-xl text-sm font-medium bg-[#F38B14]/10 text-[#F38B14] border border-[#F38B14]/30 hover:bg-[#F38B14]/20"
            >
              {dict.action_edit}
            </button>

            {/* DELETE */}
            <button
              onClick={() => setShowDelete(true)}
              className="px-4 py-2 rounded-xl text-sm font-medium bg-red-50 text-red-600 border border-red-200 hover:bg-red-100"
            >
              {dict.action_delete}
            </button>
          </div>
        </div>
      </div>

      {/* DELETE POPUP */}
      {showDelete && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
            <h2 className="text-lg font-bold text-red-600">
              {dict.modal_delete_title}
            </h2>

            <p className="text-sm text-gray-600 mt-2">
              {dict.modal_delete_description} <strong>{item.id}</strong>?
            </p>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setShowDelete(false)}
                className="text-gray-600 hover:text-black"
              >
                {dict.action_cancel}
              </button>

              <button className="px-5 py-2 rounded-lg bg-red-600 text-white">
                {dict.modal_delete_confirm}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
