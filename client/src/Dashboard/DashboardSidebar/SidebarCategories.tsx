import { DashboardSidebarCategory } from "../../data/dashboard.data";
import SidebarCategory from "./SidebarCategory";

type SidebarSectionProps = {
  categories: DashboardSidebarCategory[];
};

export default function SectionCategories({ categories }: SidebarSectionProps) {
  return (
    <div className="categories-container">
      {categories.map((_category) => (
        <SidebarCategory
          key={_category.category}
          name={_category.category}
          iconElement={_category.iconElement}
          isDisabled={_category.disabled}
          urlPath={_category.urlPath}
        />
      ))}
    </div>
  );
}
