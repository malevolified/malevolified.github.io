import React from "react";
import "./guarianRef.css";
import reguarWump from "./reguarWump.png";

interface IProps {}

export const GuarianRef: React.FC<IProps> = ({}) => {
  return (
    <div className="guarian-ref">
      <div className="content">
        <h1 className="title">The Guarians</h1>
        <div className="wrappable-row">
          <div className="column big-text" style={{ marginBottom: 20 }}>
            UNDER
            <br />
            CONSTRUCTION
          </div>
          <div className="column" style={{ textAlign: "center" }}>
            <img src={reguarWump} style={{ width: "100%", maxWidth: 700 }} />
          </div>
        </div>
      </div>
    </div>
  );
};

GuarianRef.displayName = "GuarianRef";
export default GuarianRef;
