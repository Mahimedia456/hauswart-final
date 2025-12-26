export default function PropertyCompliance({ dict }) {
  return (
    <div className="p-6 rounded-xl bg-white shadow">
      <h3 className="text-lg font-bold mb-4">{dict.mt_property_compliance}</h3>

      <ul className="space-y-3 mb-4">
        <li className="flex justify-between text-sm">
          <span>{dict.mt_property_fireSafety}</span>
          <span className="font-semibold text-green-600">{dict.mt_property_valid}</span>
        </li>

        <li className="flex justify-between text-sm">
          <span>{dict.mt_property_elevatorInspection}</span>
          <span className="font-semibold text-yellow-600">
            {dict.mt_property_expiresSoon}
          </span>
        </li>

        <li className="flex justify-between text-sm">
          <span>{dict.mt_property_electricalReport}</span>
          <span className="font-semibold text-red-600">{dict.mt_property_expired}</span>
        </li>
      </ul>

      <button className="w-full flex items-center justify-center gap-2 h-10 border border-gray-300 rounded-lg text-sm hover:bg-gray-100">
        <span className="material-symbols-outlined text-base">upload_file</span>
        {dict.mt_property_uploadDoc}
      </button>

      <button className="w-full mt-2 text-sm font-bold text-[#F38B14] hover:underline">
        {dict.mt_property_openCompliance}
      </button>
    </div>
  );
}
