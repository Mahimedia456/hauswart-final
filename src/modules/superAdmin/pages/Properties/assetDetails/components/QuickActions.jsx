export default function QuickActions({ dict }) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">

      <h3 className="text-lg font-bold mb-4">{dict.prop_assetQuick_title}</h3>

      <div className="flex flex-col gap-2">
        <button className="primary-btn">{dict.prop_assetQuick_ticket}</button>
        <button className="gray-btn">{dict.prop_assetQuick_assignTask}</button>
        <button className="gray-btn">{dict.prop_assetQuick_addDocument}</button>
        <button className="text-red-600 hover:bg-red-50 rounded-lg px-4 py-2 font-bold">
          {dict.prop_assetQuick_markOutOfService}
        </button>
      </div>

    </div>
  );
}
