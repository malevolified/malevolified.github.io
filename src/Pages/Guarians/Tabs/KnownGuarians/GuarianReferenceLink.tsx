import React from "react";
import { NavLink } from "react-router-dom";
import { GuarianInfo } from "./guarians";

interface IProps {
  guarian: GuarianInfo;
}

const GuarianReferenceLink: React.FC<IProps> = ({ guarian }) => {
  return (
    <div>
      <NavLink
        to={"/guarians/list/" + guarian.name.toLowerCase()}
        activeStyle={{
          backgroundColor: "rgb(203, 200, 233)",
          color: "rgb(51, 48, 73)",
        }}
      >
        {guarian.name}
      </NavLink>
    </div>
  );
};

GuarianReferenceLink.displayName = "GuarianReferenceLink";
export { GuarianReferenceLink };
