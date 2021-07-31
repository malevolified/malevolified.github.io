import React from "react";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { SmartMounter } from "../../../../Components/SmartMounter";
import { useLocalStorage } from "../../../../Hooks/useLocalStorage";
import { SHOW_SECRET_GUARIANS } from "../FAQ/FAQ";
import { GuarianCharacterReference } from "./GuarianCharacterReference";
import { GuarianLinks } from "./GuarianLinks";
import { GuarianInfo, guarians } from "./Guarians";
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
      <div
        style={{
          display: selected ? "none" : "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <KnownGuarianBody />
        <GuarianLinks guarians={availableGuarians} collapsed={false} />
      </div>
      <div
        className="go-back-button menu-clickable"
        onClick={() => push("/guarians/list")}
        style={{ display: selected ? undefined : "none" }}
      >
        Back to Known Guarians
      </div>
      {availableGuarians.map((g) => (
        <SmartMounter key={g.name} visible={g.name == selected?.name}>
          <GuarianCharacterReference guarian={g} />
        </SmartMounter>
      ))}
    </div>
  );
};
