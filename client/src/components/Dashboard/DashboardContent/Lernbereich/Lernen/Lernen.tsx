import "../Lernbereich.css";

import LernenUebungen from "./LernenUebungen";
import LernBereichHeaderText from "../LernbereichHeaderText";

export default function Lernen() {
  return (
    <main className="learning-section">
      <LernBereichHeaderText
        headline="Lernen"
        description="In diesem Bereich werden die je nach Klasse ausgewählten Übungen
        angezeigt, die auf Wunsch durchgeführt werden können."
      />
      <LernenUebungen />
    </main>
  );
}
