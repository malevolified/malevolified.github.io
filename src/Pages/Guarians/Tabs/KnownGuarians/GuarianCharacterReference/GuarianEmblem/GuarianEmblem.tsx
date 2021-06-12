import React from "react";
import border from "./emblemBorder.png";
import styles from "./guarianEmblem.module.css";

interface GuarianEmblemProps {
  emblem: string;
}

export const GuarianEmblem: React.FC<GuarianEmblemProps> = ({ emblem }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.overlay}>
        <img src={border} />
      </div>
      <img src={emblem} style={{ margin: 20 }} />
    </div>
  );
};
