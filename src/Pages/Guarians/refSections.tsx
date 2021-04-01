import React from "react";
import Placeholder from "./Tabs/Placeholder";
import { Powers } from "./Tabs/Powers";

export interface RefSection {
  title: string;
  content: React.ReactNode;
  route: string;
}

const refSections: RefSection[] = [
  { title: "Overview", content: <Placeholder />, route: "/guarians/overview" },
  { title: "Powers", content: <Powers />, route: "/guarians/powers" },
  { title: "Adornment", content: <Placeholder />, route: "/guarians/adornments" },
  { title: "Perception", content: <Placeholder />, route: "/guarians/perception" },
  { title: "Known Guarians", content: <Placeholder />, route: "/guarians/list" },
  { title: "A Guarian of Your Own", content: <Placeholder />, route: "/guarians/custom" },
];

export default refSections;
