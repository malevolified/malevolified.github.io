import React from "react";
import reguarWump from "./reguarWump.png";

interface IProps {}

export const Placeholder: React.FC<IProps> = ({}) => {
  return (
    <div className="wrappable-row" style={{ minHeight: 400, paddingTop: 100 }}>
      <div
        className="column big-text"
        style={{ marginBottom: 20, marginTop: 50 }}
      >
        UNDER
        <br />
        CONSTRUCTION
      </div>
      <div className="column" style={{ textAlign: "center" }}>
        <img src={reguarWump} style={{ width: "100%", maxWidth: 700 }} />
      </div>
    </div>
  );
};

Placeholder.displayName = "Placeholder";
export default Placeholder;
