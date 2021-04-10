import React, { useEffect, useState } from "react";
import { NarrowScreen, WideScreen } from "../../../../../Components/ScreenDetector";
import { GuarianMaterialSelector } from "./GuarianMaterialSelector/GuarianMaterialSelector";
import { GuarianInfo } from "../guarians";
import { GuarianMaterial } from "../images/guarianImagePack";
import "./guarianCharacterReference.css";
import { NarrowGuarianReference } from "./NarrowGuarianReference";
import { WideGuarianReference } from "./WideGuarianReference";
import { useResizeDetector } from "react-resize-detector";

interface IProps {
  guarian: GuarianInfo;
  ref?: React.MutableRefObject<null>;
}

//TODO
//Listen for window width changes and shrink the guarian link list if too narrow
//If the window is even more narrow, move dot notes out of guarian pictures and put it below
//    while also making the material picker vertical next to the guarian pic instead

const GuarianCharacterReference: React.FC<IProps> = ({ guarian, ref }) => {
  const [selectedMaterial, setSelectedMaterial] = useState(GuarianMaterial.Fluffy);

  useEffect(() => {
    setSelectedMaterial(guarian.images.refs[0].material);
  }, [guarian]);

  return (
    <div ref={ref} className="character-ref bordered-item">
      <WideScreen style={{ position: "relative" }}>
        <WideGuarianReference
          guarian={guarian}
          selectedMaterial={selectedMaterial}
          onSelect={setSelectedMaterial}
        />
      </WideScreen>
      <NarrowScreen>
        <NarrowGuarianReference
          guarian={guarian}
          selectedMaterial={selectedMaterial}
          onSelect={setSelectedMaterial}
        />
      </NarrowScreen>
    </div>
  );
};

GuarianCharacterReference.displayName = "GuarianCharacterReference";
export { GuarianCharacterReference };
