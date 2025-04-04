import { LearningCategoryExercise } from "../../../data/lernen.data";

type LernenExerciseProps = {
  exercise: LearningCategoryExercise;
};

export default function LernenExercise({ exercise }: LernenExerciseProps) {
  return (
    <div className="exercise">
      <h4>{exercise.name}</h4>
      <p>{exercise.description}</p>
    </div>
  );
}
