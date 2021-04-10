import React from "react";
import { NavLink } from "react-router-dom";
import { GuarianInfo } from "./guarians";
import "./knownGuarians.css";

interface IProps {
  guarian: GuarianInfo;
}

const GuarianReferenceLink: React.FC<IProps> = ({ guarian }) => {
  return (
    <div
      className="character-link"
      style={{
        background: "url(" + guarian.images.emblems.list + ")",
        backgroundSize: "contain",
      }}
    >
      <NavLink
        to={"/guarians/list/" + guarian.name.toLowerCase()}
        className="nav-wrapper"
        activeClassName="selected-guarian"
      >
        <div>{guarian.name}</div>
      </NavLink>
    </div>
  );
};

GuarianReferenceLink.displayName = "GuarianReferenceLink";
export { GuarianReferenceLink };
