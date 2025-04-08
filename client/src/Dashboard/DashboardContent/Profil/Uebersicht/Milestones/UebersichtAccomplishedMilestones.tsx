import { OverviewMilestone } from "../../../../../data/uebersicht.data";
import UebersichtMilestone from "./UebersichtMilestone";

type UebersichtAccomplishedMilestonesProps = {
  milestones: OverviewMilestone[];
};

export default function UebersichtAccomplishedMilestones({
  milestones,
}: UebersichtAccomplishedMilestonesProps) {
  return (
    <div className="milestones-accomplished card">
      <p>Erreichte Meilensteine</p>
      {milestones.map((milestone) => (
        <UebersichtMilestone key={milestone.cause} milestone={milestone} />
      ))}
    </div>
  );
}
