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
        {guarian ? (
          <GuarianCharacterReference guarian={guarian} />
        ) : (
          <div>
            <h1>Known Guarians</h1>
            <p>
              Listed here are all of the known (or at least well documented) guarians. The actual
              amount of guarians out there is truly unknown and possibly ever changing, and this
              list may be extended as more are discovered.
            </p>
            <p>
              As the guarians are often a highly dynamic race, the information provided for each is
              purely subjective and written from the perspective of the author of these notes. In
              reality, the guarians often adapt to those of who they are bound to and as such, one
              guarian may appear or behave completely differently from one person to the next, only
              keeping with them the very core of who they are.
            </p>
          </div>
        )}
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
          <GuarianLinks guarians={availableGuarians} collapsed={false} />
        )}
      </NarrowScreen>
    </>
  );
};

KnownGuarians.displayName = "KnownGuarians";
export { KnownGuarians };
