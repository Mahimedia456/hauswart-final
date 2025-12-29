// src/modules/superAdmin/components/tickets/UpdateTicketStatusModal.jsx

import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";

export default function UpdateTicketStatusModal({ open, onClose, ticket }) {
  const { lang } = useLanguage();
  const dict = t[lang];

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-xl bg-white dark:bg-zinc-800 rounded-lg shadow-xl flex flex-col">

        {/* HEADER */}
        <div className="p-8 pb-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold">{dict.ticket_status_title}</h2>
              <p className="text-sm text-gray-500 mt-1">
                {dict.ticket_status_sub}
              </p>
            </div>

            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        </div>

        <div className="border-b border-gray-200"></div>

        {/* BODY */}
        <div className="p-8 flex flex-col gap-6">

          {/* Current + New Status */}
          <div className="bg-gray-50 dark:bg-zinc-900/50 p-6 rounded-lg">
            <div className="flex items-center justify-between gap-4">

              {/* Current Status */}
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 mb-2">
                  {dict.ticket_status_current}
                </p>
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold">
                  {ticket?.status || "Open"}
                </span>
              </div>

              <span className="material-symbols-outlined text-3xl text-gray-400">
                arrow_right_alt
              </span>

              {/* New Status */}
              <div className="flex-1">
                <label className="text-sm font-medium pb-2 block">
                  {dict.ticket_status_new} <span className="text-red-500">*</span>
                </label>

                <select className="w-full rounded-lg border-gray-300 dark:bg-zinc-700 p-2">
                  <option>{dict.ticket_status_choose}</option>
                  <option>In Progress</option>
                  <option>On Hold</option>
                  <option>Awaiting Approval</option>
                  <option>Completed</option>
                  <option>Closed</option>
                </select>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-3">
              {dict.ticket_status_rule_preview}
            </p>
          </div>

          {/* Status Note */}
          <div>
            <label className="text-sm font-medium block mb-2">
              {dict.ticket_status_note}
            </label>
            <textarea
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-zinc-700"
              placeholder={dict.ticket_status_note_ph}
            />
            <p className="text-xs text-gray-500 mt-2">
              {dict.ticket_status_note_info}
            </p>
          </div>

          {/* Info Cards */}
          <div className="space-y-4">

            {/* Completed */}
            <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-100 dark:bg-zinc-700/50">
              <span className="material-symbols-outlined text-gray-500">info</span>
              <div className="flex-1">
                <p className="text-sm">{dict.ticket_status_attach_advice}</p>

                <button className="mt-2 px-3 py-1.5 border rounded-md text-sm">
                  {dict.ticket_status_upload_btn}
                </button>
              </div>
            </div>

            {/* Closing Warning */}
            <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200">
              <span className="material-symbols-outlined text-red-600">warning</span>
              <div className="flex-1">
                <p className="text-sm text-red-800 font-medium">
                  {dict.ticket_status_close_warn1}
                </p>
                <p className="text-sm text-red-700">
                  {dict.ticket_status_close_warn2}
                </p>

                <label className="flex items-center gap-2 mt-3 text-sm">
                  <input type="checkbox" className="form-checkbox" />
                  {dict.ticket_status_close_feedback}
                </label>
              </div>
            </div>

          </div>

          {/* SLA Impact */}
          <div className="flex items-center gap-3 p-4 rounded-lg bg-yellow-50 border border-yellow-200">
            <span className="material-symbols-outlined text-yellow-600">timer</span>
            <p className="text-sm text-yellow-800">
              {dict.ticket_status_sla_notice}
            </p>
          </div>

        </div>

        <div className="border-b border-gray-200"></div>

        {/* FOOTER */}
        <div className="p-6 flex justify-end gap-4 bg-gray-50">
          <button onClick={onClose} className="text-sm font-semibold">
            {dict.action_cancel}
          </button>

          <button className="px-4 py-2 bg-primary text-white rounded-lg">
            {dict.ticket_status_submit}
          </button>
        </div>
      </div>
    </div>
  );
}
