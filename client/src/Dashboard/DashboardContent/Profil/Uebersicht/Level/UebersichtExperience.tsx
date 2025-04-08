type UebersichtExperienceProps = {
  name: string;
  experienceAmount: number;
};

export default function UebersichtExperience({
  name,
  experienceAmount,
}: UebersichtExperienceProps) {
  return (
    <div className="level-experience-container">
      <p className="level-experience">+{experienceAmount}</p>
      <p className="level-experience-exercise">{name}</p>
    </div>
  );
}
