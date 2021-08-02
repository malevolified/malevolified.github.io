import React from "react";
import { GuarianTooltip } from "../../../../Components/GuarianTooltip";
import { TipIcon } from "../../../../Components/GuarianTooltip/Images";
import { Companionship } from "./Companionship";
import styles from "./lore.module.css";
import { Spirituality } from "./Spirituality";

const Gt = GuarianTooltip;

interface IProps {}

const Lore: React.FC<IProps> = ({}) => {
  return (
    <>
      <Spirituality />
      <div style={{ paddingBottom: 50 }}></div>
      <Companionship />
      <div style={{ paddingBottom: 50 }}></div>
      <h1>That Which We Do Not Know</h1>
      <p>
        What makes the guarians truly fascinating is not just everything that's been documented
        about them, but rather, everything that is not documented about them as well. For everything
        we know about them, various counter examples of nearly every trait have been witnessed as
        well. Some guarians seem to be capable of a great many things that we do not fully
        understand, possessing intelligence far beyond what a guarian should, appearing in plain
        site instead of only when you're alone, powers and abilities that we've never even seen. The
        information given here is not exhaustive, and likely never will be. As long as there are
        more guarians are encountered, we will never know all there is to know, and no one trait
        will ever be guaranteed.
      </p>
    </>
  );
};

Lore.displayName = "Lore";
export { Lore };
