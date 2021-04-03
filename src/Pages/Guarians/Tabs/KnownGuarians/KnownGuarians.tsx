import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { GuarianReferenceLink } from "./GuarianReferenceLink";
import { guarians } from "./guarians";
import { GuarianCharacterReference } from "./GuarianCharacterReference";
import { NarrowScreen, WideScreen } from "../../../../Components/ScreenDetector";

interface IProps {}

const KnownGuarians: React.FC<IProps> = ({}) => {
  const { guarian: selectedGuarianName } = useParams<{ guarian?: string }>();

  const availableGuarians = guarians.filter((g) => !g.secret);

  const guarian = availableGuarians.find(
    (g) => g.name.toLowerCase() == selectedGuarianName?.toLowerCase()
  );

  if (selectedGuarianName != null && guarian == null) {
    return <Redirect to="/guarians/list" />;
  }

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

  function renderLinks() {
    return (
      <div className="character-ref" style={{ width: 300, overflowY: "auto" }}>
        {availableGuarians.map((g) => (
          <GuarianReferenceLink guarian={g} />
        ))}
      </div>
    );
  }

  return (
    <>
      <WideScreen>
        <div style={{ display: "flex" }}>
          {renderRef(true)}
          {renderLinks()}
        </div>
      </WideScreen>
      <NarrowScreen>{guarian ? renderRef(false) : renderLinks()}</NarrowScreen>
    </>
  );
};

KnownGuarians.displayName = "KnownGuarians";
export { KnownGuarians };
