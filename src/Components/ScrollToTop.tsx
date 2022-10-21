import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface ScrollToTopProps {}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({}) => {
  let location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};
