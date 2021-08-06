import React, { useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import { guarians } from "./Guarians";
import { NarrowScreen, WideScreen } from "../../../../Components/ScreenDetector";
import "./knownGuarians.css";
import { WideKnownGuarians } from "./WideKnownGuarians";
import { NarrowKnownGuarians } from "./NarrowKnownGuarians";
import { useSecret } from "../../Contexts/SecretContext";

interface IProps {}

const KnownGuarians: React.FC<IProps> = ({}) => {
  const { showSecret, setShowSecret } = useSecret();

  const { guarian: selectedGuarianName } = useParams<{ guarian?: string }>();
  const selected = guarians.find((g) => g.name.toLowerCase() == selectedGuarianName?.toLowerCase());

  useEffect(() => {
    if (selected?.secret && !showSecret) {
      setShowSecret(true);
    }
  }, [selected, showSecret]);

  const availableGuarians = guarians.filter((g) => !g.secret || showSecret);

  if (selectedGuarianName != null && selected == null) {
    return <Redirect to="/guarians/list" />;
  }

  return (
    <>
      <WideScreen>
        <WideKnownGuarians guarians={availableGuarians} selected={selected} />
      </WideScreen>
      <NarrowScreen>
        <NarrowKnownGuarians availableGuarians={availableGuarians} selected={selected} />
      </NarrowScreen>
    </>
  );
};

KnownGuarians.displayName = "KnownGuarians";
export { KnownGuarians };
