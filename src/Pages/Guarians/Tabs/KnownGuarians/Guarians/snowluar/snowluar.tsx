import React from "react";
import { GuarianInfo } from "../guarians";
import { GuarianMaterial } from "../guarianImagePack";
import emblem from "./images/snowluarEmblem.png";
import listEmblem from "./images/snowluarListEmblem.png";
import listIcon from "./images/snowluarIcon.png";
import inflatable from "./images/snowluarSqueak.png";

export const snowluar: GuarianInfo = {
  name: "Snowluar",
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
        material: GuarianMaterial.Inflatable,
        ref: inflatable,
      },
    ],
    maxRefWidth: 900,
  },
};
