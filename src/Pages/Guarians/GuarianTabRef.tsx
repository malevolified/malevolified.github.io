import React from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import refSections from "./refSections";
import Placeholder from "./Tabs/Placeholder";

interface IProps {}

export const GuarianTabRef: React.FC<IProps> = ({}) => {
  return (
    <Tabs>
      <TabList>
        {refSections.map((s, index) => (
          <Tab key={index}>{s.title}</Tab>
        ))}
      </TabList>
      {refSections.map((s, index) => (
        <TabPanel key={index}>{s.content}</TabPanel>
      ))}
    </Tabs>
  );
};

GuarianTabRef.displayName = "GuarianTabRef";
export default GuarianTabRef;
