type UebersichtLevelProgressBarInformationProps = {
  experience: number;
  nextLevel: number;
  showText: boolean;
};

export default function UebersichtLevelProgressBarInformation({
  experience,
  nextLevel,
  showText,
}: UebersichtLevelProgressBarInformationProps) {
  return (
    <p className="level-needed-experience">
      <span className="level-experience-collected">
        {experience} / {nextLevel}
      </span>
      {showText && <span>Erfahrung gesammelt</span>}
    </p>
  );
}
