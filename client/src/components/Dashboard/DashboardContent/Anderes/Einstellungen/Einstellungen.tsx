import "./Einstellungen.css";
import EinstellungenClass from "./EinstellungenClass";
import EinstellungenHeader from "./EinstellungenHeader";

export default function Einstellungen() {
  return (
    <main className="settings">
      <EinstellungenHeader />
      <div className="settings-container">
        <EinstellungenClass />
      </div>
    </main>
  );
}
