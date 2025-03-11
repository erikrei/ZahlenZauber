import { NavLink } from "react-router";

export default function UebersichtCompletedExerciseHeader() {
  return (
    <div className="completed-header">
      <h3>Abgeschlossene Übungen</h3>
      <NavLink to={""}>Zu den Übungen</NavLink>
    </div>
  );
}
