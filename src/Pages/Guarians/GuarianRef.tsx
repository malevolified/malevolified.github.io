import React from "react";
import { NarrowScreen, WideScreen } from "../../Components/ScreenDetector";
import GuarianMenuRef from "./GuarianMenuRef";
import "./guarianRef.css";
import GuarianTabRef from "./GuarianTabRef";

interface IProps {}

export const GuarianRef: React.FC<IProps> = ({}) => {
  return (
    <div className="guarian-ref">
      <h1 className="title">The Guarians</h1>
      <WideScreen>
        <GuarianTabRef />
      </WideScreen>
      <NarrowScreen>
        <GuarianMenuRef />
      </NarrowScreen>
    </div>
  );
};

GuarianRef.displayName = "GuarianRef";
export default GuarianRef;
