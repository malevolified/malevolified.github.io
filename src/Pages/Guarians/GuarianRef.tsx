import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "./guarianRef.css";
import Placeholder from "./Tabs/Placeholder";

interface IProps {}

export const GuarianRef: React.FC<IProps> = ({}) => {
  return (
    <div className="guarian-ref">
      <h1 className="title">The Guarians</h1>
      <Tabs>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Powers</Tab>
          <Tab>Adornment</Tab>
          <Tab>Perception</Tab>
          <Tab>Known Guarians</Tab>
          <Tab>A Guarian of Your Own</Tab>
        </TabList>
        <TabPanel>
          <Placeholder />
        </TabPanel>
        <TabPanel>
          <Placeholder />
        </TabPanel>
        <TabPanel>
          <Placeholder />
        </TabPanel>
        <TabPanel>
          <Placeholder />
        </TabPanel>
        <TabPanel>
          <Placeholder />
        </TabPanel>
        <TabPanel>
          <Placeholder />
        </TabPanel>
      </Tabs>
    </div>
  );
};

GuarianRef.displayName = "GuarianRef";
export default GuarianRef;
