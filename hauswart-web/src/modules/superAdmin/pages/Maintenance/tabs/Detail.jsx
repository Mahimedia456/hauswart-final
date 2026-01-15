// src/modules/superAdmin/pages/Maintenance/tabs/MaintenanceDetail.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";

// Import modals
import AssignMaintenanceModal from "@/components/modals/AssignMaintenanceModal";
import EvidenceModal from "@/components/modals/EvidenceModal"; // NEW

export default function MaintenanceDetail() {
  const { lang } = useLanguage();
  const dict = t[lang];
  const navigate = useNavigate();

  /** ----------------------------- MODAL STATES ----------------------------- **/
  const [assignOpen, setAssignOpen] = useState(false);
  const [evidenceOpen, setEvidenceOpen] = useState(false);

  /** ----------------------------- Dummy Data ----------------------------- **/
  const maintenance = {
    id: "MT-2342",
    title: "Quarterly HVAC Inspection",
    category: "HVAC",
    status: "In Progress",
    priority: "High",
    schedule: "AHU-04 Quarterly Preventive Maintenance",
    asset: "Air Handling Unit — AHU-04",
    assetId: "AHU-04", // <— Important for redirection
    property: "Hauswart Tower / Floor 5",
    technician: "Emily Carter",
    dueDate: "28 Jan 2025",
    startedAt: "09:30 AM",
    updatedAt: "24 Jan 2025",
    assetImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCzlLCM6NTXB72QC-ZuiGoVHLYmUFCJ5iTkgS6npZLcP2kexpuP5XM6FCWXjafyl4ZM87BN-9acH93ujm2Lt6eC17iQtGW2q4pznkzslHwCmmgLLwcVzYIT3e1EnLi0jU80-iJLSej1I_pkYjhLEBMSjqGDRivZ0GXPb9e7axVhQcME5Y3OlwUymf6nmj74EkFO6OlVFA9PWhMg0BXMPkvvpSihJKJXS9aJd7uWbg-kzbeBFAUfZzlGvhw5JI_wMnPS7NCKestRU2M",
  };

  return (
    <div className="p-6 space-y-6">

      {/* PAGE HEADER */}
      <header className="flex flex-wrap justify-between items-center gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-[#111]">
            {dict.mt_detail_title}
          </h1>

          <p className="text-gray-500 text-sm">
            {dict.mt_detail_subtitle}
          </p>

          <div className="text-sm text-gray-600 mt-1">
            <span className="font-medium">{dict.mt_detail_id}:</span>{" "}
            {maintenance.id} &nbsp;•&nbsp;
            <span className="font-medium">{dict.mt_detail_lastUpdated}:</span>{" "}
            {maintenance.updatedAt}
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-3">
          {/* OPEN ASSIGN MODAL */}
          <button
            onClick={() => setAssignOpen(true)}
            className="h-10 px-4 rounded-lg border border-gray-300 text-sm hover:bg-gray-100"
          >
            {dict.mt_detail_assignTech}
          </button>

          {/* OPEN EVIDENCE MODAL */}
          <button
            onClick={() => setEvidenceOpen(true)}
            className="h-10 px-4 rounded-lg border border-gray-300 text-sm hover:bg-gray-100"
          >
            {dict.mt_detail_addEvidence}
          </button>

          <button className="h-10 px-4 rounded-lg bg-[#F38B14] text-white hover:bg-black text-sm">
            {dict.mt_detail_markCompleted}
          </button>
        </div>
      </header>

      {/* SUMMARY CARD */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">

        <div className="flex flex-wrap justify-between gap-6">

          {/* LEFT SIDE */}
          <div className="flex-1 space-y-4">
            <div>
              <h2 className="text-xl font-bold text-[#111]">
                {maintenance.title}
              </h2>

              <p className="text-gray-500 text-sm">
                {maintenance.category} • {maintenance.priority}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">

              <div>
                <span className="font-medium text-gray-600">{dict.mt_detail_schedule}:</span>
                <p>{maintenance.schedule}</p>
              </div>

              <div>
                <span className="font-medium text-gray-600">{dict.mt_detail_asset}:</span>
                <p>{maintenance.asset}</p>
              </div>

              <div>
                <span className="font-medium text-gray-600">{dict.mt_detail_property}:</span>
                <p>{maintenance.property}</p>
              </div>

              <div>
                <span className="font-medium text-gray-600">{dict.mt_detail_technician}:</span>
                <p>{maintenance.technician}</p>
              </div>

              <div>
                <span className="font-medium text-gray-600">{dict.mt_detail_dueDate}:</span>
                <p>{maintenance.dueDate}</p>
              </div>

              <div>
                <span className="font-medium text-gray-600">{dict.mt_detail_startedAt}:</span>
                <p>{maintenance.startedAt}</p>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE — ASSET IMAGE */}
          <div className="w-56 flex flex-col items-center">
            <div
              className="w-full aspect-video bg-gray-200 bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url(${maintenance.assetImage})` }}
            />

            {/* REDIRECT TO ASSET DETAIL */}
            <button
              onClick={() => navigate(`/super-admin/properties/assets/${maintenance.assetId}`)}
              className="mt-3 w-full h-8 rounded-lg border text-sm hover:bg-gray-100"
            >
              {dict.mt_detail_openAsset}
            </button>
          </div>
        </div>
      </div>

      {/* ---------------- MODALS ---------------- */}

      {/* ASSIGN MODAL */}
      {assignOpen && (
        <AssignMaintenanceModal
          open={assignOpen}
          onClose={() => setAssignOpen(false)}
        />
      )}

      {/* EVIDENCE MODAL */}
      {evidenceOpen && (
        <EvidenceModal
          open={evidenceOpen}
          onClose={() => setEvidenceOpen(false)}
        />
      )}
    </div>
  );
}
