import { NavLink } from "react-router";

import { GoChecklist } from "react-icons/go";

import { OverviewCompletedExercise } from "../../../../../../util/data/uebersicht.data";
import readableDateString from "../../../../../../util/readableDateString";

type OverviewCompletedExerciseProps = {
  exercise: OverviewCompletedExercise;
};

export function UebersichtCompletedExercise({
  exercise,
}: OverviewCompletedExerciseProps) {
  const exerciseDate = readableDateString(exercise.completed);
  return (
    <tr>
      <td>
        <UebersichtCompletedExerciseName name={exercise.name} />
      </td>
      <td className="exercise-completed">{exerciseDate}</td>
      <td className="exercise-score">
        <p className={exercise.score >= 50 ? "good" : "bad"}>
          {exercise.score}%
        </p>
      </td>
    </tr>
  );
}

type UebersichtCompletedExerciseNameProps = {
  name: string;
};

function UebersichtCompletedExerciseName({
  name,
}: UebersichtCompletedExerciseNameProps) {
  return (
    <div className="exercise-name">
      <p>{name}</p>
      <NavLink to={""}>
        <GoChecklist />
        <p>Einsehen</p>
      </NavLink>
    </div>
  );
}
