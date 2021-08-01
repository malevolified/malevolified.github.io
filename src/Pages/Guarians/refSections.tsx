import React from "react";
import { KnownGuarians } from "./Tabs/KnownGuarians";
import { Lore } from "./Tabs/Lore";
import { FAQ } from "./Tabs/FAQ";
import { CustomGuarians } from "./Tabs/CustomGuarians";
import { Overview } from "./Tabs/Overview";

export interface RefSection {
  title: string;
  content: React.ReactNode;
  route: string;
  exact?: boolean;
}

const refSections: RefSection[] = [
  { title: "Overview", content: <Overview />, route: "/guarians", exact: true },
  { title: "Lore", content: <Lore />, route: "/guarians/lore" },
  { title: "Known Guarians", content: <KnownGuarians />, route: "/guarians/list/:guarian?" },
  { title: "A Guarian of Your Own", content: <CustomGuarians />, route: "/guarians/custom" },
  { title: "FAQ", content: <FAQ />, route: "/guarians/faq" },
];

export default refSections;
