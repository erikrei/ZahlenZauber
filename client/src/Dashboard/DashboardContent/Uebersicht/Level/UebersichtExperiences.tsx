import { OverviewExperienceExercise } from "../../../../data/uebersicht.data";
import UebersichtExperience from "./UebersichtExperience";
import UebersichtExeperiencesHeader from "./UebersichtExperiencesHeader";

type UebersichtExeperiencesProps = {
  experiences: OverviewExperienceExercise[];
};

export default function UebersichtExperiences({
  experiences,
}: UebersichtExeperiencesProps) {
  return (
    <div className="level-experiences">
      <UebersichtExeperiencesHeader />
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
