import React, { useRef, useState } from "react";
import { TipIcon, tooltipMap } from "./Images";
import styles from "./GuarianTooltip.module.css";
import { GuarianImage, GuarianTooltipProps } from "./GuarianTooltip";

export const GuarianHoverTooltip: React.FC<GuarianTooltipProps> = ({
  images,
  position,
  disabled,
  anchor = "mouse",
  offset,
  children,
  wrapperStyle,
}) => {
  // TODO make it so anchored ref positioning is only calculated once instead on OnMouseMove.
  // TODO maybe some useMemo or other stuff to prevent children re-rendering if we see performance issues.

  const actualOffset = offset ?? 10;

  const tooltipRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState(false);

  const [coords, setCoords] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  function getClampedOffset() {
    const offset = getOffset();

    offset.left = Math.max(offset.left as number, 0);
    offset.left = Math.min(
      offset.left as number,
      window.innerWidth - (tooltipRef.current?.offsetWidth ?? 0)
    );

    return offset;
  }

  function getOffset() {
    if (anchor == "mouse") {
      switch (position) {
        case "top":
        case undefined:
          return getMouseTopPos();
        case "left":
          return getMouseLeftPos();
        case "right":
          return getMouseRightPos();
        case "bottom":
          return getMouseBottomPos();
      }
    } else {
      switch (position) {
        case "top":
        case undefined:
          return getElementTopPos();
        case "left":
          return getElementLeftPos();
        case "right":
          return getElementRightPos();
        case "bottom":
          return getElementBottomPos();
      }
    }
  }

  /*~*~*~*/

  function getMouseTopPos(): React.CSSProperties {
    return {
      left: coords.x - (tooltipRef.current?.offsetWidth ?? 0) / 2,
      top: coords.y - (tooltipRef.current?.offsetHeight ?? 0) - actualOffset,
    };
  }

  function getMouseLeftPos(): React.CSSProperties {
    return {
      left: coords.x - (tooltipRef.current?.offsetWidth ?? 0) - actualOffset,
      top: coords.y - (tooltipRef.current?.offsetHeight ?? 0) / 2,
    };
  }

  function getMouseRightPos(): React.CSSProperties {
    return {
      left: coords.x + actualOffset,
      top: coords.y - (tooltipRef.current?.offsetHeight ?? 0) / 2,
    };
  }

  function getMouseBottomPos(): React.CSSProperties {
    return {
      left: coords.x - (tooltipRef.current?.offsetWidth ?? 0) / 2,
      top: coords.y + actualOffset,
    };
  }

  /*~*~*~*/

  function getElementTopPos(): React.CSSProperties {
    if (contentRef.current == null) {
      return {};
    }

    var rect = contentRef.current.getBoundingClientRect();

    return {
      left: rect.left + rect.width / 2 - (tooltipRef.current?.offsetWidth ?? 0) / 2,
      top: rect.top - (tooltipRef.current?.offsetHeight ?? 0) - actualOffset,
    };
  }

  function getElementLeftPos(): React.CSSProperties {
    if (contentRef.current == null) {
      return {};
    }

    var rect = contentRef.current.getBoundingClientRect();

    return {
      left: rect.left - (tooltipRef.current?.offsetWidth ?? 0) - actualOffset,
      top: rect.top + rect.height / 2 - (tooltipRef.current?.offsetHeight ?? 0) / 2,
    };
  }

  function getElementRightPos(): React.CSSProperties {
    if (contentRef.current == null) {
      return {};
    }

    var rect = contentRef.current.getBoundingClientRect();

    return {
      left: rect.left + rect.width + actualOffset,
      top: rect.top + rect.height / 2 - (tooltipRef.current?.offsetHeight ?? 0) / 2,
    };
  }

  function getElementBottomPos(): React.CSSProperties {
    if (contentRef.current == null) {
      return {};
    }

    var rect = contentRef.current.getBoundingClientRect();

    return {
      left: rect.left + rect.width / 2 - (tooltipRef.current?.offsetWidth ?? 0) / 2,
      top: rect.top + rect.height + actualOffset,
    };
  }

  function renderImages(images: GuarianImage[]) {
    if (images.length <= 3) {
      return <div style={{ display: "flex" }}>{images.map((i) => renderImage(i))}</div>;
    } else if (images.length == 4) {
      return (
        <div>
          <div style={{ display: "flex", borderBottom: "2px solid black" }}>
            {renderImage(images[0])}
            {renderImage(images[1])}
          </div>
          <div style={{ display: "flex" }}>
            {renderImage(images[2])}
            {renderImage(images[3])}
          </div>
        </div>
      );
    } else {
      <div>
        <div style={{ display: "flex", borderBottom: "2px solid black" }}>
          {renderImage(images[0])}
          {renderImage(images[1])}
          {renderImage(images[3])}
        </div>
        <div style={{ display: "flex" }}>{images.slice(3).map(renderImage)}</div>
      </div>;
    }
  }

  function renderImage(image: GuarianImage) {
    return (
      <div>
        <img
          key={image}
          src={typeof image == "string" ? image : tooltipMap[image]}
          style={{ display: "block" }}
        />
      </div>
    );
  }

  return (
    <>
      <span
        ref={contentRef}
        className={styles.text}
        onMouseMove={(e) => {
          setCoords({ x: e.clientX, y: e.clientY });
        }}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        style={{ ...wrapperStyle }}
      >
        {children}
      </span>
      <div
        ref={tooltipRef}
        className={styles.tooltip}
        style={{ ...getClampedOffset(), visibility: visible && !disabled ? "visible" : "hidden" }}
      >
        {Array.isArray(images) ? renderImages(images) : renderImage(images)}
      </div>
    </>
  );
};
