import { OverviewExperienceExercise } from "../../../../data/uebersicht.data";
import UebersichtExperience from "./UebersichtExperience";

type UebersichtExeperiencesProps = {
  experiences: OverviewExperienceExercise[];
};

export default function UebersichtExperiences({
  experiences,
}: UebersichtExeperiencesProps) {
  return (
    <div className="level-experiences card">
      <p>Erfahrungsquellen</p>
      <div className="level-experiences-list">
        {experiences.map((experience) => (
          <UebersichtExperience
            key={experience.name}
            name={experience.name}
            experienceAmount={experience.experienceAmount}
          />
        ))}
      </div>
    </div>
  );
}
