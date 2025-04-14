import { JSX } from "react";
import { NavLink } from "react-router";

type SidebarCategoryProps = {
  name: string;
  isDisabled: boolean;
  iconElement: JSX.Element;
  urlPath: string;
};

export default function SidebarCategory({ name, isDisabled, iconElement, urlPath }: SidebarCategoryProps) {
  if (isDisabled)
    return (
      <p className="sidebar-category disabled">
        {iconElement}
        {name}
      </p>
    );

  return (
    <NavLink to={urlPath} className="sidebar-category">
      {iconElement}
      {name}
    </NavLink>
  );
}
