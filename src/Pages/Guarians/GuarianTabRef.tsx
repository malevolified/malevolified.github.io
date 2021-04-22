import React from "react";
import { generatePath, NavLink } from "react-router-dom";
import { GuarianRoutes } from "./GuarianRoutes";
import refSections from "./refSections";

interface IProps {}

export const GuarianTabRef: React.FC<IProps> = ({}) => {
  return (
    <div>
      <div className="tab-wrapper">
        {refSections.map((s) => (
          <NavLink
            key={s.route}
            exact={s.exact}
            className="tab"
            activeClassName="selected"
            to={generatePath(s.route)}
          >
            {s.title}
          </NavLink>
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
