import { OverviewMilestone } from "../../../../../../data/uebersicht.data";
import UebersichtMilestoneAchievedDate from "./UebersichtMilestoneAchievedDate";
import UebersichtMilestoneText from "./UebersichtMilestoneText";
import UebersichtProgressMilestone from "./UebersichtProgressMilestone";

type UebersichtMilestoneProps = {
  milestone: OverviewMilestone;
};

export default function UebersichtMilestone({
  milestone,
}: UebersichtMilestoneProps) {
  return (
    <div className="milestone">
      <div className="placeholder-img"></div>
      <div className="milestone-text-container">
        <UebersichtMilestoneText
          title={milestone.title}
          cause={milestone.cause}
        />
        <UebersichtMilestoneAchievedDate
          achievedDate={milestone.achievedDate}
        />
        <UebersichtProgressMilestone
          progressCurrent={milestone.progressCurrent}
          progressNeeded={milestone.progressNeeded}
        />
      </div>
    </div>
  );
}
