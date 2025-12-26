import TimelineItem from "./TimelineItem";

export default function ServiceHistory({ dict }) {
  const history = [
    {
      id: 1,
      icon: "build",
      color: "primary",
      title: dict.prop_assetHistory_maintenanceCompleted,
      date: "March 05, 2024",
      desc: "Routine quarterly check. Cleaned filters.",
      by: "Jane Doe",
    },
    {
      id: 2,
      icon: "error",
      color: "red",
      title: dict.prop_assetHistory_issueReported,
      date: "Dec 12, 2023",
      desc: "Unit making rattling noise.",
    },
    {
      id: 3,
      icon: "sticky_note_2",
      color: "gray",
      title: dict.prop_assetHistory_assetInstalled,
      date: "Jan 20, 2022",
      desc: "Installed by CoolAir certified technician.",
    },
  ];

  return (
    <div className="rounded-DEFAULT bg-white p-6 shadow-sm border border-border-color">
      <h3 className="text-lg font-bold mb-6">{dict.prop_assetHistory_title}</h3>

      <div className="relative pl-6">

        {/* VERTICAL LINE */}
        <div className="absolute top-0 left-2 w-[2px] h-full bg-border-color"></div>

        {/* TIMELINE ITEMS */}
        {history.map((item, index) => (
          <TimelineItem
            key={item.id}
            dict={dict}
            isLast={index === history.length - 1}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}
