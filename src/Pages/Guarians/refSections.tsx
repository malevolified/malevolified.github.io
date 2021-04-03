import React from "react";
import Placeholder from "./Tabs/Placeholder";
import { KnownGuarians } from "./Tabs/KnownGuarians";
import { Lore } from "./Tabs/Lore/Lore";

export interface RefSection {
  title: string;
  content: React.ReactNode;
  route: string;
}

const refSections: RefSection[] = [
  { title: "Overview", content: <Placeholder />, route: "/guarians" },
  { title: "Lore", content: <Lore />, route: "/guarians/lore" },
  { title: "Known Guarians", content: <KnownGuarians />, route: "/guarians/list/:guarian?" },
  { title: "A Guarian of Your Own", content: <Placeholder />, route: "/guarians/custom" },
];

export default refSections;
