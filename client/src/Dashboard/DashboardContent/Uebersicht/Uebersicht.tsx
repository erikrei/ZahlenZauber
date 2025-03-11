import "./Uebersicht.css";

import UebersichtCompletedExercises from "./CompletedExercises/UebersichtCompletedExercisesIndex";
import UebersichtLevel from "./Level/UebersichtLevelIndex";

export default function Uebersicht() {
  return (
    <main>
      <UebersichtCompletedExercises />
      <UebersichtLevel />
    </main>
  );
}
