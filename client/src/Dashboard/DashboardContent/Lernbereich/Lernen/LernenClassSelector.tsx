type LernenClassSelectorProps = {
  selectedClass: number;
  setSelectedClass: React.Dispatch<React.SetStateAction<number>>;
};

export default function LernenClassSelector({
  selectedClass,
  setSelectedClass,
}: LernenClassSelectorProps) {
  return (
    <div className="class-selector">
      {/* <label htmlFor="class-selector">
        Klassenauswahl
      </label> */}
      <select
        name="class-selector"
        id="class-selector"
        value={selectedClass}
        onChange={(e) => setSelectedClass(Number(e.target.value))}
      >
        <option value={1}>1. Klasse</option>
        <option value={2}>2. Klasse</option>
        <option value={3}>3. Klasse</option>
        <option value={4}>4. Klasse</option>
      </select>
    </div>
  );
}
