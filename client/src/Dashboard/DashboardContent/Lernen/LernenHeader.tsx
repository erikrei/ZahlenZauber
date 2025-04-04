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
    <div className="learning-header">
      <div className="learning-header-text">
        <h1>Lernen</h1>
        <p>
          In diesem Bereich werden die je nach Klasse ausgewählten Übungen
          angezeigt, die auf Wunsch durchgeführt werden können.
        </p>
      </div>
      <LernenClassSelector
        selectedClass={selectedClass}
        setSelectedClass={setSelectedClass}
      />
    </div>
  );
}
