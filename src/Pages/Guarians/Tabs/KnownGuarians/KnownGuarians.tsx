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

  function renderRef() {
    return (
      <div style={{ flex: 1, marginRight: 10 }}>
        {guarian ? (
          <GuarianCharacterReference guarian={guarian} />
        ) : (
          <div>Please select a guarian</div>
        )}
      </div>
    );
  }

  function renderLinks() {
    return (
      <div style={{ width: 300, overflowY: "auto" }}>
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
          {renderRef()}
          {renderLinks()}
        </div>
      </WideScreen>
      <NarrowScreen>{guarian ? renderRef() : renderLinks()}</NarrowScreen>
    </>
  );
};

KnownGuarians.displayName = "KnownGuarians";
export { KnownGuarians };
