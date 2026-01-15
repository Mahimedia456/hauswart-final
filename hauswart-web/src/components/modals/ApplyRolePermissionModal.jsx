import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { t } from "../../i18n/translations";

export default function ApplyRolePermissionModal({ open, onClose, onConfirm }) {
  const { lang } = useLanguage();
  const dict = t[lang];

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-xl overflow-hidden">

        {/* HEADER */}
        <div className="p-6 md:p-8 space-y-2">
          <h2 className="text-3xl font-extrabold text-gray-900">
            {dict.role_apply_title}
          </h2>
          <p className="text-gray-500">
            {dict.role_apply_subtitle}
          </p>
        </div>

        <div className="border-t" />

        {/* BODY */}
        <div className="p-6 md:p-8 space-y-4">
          <p className="text-gray-800">
            {dict.role_apply_summary}
          </p>

          {/* ROLE ACCORDIONS */}
          <div className="space-y-2">

            {/* FACILITY MANAGER */}
            <details open className="group border-t pt-2">
              <summary className="flex cursor-pointer items-center justify-between py-2">
                <span className="font-medium">
                  {dict.role_facility_manager}
                </span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>

              <div className="pl-4 space-y-2 text-sm text-gray-600">
                <ChangeItem
                  type="add"
                  label={dict.permission_added}
                  value="Create Work Order"
                />
                <ChangeItem
                  type="remove"
                  label={dict.permission_removed}
                  value="Delete Asset"
                />
              </div>
            </details>

            {/* TECHNICIAN */}
            <details className="group border-t pt-2">
              <summary className="flex cursor-pointer items-center justify-between py-2">
                <span className="font-medium">
                  {dict.role_technician}
                </span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>

              <div className="pl-4 space-y-2 text-sm text-gray-600">
                <ChangeItem
                  type="add"
                  label={dict.permission_added}
                  value="View All Schedules"
                />
              </div>
            </details>

            {/* AUDITOR */}
            <details className="group border-y pt-2">
              <summary className="flex cursor-pointer items-center justify-between py-2">
                <span className="font-medium">
                  {dict.role_auditor}
                </span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>

              <div className="pl-4 space-y-2 text-sm text-gray-600">
                <ChangeItem
                  type="add"
                  label={dict.permission_added}
                  value="View Audit Logs"
                />
                <ChangeItem
                  type="add"
                  label={dict.permission_added}
                  value="Export Reports"
                />
              </div>
            </details>

          </div>
        </div>

        {/* ACTION BAR */}
        <div className="flex justify-end gap-3 px-6 py-4 bg-gray-50">
          <button
            onClick={onClose}
            className="h-10 px-4 rounded-lg text-sm font-bold text-gray-600 hover:text-black"
          >
            {dict.action_cancel}
          </button>

          <button
            onClick={onConfirm}
            className="h-10 px-5 rounded-lg bg-[#F38B14] text-black text-sm font-bold hover:bg-black hover:text-white"
          >
            {dict.action_confirm_apply}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------------- SMALL PARTS ---------------- */

function ChangeItem({ type, label, value }) {
  const icon =
    type === "add" ? "add_circle" : "remove_circle";
  const color =
    type === "add" ? "text-green-600" : "text-red-600";

  return (
    <div className="flex items-center gap-2">
      <span className={`material-symbols-outlined text-base ${color}`}>
        {icon}
      </span>
      <span>
        {label}:{" "}
        <code className="bg-gray-100 rounded px-1.5 py-0.5 text-xs">
          {value}
        </code>
      </span>
    </div>
  );
}
