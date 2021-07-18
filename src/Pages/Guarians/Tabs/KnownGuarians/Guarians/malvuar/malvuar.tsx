import React from "react";
import { GuarianInfo } from "../guarians";
import { GuarianImagePack, GuarianMaterial } from "../guarianImagePack";
import emblem from "./images/sampleEmblem.png";
import listEmblem from "./images/sampleListEmblem.png";
import listIcon from "./images/sampleListIcon.png";
import ref from "./images/malvuarFluffy.png";
import inflatableRef from "./images/malvuarInflatable.png";

export const malvuar: GuarianInfo = {
  name: "Malvuar",
  notes: (
    <ul className="big-list">
      <li>Uncharacteristically obnoxious for a guarian</li>
      <li>Often shoves himself between you and whatever you're doing</li>
      <li>
        Will actively follow you around wherever you go
        <ul>
          <li>Even in public</li>
        </ul>
      </li>
      <li>Despite being completely visible, nobody seems to mind their presence except you</li>
    </ul>
  ),
  description: (
    <>
      <p>
        Out in the open, where everyone can see, you roam around, Malvuar following so closely that
        he's practically on top of you. You desperately try to convince onlookers that this bizarre,
        boisterous beast won't leave you alone, but no one seems to care and you can't figure out
        why. He's not invisible, everyone can see him loud and clear for what he really is, but no
        matter who you ask, everyone seems to think that this is just the way it's always been, the
        way it's meant to be.
      </p>
      <p>Something really does not feel right about this guarian.</p>
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
      {
        material: GuarianMaterial.Inflatable,
        ref: inflatableRef,
      },
    ],
    maxRefWidth: 960,
  },
};
