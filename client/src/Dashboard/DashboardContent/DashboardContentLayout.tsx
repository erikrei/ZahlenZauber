import { Navigate, useParams } from "react-router";

import { dashboardCategoriesData } from "../../data/dashboard.data";
import DashboardLernen from "./DashboardLernen";
import { JSX } from "react";

export default function DashboardContentLayout() {
  const { category } = useParams();
  const currentCategory = dashboardCategoriesData.find(
    (_category) => _category.url === category
  );

  if (!currentCategory) return <Navigate to="/dashboard" />;

  let content: JSX.Element | null;

  switch (currentCategory.category) {
    // case "Lernen":
    //   content = <DashboardLernen />;
    //   break;
    default:
      content = null;
  }

  return (
    <>
      <h1>{currentCategory.category}</h1>
      <p>{currentCategory.description}</p>
      {content}
    </>
  );
}
