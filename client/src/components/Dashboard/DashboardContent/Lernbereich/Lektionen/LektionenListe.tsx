import { useSettingsContext } from "../../../../../context/settings.context";
import { lessonsData } from "../../../../../data/lektionen.data";
import LernbereichNotFound from "../LernbereichNotFound";
import Lektion from "./Lektion";

export default function LektionenListe() {
  const { selectedClass } = useSettingsContext(); 

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
