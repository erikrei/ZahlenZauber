import { Navigate, useParams } from "react-router";

import { dashboardCategoriesData } from "../../data/dashboard.data";

export default function DashboardContentLayout() {
  const { category } = useParams();

  const currentCategory = dashboardCategoriesData.find(
    (_category) => _category.url === category
  );

  if (!currentCategory) return <Navigate to="/dashboard" />;

  return currentCategory.element;
}
