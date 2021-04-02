import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { GuarianInfoLink } from "./GuarianInfoLink";
import { guarians } from "./guarians";
import { SpecificGuarianInfo } from "./SpecificGuarianInfo";

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

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        {guarian ? <SpecificGuarianInfo guarian={guarian} /> : <div>Please select a guarian</div>}
      </div>
      <div style={{ width: 300, overflowY: "auto" }}>
        {availableGuarians.map((g) => (
          <GuarianInfoLink guarian={g} />
        ))}
      </div>
    </div>
  );
};

KnownGuarians.displayName = "KnownGuarians";
export { KnownGuarians };
