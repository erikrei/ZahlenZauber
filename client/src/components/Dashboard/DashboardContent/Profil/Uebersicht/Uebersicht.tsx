import "./Uebersicht.css";

import UebersichtCompletedExercises from "./CompletedExercises/UebersichtCompletedExercisesIndex";
import UebersichtLevel from "./Level/UebersichtLevelIndex";
import UebersichtMilestonesIndex from "./Milestones/UebersichtMilestonesIndex";

export default function Uebersicht() {
  return (
    <main>
      <UebersichtCompletedExercises />
      <UebersichtLevel />
      <UebersichtMilestonesIndex />
    </main>
  );
}
