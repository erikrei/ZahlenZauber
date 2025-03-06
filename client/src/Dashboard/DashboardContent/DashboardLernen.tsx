import { dashboardLernenSections } from "../../data/dashboard.data";

export default function DashboardLernen() {
  return (
    <div className="learning-section-container">
      {dashboardLernenSections.map((section) => (
        <section>
            <h3>{section}</h3>
        </section>
      ))}
    </div>
  );
}
