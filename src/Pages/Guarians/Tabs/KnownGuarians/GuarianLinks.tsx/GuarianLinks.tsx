import React from "react";
import { GuarianInfo } from "../guarians";
import { GuarianReferenceLink } from "./GuarianReferenceLink";
import "./guarianLinks.css";

interface IProps {
  guarians: GuarianInfo[];
  collapsed: boolean;
  style?: React.CSSProperties;
}

const GuarianLinks: React.FC<IProps> = ({ guarians, collapsed, style }) => {
  return (
    <div className="bordered-item character-link-wrapper" style={style}>
      {guarians.map((g) => (
        <GuarianReferenceLink guarian={g} collapsed={collapsed} />
      ))}
    </div>
  );
};

GuarianLinks.displayName = "GuarianLinks";
export { GuarianLinks };
