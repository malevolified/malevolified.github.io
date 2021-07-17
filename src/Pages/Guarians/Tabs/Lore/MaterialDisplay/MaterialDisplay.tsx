import React, { useEffect, useState } from "react";
import first from "./wereguarMaterials1.png";
import second from "./wereguarMaterials2.png";

interface MaterialDisplayProps {}

const images = [first, second];

const IMAGE_WIDTH = 527;

export const MaterialDisplay: React.FC<MaterialDisplayProps> = ({}) => {
  const [target, setTarget] = useState(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (offset < IMAGE_WIDTH) {
        setOffset(offset + 1);
      } else {
        setOffset(0);
        setTarget(getNext());
      }
    }, 20);

    return () => clearTimeout(timer);
  }, [offset, target]);

  function getNext() {
    return target + 1 >= images.length ? 0 : target + 1;
  }

  function getCropWidth(index: number) {
    switch (index) {
      case target:
        return IMAGE_WIDTH - offset;
      case getNext():
        return offset;
      default:
        return 0;
    }
  }

  function getSecondaryOffset(index: number) {
    return index == getNext() ? offset - IMAGE_WIDTH : 0;
  }

  return (
    <div style={{ display: "flex", flexDirection: getNext() == 0 ? "row-reverse" : "row" }}>
      {images.map((i, index) => (
        <div key={i} style={{ maxHeight: 760, overflow: "hidden", width: getCropWidth(index) }}>
          <img src={i} style={{ marginLeft: getSecondaryOffset(index) }} />
        </div>
      ))}
    </div>
  );
};
