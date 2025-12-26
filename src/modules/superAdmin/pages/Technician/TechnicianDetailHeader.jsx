// src/modules/superAdmin/pages/Technicians/TechnicianDetailHeader.jsx
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { t } from "../../../../i18n/translations";
import { useLanguage } from "../../../../context/LanguageContext";
import ApplyRolePermissionModal from "@/components/modals/ApplyRolePermissionModal";

export default function TechnicianDetailHeader({ technician }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const { lang } = useLanguage();
  const dict = t[lang];

  const [roleModalOpen, setRoleModalOpen] = useState(false);

  if (!technician) return null;

  return (
    <>
      <div className="bg-white/80 rounded-2xl border border-slate-200 p-6 shadow-md flex justify-between items-start">

        {/* LEFT */}
        <div>
          <button
            onClick={() => navigate("/super-admin/technicians")}
            className="text-sm text-slate-500 hover:text-slate-800 mb-2 flex items-center gap-1"
          >
            ← {dict.action_backToTechnicians}
          </button>

          <h2 className="text-2xl font-bold text-slate-900">
            {technician.name}
          </h2>

          <p className="text-sm text-slate-600">
            {technician.email} · {technician.phone}
          </p>

          <div className="flex gap-2 mt-3 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
              {dict.status_active}
            </span>

            <span className="px-3 py-1 rounded-full bg-[#F38B14]/10 text-[#F38B14] text-sm">
              {dict.role_technician}
            </span>

            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
              {technician.organization}
            </span>
          </div>
        </div>

        {/* RIGHT BUTTONS */}
        <div className="flex gap-2">

          {/* EDIT */}
          <button
            onClick={() => navigate(`/super-admin/technicians/${id}/edit`)}
            className="px-4 py-2 rounded-xl text-sm font-medium bg-white border border-slate-200 hover:bg-slate-100"
          >
            {dict.action_editTechnician}
          </button>

          {/* ASSIGN ROLE */}
          <button
            onClick={() => setRoleModalOpen(true)}
            className="px-4 py-2 rounded-xl text-sm font-medium bg-white border border-slate-200 hover:bg-slate-100"
          >
            {dict.action_assignPermissions}
          </button>

          {/* DELETE */}
          <button
            onClick={() => navigate(`/super-admin/technicians/${id}/delete`)}
            className="px-4 py-2 rounded-xl text-sm font-medium bg-[#F38B14] text-white hover:bg-black"
          >
            {dict.action_delete}
          </button>
        </div>
      </div>

      {/* ROLE MODAL */}
      <ApplyRolePermissionModal
        open={roleModalOpen}
        onClose={() => setRoleModalOpen(false)}
        onConfirm={() => setRoleModalOpen(false)}
      />
    </>
  );
}
