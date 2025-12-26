// charts/OverdueBreakdownChart.jsx
import { ResponsiveBar } from "@nivo/bar";

export default function OverdueBreakdownChart() {
  const data = [
    { age: "0-6h", count: 45 },
    { age: "6-12h", count: 32 },
    { age: "12-24h", count: 88 },
    { age: "24+h", count: 140 },
  ];

  return (
    <div className="w-full h-48">
      <ResponsiveBar
        data={data}
        keys={["count"]}
        indexBy="age"
        layout="horizontal"
        colors={["#dc2626"]}
        margin={{ top: 20, right: 20, bottom: 30, left: 50 }}
        padding={0.3}
        enableLabel={false}
        theme={{ textColor: "#6B7280" }}
      />
    </div>
  );
}
