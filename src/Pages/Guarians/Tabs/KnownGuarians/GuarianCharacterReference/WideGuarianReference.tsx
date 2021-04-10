import React from "react";
import { GuarianMaterialSelector } from "../GuarianMaterialSelector/GuarianMaterialSelector";
import { GuarianInfo } from "../guarians";
import { GuarianMaterial } from "../images/guarianImagePack";

interface IProps {
  guarian: GuarianInfo;
  selectedMaterial: GuarianMaterial;
  onSelect(material: GuarianMaterial): void;
}

const WideGuarianReference: React.FC<IProps> = ({ guarian, selectedMaterial, onSelect }) => {
  return (
    <>
      <div style={{ position: "absolute", top: 0, right: 0 }}>
        <img src={guarian.images.emblems.full} style={{ margin: 20 }} />
      </div>
      <h1 className="header">
        {guarian.name}
        <span className="sub-title">{guarian.subTitle}</span>
      </h1>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <GuarianMaterialSelector
            materials={guarian.images.refs.map((r) => r.material)}
            selected={selectedMaterial}
            onSelect={onSelect}
          />
          <div
            style={{
              width: "calc(100vw - 1138px)",
              textAlign: "center",
            }}
          >
            <img
              src={guarian.images.refs.find((r) => r.material == selectedMaterial)?.ref}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
        </div>
        <div>
          <div style={{ minHeight: 441, marginRight: 270 }}>{guarian.notes}</div>
          <div className="description">{guarian.description}</div>
        </div>
      </div>
    </>
  );
};

WideGuarianReference.displayName = "WideGuarianReference";
export { WideGuarianReference };
