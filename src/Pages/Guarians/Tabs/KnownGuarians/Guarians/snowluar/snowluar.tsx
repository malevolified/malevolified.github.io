import React from "react";
import { GuarianInfo } from "../guarians";
import { GuarianMaterial } from "../guarianImagePack";
import emblem from "./images/reguarEmblem.png";
import listEmblem from "./images/listEmblem.png";
import listIcon from "./images/listIcon.png";
import fluffyRef from "./images/reguarFluffyRef.png";
import inflatableRef from "./images/reguarInflatableRef.png";
import balloon from "./images/reguarBalloon.png";

export const snowluar: GuarianInfo = {
  name: "Reguar",
  notes: (
    <ul className="big-list">
      <li>Possibly the most average guarian you've ever encountered</li>
      <li>
        So lazy that they'll usually just flop next to you
        <ul>
          <li>The kind of guarian who shoves their face against you if you stop petting them</li>
          <li>They'll still follow you around though if you move</li>
        </ul>
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
      <li>
        Despite not being very actively affectionate, they still care for you as much as any other
        guarian, and would love if you decided to nap with them
      </li>
    </ul>
  ),
  description: (
    <>
      <p>
        Upon hearing a gentle thud from the next room, you look to eventually see Reguar poke his
        head around the corner. Like an enormous lazy dog, he lumbers through door in no particular
        rush, so large that he barely fits. Only few steps away from you, he thunderously flops onto
        the floor in front of you with enough force to make the room jump a bit.
      </p>
      <p>
        The room sits in silence for a second until finally, Reguar lifts his head towards you,
        tilting it a bit. Despite lacking a face, it's very obvious that he's waiting for you to
        give him <i>some</i> form of attention, and given he's about the same size as your bed, you
        have to admit he does look pretty comfy.
      </p>
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
        ref: inflatableRef,
      },
      {
        material: GuarianMaterial.Balloon,
        ref: balloon,
      },
    ],
    maxRefWidth: 900,
  },
};
