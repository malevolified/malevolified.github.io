import React, { useEffect, useState } from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { GuarianReferenceLink } from "./GuarianLinks.tsx/GuarianReferenceLink";
import { COLLAPSE_LINKS_ROOM, guarians } from "./guarians";
import { NarrowScreen, WideScreen } from "../../../../Components/ScreenDetector";
import { useLocalStorage } from "../../../../Hooks/useLocalStorage";
import { SHOW_SECRET_GUARIANS } from "../FAQ/FAQ";
import { GuarianCharacterReference } from "./GuarianCharacterReference";
import { GuarianLinks } from "./GuarianLinks.tsx";
import "./knownGuarians.css";
import { useScreenWidthGreaterThan } from "../../../../Hooks/useScreenWidthGreaterThan";
import { useResizeDetector } from "react-resize-detector";
import { WideKnownGuarians } from "./WideKnownGuarians";
import { KnownGuarianBody } from "./KnownGuarianBody";

interface IProps {}

const KnownGuarians: React.FC<IProps> = ({}) => {
  const [showSecret] = useLocalStorage(SHOW_SECRET_GUARIANS, false);

  const { guarian: selectedGuarianName } = useParams<{ guarian?: string }>();
  const availableGuarians = guarians.filter((g) => !g.secret || showSecret);
  const guarian = availableGuarians.find(
    (g) => g.name.toLowerCase() == selectedGuarianName?.toLowerCase()
  );

  function renderRef(includeMargin: boolean) {
    return (
      <div style={{ flex: 1, marginRight: includeMargin ? 10 : 0 }}>
        {guarian ? <GuarianCharacterReference guarian={guarian} /> : <KnownGuarianBody />}
      </div>
    );
  }

  if (selectedGuarianName != null && guarian == null) {
    return <Redirect to="/guarians/list" />;
  }

  return (
    <>
      <WideScreen>
        <WideKnownGuarians guarians={availableGuarians} selected={guarian} />
      </WideScreen>
      <NarrowScreen>
        {guarian ? (
          renderRef(false)
        ) : (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <GuarianLinks guarians={availableGuarians} collapsed={false} />
          </div>
        )}
      </NarrowScreen>
    </>
  );
};

KnownGuarians.displayName = "KnownGuarians";
export { KnownGuarians };
