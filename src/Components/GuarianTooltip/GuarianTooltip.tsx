import React, { useRef, useState } from "react";
import { TipIcon, tooltipMap } from "./Images";
import styles from "./GuarianTooltip.module.css";
import { WideScreen } from "../ScreenDetector";
import { GuarianHoverTooltip } from "./GuarianHoverTooltip";
import { GuarianClickTip } from "./GuarianClickTip";

export type GuarianImage = string | TipIcon;

export interface GuarianTooltipProps {
  images: GuarianImage | GuarianImage[];
  disabled?: boolean;
  position?: "top" | "left" | "right" | "bottom";
  anchor?: "element" | "mouse";
  offset?: number;
  wrapperStyle?: React.CSSProperties;
}

export const GuarianTooltip: React.FC<GuarianTooltipProps> = (props) => {
  return (
    <>
      <span className="wide-screen">
        <GuarianHoverTooltip {...props} />
      </span>
      <span className="narrow-screen">
        <GuarianClickTip {...props} />
      </span>
    </>
  );
};
