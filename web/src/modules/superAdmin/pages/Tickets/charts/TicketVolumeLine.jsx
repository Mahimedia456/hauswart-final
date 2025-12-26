// charts/TicketVolumeChart.jsx
import { ResponsiveLine } from "@nivo/line";

export default function TicketVolumeChart() {
  const data = [
    {
      id: "Created",
      color: "#F38B14",
      data: [
        { x: "Mon", y: 120 },
        { x: "Tue", y: 150 },
        { x: "Wed", y: 180 },
        { x: "Thu", y: 170 },
        { x: "Fri", y: 200 },
        { x: "Sat", y: 90 },
        { x: "Sun", y: 60 },
      ],
    },
    {
      id: "Resolved",
      color: "#16a34a",
      data: [
        { x: "Mon", y: 100 },
        { x: "Tue", y: 140 },
        { x: "Wed", y: 160 },
        { x: "Thu", y: 130 },
        { x: "Fri", y: 180 },
        { x: "Sat", y: 70 },
        { x: "Sun", y: 40 },
      ],
    },
  ];

  return (
    <div className="w-full h-64">
      <ResponsiveLine
        data={data}
        margin={{ top: 20, right: 40, bottom: 40, left: 50 }}
        xScale={{ type: "point" }}
        colors={(d) => d.color}
        lineWidth={3}
        pointSize={10}
        pointColor="#fff"
        pointBorderWidth={3}
        pointBorderColor={{ from: "serieColor" }}
        axisBottom={{ tickSize: 0 }}
        axisLeft={{ tickSize: 0 }}
        theme={{
          textColor: "#6B7280",
          fontSize: 12,
        }}
        useMesh
      />
    </div>
  );
}
