import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/i18n/translations";


export default function AssetEditModal({ asset, onClose }) {
  const { lang } = useLanguage();
  const dict = t[lang];

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-4xl rounded-xl shadow-2xl flex flex-col max-h-[85vh] overflow-hidden">

        {/* HEADER */}
        <div className="px-6 py-5 border-b border-zinc-200 flex items-start justify-between">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-2xl font-bold text-zinc-900">
              {dict.prop_asset_edit_title}
            </h1>
            <p className="text-sm text-zinc-500">{dict.prop_asset_edit_sub}</p>
          </div>

          <div className="flex items-center gap-4">
            {/* STATUS BADGE */}
            <div className="flex items-center gap-x-2 bg-green-100 px-3 py-1 rounded-full">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <p className="text-sm font-medium text-green-800">{dict.status_active ?? "Active"}</p>
            </div>

            <button
              onClick={onClose}
              className="text-zinc-500 hover:text-zinc-800"
            >
              <span className="material-symbols-outlined !text-2xl">close</span>
            </button>
          </div>
        </div>

        {/* SCROLL CONTENT */}
        <div className="flex-grow overflow-y-auto px-6 py-6 space-y-8">

          {/* SECTION: Asset Info */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-zinc-800">Asset Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <label className="flex flex-col">
                <p className="text-sm font-medium text-zinc-700 pb-2">
                  {dict.prop_asset_label_name}*
                </p>
                <input
                  defaultValue={asset.name}
                  className="form-input rounded-lg border border-zinc-200 bg-zinc-100 h-12 px-3"
                />
              </label>

              <label className="flex flex-col">
                <p className="text-sm font-medium text-zinc-700 pb-2">
                  {dict.prop_asset_label_category}*
                </p>
                <select
                  defaultValue={asset.category}
                  className="form-select rounded-lg border border-zinc-200 bg-zinc-100 h-12 px-3"
                >
                  <option>HVAC</option>
                  <option>Electrical</option>
                  <option>Fire Safety</option>
                </select>
              </label>

              <label className="flex flex-col">
                <p className="text-sm font-medium text-zinc-700 pb-2">
                  {dict.prop_asset_label_serial} <span className="text-zinc-400">(optional)</span>
                </p>
                <input
                  defaultValue={asset.serial}
                  className="form-input rounded-lg border border-zinc-200 bg-zinc-100 h-12 px-3"
                />
              </label>

              <label className="flex flex-col md:col-span-2">
                <p className="text-sm font-medium text-zinc-700 pb-2">Placement Position</p>
                <input
                  defaultValue={asset.placement}
                  className="form-input rounded-lg border border-zinc-200 bg-zinc-100 h-12 px-3"
                />
              </label>

            </div>
          </section>

          <hr className="border-zinc-200" />

          {/* SECTION: Warranty */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-zinc-800">Warranty & Lifecycle</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <label className="flex flex-col">
                <p className="text-sm font-medium text-zinc-700 pb-2">Purchase Date</p>
                <input type="date" className="form-input rounded-lg border border-zinc-200 bg-zinc-100 h-12 px-3" />
              </label>

              <label className="flex flex-col">
                <p className="text-sm font-medium text-zinc-700 pb-2">Installation Date</p>
                <input type="date" className="form-input rounded-lg border border-zinc-200 bg-zinc-100 h-12 px-3" />
              </label>

              <label className="flex flex-col">
                <p className="text-sm font-medium text-zinc-700 pb-2">Warranty Expiry</p>
                <input type="date" className="form-input rounded-lg border border-zinc-200 bg-zinc-100 h-12 px-3" />
              </label>

              <label className="flex flex-col">
                <p className="text-sm font-medium text-zinc-700 pb-2">Expected Lifetime (optional)</p>
                <input className="form-input rounded-lg border border-zinc-200 bg-zinc-100 h-12 px-3" placeholder="e.g., 5 years" />
              </label>

            </div>
          </section>

        </div>

        {/* FOOTER */}
        <div className="px-6 py-4 border-t border-zinc-200 bg-white flex items-center justify-between">
          <button className="text-red-600 font-semibold hover:bg-red-50 px-4 py-2 rounded-lg">
            {dict.prop_asset_delete_cta}
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-semibold text-zinc-600 hover:bg-zinc-100 rounded-lg"
            >
              {dict.action_cancel}
            </button>

            <button className="px-6 py-2.5 text-sm font-semibold text-white bg-[#F38B14] rounded-lg hover:bg-zinc-900 transition">
              {dict.prop_asset_edit_cta}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
