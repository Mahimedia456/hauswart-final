// src/modules/superAdmin/components/tickets/InternalNotesModal.jsx

import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";

export default function InternalNotesModal({ open, onClose }) {
  const { lang } = useLanguage();
  const dict = t[lang];

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white dark:bg-background-dark rounded-xl shadow-xl flex flex-col h-[80vh]">

        {/* HEADER */}
        <div className="flex justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-bold">{dict.ticket_notes_title}</h2>
            <p className="text-sm text-gray-500">{dict.ticket_notes_sub}</p>
          </div>

          <button className="text-gray-500" onClick={onClose}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* BODY */}
        <div className="flex-1 overflow-y-auto p-6">

          {/* Add New Note */}
          <h3 className="text-base font-semibold">{dict.ticket_notes_addNew}</h3>

          <textarea
            className="w-full mt-3 p-4 rounded-lg bg-gray-100 dark:bg-gray-800"
            placeholder={dict.ticket_notes_ph}
            rows={4}
          />

          <div className="flex items-center gap-2 mt-4 cursor-pointer text-sm">
            <span className="material-symbols-outlined">attach_file</span>
            <span>{dict.ticket_notes_attach}</span>
          </div>

          <div className="flex gap-4 mt-4">
            <select className="flex-1 border rounded-lg p-2 bg-white dark:bg-gray-800">
              <option>{dict.ticket_notes_tag}</option>
              <option>General</option>
              <option>Escalation</option>
              <option>SLA Exception</option>
            </select>

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              {dict.ticket_notes_high}
            </label>
          </div>

          <p className="text-xs text-gray-500 mt-2">
            {dict.ticket_notes_info}
          </p>

          {/* Notes History */}
          <div className="border-t my-6"></div>

          <h3 className="text-base font-semibold">{dict.ticket_notes_history}</h3>

          {/* Dummy timeline */}
          <div className="relative pl-6 mt-4 space-y-8">

            <div className="absolute left-2.5 top-0 bottom-0 w-0.5 bg-gray-300"></div>

            {/* Example Note */}
            <div className="relative">
              <div className="absolute -left-3 top-1 w-5 h-5 bg-primary rounded-full ring-4 ring-white"></div>

              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200">
                <p className="font-semibold">Jordan Carter</p>
                <p className="text-xs text-gray-500">12 Nov 2025 — 3:15 PM</p>

                <span className="inline-block mt-2 px-2 py-0.5 text-xs bg-red-100 text-red-700 rounded">
                  {dict.ticket_notes_highLabel}
                </span>

                <p className="mt-3 text-sm">
                  {dict.ticket_notes_dummy1}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-between p-6 border-t bg-gray-50">
          <button onClick={onClose} className="font-semibold text-sm">
            {dict.action_close}
          </button>

          <button className="px-4 py-2 bg-primary text-white rounded-lg">
            {dict.ticket_notes_submit}
          </button>
        </div>

      </div>
    </div>
  );
}
