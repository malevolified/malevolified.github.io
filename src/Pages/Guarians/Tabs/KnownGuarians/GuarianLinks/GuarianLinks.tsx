import React from "react";
import { GuarianInfo } from "../Guarians";
import { GuarianReferenceLink } from "./GuarianReferenceLink";
import "./guarianLinks.css";

interface IProps {
  guarians: GuarianInfo[];
  collapsed: boolean;
}

const GuarianLinks: React.FC<IProps> = ({ guarians, collapsed }) => {
  return (
    <div className="bordered-item character-link-wrapper">
      {guarians.map((g) => (
        <GuarianReferenceLink key={g.name} guarian={g} collapsed={collapsed} />
      ))}
    </div>
  );
};

GuarianLinks.displayName = "GuarianLinks";
export { GuarianLinks };
