import React from "react";
import { StrictNarrowScreen, StrictWideScreen } from "../../Components/ScreenDetector";
import { GuarianFooter } from "./GuarianFooter";
import GuarianMenuRef from "./GuarianMenuRef";
import "./guarianRef.css";
import GuarianTabRef from "./GuarianTabRef";

interface IProps {}

export const GuarianRef: React.FC<IProps> = ({}) => {
  return (
    <div className="guarian-ref">
      <div style={{ flex: 1, padding: "0 4vw" }}>
        <h1 className="title">The Guarians</h1>
        <StrictWideScreen>
          <GuarianTabRef />
        </StrictWideScreen>
        <StrictNarrowScreen>
          <GuarianMenuRef />
        </StrictNarrowScreen>
      </div>
      <GuarianFooter />
    </div>
  );
};

GuarianRef.displayName = "GuarianRef";
export default GuarianRef;
