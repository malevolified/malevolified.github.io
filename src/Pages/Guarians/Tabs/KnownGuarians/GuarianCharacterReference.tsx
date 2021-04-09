import React, { useEffect, useState } from "react";
import { NarrowScreen, WideScreen } from "../../../../Components/ScreenDetector";
import { GuarianMaterialSelector } from "./GuarianMaterialSelector/GuarianMaterialSelector";
import { GuarianInfo } from "./guarians";
import { GuarianMaterial } from "./images/guarianImagePack";
import "./knownGuarians.css";

interface IProps {
  guarian: GuarianInfo;
}

const GuarianCharacterReference: React.FC<IProps> = ({ guarian }) => {
  const [selectedMaterial, setSelectedMaterial] = useState(GuarianMaterial.Fluffy);

  const ref = guarian.images.refs.find((r) => r.material == selectedMaterial)?.ref;

  useEffect(() => {
    setSelectedMaterial(guarian.images.refs[0].material);
  }, [guarian]);

  return (
    <div className="character-ref">
      <WideScreen style={{ position: "relative" }}>
        <div style={{ position: "absolute", top: 0, right: 0 }}>
          <img src={guarian.images.emblem} style={{ margin: 20 }} />
        </div>
        <h1 className="header">
          {guarian.name}
          <span className="sub-title">{guarian.subTitle}</span>
        </h1>
        <div style={{ display: "flex" }}>
          <div>
            <GuarianMaterialSelector
              materials={guarian.images.refs.map((r) => r.material)}
              selected={selectedMaterial}
              onSelect={setSelectedMaterial}
            />
            <img
              src={ref}
              style={{ width: "calc(100vw - 1300px)", maxWidth: 900, minWidth: 400 }}
            />
          </div>
          <div>
            <div style={{ height: 441, marginRight: 270 }}>{guarian.notes}</div>
            <div className="description">{guarian.description}</div>
          </div>
        </div>
      </WideScreen>
      <NarrowScreen>
        <div
          style={{
            backgroundImage: "url(" + guarian.images.emblem + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            width: "100%",
            boxShadow: "0px 0px 50px 25px rgb(51, 48, 73) inset",
          }}
        >
          <div style={{ backgroundColor: "rgb(51, 48, 73, 0.9)" }}>
            <h1 className="header">
              {guarian.name}
              <span className="sub-title">{guarian.subTitle}</span>
            </h1>
            <GuarianMaterialSelector
              materials={guarian.images.refs.map((r) => r.material)}
              selected={selectedMaterial}
              onSelect={setSelectedMaterial}
            />
            <img src={ref} style={{ width: "100%" }} />
            <p style={{ margin: 10 }}>{guarian.notes}</p>
            <p style={{ margin: 10 }}>{guarian.description}</p>
          </div>
        </div>
      </NarrowScreen>
    </div>
  );
};

GuarianCharacterReference.displayName = "GuarianCharacterReference";
export { GuarianCharacterReference };
