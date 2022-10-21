import React from "react";
import { useScreenWidthGreaterThan } from "../../Hooks/useScreenWidthGreaterThan";

interface StrictWideScreenProps {
  children: React.ReactNode;
}

export const StrictWideScreen: React.FC<StrictWideScreenProps> = ({ children }) => {
  const isWide = useScreenWidthGreaterThan(721);

  return isWide ? <>{children}</> : null;
};
