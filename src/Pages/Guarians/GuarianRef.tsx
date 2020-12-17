import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { NarrowScreen, WideScreen } from "../../Components/ScreenDetector";
import GuarianMenuRef from "./GuarianMenuRef";
import "./guarianRef.css";
import GuarianTabRef from "./GuarianTabRef";
import Placeholder from "./Tabs/Placeholder";

interface IProps {}

export const GuarianRef: React.FC<IProps> = ({}) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="guarian-ref">
      <h1 className="title">The Guarians</h1>
      <WideScreen>
        <GuarianTabRef selectedIndex={index} onSelect={setIndex} />
      </WideScreen>
      <NarrowScreen>
        <GuarianMenuRef selectedIndex={index} onSelect={setIndex} />
      </NarrowScreen>
    </div>
  );
};

GuarianRef.displayName = "GuarianRef";
export default GuarianRef;
