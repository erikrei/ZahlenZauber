import "./Dashboard.css";
import { NavLink, Outlet } from "react-router";

import { dashboardSectionData } from "../data/dashboard.data";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <DashboardSidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

function DashboardSidebar() {
  return (
    <aside>
      {dashboardSectionData.map(({ section, urlPath }) => (
        <NavLink to={urlPath}>{section}</NavLink>
      ))}
    </aside>
  );
}
