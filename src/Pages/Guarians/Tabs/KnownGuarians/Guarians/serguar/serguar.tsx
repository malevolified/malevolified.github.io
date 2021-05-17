import React from "react";
import { GuarianInfo } from "../guarians";
import { GuarianMaterial } from "../guarianImagePack";
import emblem from "./images/sampleEmblem.png";
import listEmblem from "./images/sampleListEmblem.png";
import listIcon from "./images/sampleListIcon.png";
import fluffyRef from "./images/fluffy.png";

export const serguar: GuarianInfo = {
  name: "Serguar",
  notes: (
    <ul className="big-list">
      <li>PLACEHOLDER</li>
    </ul>
  ),
  description: <p>PLACEHOLDER</p>,
  images: {
    emblems: {
      full: emblem,
      list: listEmblem,
      icon: listIcon,
    },
    refs: [
      {
        material: GuarianMaterial.Fluffy,
        ref: fluffyRef,
      },
    ],
    maxRefWidth: 857,
  },
};
