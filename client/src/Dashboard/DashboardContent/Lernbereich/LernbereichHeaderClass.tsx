import { useSettingsContext } from "../../../context/settings.context"

export default function LernbereichHeaderClass() {
    const { selectedClass } = useSettingsContext();

    if (!selectedClass) return null;

    return <p className="selected-class">
        {selectedClass}. Klasse
    </p>
}