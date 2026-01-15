import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";
import { useNavigate } from "react-router-dom";

export default function AssetDrawer({ asset, onClose }) {
  const { lang } = useLanguage();
  const dict = t[lang];
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 right-0 w-[420px] h-full bg-white border-l border-border-color shadow-xl p-6 z-50">
      
      {/* Header */}
      <div className="flex justify-between pb-4 border-b border-border-color">
        <h2 className="text-lg font-bold">{asset.name}</h2>
        <button
          onClick={onClose}
          className="p-1 rounded-full hover:bg-gray-100"
        >
          ✕
        </button>
      </div>

      {/* Body */}
      <div className="mt-6 space-y-5">

        {/* Category + Status */}
        <div className="flex gap-2">
          <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs">
            {asset.category}
          </span>

          <span className="px-3 py-1 rounded-full bg-success/20 text-success text-xs font-bold">
            {dict[`prop_asset_status_${asset.status.replaceAll(" ", "")}`] || asset.status}
          </span>
        </div>

        {/* Info Sections */}
        <div>
          <p className="text-xs text-gray-500">{dict.prop_asset_unitFloor}</p>
          <p className="font-semibold">{asset.unit}</p>
        </div>

        <div>
          <p className="text-xs text-gray-500">{dict.prop_asset_serial}</p>
          <p className="font-semibold">{asset.serial}</p>
        </div>

        <div>
          <p className="text-xs text-gray-500">{dict.prop_asset_lastMaintenance}</p>
          <p className="font-semibold">{asset.lastMaintained}</p>
        </div>

        {asset.nextMaintenance && (
          <div>
            <p className="text-xs text-gray-500">{dict.prop_asset_nextMaintenance}</p>
            <p className="font-semibold">{asset.nextMaintenance}</p>
          </div>
        )}
      </div>

      {/* Drawer Footer */}
      <div className="absolute bottom-0 left-0 w-full p-4 border-t border-border-color bg-white space-y-3">

        {/* 🔥 FULL ORANGE BUTTON — FIXED */}
     <button
  onClick={() => navigate(`/super-admin/properties/assets/${asset.id}`)}
  className="w-full rounded-lg bg-[#F38B14] text-white rounded-lg h-10 font-semibold hover:bg-black"
>
  {dict.prop_asset_openFullDetails}
</button>


        {/* SECONDARY BUTTON */}
        <button className="w-full h-10 rounded-lg bg-component-bg text-text-main font-semibold hover:bg-border-color">
          {dict.prop_asset_assignMaintenance}
        </button>
      </div>
    </div>
  );
}
