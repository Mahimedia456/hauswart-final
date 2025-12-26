import React, { useState } from "react";
import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";

import AssetDrawer from "../components/AssetDrawer";
import { AssetAddModal, AssetEditModal } from "@/components/modals";


export default function AssetsTab() {
  const { lang } = useLanguage();
  const dict = t[lang];

  const [assets, setAssets] = useState([
    {
      id: "1",
      name: "Air Handler Unit AHU-01",
      category: "HVAC",
      unit: "Roof Level",
      serial: "SN-A5820BEEF1",
      status: "Active",
      lastMaintained: "2023-10-15",
    },
    {
      id: "2",
      name: "Elevator #2 - Service",
      category: "Elevator Equipment",
      unit: "Lobby",
      serial: "SN-ELEV8912C",
      status: "Under Maintenance",
      lastMaintained: "2023-11-01",
    },
    {
      id: "3",
      name: "Fire Pump FP-03",
      category: "Fire Safety",
      unit: "Basement L2",
      serial: "SN-F58PMP331X",
      status: "Out of Service",
      lastMaintained: "2023-09-20",
    },
    {
      id: "4",
      name: "Main Electrical Panel MEP-01",
      category: "Electrical",
      unit: "Electrical Room",
      serial: "SN-MEP99827V",
      status: "Replacement Required",
      lastMaintained: "2022-05-10",
    },
  ]);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(null);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editAsset, setEditAsset] = useState(null);

  const [openMenuId, setOpenMenuId] = useState(null);

  const categoryColors = {
    HVAC: "bg-blue-100 text-blue-800",
    "Elevator Equipment": "bg-purple-100 text-purple-800",
    "Fire Safety": "bg-red-100 text-red-800",
    Electrical: "bg-yellow-100 text-yellow-800",
  };

  const statusColors = {
    Active: "bg-success/20 text-success",
    "Under Maintenance": "bg-warning/20 text-warning",
    "Out of Service": "bg-destructive/20 text-destructive",
    "Replacement Required": "bg-gray-200 text-gray-700",
  };

  const openDrawer = (asset) => {
    setSelectedAsset(asset);
    setDrawerOpen(true);
  };

  const toggleMenu = (e, id) => {
    e.stopPropagation();
    setOpenMenuId(openMenuId === id ? null : id);
  };

  return (
    <div className="pt-6">

      {/* FILTERS + ADD BUTTON */}
      <div className="flex flex-wrap items-center justify-between mb-6 gap-4">

        <div className="flex flex-wrap items-center gap-4">
          {/* Search */}
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              search
            </span>
            <input
              placeholder={dict.prop_assets_search_placeholder}
              className="w-full rounded-DEFAULT border-border-color bg-component-bg pl-10 pr-4 py-2 text-sm focus:border-primary focus:ring-primary"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <select className="rounded-DEFAULT border-border-color bg-component-bg py-2 pl-3 pr-8 text-sm focus:ring-primary">
              <option>{dict.prop_assets_filter_category}</option>
              <option>{dict.prop_assets_cat_HVAC}</option>
              <option>{dict.prop_assets_cat_Electrical}</option>
              <option>{dict.prop_assets_cat_FireSafety}</option>
              <option>{dict.prop_assets_cat_ElevatorEquipment}</option>
            </select>
            <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
              expand_more
            </span>
          </div>

          {/* Status Filter */}
          <div className="relative">
            <select className="rounded-DEFAULT border-border-color bg-component-bg py-2 pl-3 pr-8 text-sm focus:ring-primary">
              <option>{dict.prop_assets_filter_status}</option>
              <option>{dict.prop_asset_status_Active}</option>
              <option>{dict.prop_asset_status_UnderMaintenance}</option>
              <option>{dict.prop_asset_status_OutOfService}</option>
              <option>{dict.prop_asset_status_ReplacementRequired}</option>
            </select>
            <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
              expand_more
            </span>
          </div>
        </div>

        {/* Add Asset */}
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-2 rounded-DEFAULT h-10 px-4 bg-[#F38B14] text-white font-bold hover:bg-black"
        >
          <span className="material-symbols-outlined text-base">add_circle</span>
          {dict.prop_assets_addAsset}
        </button>
      </div>

      {/* TABLE */}
      <div className="overflow-hidden rounded-DEFAULT border border-border-color bg-white shadow-sm">
        <table className="min-w-full text-sm">

          <thead className="bg-component-bg">
            <tr>
              <th className="py-3 px-4 text-left font-semibold text-text-secondary">
                {dict.prop_assets_col_name}
              </th>

              <th className="py-3 px-4 text-left font-semibold text-text-secondary">
                {dict.prop_assets_col_category}
              </th>

              <th className="py-3 px-4 text-left font-semibold text-text-secondary">
                {dict.prop_assets_col_unit}
              </th>

              <th className="py-3 px-4 text-left font-semibold text-text-secondary">
                {dict.prop_assets_col_serial}
              </th>

              <th className="py-3 px-4 text-left font-semibold text-text-secondary">
                {dict.prop_assets_col_status}
              </th>

              <th className="py-3 px-4 text-left font-semibold text-text-secondary">
                {dict.prop_assets_col_lastMaintained}
              </th>

              <th className="py-3 px-4 text-center font-semibold text-text-secondary">
                {dict.col_actions}
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-border-color">
            {assets.map((asset, index) => (
              <tr
                key={asset.id}
                onClick={() => openDrawer(asset)}
                className={`cursor-pointer hover:bg-component-bg/50 ${
                  index % 2 === 1 ? "bg-component-bg/40" : ""
                }`}
              >
                <td className="py-3 px-4 font-medium">{asset.name}</td>

                <td className="py-3 px-4">
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${categoryColors[asset.category]}`}
                  >
                    {dict[`prop_assets_cat_${asset.category.replace(" ", "")}`] || asset.category}
                  </span>
                </td>

                <td className="py-3 px-4">{asset.unit}</td>
                <td className="py-3 px-4">{asset.serial}</td>

                <td className="py-3 px-4">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold ${statusColors[asset.status]}`}
                  >
                    {dict[`prop_asset_status_${asset.status.replace(" ", "")}`] ||
                      asset.status}
                  </span>
                </td>

                <td className="py-3 px-4">{asset.lastMaintained}</td>

                {/* ACTION MENU */}
                <td className="py-3 px-4 text-center relative">
                  <button
                    className="text-text-secondary hover:text-text-main"
                    onClick={(e) => toggleMenu(e, asset.id)}
                  >
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>

                  {openMenuId === asset.id && (
                    <div
                      className="absolute right-4 mt-2 w-32 rounded-md border bg-white shadow-lg z-20"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        className="block w-full text-left px-3 py-2 hover:bg-gray-100"
                        onClick={() => openDrawer(asset)}
                      >
                        {dict.action_view}
                      </button>

                      <button
                        className="block w-full text-left px-3 py-2 hover:bg-gray-100"
                        onClick={() => setEditAsset(asset)}
                      >
                        {dict.action_edit}
                      </button>

                      <button
                        className="block w-full text-left px-3 py-2 text-red-600 hover:bg-gray-100"
                      >
                        {dict.action_delete}
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {/* DRAWER */}
      {drawerOpen && selectedAsset && (
        <AssetDrawer asset={selectedAsset} onClose={() => setDrawerOpen(false)} />
      )}

      {/* ADD MODAL */}
      {isAddModalOpen && (
        <AssetAddModal onClose={() => setIsAddModalOpen(false)} />
      )}

      {/* EDIT MODAL */}
      {editAsset && (
        <AssetEditModal asset={editAsset} onClose={() => setEditAsset(null)} />
      )}
    </div>
  );
}
