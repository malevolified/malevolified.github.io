import React from "react";
import { GuarianMaterial } from "../images/guarianImagePack";
import "./guarianMaterialSelector.css";
import fluffyIcon from "./icons/fluffyIcon.png";
import rubberIcon from "./icons/rubberIcon.png";
import inflatableIcon from "./icons/inflatableIcon.png";

interface IProps {
  materials: GuarianMaterial[];
  selected: GuarianMaterial;
  onSelect(material: GuarianMaterial): void;
}

const GuarianMaterialSelector: React.FC<IProps> = ({ materials, selected, onSelect }) => {
  function getIconForMaterial(material: GuarianMaterial) {
    switch (material) {
      case GuarianMaterial.Rubber:
        return rubberIcon;
      case GuarianMaterial.Inflatable:
        return inflatableIcon;
      default:
        return fluffyIcon;
    }
  }

  return (
    <div className="material-selector-list" style={{ display: "flex" }}>
      {materials.map((m) => (
        <div
          key={m}
          className={"material-selector" + (m == selected ? " selected" : "")}
          onClick={() => onSelect(m)}
        >
          <img src={getIconForMaterial(m)} />
        </div>
      ))}
    </div>
  );
};

GuarianMaterialSelector.displayName = "GuarianMaterialSelector";
export { GuarianMaterialSelector };
