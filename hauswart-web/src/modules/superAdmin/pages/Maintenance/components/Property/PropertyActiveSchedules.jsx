export default function PropertyActiveSchedules({ dict }) {
  return (
    <div className="p-6 rounded-xl bg-white shadow">
      <h3 className="text-lg font-bold mb-4">{dict.mt_property_activeSchedules}</h3>

      <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-lg text-center">
        <span className="material-symbols-outlined text-5xl text-gray-400">event_repeat</span>

        <p className="text-gray-500 mt-2">{dict.mt_property_noSchedules}</p>

        <button className="mt-4 bg-[#F38B14] text-white h-10 px-6 rounded-lg hover:bg-black">
          {dict.mt_property_assignSchedule}
        </button>
      </div>
    </div>
  );
}
