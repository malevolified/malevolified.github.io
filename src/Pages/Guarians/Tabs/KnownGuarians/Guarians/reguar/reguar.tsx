import React from "react";
import { GuarianInfo } from "../guarians";
import { GuarianMaterial } from "../guarianImagePack";
import emblem from "./images/reguarEmblem.png";
import listEmblem from "./images/listEmblem.png";
import listIcon from "./images/listIcon.png";
import fluffyRef from "./images/reguarFluffyRef.png";
import inflatableRef from "./images/reguarInflatableRef.png";

export const reguar: GuarianInfo = {
  name: "Reguar",
  notes: (
    <ul className="big-list">
      <li>The average of every guarian combined into one entity</li>
      <li>Extremely lazy but happy to nap with you whenever</li>
      <li>
        They may not be as exciting as the other guarians, but they still care for you just as much
      </li>
      <li>
        Very low perception (even for a guarian)
        <ul>
          <li>
            You might hear the sound of them gently bumping into a wall every so often, but don't
            worry, they'll be alright
          </li>
        </ul>
      </li>
    </ul>
  ),
  description: (
    <p>
      Depending on who you meet, a visit from a guarian can be an ethereal experience. A visit from
      Reguar, on the other hand, is more akin to being visited by an especially oversized lazy dog.
      After a long day, they lumber up next to you and clumsily flop onto their side, waiting to
      either be petted or laid upon.
    </p>
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
      {
        material: GuarianMaterial.Inflatable,
        ref: inflatableRef,
      },
    ],
    maxRefWidth: 900,
  },
};
