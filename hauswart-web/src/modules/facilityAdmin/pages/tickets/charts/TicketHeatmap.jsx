// charts/TicketHeatmap.jsx
import { ResponsiveHeatMap } from "@nivo/heatmap";

export default function TicketHeatmap() {
  const hours = ["6 AM", "9 AM", "12 PM", "3 PM", "6 PM", "9 PM"];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const data = days.map((day) => ({
    id: day,
    data: hours.map((h) => ({
      x: h,
      y: Math.floor(Math.random() * 100), // static style, new random each build
    })),
  }));

  return (
    <div className="w-full h-72">
      <ResponsiveHeatMap
        data={data}
        margin={{ top: 20, right: 40, bottom: 40, left: 60 }}
        
        /* ✅ VALID COLOR SCHEME (fixes your error) */
        colors={{
          type: "sequential",
          scheme: "oranges" // closest to YlOrRd
        }}

        /* AXIS */
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 8,
          tickRotation: 0,
        }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 8,
        }}

        /* CELLS */
        cellOpacity={1}
        cellBorderWidth={1}
        cellBorderColor="rgba(0,0,0,0.1)"
        cellRadius={4}

        /* LABELS */
        enableLabels={false}

        /* THEME – matches Hauswart UI */
        theme={{
          textColor: "#6B7280",
          fontSize: 12,
        }}

        /* ANIMATION */
        animate={true}
        motionConfig="gentle"
      />
    </div>
  );
}
