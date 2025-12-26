import { Outlet, useParams } from "react-router-dom";
import MaintenanceHeader from "./components/MaintenanceHeader";
import MaintenanceTabs from "./components/MaintenanceTabs";

export default function MaintenanceDetail() {
  const { id } = useParams();

  // TEMP — replace with API
  const maintenance = {
    id,
    title: "Replace Air Filter",
    status: "Open",
    priority: "Medium",
    organization: "Facility Group",
    property: "Main Building (Floor 2, Unit 201)",
    asset: "HVAC Unit 1",
    technician: "Ava Carter",
    dueDate: "2025-03-15",
    sla: "Within SLA",
  };

  return (
    <div className="p-6 space-y-6">
      <MaintenanceHeader item={maintenance} />

      <MaintenanceTabs id={id} />

      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <Outlet />
      </div>
    </div>
  );
}
