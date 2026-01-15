import { Routes, Route, Navigate } from "react-router-dom";

import TasksList from "../pages/tasks/TasksList";
import TaskDetail from "../pages/tasks/TaskDetail";

/* ONLY EXISTING TABS */
import Overview from "../pages/tasks/tabs/Overview";
import Activity from "../pages/tasks/tabs/Activity";
import Comments from "../pages/tasks/tabs/Comments";
import Approvals from "../pages/tasks/tabs/Approvals";

export default function FacilityManagerTasksRoutes() {
  return (
    <Routes>

      {/* LIST */}
      <Route index element={<TasksList />} />

      {/* DETAIL */}
      <Route path=":id" element={<TaskDetail />}>
        {/* DEFAULT TAB */}
        <Route index element={<Navigate to="overview" replace />} />

        {/* TABS */}
        <Route path="overview" element={<Overview />} />
        <Route path="activity" element={<Activity />} />
        <Route path="comments" element={<Comments />} />
        <Route path="approvals" element={<Approvals />} />
      </Route>

    </Routes>
  );
}
