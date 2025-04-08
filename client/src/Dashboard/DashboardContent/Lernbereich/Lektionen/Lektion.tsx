import { Lesson } from "../../../../data/lektionen.data";

type LektionProps = {
  lesson: Lesson;
};

export default function Lektion({ lesson }: LektionProps) {
  return (
    <div className="lesson">
      <div className="lesson-header">
        <h3>{lesson.name}</h3>
        <span>{lesson.mathType}</span>
      </div>
      <p className="lesson-description">{lesson.description}</p>
    </div>
  );
}
