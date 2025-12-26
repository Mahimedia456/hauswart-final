export default function AssignedStaff({ dict }) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <h3 className="text-lg font-bold mb-4">{dict.prop_assetStaff_title}</h3>

      <ul className="space-y-3">
        <StaffItem name="Jane Doe" role="HVAC Specialist" dict={dict} />
        <StaffItem name="John Smith" role="Facility Manager" dict={dict} />
      </ul>
    </div>
  );
}

function StaffItem({ name, role, dict }) {
  return (
    <li className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gray-200"></div>
        <div>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>
      <button className="text-xs text-red-500 hover:underline">{dict.prop_assetStaff_remove}</button>
    </li>
  );
}
