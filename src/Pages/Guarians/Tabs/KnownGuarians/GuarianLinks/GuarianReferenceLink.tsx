import React from "react";
import { NavLink } from "react-router-dom";
import { GuarianInfo } from "../Guarians";
import "./guarianLinks.css";

interface IProps {
  guarian: GuarianInfo;
  collapsed: boolean;
}

const GuarianReferenceLink: React.FC<IProps> = ({ guarian, collapsed }) => {
  return (
    <div
      className={"character-link" + (collapsed ? " collapsed" : "")}
      style={{
        backgroundImage:
          "url(" + (collapsed ? guarian.images.emblems.icon : guarian.images.emblems.list) + ")",
      }}
    >
      <NavLink
        to={"/guarians/list/" + guarian.name.toLowerCase()}
        className="nav-wrapper"
        activeClassName="selected-guarian"
      >
        <div className="name">{collapsed ? null : guarian.name}</div>
      </NavLink>
    </div>
  );
};

GuarianReferenceLink.displayName = "GuarianReferenceLink";
export { GuarianReferenceLink };
