import { Routes, Route } from "react-router-dom";

import TasksList from "../pages/Tasks/TasksList";
import TaskDetail from "../pages/Tasks/TaskDetail";

import TaskOverview from "../pages/tasks/tabs/Overview.jsx";
import TaskTimeline from "../pages/Tasks/tabs/Timeline";
import TaskActivity from "../pages/Tasks/tabs/Activity";

export default function FacilityManagerTasksRoutes() {
  return (
    <Routes>
      <Route index element={<TasksList />} />

      <Route path=":id" element={<TaskDetail />}>
        <Route index element={<TaskOverview />} />
        <Route path="overview" element={<TaskOverview />} />
        <Route path="timeline" element={<TaskTimeline />} />
        <Route path="activity" element={<TaskActivity />} />
      </Route>
    </Routes>
  );
}
