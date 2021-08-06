import React from "react";
import { KnownGuarians } from "./Tabs/KnownGuarians";
import { Lore } from "./Tabs/Lore";
import { FAQ } from "./Tabs/FAQ";
import { CustomGuarians } from "./Tabs/CustomGuarians";
import { Overview } from "./Tabs/Overview";
import {
  faBookOpen,
  faCircle,
  faHeart,
  faList,
  faPaintBrush,
  faQuestionCircle,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { About } from "./Tabs/About";

export interface RefSection {
  title: string;
  icon?: IconDefinition;
  content: React.ReactNode;
  route: string;
  exact?: boolean;
}

export const refSections: RefSection[] = [
  { title: "Overview", icon: faCircle, content: <Overview />, route: "/guarians", exact: true },
  { title: "Lore", icon: faBookOpen, content: <Lore />, route: "/guarians/lore" },
  {
    title: "Known Guarians",
    icon: faList,
    content: <KnownGuarians />,
    route: "/guarians/list/:guarian?",
  },
  {
    title: "A Guarian of Your Own",
    icon: faHeart,
    content: <CustomGuarians />,
    route: "/guarians/custom",
  },
  { title: "FAQ", icon: faQuestionCircle, content: <FAQ />, route: "/guarians/faq" },
];

export const smallSections: RefSection[] = [
  { title: "About", icon: faPaintBrush, content: <About />, route: "/guarians/about" },
];
