import { useSettingsContext } from "../../../../context/settings.context";

export default function EinstellungenClass() {
  const { selectedClass, setSelectedClass } = useSettingsContext();

  function setClass(value: string) {
    const valueNum = Number(value);

    if (valueNum !== 0) setSelectedClass(valueNum);
  }

  return (
    <article className="settings-class">
      <div className="settings-class-text">
        <h2>Klasse einstellen</h2>
        <p>
          Hier kannst du deine derzeitig besuchte Klasse einstellen, damit
          Lektionen und Übungen auf dich angepasst sind.
        </p>
      </div>
      <select
        name="class-select"
        id="class-select"
        onChange={(e) => setClass(e.target.value)}
        defaultValue={selectedClass || 0}
      >
        <option value={0}>Klassenauswahl</option>
        <option value={1}>1. Klasse</option>
        <option value={2}>2. Klasse</option>
        <option value={3}>3. Klasse</option>
        <option value={4}>4. Klasse</option>
      </select>
    </article>
  );
}
