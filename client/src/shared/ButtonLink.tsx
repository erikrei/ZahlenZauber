import { JSX } from "react";
import { Link } from "react-router";

type ButtonLinkProps = {
  icon?: JSX.Element;
  link?: string;
  buttonText: string;
  className?: string;
};

export default function ButtonLink({
  icon,
  link,
  buttonText,
  className
}: ButtonLinkProps) {
  if (link) {
    return (
      <Link to={link} className={className}>
        {icon && icon}
        {buttonText}
      </Link>
    );
  } else
    return (
      <button>
        {icon && icon}
        {buttonText}
      </button>
    );
}
