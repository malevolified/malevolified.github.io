import React from "react";
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
          relatively common across multiple varieties of guarians. Mouths are far rarer, but can
          still be found on rare occassion. Not a single guarian with eyes has been seen to date
          (not counting those who have had their eyes drawn on after the fact).
        </p>
      </div>
    </div>
  );
};

Lore.displayName = "Lore";
export { Lore };
