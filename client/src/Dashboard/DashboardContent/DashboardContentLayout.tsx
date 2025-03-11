import { Navigate, useParams } from "react-router";

import "./DashboardContent.css";

import { dashboardCategoriesData } from "../../data/dashboard.data";

export default function DashboardContentLayout() {
  const { category } = useParams();

  const currentCategory = dashboardCategoriesData.find(
    (_category) => _category.url === category
  );

  if (!currentCategory) return <Navigate to="/dashboard" />;

  return <main>{currentCategory.element}</main>;
}
