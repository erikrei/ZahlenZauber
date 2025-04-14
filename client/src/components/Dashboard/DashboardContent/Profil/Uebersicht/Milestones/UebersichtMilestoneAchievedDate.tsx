import { LuCalendarCheck } from "react-icons/lu";
import readableDateString from "../../../../../../util/readableDateString";

type UebersichtMilestoneAchievedDateProps = {
  achievedDate?: Date;
};

export default function UebersichtMilestoneAchievedDate({
  achievedDate,
}: UebersichtMilestoneAchievedDateProps) {
  const dateString = achievedDate
    ? readableDateString(achievedDate, "numeric")
    : undefined;

  if (!dateString) return null;

  return (
    <p>
      <LuCalendarCheck />
      {dateString}
    </p>
  );
}
