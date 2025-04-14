import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarLeftExpand,
} from "react-icons/tb";
import { TiMortarBoard } from "react-icons/ti";

type HeaderProps = {
  sidebarFolded: boolean;
  onFoldIconClick: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({
  sidebarFolded,
  onFoldIconClick,
}: HeaderProps) {
  return (
    <div className="sidebar-header">
      <TiMortarBoard className="logo" />
      <p>ZahlenZauber</p>
      {!sidebarFolded && (
        <TbLayoutSidebarLeftCollapse
          onClick={() => onFoldIconClick(true)}
          className="folder"
        />
      )}
      {sidebarFolded && (
        <TbLayoutSidebarLeftExpand
          onClick={() => onFoldIconClick(false)}
          className="folder"
        />
      )}
    </div>
  );
}
