import React from "react";
import { useScreenWidthGreaterThan } from "../../Hooks/useScreenWidthGreaterThan";

interface StrictNarrowScreenProps {}

export const StrictNarrowScreen: React.FC<StrictNarrowScreenProps> = ({ children }) => {
  const isWide = useScreenWidthGreaterThan(721);

  return isWide ? null : <>{children}</>;
};
