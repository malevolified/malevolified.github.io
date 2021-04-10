import React from "react";
import { useResizeDetector } from "react-resize-detector";
import { useScreenWidthGreaterThan } from "../../../../Hooks/useScreenWidthGreaterThan";
import { GuarianCharacterReference } from "./GuarianCharacterReference";
import { GuarianLinks } from "./GuarianLinks.tsx";
import { COLLAPSE_LINKS_ROOM, GuarianInfo } from "./guarians";

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
          {selected ? (
            <GuarianCharacterReference guarian={selected} />
          ) : (
            <div>
              <h1>Known Guarians</h1>
              <p>
                Listed here are all of the known (or at least well documented) guarians. The actual
                amount of guarians out there is truly unknown and possibly ever changing, and this
                list may be extended as more are discovered.
              </p>
              <p>
                As the guarians are often a highly dynamic race, the information provided for each
                is purely subjective and written from the perspective of the author of these notes.
                In reality, the guarians often adapt to those of who they are bound to and as such,
                one guarian may appear or behave completely differently from one person to the next,
                only keeping with them the very core of who they are.
              </p>
            </div>
          )}
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
