import React from "react";
import ReactCompareImage from "react-compare-image";
import { useScreenWidthGreaterThan } from "../../../../Hooks/useScreenWidthGreaterThan";
import fluffy from "./fluffyMe.png";
import squeaky from "./squeakyMe.png";
import styles from "./About.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

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
            style={
              isHorizontal
                ? { fontSize: "calc(4vw + 5px)", lineHeight: "calc(4vw + 5px)" }
                : undefined
            }
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
            (Though he/they very well could be)
          </h6>
        </div>
        <p style={{ fontSize: 21 }}>
          <FontAwesomeIcon
            icon={faQuoteLeft}
            style={{ padding: "0px 15px", verticalAlign: "text-bottom" }}
            size="lg"
          />
          Hello and welcome to <b>The Guarian Reference</b>! I am Malevolified or Malvo or Mal or
          whatever really, and I am the creator and artist behind the guarians as well as the coder
          of this very site! Admittedly, I'm not the best at writing descriptions for myself as I
          like to let my creations speak louder than words (which is part of why this site is here
          in the first place), but as you can probably tell, I have a profound appreciation for
          friendly monsters and odd textures. I'll admit that, as you've probably gathered, I am
          very biased towards rubber/inflatable forms for more reasons than I can fit in this
          ideally short description of myself, but regardless of their make, I've always loved the
          otherworldly, and I especially love the otherworldly that loves you back.
        </p>
        <p style={{ fontSize: 21 }}>
          Regardless of what brought you here, I'm very flattered that you've ventured forth and
          explored my creations. Having designed them as an open species, you're free to interpret
          them or any of my creations as you will, and in the end, I sincerely hope that you get the
          same joy from my monsters as I do.
          <FontAwesomeIcon
            icon={faQuoteRight}
            style={{ padding: "0px 15px", verticalAlign: "text-top" }}
            size="lg"
          />
        </p>
      </div>
    </div>
  );
};
