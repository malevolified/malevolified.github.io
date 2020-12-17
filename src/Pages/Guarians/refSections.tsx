import React from "react";
import Placeholder from "./Tabs/Placeholder";
import { Powers } from "./Tabs/Powers";

export interface RefSection {
  title: string;
  content: React.ReactNode;
}

const refSections: RefSection[] = [
  { title: "Overview", content: <Powers /> },
  { title: "Powers", content: <Placeholder /> },
  { title: "Adornment", content: <Placeholder /> },
  { title: "Perception", content: <Placeholder /> },
  { title: "Known Guarians", content: <Placeholder /> },
  { title: "A Guarian of Your Own", content: <Placeholder /> },
];

export default refSections;
