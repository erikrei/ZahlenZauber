import { OverviewMilestone } from "../../../../../../util/data/uebersicht.data";
import randomItemsFromArray from "../../../../../../util/randomItemsFromArray";
import UebersichtMilestone from "./UebersichtMilestone";

type UebersichtUnaccomplishedMilestonesProps = {
  milestones: OverviewMilestone[];
};

export default function UebersichtUnaccomplishedMilestones({
  milestones,
}: UebersichtUnaccomplishedMilestonesProps) {
  const randomMilestones = randomItemsFromArray(milestones, 5);

  return (
    <div className="milestones-unaccomplished card">
      <p>Zufällige Meilensteine (nicht erreicht)</p>
      {randomMilestones.map((milestone) => (
        <UebersichtMilestone
          key={milestone.cause}
          milestone={milestone}
        />
      ))}
    </div>
  );
}
