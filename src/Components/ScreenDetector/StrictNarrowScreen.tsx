import React from "react";
import { useScreenWidthGreaterThan } from "../../Hooks/useScreenWidthGreaterThan";

interface StrictNarrowScreenProps {
  children: React.ReactNode;
}

export const StrictNarrowScreen: React.FC<StrictNarrowScreenProps> = ({ children }) => {
  const isWide = useScreenWidthGreaterThan(721);

  return isWide ? null : <>{children}</>;
};
