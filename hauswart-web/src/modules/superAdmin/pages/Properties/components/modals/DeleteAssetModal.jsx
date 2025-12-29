import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";

export default function DeleteAssetModal({ open, onClose, assetId, onConfirm }) {
  const { lang } = useLanguage();
  const dict = t[lang];

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6">

        {/* HEADER */}
        <h2 className="text-xl font-bold text-red-600 mb-2">
          {dict.prop_deleteAsset_title}
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          {dict.prop_deleteAsset_description}
          <br />
          <span className="font-semibold text-black">#{assetId}</span>
        </p>

        {/* WARNING BOX */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-2 text-red-600">
            <span className="material-symbols-outlined">warning</span>
            <p className="text-sm font-medium">
              {dict.prop_deleteAsset_warning}
            </p>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border text-sm"
          >
            {dict.common_cancel}
          </button>

          <button
            onClick={() => {
              onConfirm(assetId);
              onClose();
            }}
            className="px-5 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700"
          >
            {dict.prop_deleteAsset_confirm}
          </button>
        </div>
      </div>
    </div>
  );
}
