import React from "react";
import { GuarianMaterial } from "../images/guarianImagePack";
import "./guarianMaterialSelector.css";

interface IProps {
  materials: GuarianMaterial[];
  selected: GuarianMaterial;
  onSelect(material: GuarianMaterial): void;
}

const GuarianMaterialSelector: React.FC<IProps> = ({ materials, selected, onSelect }) => {
  return (
    <div className="material-selector-list" style={{ display: "flex" }}>
      {materials.map((m) => (
        <div
          key={m}
          className={"material-selector" + (m == selected ? " selected" : "")}
          onClick={() => onSelect(m)}
        >
          Material
        </div>
      ))}
    </div>
  );
};

GuarianMaterialSelector.displayName = "GuarianMaterialSelector";
export { GuarianMaterialSelector };
