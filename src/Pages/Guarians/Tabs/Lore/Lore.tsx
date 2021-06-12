import React from "react";
import { GuarianTooltip } from "../../../../Components/GuarianTooltip";
import { TipIcon } from "../../../../Components/GuarianTooltip/Images";
import styles from "./lore.module.css";

const Gt = GuarianTooltip;

interface IProps {}

const Lore: React.FC<IProps> = ({}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tidbit}>
        <h3>Facial Features</h3>
        <p>
          One of the most notable and immediately apparent features of their guarians is their
          typical lack of facial features. While total facelessness is{" "}
          <Gt images={TipIcon.Owluar}>relatively common</Gt>, a few facial features still naturally
          occur. Ears are actually quite common and can be found on{" "}
          <Gt images={[TipIcon.Reguar, TipIcon.Lavuar]}>many guarians</Gt>. Mouths are far rarer,
          but can still be found on rare occassion. Not a single guarian with eyes has been seen to
          date (not counting those who have had their eyes{" "}
          <Gt images={TipIcon.Wereguar}>drawn on after the fact</Gt>).
        </p>
      </div>
      <div className={styles.tidbit}>
        <h3>Material Shifting</h3>
        <p>PLACEHOLDER</p>
      </div>
      <div className={styles.tidbit}>
        <h3>Size Shifting</h3>
        <p>PLACEHOLDER</p>
      </div>
    </div>
  );
};

Lore.displayName = "Lore";
export { Lore };
