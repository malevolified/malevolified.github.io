import React from "react";
import "./guarianRef.css";
import reguarWump from "./reguarWump.png";

interface IProps {}

export const GuarianRef: React.FC<IProps> = ({}) => {
  return (
    <div className="guarian-ref">
      <div className="content">
        <h1 className="title">The Guarians</h1>
        <div style={{ display: "flex", paddingTop: 50 }}>
          <div
            style={{
              flex: 1,
              fontFamily: "Title",
              textAlign: "center",
              fontSize: 40,
              marginTop: 40
            }}
          >
            UNDER
            <br />
            CONSTRUCTION
          </div>
          <div style={{ flex: 1, textAlign: "center" }}>
            <img width={700} src={reguarWump} />
          </div>
        </div>
      </div>
    </div>
  );
};

GuarianRef.displayName = "GuarianRef";
export default GuarianRef;
