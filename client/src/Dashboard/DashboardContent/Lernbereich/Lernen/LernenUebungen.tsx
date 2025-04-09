import LernenCategory from "./LernenCategory";

import {
  LearningCategory,
  learningExercisesData,
} from "../../../../data/lernen.data";
import LernbereichNotFound from "../LernbereichNotFound";
import { useSettingsContext } from "../../../../context/settings.context";
import LernbereichClassSelection from "../LernbereichClassSelection";

export default function LernenUebungen() {
  const { selectedClass } = useSettingsContext();

  const classCategories: LearningCategory[] | undefined =
    learningExercisesData.find(
      (exercises) => exercises.class === selectedClass
    )?.categories;

  if (!selectedClass) return <LernbereichClassSelection />;

  if (!classCategories) return <LernbereichNotFound type="learning" />;

  return (
    <div className="learning-exercises-container">
      {classCategories.map((_category) => (
        <LernenCategory key={_category.name} category={_category} />
      ))}
    </div>
  );
}
