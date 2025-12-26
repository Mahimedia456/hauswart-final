// charts/TicketsByCategoryChart.jsx
import { ResponsivePie } from "@nivo/pie";

export default function TicketsByCategoryChart() {
  const data = [
    { id: "HVAC", value: 320, color: "#F38B14" },
    { id: "Electrical", value: 210, color: "#0ea5e9" },
    { id: "Plumbing", value: 165, color: "#16a34a" },
    { id: "Security", value: 80, color: "#9333ea" },
  ];

  return (
    <div className="w-full h-64">
      <ResponsivePie
        data={data}
        margin={{ top: 10, right: 40, bottom: 10, left: 40 }}
        innerRadius={0.55}
        padAngle={0.7}
        activeOuterRadiusOffset={6}
        colors={{ datum: "data.color" }}
        enableArcLabels={false}
        theme={{ textColor: "#6B7280", fontSize: 12 }}
      />
    </div>
  );
}
