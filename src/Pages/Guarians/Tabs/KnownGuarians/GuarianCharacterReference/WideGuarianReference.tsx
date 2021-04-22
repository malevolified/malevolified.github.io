import React from "react";
import { useScreenWidthGreaterThan } from "../../../../../Hooks/useScreenWidthGreaterThan";
import { GuarianMaterialSelector } from "./GuarianMaterialSelector/GuarianMaterialSelector";
import { COLLAPSE_LINKS_ROOM, GuarianInfo, HORIZONTAL_REF_ROOM } from "../Guarians";
import { GuarianMaterial } from "../Guarians/guarianImagePack";

interface IProps {
  guarian: GuarianInfo;
  selectedMaterial: GuarianMaterial;
  onSelect(material: GuarianMaterial): void;
}

const WideGuarianReference: React.FC<IProps> = ({ guarian, selectedMaterial, onSelect }) => {
  const isHorizontal = useScreenWidthGreaterThan(
    (guarian?.images.maxRefWidth ?? 900) + HORIZONTAL_REF_ROOM
  );
  const isListCollapsed = useScreenWidthGreaterThan(
    (guarian?.images.maxRefWidth ?? 900) + COLLAPSE_LINKS_ROOM
  );

  return (
    <>
      <div style={{ position: "absolute", top: -10, right: 0 }}>
        <img src={guarian.images.emblems.full} style={{ margin: 20 }} />
      </div>
      <h1 className="header">{guarian.name}</h1>
      <div style={{ display: "flex", flexDirection: isHorizontal ? "row" : "column" }}>
        <div
          style={{
            //Massive flex so that this gets bigger before the text does
            flex: 100,
            maxWidth: isHorizontal ? guarian.images.maxRefWidth : undefined,
            display: "flex",
            flexDirection: isHorizontal ? "column" : "row",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: isHorizontal ? 0 : 10,
          }}
        >
          <GuarianMaterialSelector
            materials={guarian.images.refs.map((r) => r.material)}
            selected={selectedMaterial}
            onSelect={onSelect}
            direction={isHorizontal ? "horizontal" : "vertical"}
          />
          <div
            style={
              isHorizontal
                ? {
                    maxWidth: guarian.images.maxRefWidth,
                    textAlign: "center",
                  }
                : { position: "relative", zIndex: 1 }
            }
          >
            {guarian.images.refs.map((r) => (
              <img
                key={r.material}
                src={r.ref}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  display: selectedMaterial == r.material ? "inline" : "none",
                }}
              />
            ))}
          </div>
        </div>
        <div
          style={{
            flex: 1,
            minWidth: isHorizontal ? 1675 - guarian.images.maxRefWidth : undefined,
          }}
        >
          <div style={isHorizontal ? { minHeight: 441, marginRight: 270 } : {}}>
            {guarian.notes}
          </div>
          {isHorizontal || (
            <div style={{ margin: "10px 30px", borderBottom: "1px solid #fffcef33" }}></div>
          )}
          <div className="description">{guarian.description}</div>
        </div>
      </div>
    </>
  );
};

WideGuarianReference.displayName = "WideGuarianReference";
export { WideGuarianReference };
