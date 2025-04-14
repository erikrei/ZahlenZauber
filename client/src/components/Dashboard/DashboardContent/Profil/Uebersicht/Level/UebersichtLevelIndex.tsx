import UebersichtLevelHeader from "./UebersichtLevelHeader";

import { overviewLevelData } from "../../../../../../data/uebersicht.data";
import { overviewExperienceExerciseData } from "../../../../../../data/uebersicht.data";

import UebersichtLevelProgress from "./UebersichtLevelProgress";
import UebersichtExperiences from "./UebersichtExperiences";

export default function UebersichtLevelIndex() {
  return (
    <article className="level">
      <UebersichtLevelHeader level={overviewLevelData.level} />
      <div className="level-information-container">
        <UebersichtLevelProgress
          experience={overviewLevelData.experience}
          nextLevel={overviewLevelData.nextLevel}
        />
        <UebersichtExperiences experiences={overviewExperienceExerciseData} />
      </div>
    </article>
  );
}
