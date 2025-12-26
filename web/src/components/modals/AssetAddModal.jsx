import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/i18n/translations";


export default function AssetAddModal({ unit, floor, onClose }) {

  const { lang } = useLanguage();
  const dict = t[lang];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="relative flex flex-col w-full max-w-[860px] max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden">

        {/* ---------------- HEADER ---------------- */}
        <div className="flex-shrink-0 px-8 pt-8 pb-4 border-b border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {dict.prop_asset_add_title}
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                {dict.prop_asset_add_sub}
              </p>
            </div>

            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>
        </div>

        {/* ---------------- SCROLLAREA ---------------- */}
        <div className="flex-grow overflow-y-auto px-8 py-6 space-y-10">

          {/* ---------- SECTION: BASIC INFO ---------- */}
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              {dict.prop_asset_section_basic}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">

              {/* Asset Name */}
              <label className="flex flex-col">
                <p className="text-sm font-medium pb-2">
                  {dict.prop_asset_label_name} *
                </p>
                <input
                  placeholder={dict.prop_asset_placeholder_name}
                  className="form-input w-full rounded-lg bg-gray-100 h-12 px-4 text-gray-900 placeholder:text-gray-400 
                             border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </label>

              {/* Category */}
              <label className="flex flex-col">
                <p className="text-sm font-medium pb-2">
                  {dict.prop_asset_label_category} *
                </p>
                <div className="relative">
                  <select
                    className="form-select w-full rounded-lg bg-gray-100 h-12 px-4 text-gray-900 
                               border border-gray-200 appearance-none
                               focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option>{dict.prop_asset_placeholder_category}</option>
                    <option>HVAC</option>
                    <option>Electrical</option>
                    <option>Fire Safety</option>
                    <option>CCTV</option>
                    <option>Plumbing</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    expand_more
                  </span>
                </div>
              </label>

              {/* Manufacturer */}
              <label className="flex flex-col">
                <p className="text-sm font-medium pb-2">
                  {dict.prop_asset_label_manufacturer}
                </p>
                <input
                  placeholder={dict.prop_asset_placeholder_manufacturer}
                  className="form-input w-full rounded-lg bg-gray-100 h-12 px-4 text-gray-900 
                             placeholder:text-gray-400 border border-gray-200 focus:ring-2 focus:ring-primary"
                />
              </label>

              {/* Model Number */}
              <label className="flex flex-col">
                <p className="text-sm font-medium pb-2">
                  {dict.prop_asset_label_model}
                </p>
                <input
                  placeholder={dict.prop_asset_placeholder_model}
                  className="form-input w-full rounded-lg bg-gray-100 h-12 px-4 text-gray-900 
                             placeholder:text-gray-400 border border-gray-200 focus:ring-2 focus:ring-primary"
                />
              </label>

              {/* Serial Number */}
              <label className="flex flex-col md:col-span-2">
                <p className="text-sm font-medium pb-2">
                  {dict.prop_asset_label_serial}
                </p>
                <input
                  placeholder={dict.prop_asset_placeholder_serial}
                  className="form-input w-full rounded-lg bg-gray-100 h-12 px-4 text-gray-900 
                             placeholder:text-gray-400 border border-gray-200 focus:ring-2 focus:ring-primary"
                />
              </label>

            </div>
          </section>

          <div className="border-t border-gray-200" />

          {/* ---------- SECTION: LOCATION ---------- */}
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              {dict.prop_asset_section_location}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">

              {/* Unit */}
              <label className="flex flex-col">
                <p className="text-sm font-medium pb-2">
                  {dict.prop_asset_label_unit}
                </p>
                <input
                  value={unit}
                  disabled
                  className="form-input w-full rounded-lg bg-gray-200 h-12 px-4 text-gray-500 cursor-not-allowed"
                />
              </label>

              {/* Floor */}
              <label className="flex flex-col">
                <p className="text-sm font-medium pb-2">
                  {dict.prop_asset_label_floor}
                </p>
                <input
                  value={floor}
                  disabled
                  className="form-input w-full rounded-lg bg-gray-200 h-12 px-4 text-gray-500 cursor-not-allowed"
                />
              </label>

              {/* Placement */}
              <label className="flex flex-col md:col-span-2">
                <p className="text-sm font-medium pb-2">
                  {dict.prop_asset_label_position}
                </p>
                <input
                  placeholder={dict.prop_asset_placeholder_position}
                  className="form-input w-full rounded-lg bg-gray-100 h-12 px-4 text-gray-900 
                             placeholder:text-gray-400 border border-gray-200 focus:ring-2 focus:ring-primary"
                />
                <p className="text-xs text-gray-500 mt-1.5">
                  Helps identify the exact placement inside the unit.
                </p>
              </label>

            </div>
          </section>

          <div className="border-t border-gray-200" />

          {/* ---------- SECTION: WARRANTY ---------- */}
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              {dict.prop_asset_section_warranty}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">

              {/* Purchase Date */}
              <label className="flex flex-col">
                <p className="text-sm font-medium pb-2">
                  {dict.prop_asset_label_purchase}
                </p>
                <input
                  type="date"
                  className="form-input w-full rounded-lg bg-gray-100 h-12 px-4 border border-gray-200 
                             focus:ring-2 focus:ring-primary"
                />
              </label>

              {/* Installation */}
              <label className="flex flex-col">
                <p className="text-sm font-medium pb-2">
                  {dict.prop_asset_label_installation}
                </p>
                <input
                  type="date"
                  className="form-input w-full rounded-lg bg-gray-100 h-12 px-4 border border-gray-200 
                             focus:ring-2 focus:ring-primary"
                />
              </label>

              {/* Warranty */}
              <label className="flex flex-col">
                <p className="text-sm font-medium pb-2">{dict.prop_asset_label_warranty}</p>
                <input
                  type="date"
                  className="form-input w-full rounded-lg bg-gray-100 h-12 px-4 border border-gray-200 
                             focus:ring-2 focus:ring-primary"
                />
              </label>

              {/* Expected Lifetime */}
              <label className="flex flex-col">
                <p className="text-sm font-medium pb-2">
                  {dict.prop_asset_label_lifetime}
                </p>
                <input
                  placeholder={dict.prop_asset_placeholder_lifetime}
                  className="form-input w-full rounded-lg bg-gray-100 h-12 px-4 border border-gray-200 
                             placeholder:text-gray-400 focus:ring-2 focus:ring-primary"
                />
              </label>

              {/* Vendor */}
              <label className="flex flex-col md:col-span-2">
                <p className="text-sm font-medium pb-2">
                  {dict.prop_asset_label_vendor}
                </p>
                <input
                  placeholder={dict.prop_asset_placeholder_vendor}
                  className="form-input w-full rounded-lg bg-gray-100 h-12 px-4 border border-gray-200 
                             focus:ring-2 focus:ring-primary"
                />
              </label>

            </div>
          </section>

          <div className="border-t border-gray-200" />

          {/* ---------- SECTION: NOTES ---------- */}
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              {dict.prop_asset_section_notes}
            </h2>
            <textarea
              placeholder={dict.prop_asset_placeholder_notes}
              className="form-textarea w-full rounded-lg bg-gray-100 border-gray-200 
                         p-4 text-gray-900 h-28 placeholder:text-gray-400
                         focus:ring-2 focus:ring-primary"
            />
          </section>

        </div>

        {/* ---------------- FOOTER ---------------- */}
        <div className="flex-shrink-0 px-8 py-4 border-t border-gray-200 bg-white">
          <div className="flex justify-end items-center gap-4">

            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-lg text-sm font-semibold text-gray-700 
                         hover:bg-gray-100 transition"
            >
              {dict.action_cancel}
            </button>

            <button className="px-6 py-2.5 rounded-lg text-sm font-bold text-white bg-[#F38B14] 
                               hover:bg-black transition">
              {dict.prop_asset_add_cta}
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
