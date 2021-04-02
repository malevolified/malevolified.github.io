import React from "react";
import { GuarianInfo } from "./guarians";
import "./knownGuarians.css";

interface IProps {
  guarian: GuarianInfo;
}

const GuarianCharacterReference: React.FC<IProps> = ({ guarian }) => {
  return (
    <div className="character-ref">
      <img src={guarian.emblem} style={{ float: "right" }} />
      <h1 className="header">{guarian.name}</h1>
      <p>{guarian.description}</p>
    </div>
  );
};

GuarianCharacterReference.displayName = "GuarianCharacterReference";
export { GuarianCharacterReference };
