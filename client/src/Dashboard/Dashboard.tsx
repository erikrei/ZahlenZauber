import "./Dashboard.css";
import { Outlet } from "react-router";

import DashboardSidebar from "./DashboardSidebar/DashboardSidebar";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <DashboardSidebar />
      <Outlet />
    </div>
  );
}

