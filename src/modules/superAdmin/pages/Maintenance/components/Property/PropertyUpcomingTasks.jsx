export default function PropertyUpcomingTasks({ dict }) {
  return (
    <div className="p-6 rounded-xl bg-white shadow">
      <h3 className="text-lg font-bold mb-4">{dict.mt_property_upcomingTasks}</h3>

      <div className="p-3 rounded-lg bg-red-100 text-red-700 font-medium mb-4">
        {dict.mt_property_overdueAlert}
      </div>

      <table className="w-full text-sm">
        <thead className="text-xs text-gray-500 uppercase">
          <tr>
            <Th>{dict.mt_property_taskId}</Th>
            <Th>{dict.mt_property_scheduledDate}</Th>
            <Th>{dict.mt_property_technician}</Th>
            <Th>{dict.mt_property_priority}</Th>
            <Th>{dict.mt_property_location}</Th>
            <Th>{dict.mt_property_status}</Th>
          </tr>
        </thead>

        <tbody>
          <TaskRow
            id="#T-4532"
            date="2024-07-28, 10:00 AM"
            tech="Emily Carter"
            priority="Critical"
            location="Floor 5 / AHU-04"
            status={dict.mt_property_overdue}
            danger
          />
          <TaskRow
            id="#T-4533"
            date="2024-08-01, 02:00 PM"
            tech="David Lee"
            priority="High"
            location="Lobby / Entrance"
            status={dict.mt_property_inProgress}
            info
          />
          <TaskRow
            id="#T-4534"
            date="2024-08-05, 09:00 AM"
            tech="Sophia Chen"
            priority="Medium"
            location="Unit 301"
            status={dict.mt_property_scheduled}
          />
        </tbody>
      </table>
    </div>
  );
}

function Th({ children }) {
  return <th className="px-4 py-3">{children}</th>;
}

function TaskRow({ id, date, tech, priority, location, status, danger, info }) {
  return (
    <tr className="hover:bg-gray-100 cursor-pointer">
      <td className="px-4 py-3 font-medium">{id}</td>
      <td className="px-4 py-3 text-gray-500">{date}</td>
      <td className="px-4 py-3">{tech}</td>
      <td className="px-4 py-3">{priority}</td>
      <td className="px-4 py-3 text-gray-500">{location}</td>
      <td
        className={`px-4 py-3 font-semibold ${
          danger ? "text-red-600" : info ? "text-blue-600" : "text-gray-600"
        }`}
      >
        {status}
      </td>
    </tr>
  );
}
