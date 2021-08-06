import React from "react";
import ReactCompareImage from "react-compare-image";
import fluffy from "./fluffyMe.png";
import squeaky from "./squeakyMe.png";

interface AboutProps {}

export const About: React.FC<AboutProps> = ({}) => {
  return (
    <div style={{ maxWidth: 794 }}>
      <ReactCompareImage leftImage={fluffy} rightImage={squeaky} />
    </div>
  );
};
