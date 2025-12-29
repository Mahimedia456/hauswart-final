// src/modules/superAdmin/pages/Properties/PropertyDelete.jsx
import { useNavigate, useParams } from "react-router-dom";
import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";

export default function PropertyDelete() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { lang } = useLanguage();
  const dict = t[lang];

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl">

        <h2 className="text-xl font-bold text-red-600 mb-4">{dict.action_delete} Property</h2>
        <p className="text-slate-700 mb-6">
          {dict.modal_archive_description} <br />
          <strong>{id}</strong>
        </p>

        <div className="flex justify-end gap-4">
          <button
            className="px-4 py-2 rounded-lg border"
            onClick={() => navigate(-1)}
          >
            {dict.action_cancel}
          </button>

          <button
            className="px-5 py-2 bg-red-600 text-white rounded-lg"
            onClick={() => navigate("/super-admin/properties")}
          >
            {dict.action_delete}
          </button>
        </div>

      </div>
    </div>
  );
}
