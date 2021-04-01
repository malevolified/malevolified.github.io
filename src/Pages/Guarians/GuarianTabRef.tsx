import React from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import { GuarianRoutes } from "./GuarianRoutes";
import refSections from "./refSections";
import Placeholder from "./Tabs/Placeholder";

interface IProps {}

export const GuarianTabRef: React.FC<IProps> = ({}) => {
  const { pathname } = useLocation();

  return (
    <div>
      <div className="tab-wrapper">
        {refSections.map((s) => (
          <Link
            className={"tab" + (matchPath(pathname, { path: s.route }) != null ? " selected" : "")}
            to={s.route}
          >
            {s.title}
          </Link>
        ))}
      </div>
      <div className="content flat-top">
        <GuarianRoutes />
      </div>
    </div>
  );
};

GuarianTabRef.displayName = "GuarianTabRef";
export default GuarianTabRef;
