import React from "react";
import { GuarianInfo } from "../guarians";
import { GuarianImagePack, GuarianMaterial } from "../guarianImagePack";
import emblem from "./images/emblem.png";
import listEmblem from "./images/emblemSide.png";
import listIcon from "./images/icon.png";
import ref from "./images/enduarFluffy.png";

export const enduar: GuarianInfo = {
  name: "Enduar",
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
  secret: true,
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
    maxRefWidth: 852,
  },
};
