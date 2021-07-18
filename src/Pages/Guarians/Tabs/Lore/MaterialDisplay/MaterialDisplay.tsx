import React, { useEffect, useState } from "react";
import rubber from "./wereguarMaterialsRubber.png";
import plush from "./wereguarMaterialsPlush.png";
import fluffy from "./wereguarMaterialsFluffy.png";

interface MaterialDisplayProps {}

//THIS BREAKS IF YOU ONLY USE TWO IMAGES, you need to use three otherwise
// the initial margin offset won't get set properly
const images = [rubber, fluffy, plush];

const IMAGE_WIDTH = 518;

export const MaterialDisplay: React.FC<MaterialDisplayProps> = ({}) => {
  const [target, setTarget] = useState(0);

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
    <div
      style={{
        display: "flex",
        flexDirection: getNext() == 0 ? "row-reverse" : "row",
        width: IMAGE_WIDTH,
      }}
    >
      {images.map((i, index) => (
        <div
          key={index}
          style={{
            transition: "1s",
            maxHeight: 800,
            overflow: "hidden",
            width: getCropWidth(index),
          }}
        >
          <img
            src={i}
            style={{
              transition: "1s",
              marginLeft: getSecondaryOffset(index),
            }}
          />
        </div>
      ))}
    </div>
  );
};
