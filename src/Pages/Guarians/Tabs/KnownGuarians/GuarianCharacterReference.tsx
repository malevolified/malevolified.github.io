import React from "react";
import { NarrowScreen, WideScreen } from "../../../../Components/ScreenDetector";
import { GuarianInfo } from "./guarians";
import "./knownGuarians.css";

interface IProps {
  guarian: GuarianInfo;
}

const GuarianCharacterReference: React.FC<IProps> = ({ guarian }) => {
  return (
    <div className="character-ref">
      <WideScreen>
        <img src={guarian.images.emblem} style={{ float: "right", margin: 20 }} />
        <h1 className="header">{guarian.name}</h1>
        <img
          src={guarian.images.ref}
          style={{ float: "left", height: "calc(100vh - 360px)", maxHeight: 900 }}
        />
        <p>{guarian.description}</p>
      </WideScreen>
      <NarrowScreen>
        <div
          style={{
            backgroundImage: "url(" + guarian.images.emblem + ")",
            backgroundSize: "100%",
            width: "100%",
            boxShadow: "0px 0px 50px 25px rgb(51, 48, 73) inset",
          }}
        >
          <div style={{ backgroundColor: "rgb(51, 48, 73, 0.9)" }}>
            <h1 className="header">{guarian.name}</h1>
            <img src={guarian.images.ref} style={{ width: "100%" }} />
            <p style={{ margin: 10 }}>{guarian.description}</p>
          </div>
        </div>
      </NarrowScreen>
    </div>
  );
};

GuarianCharacterReference.displayName = "GuarianCharacterReference";
export { GuarianCharacterReference };
