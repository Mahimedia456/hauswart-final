export default function AssetSummaryCard({ asset, dict }) {
  return (
    <div className="rounded-lg p-6 bg-white shadow-sm flex flex-col md:flex-row gap-6">

      <div className="w-full md:w-40 h-40 rounded-lg bg-gray-100 flex items-center justify-center">
      </div>

      <div className="flex flex-col gap-3 flex-1">

        <div className="flex gap-2">
          <span className="badge-blue">{asset.category}</span>
          <span className="badge-gray">{asset.unit}</span>
          <span className="badge-gray">{asset.floor}</span>
        </div>

        <h2 className="text-xl font-bold">{asset.name}</h2>

        <p className="text-sm text-gray-600">{dict.prop_assetDetail_placement}: {asset.placement}</p>
        <p className="text-sm text-gray-600">
          {dict.prop_assetDetail_serialModel}: {asset.serial}, {asset.model}
        </p>
      </div>
    </div>
  );
}
