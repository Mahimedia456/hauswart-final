export default function PropertyHeader({
  title,
  subtitle,
  onAddTask,
  onAssignSchedule,
  onAddAsset,
}) {
  return (
    <header className="flex flex-wrap justify-between items-center gap-4 mb-6">
      <div className="flex flex-col gap-1">
        <button className="flex items-center gap-2 text-gray-500 text-sm hover:text-black">
          <span className="material-symbols-outlined">arrow_back</span>
          Back to Property
        </button>

        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-gray-500">{subtitle}</p>
      </div>

      <div className="flex gap-3 flex-wrap">
        <button
          onClick={onAddTask}
          className="h-10 px-4 rounded-lg border border-gray-300 text-sm font-semibold hover:bg-gray-100"
        >
          Add Task
        </button>

        <button
          onClick={onAssignSchedule}
          className="h-10 px-4 rounded-lg border border-gray-300 text-sm font-semibold hover:bg-gray-100"
        >
          Assign Schedule
        </button>

        <button
          onClick={onAddAsset}
          className="h-10 px-4 rounded-lg bg-[#F38B14] text-white text-sm font-semibold hover:bg-black"
        >
          Add Asset
        </button>
      </div>
    </header>
  );
}
