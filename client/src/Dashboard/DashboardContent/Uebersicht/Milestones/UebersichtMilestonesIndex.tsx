import UebersichtAccomplishedMilestones from "./UebersichtAccomplishedMilestones";
import UebersichtMilestonesHeader from "./UebersichtMilestonesHeader";

import { overviewMilestonesData } from "../../../../data/uebersicht.data";
import UebersichtUnaccomplishedMilestones from "./UebersichtUnaccomplishedMilestones";

export default function UebersichtMilestonesIndex() {
  const accomplishedAchievements = overviewMilestonesData.filter(
    (milestone) => milestone.accomplished
  );
  const unaccomplishedAchievements = overviewMilestonesData.filter(
    (milestone) => !milestone.accomplished
  );
  return (
    <article className="milestones">
      <UebersichtMilestonesHeader />
      <div className="milestones-container">
        <UebersichtAccomplishedMilestones
          milestones={accomplishedAchievements}
        />
        <UebersichtUnaccomplishedMilestones
          milestones={unaccomplishedAchievements}
        />
      </div>
    </article>
  );
}
