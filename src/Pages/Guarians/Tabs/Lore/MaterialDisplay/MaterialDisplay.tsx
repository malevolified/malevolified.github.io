import React, { useEffect, useState } from "react";
import first from "./wereguarMaterials1.png";
import second from "./wereguarMaterials2.png";

interface MaterialDisplayProps {}

//THIS BREAKS IF YOU ONLY USE TWO IMAGES, you need to use three otherwise
// the initial margin offset won't get set properly
const images = [first, second, first, second];

const IMAGE_WIDTH = 527;

export const MaterialDisplay: React.FC<MaterialDisplayProps> = ({}) => {
  const [target, setTarget] = useState(0);

  useEffect(() => {
    setTarget(getNext());
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setTarget(getNext()), 5000);

    return () => clearTimeout(timer);
  }, [target]);

  function getNext() {
    return target + 1 >= images.length ? 0 : target + 1;
  }

  function isActive(index: number) {
    return index == target || index == getNext();
  }

  function getCropWidth(index: number) {
    switch (index) {
      case target:
        return 0;
      case getNext():
        return IMAGE_WIDTH;
      default:
        return 0;
    }
  }

  function getSecondaryOffset(index: number) {
    switch (index) {
      case target:
        return 0;
      case getNext():
        return 0;
      default:
        return -IMAGE_WIDTH;
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: getNext() == 0 ? "row-reverse" : "row" }}>
      {images.map((i, index) => (
        <div
          key={i}
          style={{
            transition: isActive(index) ? "5s linear" : undefined,
            maxHeight: 760,
            overflow: "hidden",
            width: getCropWidth(index),
          }}
        >
          <img
            src={i}
            style={{
              transition: isActive(index) ? "5s linear" : undefined,
              marginLeft: getSecondaryOffset(index),
            }}
          />
        </div>
      ))}
    </div>
  );
};
