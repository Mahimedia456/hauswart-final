export default function AssetHeader({ asset, dict }) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4">

      <div className="flex flex-col gap-3 min-w-72">
        <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-black">
          <span className="material-symbols-outlined">arrow_back</span>
          {dict.prop_assetDetail_back}
        </button>

        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-black">{asset.name}</h1>
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            {dict.prop_assetDetail_status_active}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">

        <button className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg font-bold">
          {dict.prop_assetDetail_delete}
        </button>

        <div className="relative group">
          <button className="px-4 py-2 rounded-lg hover:bg-gray-100 flex items-center font-bold">
            {dict.prop_assetDetail_more}
            <span className="material-symbols-outlined ml-1">expand_more</span>
          </button>

          <div className="hidden group-hover:block absolute right-0 w-56 bg-white shadow-md rounded-lg z-20">
            <button className="block px-4 py-2 hover:bg-gray-100 text-sm w-full text-left">
              {dict.prop_assetDetail_downloadPDF}
            </button>
            <button className="block px-4 py-2 hover:bg-gray-100 text-sm w-full text-left">
              {dict.prop_assetDetail_exportHistory}
            </button>
            <button className="block px-4 py-2 hover:bg-gray-100 text-sm w-full text-left">
              {dict.prop_assetDetail_assignMaintenance}
            </button>
          </div>
        </div>

        <button className="px-4 py-2 bg-primary text-white rounded-lg font-bold hover:bg-black">
          {dict.prop_assetDetail_edit}
        </button>

      </div>
    </header>
  );
}
