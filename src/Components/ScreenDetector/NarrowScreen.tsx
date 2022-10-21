import React from "react";
import "./screenDetector.css";

interface IProps {
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const NarrowScreen: React.FC<IProps> = ({ style, children }) => {
  return (
    <div className="narrow-screen" style={style}>
      {children}
    </div>
  );
};

NarrowScreen.displayName = "NarrowScreen";
export default NarrowScreen;
