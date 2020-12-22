import { faCircle, faCube, faSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { powerStrings } from "../../../../Strings";

interface IProps {}

export const Powers: React.FC<IProps> = ({}) => {
  return (
    <div>
      <p>{powerStrings.get()?.summary}</p>
      <h1>Material Shifting</h1>
      <p>{powerStrings.get()?.materialShifting}</p>
      <h1>Size Shifting</h1>
      <p>{powerStrings.get()?.sizeShifting}</p>
    </div>
  );
};

Powers.displayName = "Powers";
export default Powers;
