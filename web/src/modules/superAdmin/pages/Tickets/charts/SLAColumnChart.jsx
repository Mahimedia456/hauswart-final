// charts/SLAPerformanceChart.jsx
import { ResponsiveBar } from "@nivo/bar";

export default function SLAPerformanceChart() {
  const data = [
    { label: "On-Time", value: 82 },
    { label: "Late", value: 18 },
  ];

  return (
    <div className="w-full h-48">
      <ResponsiveBar
        data={data}
        keys={["value"]}
        indexBy="label"
        colors={["#16a34a", "#dc2626"]}
        margin={{ top: 20, right: 10, bottom: 30, left: 40 }}
        padding={0.4}
        enableLabel={false}
        axisBottom={null}
        axisLeft={null}
        theme={{ textColor: "#6B7280" }}
      />
    </div>
  );
}
