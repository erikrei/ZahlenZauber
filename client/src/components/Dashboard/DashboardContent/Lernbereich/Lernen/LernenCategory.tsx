import { LearningCategory } from "../../../../../data/lernen.data";
import LernenExercise from "./LernenExercise";

type LernenCategoryProps = {
  category: LearningCategory;
};

export default function LernenCategory({ category }: LernenCategoryProps) {
  return (
    <article className="default-learning-section-article">
      <div className="default-learning-section-description">
        <h3>{category.name}</h3>
        <p>{category.description}</p>
      </div>
      <div className="default-learning-section-exercises-container">
        {category.exercises.map((_exercise) => (
          <LernenExercise key={_exercise.name} exercise={_exercise} />
        ))}
      </div>
    </article>
  );
}
