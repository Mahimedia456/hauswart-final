import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";

export default function FacilityManagerHeader({ facilityManager }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const { lang } = useLanguage();
  const dict = t[lang];

  const [showSuspend, setShowSuspend] = useState(false);

  /* SAFETY GUARD */
  if (!facilityManager) return null;

  return (
    <>
      {/* HEADER CARD */}
      <div className="bg-white/80 rounded-2xl border border-slate-200 p-6 shadow-md flex justify-between items-start">

        {/* LEFT INFO */}
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            {facilityManager.name}
          </h2>
          <p className="text-sm text-slate-600">
            {dict.facilityManagerId}: {facilityManager.id}
          </p>
          <p className="text-sm text-slate-500">
            {dict.createdOn}: {facilityManager.createdDate} ·{" "}
            {facilityManager.properties} {dict.properties}
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="text-right space-y-3">

          {/* PRIMARY CONTACT */}
          <div>
            <p className="text-sm font-semibold text-slate-700">
              {dict.primaryContact}
            </p>
            <p className="text-sm text-slate-600">
              {facilityManager.contactPerson}
            </p>
            <p className="text-sm text-slate-600">
              {facilityManager.email}
            </p>
            <p className="text-sm text-slate-600">
              {facilityManager.phone}
            </p>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex gap-2 justify-end">

            {/* EDIT */}
            <button
              onClick={() =>
                navigate(`/super-admin/facility-managers/${id}/edit`)
              }
              className="
                px-4 py-2 rounded-xl text-sm font-medium
                bg-[#F38B14]/10 text-[#F38B14] border border-[#F38B14]/30
                hover:bg-[#F38B14]/20 transition
              "
            >
              {dict.edit}
            </button>

            {/* SUSPEND */}
            <button
              onClick={() => setShowSuspend(true)}
              className="
                px-4 py-2 rounded-xl text-sm font-medium
                bg-yellow-50 text-yellow-700 border border-yellow-200
                hover:bg-yellow-100 transition
              "
            >
              {dict.suspend}
            </button>

            {/* DELETE */}
            <button
              onClick={() =>
                navigate(`/super-admin/facility-managers/${id}/delete`)
              }
              className="
                px-4 py-2 rounded-xl text-sm font-medium
                bg-red-50 text-red-600 border border-red-200
                hover:bg-red-100 transition
              "
            >
              {dict.delete}
            </button>
          </div>
        </div>
      </div>

      {/* ================= SUSPEND MODAL ================= */}
      {showSuspend && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl p-8">

            <div className="flex gap-4 items-start">
              <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-yellow-600 text-3xl">
                  warning
                </span>
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  {dict.suspendFacilityManagerTitle}
                </h2>
                <p className="text-slate-600 mt-1 text-sm">
                  {dict.suspendFacilityManagerDesc}
                </p>
              </div>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>• {dict.suspendBullet1}</li>
              <li>• {dict.suspendBullet2}</li>
              <li>• {dict.suspendBullet3}</li>
            </ul>

            <div className="flex mt-6 bg-slate-100 rounded-full p-1">
              <button className="flex-1 py-2 rounded-full bg-white text-slate-900 font-medium shadow">
                {dict.suspendOnly}
              </button>
              <button className="flex-1 py-2 rounded-full text-slate-600 hover:bg-slate-200">
                {dict.archivePermanently}
              </button>
            </div>

            <div className="flex justify-between mt-8">
              <button
                className="px-4 py-2 text-slate-600 hover:text-slate-900"
                onClick={() => setShowSuspend(false)}
              >
                {dict.cancel}
              </button>

              <button
                className="
                  px-6 py-2 rounded-xl bg-red-600 text-white font-medium
                  hover:bg-red-700 transition
                "
              >
                {dict.confirmSuspend}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
