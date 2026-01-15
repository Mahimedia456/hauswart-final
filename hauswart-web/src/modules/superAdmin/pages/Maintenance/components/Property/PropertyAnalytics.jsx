export default function PropertyAnalytics({ dict }) {
  return (
    <div className="p-6 rounded-xl bg-white shadow">
      <h3 className="text-lg font-bold mb-4">{dict.mt_property_analytics}</h3>

      <div className="space-y-6">
        <div>
          <p className="text-sm font-semibold mb-2">
            {dict.mt_property_completionRate}
          </p>

          <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden flex">
            <div className="bg-green-500 h-full" style={{ width: "70%" }}></div>
            <div className="bg-blue-500 h-full" style={{ width: "20%" }}></div>
            <div className="bg-red-500 h-full" style={{ width: "10%" }}></div>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold mb-2">
            {dict.mt_property_workload}
          </p>

          <div className="flex items-end gap-2 h-32">
            {[60, 80, 50, 90, 75, 65].map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-t-sm ${
                  i === 3 ? "bg-[#F38B14]" : "bg-orange-300"
                }`}
                style={{ height: `${h}%` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
