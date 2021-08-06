import React from "react";
import ReactCompareImage from "react-compare-image";
import { useScreenWidthGreaterThan } from "../../../../Hooks/useScreenWidthGreaterThan";
import fluffy from "./fluffyMe.png";
import squeaky from "./squeakyMe.png";
import styles from "./About.module.css";

interface AboutProps {}

export const About: React.FC<AboutProps> = ({}) => {
  const isHorizontal = useScreenWidthGreaterThan(800);

  return (
    <div style={{ display: "flex", flexDirection: isHorizontal ? "row" : "column" }}>
      <div style={{ maxWidth: 794, width: isHorizontal ? "calc(25% + 220px)" : "100%" }}>
        <ReactCompareImage leftImage={fluffy} rightImage={squeaky} />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ textAlign: "center" }}>
          <h1
            className={styles.snugHeader}
            style={isHorizontal ? { fontSize: "calc(4vw + 5px)" } : undefined}
          >
            Malevolified
          </h1>
          <h4
            className={styles.snugHeader}
            style={isHorizontal ? { fontSize: "calc(1.6vw + 4px)" } : undefined}
          >
            Not actually a guarian
          </h4>
          <h6
            className={styles.snugHeader}
            style={isHorizontal ? { fontSize: "calc(0.9vw + 3px)" } : undefined}
          >
            (Though they very well could be)
          </h6>
        </div>
      </div>
    </div>
  );
};
