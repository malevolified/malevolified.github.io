import React from "react";
import { GuarianTooltip } from "../../../../Components/GuarianTooltip";
import { TipIcon } from "../../../../Components/GuarianTooltip/Images";
import styles from "./lore.module.css";

interface IProps {}

const Lore: React.FC<IProps> = ({}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tidbit}>
        <h3>Facial Features</h3>
        <p>
          One of the most notable and immediately apparent features of their guarians is their
          typical lack of facial features. While total facelessness can be found in some guarians,
          there are a few facial features that appear at varying frequencies. Ears are actually
          relatively common and can be found on{" "}
          <GuarianTooltip images={TipIcon.Reguar}>many guarians</GuarianTooltip>. Mouths are far
          rarer, but can still be found on rare occassion. Not a single guarian with eyes has been
          seen to date (not counting those who have had their eyes drawn on after the fact).
        </p>
      </div>
    </div>
  );
};

Lore.displayName = "Lore";
export { Lore };
