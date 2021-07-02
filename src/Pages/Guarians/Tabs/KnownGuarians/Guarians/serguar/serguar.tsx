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
  description: (
    <>
      <p>
        On a stormy night, you hear a sound at the doorway and see that Serguar has made a subtle
        entrance, surprisingly silent given his size. As he approaches, you spot a rose in his mouth
        which he gently places before you. He's brought one every time he's visited so far.
      </p>
      <p>
        As you contemplate his gift, you ask him where he's even finding these roses at this time of
        year. He replies that a rose's origin matters not for it will always be willing to make the
        journey to someone's heart.
      </p>
      <p>Guarians aren't supposed to be able to reply.</p>
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
        ref: fluffyRef,
      },
    ],
    maxRefWidth: 856,
  },
};
