import { dashboardLernenSections } from "../../data/dashboard.data";
import { NavLink } from "react-router";

export default function DashboardLernen() {
  return (
    <div className="learning-section-container">
      {dashboardLernenSections.map((section) => (
        <section className="learning-section-category">
            <h3>{section.category}</h3>
            <NavLink to={section.urlPath} >Zum Lernbereich</NavLink>
        </section>
      ))}
    </div>
  );
}
