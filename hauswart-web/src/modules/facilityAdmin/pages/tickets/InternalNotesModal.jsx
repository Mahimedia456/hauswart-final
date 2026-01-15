import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";

export default function InternalNotesModal({ open, onClose, notes = [] }) {
  const { lang } = useLanguage();
  const dict = t[lang];

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="flex h-[80vh] w-full max-w-[640px] flex-col overflow-hidden rounded-xl bg-white shadow-2xl">

        {/* HEADER */}
        <header className="flex items-start justify-between border-b border-gray-200 p-6">
          <div>
            <h1 className="text-xl font-bold text-gray-900">{dict.ticket_notes_title}</h1>
            <p className="text-sm text-gray-500">{dict.ticket_notes_sub}</p>
          </div>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </header>

        {/* BODY */}
        <main className="flex-1 overflow-y-auto p-6">

          {/* ADD NOTE */}
          <section>
            <h3 className="text-base font-semibold text-gray-800 mb-3">
              {dict.ticket_notes_addNew}
            </h3>

            <textarea
              rows={5}
              placeholder={dict.ticket_notes_ph}
              className="
                w-full rounded-lg bg-gray-100 p-4 text-sm text-gray-900 
                focus:outline-none focus:ring-2 focus:ring-primary
              "
            />

            {/* Attach files */}
            <div className="mt-3 flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-primary">
              <span className="material-symbols-outlined text-base">attach_file</span>
              {dict.ticket_notes_attach}
            </div>

            {/* TAG + HIGH IMPORTANCE */}
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <select
                className="w-full rounded-lg border border-gray-300 bg-white p-2 text-sm text-gray-700 focus:ring-primary"
              >
                <option>{dict.ticket_notes_tag}</option>
                <option>{dict.ticket_notes_tag_general}</option>
                <option>{dict.ticket_notes_tag_escalation}</option>
                <option>{dict.ticket_notes_tag_sla}</option>
                <option>{dict.ticket_notes_tag_safety}</option>
              </select>

              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input type="checkbox" className="form-checkbox text-primary" />
                {dict.ticket_notes_high}
              </label>
            </div>

            <p className="text-xs text-gray-500 mt-2">
              {dict.ticket_notes_info}
            </p>
          </section>

          {/* DIVIDER */}
          <hr className="my-6 border-gray-200" />

          {/* NOTES HISTORY */}
          <section>
            <h3 className="text-base font-semibold text-gray-800 mb-4">
              {dict.ticket_notes_history}
            </h3>

            <div className="relative pl-6 flex flex-col gap-6">

              {/* TIMELINE LINE */}
              <div className="absolute left-2.5 top-2 h-full w-[2px] bg-gray-200"></div>

              {/* HIGH PRIORITY NOTE */}
              <div className="relative">
                {/* Bullet */}
                <div className="absolute -left-[23px] top-1 flex size-5 items-center justify-center rounded-full bg-primary ring-4 ring-white">
                  <div className="size-1.5 rounded-full bg-white"></div>
                </div>

                <div className="rounded-lg border border-gray-200 p-4 shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://i.pravatar.cc/100?img=1"
                        className="size-8 rounded-full"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">John Carter</p>
                        <p className="text-xs text-gray-500">Super Admin</p>
                      </div>
                    </div>

                    <p className="text-xs text-gray-500">12 Nov 2025 — 3:15 PM</p>
                  </div>

                  {/* BADGES */}
                  <div className="flex gap-2 mb-3">
                    <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                      {dict.ticket_notes_highLabel}
                    </span>

                    <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                      Escalation
                    </span>
                  </div>

                  <p className="text-sm text-gray-800">
                    {dict.ticket_notes_dummy1}
                  </p>

                  <div className="mt-4 flex justify-end gap-4">
                    <button className="text-sm text-gray-500 hover:text-primary flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">edit</span>
                      {dict.action_edit}
                    </button>

                    <button className="text-sm text-red-500 hover:text-red-700 flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">delete</span>
                      {dict.action_delete}
                    </button>
                  </div>
                </div>
              </div>

              {/* NORMAL NOTE */}
              <div className="relative">
                <div className="absolute -left-[23px] top-1 size-5 rounded-full bg-gray-300 ring-4 ring-white"></div>

                <div className="rounded-lg border border-gray-200 p-4 shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://i.pravatar.cc/100?img=2"
                        className="size-8 rounded-full"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">Maria Rodriguez</p>
                        <p className="text-xs text-gray-500">Facility Manager</p>
                      </div>
                    </div>

                    <p className="text-xs text-gray-500">10 Nov 2025 — 9:45 AM</p>
                  </div>

                  <p className="text-sm text-gray-800">{dict.ticket_notes_dummy2}</p>

                  <div className="mt-3 flex">
                    <div className="flex items-center gap-2 rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm">
                      <span className="material-symbols-outlined text-gray-500">picture_as_pdf</span>
                      <span className="text-gray-700">Installation_Report.pdf</span>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button className="text-sm font-medium text-gray-600 hover:text-primary">
                      {dict.ticket_notes_viewFull}
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="flex items-center justify-between border-t border-gray-200 bg-gray-100 p-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-200"
          >
            {dict.action_close}
          </button>

          <button
            className="px-4 py-2 rounded-lg bg-[#F38B14] text-white font-semibold text-sm hover:bg-black"
          >
            {dict.ticket_notes_submit}
          </button>
        </footer>
      </div>
    </div>
  );
}
