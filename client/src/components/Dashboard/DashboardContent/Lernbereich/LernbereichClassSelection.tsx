import { IoSettingsOutline } from "react-icons/io5";
import ButtonLink from "../../../shared/ButtonLink";

export default function LernbereichClassSelection() {
  return (
    <div className="no-class-error">
      <p>Du musst zuerst eine Klasse in</p>
      <ButtonLink
        icon={<IoSettingsOutline />}
        buttonText="Einstellungen"
        link="../einstellungen"
        className="link-btn"
      />
      <p>definieren.</p>
    </div>
  );
}
