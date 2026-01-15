export default function UnitContext({ dict }) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <h3 className="text-lg font-bold mb-4">{dict.prop_assetContext_title}</h3>

      <div className="text-sm space-y-2">
        <Row label={dict.prop_assetContext_unit} value="Unit 304" />
        <Row label={dict.prop_assetContext_floor} value="Floor 3" />
        <Row label={dict.prop_assetContext_property} value="The Grand Plaza" />
      </div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium text-primary">{value}</span>
    </div>
  );
}
