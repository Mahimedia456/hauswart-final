import { NavLink } from "react-router-dom";

export default function TaskTabs() {
  const tabClass = ({ isActive }) =>
    `px-4 py-2 rounded-xl text-sm ${
      isActive
        ? "bg-[#F38B14] text-white"
        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
    }`;

  return (
    <div className="flex gap-2">
      <NavLink to="overview" className={tabClass}>Overview</NavLink>
      <NavLink to="details" className={tabClass}>Details</NavLink>
      <NavLink to="timeline" className={tabClass}>Timeline</NavLink>
      <NavLink to="activity" className={tabClass}>Activity</NavLink>
    </div>
  );
}
