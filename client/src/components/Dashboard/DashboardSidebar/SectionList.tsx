import { dashboardSectionData } from "../../../util/data/dashboard.data";
import SectionCategories from "./SidebarCategories";

export default function SectionList() {
  return dashboardSectionData.map((section) => (
    <section key={section.section}>
      <h6>{section.section}</h6>
      <SectionCategories categories={section.categories} />
    </section>
  ));
}
