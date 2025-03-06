import { Navigate, useParams } from "react-router";

import { dashboardSectionData } from "../../data/dashboard.data";
import DashboardLernen from "./DashboardLernen";
import { JSX } from "react";

export default function DashboardContentLayout() {
  const { section } = useParams();
  const currentSection = dashboardSectionData.find(
    (data) => data.urlPath === section
  );

  if (!currentSection) return <Navigate to="/dashboard" />;

  let content: JSX.Element | null

  switch(currentSection.section) {
    case 'Lernen': 
      content = <DashboardLernen />
      break;
    default: content = null
  }

  return (
    <>
      <h1>{currentSection.section}</h1>
      <p>{currentSection.description}</p>
      {content}
    </>
  );
}
