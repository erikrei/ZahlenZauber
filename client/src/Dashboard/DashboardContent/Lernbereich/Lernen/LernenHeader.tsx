import LernBereichHeaderText from "../LernbereichHeaderText";
import LernenClassSelector from "./LernenClassSelector";

type LernenHeaderProps = {
  selectedClass: number;
  setSelectedClass: React.Dispatch<React.SetStateAction<number>>;
};

export default function LernenHeader({
  selectedClass,
  setSelectedClass,
}: LernenHeaderProps) {
  return (
    <div className="learning-section-header">
      <LernBereichHeaderText
        headline="Lernen"
        description="In diesem Bereich werden die je nach Klasse ausgewählten Übungen
        angezeigt, die auf Wunsch durchgeführt werden können."
      />
      <LernenClassSelector
        selectedClass={selectedClass}
        setSelectedClass={setSelectedClass}
      />
    </div>
  );
}
