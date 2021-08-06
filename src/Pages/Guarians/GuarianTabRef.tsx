import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { generatePath, NavLink } from "react-router-dom";
import { GuarianRoutes } from "./GuarianRoutes";
import refSections from "./refSections";

interface IProps {}

export const GuarianTabRef: React.FC<IProps> = ({}) => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
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
        <div className="tab-wrapper">
          <NavLink
            key={"/guarians/about"}
            className="tab"
            activeClassName="selected"
            to={"/guarians/about"}
          >
            About
          </NavLink>
        </div>
      </div>

      <div className="content flat-top">
        <GuarianRoutes />
      </div>
    </div>
  );
};

GuarianTabRef.displayName = "GuarianTabRef";
export default GuarianTabRef;
