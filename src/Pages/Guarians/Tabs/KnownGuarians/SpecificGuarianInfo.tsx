import React from "react";
import { GuarianInfo } from "./guarians";

interface IProps {
  guarian: GuarianInfo;
}

const SpecificGuarianInfo: React.FC<IProps> = ({ guarian }) => {
  return <h1>{guarian.name}</h1>;
};

SpecificGuarianInfo.displayName = "SpecificGuarianInfo";
export { SpecificGuarianInfo };
