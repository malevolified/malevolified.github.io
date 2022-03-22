import React from "react";
import { GuarianInfo } from "../guarians";
import { GuarianMaterial } from "../guarianImagePack";
import emblem from "./images/emblem.png";
import listEmblem from "./images/sideEmblem.png";
import listIcon from "./images/icon.png";
import fluffyRef from "./images/fluffySingle.png";
import squeakyRef from "./images/geminuarSqueak.png";
import squeakySplitRef from "./images/geminuarSqueakySplit.png";

export const geminuar: GuarianInfo = {
  name: "Geminuar",
  notes: (
    <ul className="big-list">
      <li>
        <i>Incredibly</i> mischievous <small>...but surprisingly harmless?</small>
      </li>
      <li>
        Capable of splitting apart and recombining at will
        <ul>
          <li>
            Unlike other guarian abilities which occur instantaneously and out of site, they'll
            happily split and merge right in front of you; a rather unsettling thing to witness
          </li>
          <li>
            The process of splitting and merging is not totally consistent, causing their head and
            tail shape to morph ever so slightly each time they shift
          </li>
        </ul>
      </li>
      <li>
        A constant source of little evil laughs when split, and more ominous laughter when merged
      </li>
    </ul>
  ),
  description: (
    <>
      <p>
        You hear an foreboding but familiar laugh in the darkness. Just across the room, you could
        just barely make out the single silhouette of a very pleased Geminuar who laughed to
        themself as if you had fallen for their trap. Their laughter becoming more raucious, you
        could see their two mouths contorting against each other, and with a sudden lurch, their
        head suddenly split apart. With sudden, violent movements that were ill defined in the dimly
        lit room, Geminuar tore themself asunder, devious cackling filling the room until with one
        final motion, they had finally become fully separate.
      </p>
      <p>
        Out of breath but still laughing to themself, they rose to their feet and crept towards you.
        As you stood their motionless, the guarian's two halves towered over you, finally able to
        carry out what they had been planning all along.
      </p>
      <p>A single kiss. Right on your forehead. Followed by another one from the other half.</p>
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
      {
        material: GuarianMaterial.Inflatable,
        ref: squeakyRef,
      },
      {
        material: GuarianMaterial.SqueakyMitosis,
        ref: squeakySplitRef,
      },
    ],
    maxRefWidth: 900,
  },
};
