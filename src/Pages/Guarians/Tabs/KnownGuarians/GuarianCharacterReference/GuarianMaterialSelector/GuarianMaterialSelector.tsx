import React, { useEffect, useState } from "react";
import { GuarianMaterial } from "../../Guarians/guarianImagePack";
import "./guarianMaterialSelector.css";
import fluffyIcon from "./icons/fluffyIcon.png";
import rubberIcon from "./icons/rubberIcon.png";
import inflatableIcon from "./icons/inflatableIcon.png";
import matteIcon from "./icons/matteIcon.png";
import { dir } from "console";

interface IProps {
  materials: GuarianMaterial[];
  selected: GuarianMaterial;
  onSelect(material: GuarianMaterial): void;
  direction?: "horizontal" | "vertical";
}

const GuarianMaterialSelector: React.FC<IProps> = ({
  materials,
  selected,
  onSelect,
  direction = "horizontal",
}) => {
  const [showShine, setShowShine] = useState(true);

  useEffect(() => {
    var timer = setTimeout(() => setShowShine(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  function getIconForMaterial(material: GuarianMaterial) {
    switch (material) {
      case GuarianMaterial.Rubber:
        return rubberIcon;
      case GuarianMaterial.Inflatable:
        return inflatableIcon;
      case GuarianMaterial.Matte:
        return matteIcon;
      default:
        return fluffyIcon;
    }
  }

  return (
    <div
      className={"material-selector-list " + direction}
      style={{ display: "flex", flexDirection: direction == "horizontal" ? "row" : "column" }}
    >
      {materials.map((m) => (
        <div
          key={m}
          className={
            "material-selector" + (m == selected ? " selected" : "") + (showShine ? " shine" : "")
          }
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
