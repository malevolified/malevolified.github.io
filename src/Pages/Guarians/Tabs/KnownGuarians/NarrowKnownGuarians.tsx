import React from "react";
import { useHistory } from "react-router-dom";
import { SmartMounter } from "../../../../Components/SmartMounter";
import { GuarianCharacterReference } from "./GuarianCharacterReference";
import { GuarianLinks } from "./GuarianLinks";
import { GuarianInfo } from "./Guarians";
import { KnownGuarianBody } from "./KnownGuarianBody";

interface NarrowKnownGuariansProps {
  selected?: GuarianInfo;
  availableGuarians: GuarianInfo[];
}

export const NarrowKnownGuarians: React.FC<NarrowKnownGuariansProps> = ({
  selected,
  availableGuarians,
}) => {
  const { push } = useHistory();

  return (
    <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
      {!selected && (
        <>
          <KnownGuarianBody />
          <GuarianLinks guarians={availableGuarians} collapsed={false} />
        </>
      )}
      {selected && (
        <>
          <div className="go-back-button menu-clickable" onClick={() => push("/guarians/list")}>
            Back to Known Guarians
          </div>
          <GuarianCharacterReference guarian={selected} />
        </>
      )}
    </div>
  );
};
