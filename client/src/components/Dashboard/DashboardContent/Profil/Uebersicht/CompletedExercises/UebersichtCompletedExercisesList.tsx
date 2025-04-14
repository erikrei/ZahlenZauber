import { UebersichtCompletedExercise } from "./UebersichtCompletedExercise";
import { OverviewCompletedExercise } from "../../../data/uebersicht.data";

type UebersichtCompletedExerciseProps = {
  exercises: OverviewCompletedExercise[];
};

export function UebersichtCompletedExercisesList({
  exercises,
}: UebersichtCompletedExerciseProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Übung</th>
          <th>Abgeschlossen</th>
          <th>Ergebnis</th>
        </tr>
      </thead>
      <tbody>
        {exercises.map((exercise) => (
          <UebersichtCompletedExercise
            key={exercise.name}
            exercise={exercise}
          />
        ))}
      </tbody>
    </table>
  );
}
