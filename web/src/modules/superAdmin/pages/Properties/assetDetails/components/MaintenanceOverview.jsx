export default function MaintenanceOverview({ dict }) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">{dict.prop_assetMaintenance_title}</h3>
        <button className="text-primary font-medium text-sm hover:underline">
          {dict.prop_assetMaintenance_viewLogs}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mt-4">
        <Info label={dict.prop_assetMaintenance_frequency} value="Quarterly" />
        <Info label={dict.prop_assetMaintenance_status} value={dict.prop_assetMaintenance_onSchedule} />
        <Info label={dict.prop_assetMaintenance_nextScheduled} value="June 10, 2024" />
        <Info label={dict.prop_assetMaintenance_lastCompleted} value="March 05, 2024" />
      </div>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-gray-500">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}
