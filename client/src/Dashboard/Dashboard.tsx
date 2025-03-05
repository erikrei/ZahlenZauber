import './Dashboard.css';
import { NavLink } from 'react-router';

import { sidebarSections } from '../data/dashboard.data';

export default function Dashboard() {
  return (
    <DashboardSidebar />
  );
}

function DashboardSidebar() {
  return (
    <aside>
      {sidebarSections.map((section) => (
        <NavLink to="">
          {section}
        </NavLink>
      ))}
    </aside>
  );
}
