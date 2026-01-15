export default function PropertyRiskIndicators({ dict }) {
  return (
    <div className="p-6 rounded-xl bg-white shadow">
      <h3 className="text-lg font-bold mb-4">{dict.mt_property_risk}</h3>

      <div className="space-y-3">
        <RiskItem label={dict.mt_property_highRisk} value="3" danger />
        <RiskItem label={dict.mt_property_expiringWarranty} value="5" warning />
        <RiskItem label={dict.mt_property_agingEquipment} value="12" />
      </div>
    </div>
  );
}

function RiskItem({ label, value, danger, warning }) {
  return (
    <div
      className={`p-3 rounded-lg flex justify-between items-center ${
        danger
          ? "bg-red-100 text-red-700"
          : warning
          ? "bg-yellow-100 text-yellow-700"
          : "bg-gray-100"
      }`}
    >
      <span className="text-sm">{label}</span>
      <span className="text-sm font-bold">{value}</span>
    </div>
  );
}
