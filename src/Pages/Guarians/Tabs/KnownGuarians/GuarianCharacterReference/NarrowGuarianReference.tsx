import React from "react";
import { GuarianMaterialSelector } from "./GuarianMaterialSelector/GuarianMaterialSelector";
import { GuarianInfo } from "../Guarians/guarians";
import { GuarianMaterial } from "../Guarians/guarianImagePack";

interface IProps {
  guarian: GuarianInfo;
  selectedMaterial: GuarianMaterial;
  onSelect(material: GuarianMaterial): void;
}

const NarrowGuarianReference: React.FC<IProps> = ({ guarian, selectedMaterial, onSelect }) => {
  return (
    <div
      style={{
        backgroundImage: "url(" + guarian.images.emblems.full + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        width: "100%",
        boxShadow: "0px 0px 50px 25px rgb(51, 48, 73) inset",
      }}
    >
      <div style={{ backgroundColor: "rgb(51, 48, 73, 0.9)" }}>
        <h1 className="header">{guarian.name}</h1>
        <GuarianMaterialSelector
          materials={guarian.images.refs.map((r) => r.material)}
          selected={selectedMaterial}
          onSelect={onSelect}
        />
        <img
          src={guarian.images.refs.find((r) => r.material == selectedMaterial)?.ref}
          style={{ width: "100%" }}
        />
        <div style={{ margin: 10 }}>{guarian.notes}</div>
        <div style={{ margin: 10 }}>{guarian.description}</div>
      </div>
    </div>
  );
};

NarrowGuarianReference.displayName = "NarrowGuarianReference";
export { NarrowGuarianReference };
