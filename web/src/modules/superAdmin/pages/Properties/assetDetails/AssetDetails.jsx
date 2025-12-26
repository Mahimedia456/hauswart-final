// src/modules/superAdmin/pages/Properties/assetDetails/AssetDetails.jsx

import { useParams } from "react-router-dom";
import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";

// COMPONENTS
import AssetHeader from "./components/AssetHeader";
import AssetSummaryCard from "./components/AssetSummaryCard";
import WarrantyLifecycle from "./components/WarrantyLifecycle";
import MaintenanceOverview from "./components/MaintenanceOverview";
import DocumentsMedia from "./components/DocumentsMedia";
import ServiceHistory from "./components/ServiceHistory";
import QuickActions from "./components/QuickActions";
import { AssignedStaff } from "@/components/modals";
import UnitContext from "./components/UnitContext";
import AssetHealthScore from "./components/AssetHealthScore";

export default function AssetDetails() {
  const { assetId } = useParams();
  const { lang } = useLanguage();
  const dict = t[lang];

  console.log("Loaded Asset ID:", assetId);

  // Dummy data for now
  const asset = {
    id: assetId,
    name: "HVAC Split AC — Unit 304",
    category: "HVAC",
    unit: "Unit 304",
    floor: "Floor 3",
    placement: "Living Room Ceiling",
    vendor: "CoolAir Inc.",
    serial: "HVC-98754",
    model: "AZ-5500",
    status: "active",
    image: "",
  };

  return (
    <div className="max-w-7xl mx-auto p-6 flex flex-col gap-6">

      {/* HEADER */}
      <AssetHeader asset={asset} dict={dict} />

      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">

        {/* LEFT COLUMN */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <AssetSummaryCard asset={asset} dict={dict} />
          <WarrantyLifecycle dict={dict} />
          <MaintenanceOverview dict={dict} />
          <DocumentsMedia dict={dict} />
          <ServiceHistory dict={dict} />
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <AssetHealthScore dict={dict} />
          <QuickActions dict={dict} />
          <AssignedStaff dict={dict} />
          <UnitContext dict={dict} />
        </div>

      </div>
    </div>
  );
}
