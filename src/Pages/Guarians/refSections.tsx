import React from "react";
import Placeholder from "./Tabs/Placeholder";
import { Abilities } from "./Tabs/Abilities";
import { KnownGuarians } from "./Tabs/KnownGuarians";

export interface RefSection {
  title: string;
  content: React.ReactNode;
  route: string;
}

const refSections: RefSection[] = [
  { title: "Overview", content: <Placeholder />, route: "/guarians/overview" },
  { title: "Abilities", content: <Abilities />, route: "/guarians/abilities" },
  { title: "Adornment", content: <Placeholder />, route: "/guarians/adornments" },
  { title: "Perception", content: <Placeholder />, route: "/guarians/perception" },
  { title: "Known Guarians", content: <KnownGuarians />, route: "/guarians/list/:guarian?" },
  { title: "A Guarian of Your Own", content: <Placeholder />, route: "/guarians/custom" },
];

export default refSections;
