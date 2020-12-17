import React from "react";
import "./screenDetector.css";

interface IProps {
  style?: React.CSSProperties;
}

export const WideScreen: React.FC<IProps> = ({ style, children }) => {
  return (
    <div className="wide-screen" style={style}>
      {children}
    </div>
  );
};

WideScreen.displayName = "WideScreen";
export default WideScreen;
