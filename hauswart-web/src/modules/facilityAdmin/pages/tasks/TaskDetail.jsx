import { Outlet, useParams } from "react-router-dom";
import TaskHeader from "./TaskHeader";
import TaskTabs from "./TaskTabs";

export default function TaskDetail() {
  const { id } = useParams();

  const task = {
    id,
    status: "in_progress",
    technician: "Ahmed Khan",
    ticket: "Air conditioning issue",
  };

  return (
    <div className="space-y-6">
      <TaskHeader task={task} />
      <TaskTabs taskId={id} />
      <div className="bg-white rounded-2xl border p-6 shadow">
        <Outlet />
      </div>
    </div>
  );
}
