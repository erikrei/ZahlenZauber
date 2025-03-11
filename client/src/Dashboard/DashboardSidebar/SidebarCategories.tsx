import { NavLink } from "react-router";

import { DashboardSidebarCategory } from "../../data/dashboard.data";

type SidebarSectionProps = {
  categories: DashboardSidebarCategory[];
};

export default function SectionCategories({ categories }: SidebarSectionProps) {
  return (
    <div className="categories-container">
      {categories.map(
        (category) =>
          !category.disabled && (
            <NavLink key={category.category} to={category.urlPath}>
              {category.iconElement}
              <p>{category.category}</p>
            </NavLink>
          )
      )}
    </div>
  );
}
