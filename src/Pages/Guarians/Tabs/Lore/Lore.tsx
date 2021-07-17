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
      <Companionship />
    </>
  );
};

Lore.displayName = "Lore";
export { Lore };
