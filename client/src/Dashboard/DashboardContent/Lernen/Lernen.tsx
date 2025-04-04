import "./Lernen.css";

import {
  LearningCategory,
  learningExercisesData,
} from "../../../data/lernen.data";
import LernenCategory from "./LernenCategory";
import LernenHeader from "./LernenHeader";

export default function Lernen() {
  // Derzeit nur 1. Klasse implementiert, wird später durch State geändert
  const selectedClass = 1;

  const classCategories: LearningCategory[] | undefined =
    learningExercisesData.find(
      (exercises) => exercises.class === selectedClass
    )?.categories;

  if (!classCategories) return null;

  return (
    <main className="lernen">
      <LernenHeader />
      <div className="learning-exercises">
        {classCategories.map((_category) => (
          <LernenCategory key={_category.name} category={_category} />
        ))}
      </div>
    </main>
  );
}
