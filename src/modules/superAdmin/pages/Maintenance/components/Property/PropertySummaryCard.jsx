export default function PropertySummaryCard({ dict }) {
  return (
    <div className="p-6 rounded-xl bg-white shadow">
      <div className="flex flex-wrap justify-between gap-6">
        
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">Hauswart Tower</h2>
          <p className="text-gray-500">123 Innovation Drive, Tech Park</p>
          <p className="text-sm text-gray-500">
            {dict.mt_property_org}: Quantum Properties Inc.
          </p>
          <p className="text-sm font-medium mt-1">
            Assigned to: Alex Johnson
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <CardItem value="142" label={dict.mt_property_totalAssets} />
          <CardItem value="8" label={dict.mt_property_activeSchedules} />
          <CardItem value="5" label={dict.mt_property_openTasks} />
          <CardItem value="2" label={dict.mt_property_overdueTasks} danger />
        </div>
      </div>
    </div>
  );
}

function CardItem({ value, label, danger }) {
  return (
    <div className="p-4 rounded-lg bg-gray-100 text-center">
      <p className={`text-2xl font-bold ${danger ? "text-red-600" : ""}`}>
        {value}
      </p>
      <p className={`text-xs ${danger ? "text-red-600" : "text-gray-500"}`}>
        {label}
      </p>
    </div>
  );
}
