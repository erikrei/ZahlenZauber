import { Navigate, useParams } from "react-router";

import { dashboardSectionData } from "../../data/dashboard.data";

export default function DashboardContentLayout() {
  const { section } = useParams();
  const currentSection = dashboardSectionData.find(
    (data) => data.urlPath === section
  );

  if (!currentSection) return <Navigate to="/dashboard" />;

  return (
    <>
      <h1>{currentSection.section}</h1>
      <p>{currentSection.description}</p>
    </>
  );
}
