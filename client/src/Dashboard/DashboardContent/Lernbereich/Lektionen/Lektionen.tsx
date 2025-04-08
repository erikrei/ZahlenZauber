import LernBereichHeaderText from "../LernbereichHeaderText";
import LektionenListe from "./LektionenListe";

export default function Lektionen() {
  return (
    <main className="learning-section">
      <div className="learning-section-header">
        <LernBereichHeaderText
          headline="Lektionen"
          description="In diesem Bereich werden alle mathematischen Konzepte und Übungen erklärt, die für die erfolgreiche Bearbeitung von Übungen nötig sind."
        />
      </div>
      <LektionenListe />
    </main>
  );
}