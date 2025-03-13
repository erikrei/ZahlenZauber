import UebersichtLevelProgressBar from "./UebersichtLevelProgressBar";
import UebersichtLevelProgressBarInformation from "./UebersichtLevelProgressBarInformation";

type UebersichtLevelProgressProps = {
  experience: number;
  nextLevel: number;
};

export default function UebersichtLevelProgress({
  experience,
  nextLevel,
}: UebersichtLevelProgressProps) {
  const progressWidth = (experience / nextLevel) * 100;

  return (
    <div className="level-progress card">
      <p>Fortschritt</p>
      <div className="progress-bar-container">
        <UebersichtLevelProgressBar progressWidth={progressWidth} />
        <UebersichtLevelProgressBarInformation
          experience={experience}
          nextLevel={nextLevel}
          showText={true}
        />
      </div>
    </div>
  );
}
