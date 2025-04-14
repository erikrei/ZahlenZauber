import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import getMilestoneProgress, {
  MilestoneProgress,
} from "../../../../../../util/getMilestoneProgress";

type UebersichtProgressMilestoneProps = {
  progressCurrent?: number;
  progressNeeded?: number;
};

export default function UebersichtProgressMilestone({
  progressCurrent,
  progressNeeded,
}: UebersichtProgressMilestoneProps) {
  const progress: MilestoneProgress | undefined = getMilestoneProgress(
    progressCurrent,
    progressNeeded
  );

  if (!progress) return null;

  return (
    <CircularProgressbar value={progress.percentage} text={progress.text} />
  );
}
