import React, { useState } from "react";
import { GuarianImage, GuarianTooltipProps } from "./GuarianTooltip";
import styles from "./GuarianClickTip.module.css";
import { tooltipMap } from "./Images";

export const GuarianClickTip: React.FC<GuarianTooltipProps> = ({
  images,
  position,
  disabled,
  anchor = "mouse",
  offset,
  children,
  wrapperStyle,
}) => {
  const [visible, setVisible] = useState(false);

  const maxHeight = Array.isArray(images) ? (100 / images.length - 1).toFixed(0) : "98";

  function renderImage(image: GuarianImage) {
    return (
      <div className={styles.imageWrapper} style={{ maxHeight: maxHeight + "vh" }}>
        <img
          key={image}
          src={typeof image == "string" ? image : tooltipMap[image]}
          className={styles.scaledImage}
          style={{ maxHeight: maxHeight + "vh" }}
        />
      </div>
    );
  }

  return (
    <>
      <span className={styles.text} onClick={() => setVisible(true)}>
        {children}
      </span>
      <div
        className={styles.overlay}
        style={{ display: visible ? "flex" : "none" }}
        onClick={() => setVisible(false)}
      >
        <div className={styles.wrapper}>
          {Array.isArray(images) ? images.map(renderImage) : renderImage(images)}
        </div>
      </div>
    </>
  );
};
