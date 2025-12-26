const colorMap = {
  primary: "bg-[#F38B14]",
  red: "bg-red-500",
  gray: "bg-gray-400",
};

export default function TimelineItem({
  icon,
  color,
  title,
  date,
  desc,
  by,
  dict,
  isLast,
}) {
  return (
    <div className="relative mb-10 last:mb-0">

      {/* ICON CIRCLE */}
      <div
        className={`absolute -left-[1.35rem] top-1 h-8 w-8 ${colorMap[color]} text-white rounded-full flex items-center justify-center shadow-sm`}
      >
        <span className="material-symbols-outlined text-base">{icon}</span>
      </div>

      {/* CONTENT BOX */}
      <div className="bg-component-bg/50 dark:bg-background-dark/50 rounded-DEFAULT border border-border-color p-4 ml-4">
        
        <div className="flex justify-between items-start">
          <p className="font-semibold text-text-main">{title}</p>
          <p className="text-xs text-gray-500">{date}</p>
        </div>

        <p className="text-sm text-gray-600 mt-2">{desc}</p>

        {by && (
          <p className="text-xs text-gray-500 mt-2">
            {dict.prop_assetHistory_performedBy}:{" "}
            <span className="font-medium text-text-main">{by}</span>
          </p>
        )}

      </div>

      {/* SHORTEN THE TIMELINE LINE FOR LAST ITEM */}
      {isLast && (
        <div className="absolute left-2 bottom-0 h-5 w-[2px] bg-background-light"></div>
      )}
    </div>
  );
}
