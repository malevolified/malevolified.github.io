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
import { RouteObject } from "react-router-dom";

export interface RefSection {
  title: string;
  icon?: IconDefinition;
  content: React.ReactNode;
  route: string;
  exact?: boolean;
}

export const refSections: RefSection[] = [
  { title: "Overview", icon: faCircle, content: <Overview />, route: "", exact: true },
  { title: "Lore", icon: faBookOpen, content: <Lore />, route: "lore" },
  {
    title: "Known Guarians",
    icon: faList,
    content: <KnownGuarians />,
    route: "list/",
  },
  {
    title: "A Guarian of Your Own",
    icon: faHeart,
    content: <CustomGuarians />,
    route: "custom",
  },
  { title: "FAQ", icon: faQuestionCircle, content: <FAQ />, route: "faq" },
];

export const smallSections: RefSection[] = [
  { title: "About", icon: faPaintBrush, content: <About />, route: "about" },
];

const extraRoute: RouteObject[] = [{ path: "list/:guarian", element: <KnownGuarians /> }];

export const guarianRoutes: RouteObject[] = extraRoute.concat(
  refSections.concat(smallSections).map((s) => ({
    path: s.route,
    element: s.content,
  }))
);
