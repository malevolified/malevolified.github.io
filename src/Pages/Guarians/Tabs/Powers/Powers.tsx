import { faCircle, faCube, faSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface IProps {}

export const Powers: React.FC<IProps> = ({}) => {
  return (
    <div>
      <FontAwesomeIcon icon={faSmile} size="2x" />
      <FontAwesomeIcon icon={faCircle} size="4x" />
    </div>
  );
};

Powers.displayName = "Powers";
export default Powers;
