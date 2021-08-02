import React, { useEffect } from "react";
import { useHistory } from "react-router";

interface ScrollToTopProps {}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({}) => {
  const { listen } = useHistory();

  useEffect(() => {
    const unlisten = listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  return null;
};
