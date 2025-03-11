import { useState } from "react";
import "./DashboardSidebar.css";

import Header from "./SidebarHeader";
import SectionList from "./SectionList";

export default function DashboardSidebar() {
  const [sidebarFolded, setSidebarFolded] = useState<boolean>(false);

  return (
    <aside className={sidebarFolded ? "folded" : undefined}>
      <Header
        sidebarFolded={sidebarFolded}
        onFoldIconClick={setSidebarFolded}
      />
      <SectionList />
    </aside>
  );
}