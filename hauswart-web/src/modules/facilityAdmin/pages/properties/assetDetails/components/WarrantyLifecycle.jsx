export default function WarrantyLifecycle({ dict }) {
  return (
    <div className="rounded-lg p-6 bg-white shadow-sm">
      <h3 className="text-lg font-bold mb-4">{dict.prop_assetWarranty_title}</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <InfoRow label={dict.prop_assetWarranty_purchaseDate} value="Jan 15, 2022" />
        <InfoRow label={dict.prop_assetWarranty_expectedLifetime} value="10 Years" />
        <InfoRow label={dict.prop_assetWarranty_installationDate} value="Jan 20, 2022" />
        <InfoRow label={dict.prop_assetWarranty_vendor} value="ACME Supplies" />

        <InfoRow
          label={dict.prop_assetWarranty_expiry}
          value={<>Jan 15, 2025 <span className="badge-orange">{dict.prop_assetWarranty_expiresSoon}</span></>}
        />

        <InfoRow label={dict.prop_assetWarranty_lastUpdated} value="Mar 05, 2024" />
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
