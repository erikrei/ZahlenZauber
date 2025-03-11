import { overviewCompletedExercisesData } from "../../../data/uebersicht.data";

import "./Uebersicht.css";

import { UebersichtCompletedExercisesList } from "./UebersichtCompletedExercisesList";
import UebersichtCompletedExerciseHeader from "./UebersichtCompletedExercisesHeader";

export default function Uebersicht() {
  return (
    <article className="completed-exercises">
      <UebersichtCompletedExerciseHeader />
      <UebersichtCompletedExercisesList
        exercises={overviewCompletedExercisesData}
      />
    </article>
  );
}
