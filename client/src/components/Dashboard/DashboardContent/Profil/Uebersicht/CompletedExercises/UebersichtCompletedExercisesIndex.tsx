import { UebersichtCompletedExercisesList } from "./UebersichtCompletedExercisesList";
import UebersichtCompletedExerciseHeader from "./UebersichtCompletedExercisesHeader";

import { overviewCompletedExercisesData } from "../../../../../../util/data/uebersicht.data";

export default function UebersichtCompletedExercisesIndex() {
  return (
    <article className="completed-exercises">
      <UebersichtCompletedExerciseHeader />
      <UebersichtCompletedExercisesList
        exercises={overviewCompletedExercisesData}
      />
    </article>
  );
}
