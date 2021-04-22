import React from "react";
import { useResizeDetector } from "react-resize-detector";
import { useScreenWidthGreaterThan } from "../../../../Hooks/useScreenWidthGreaterThan";
import { GuarianCharacterReference } from "./GuarianCharacterReference";
import { GuarianLinks } from "./GuarianLinks";
import { COLLAPSE_LINKS_ROOM, GuarianInfo } from "./Guarians/guarians";
import { KnownGuarianBody } from "./KnownGuarianBody";

interface IProps {
  guarians: GuarianInfo[];
  selected?: GuarianInfo;
}

//This component requires special hook handling because of the guarian list sizing
const WideKnownGuarians: React.FC<IProps> = ({ guarians, selected }) => {
  const { height, ref } = useResizeDetector({ handleHeight: true });

  const shouldExpandList = useScreenWidthGreaterThan(
    (selected?.images.maxRefWidth ?? 900) + COLLAPSE_LINKS_ROOM
  );

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1, marginRight: 10 }}>
        <div ref={ref}>
          {selected ? <GuarianCharacterReference guarian={selected} /> : <KnownGuarianBody />}
        </div>
      </div>
      <div style={{ maxHeight: Math.max(height ?? 0, 500) }}>
        <GuarianLinks guarians={guarians} collapsed={!shouldExpandList} />
      </div>
    </div>
  );
};

WideKnownGuarians.displayName = "WideKnownGuarians";
export { WideKnownGuarians };
