import { JSX } from "react";
import { NavLink } from "react-router";

type SidebarCategoryProps = {
  name: string;
  isDisabled: boolean;
  iconElement: JSX.Element;
  urlPath: string;
};

export default function SidebarCategory({
  name,
  isDisabled,
  iconElement,
  urlPath,
}: SidebarCategoryProps) {
  if (isDisabled)
    return (
      <div className="sidebar-category disabled">
        {iconElement}
        <p className="sidebar-category-name">{name}</p>
      </div>
    );

  return (
    <NavLink to={urlPath} className="sidebar-category">
      {iconElement}
      <p className="sidebar-category-name">{name}</p>
    </NavLink>
  );
}
