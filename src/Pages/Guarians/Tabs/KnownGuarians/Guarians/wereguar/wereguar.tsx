import React from "react";
import { GuarianInfo } from "../guarians";
import { GuarianImagePack, GuarianMaterial } from "../guarianImagePack";
import emblem from "./images/wereguarEmblem.png";
import listEmblem from "./images/wereguarListEmblem.png";
import listIcon from "./images/wereguarIcon.png";
import ref from "./images/floffy.png";

export const wereguar: GuarianInfo = {
  name: "Wereguar",
  notes: (
    <ul className="big-list">
      <li>PLACEHOLDER</li>
    </ul>
  ),
  description: (
    <>
      <p>PLACEHOLDER</p>
    </>
  ),
  images: {
    emblems: {
      full: emblem,
      list: listEmblem,
      icon: listIcon,
    },
    refs: [
      {
        material: GuarianMaterial.Fluffy,
        ref,
      },
    ],
    maxRefWidth: 803,
  },
};
