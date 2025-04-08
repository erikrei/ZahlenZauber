import { lessonsData } from "../../../../data/lektionen.data";
import LernbereichNotFound from "../LernbereichNotFound";
import Lektion from "./Lektion";

export default function LektionenListe() {
  // Erstmals nur für 1. Klasse
  const selectedClass = 1;

  const lessons = lessonsData.find(
    (lessonOverview) => lessonOverview.class === selectedClass
  )?.lessons;

  if (!lessons) return <LernbereichNotFound type="lessons" />;

  return (
    <section className="lessons-container">
      {lessons.map((_lesson) => (
        <Lektion key={_lesson.name} lesson={_lesson} />
      ))}
    </section>
  );
}
