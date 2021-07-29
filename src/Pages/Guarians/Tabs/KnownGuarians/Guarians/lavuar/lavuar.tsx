import React from "react";
import { GuarianInfo } from "../guarians";
import { GuarianImagePack, GuarianMaterial } from "../guarianImagePack";
import emblem from "./images/emblem.png";
import listEmblem from "./images/sideEmblem.png";
import listIcon from "./images/icon.png";
import ref from "./images/lavuarFluffyRef.png";
import squishyRef from "./images/lavuarSquish.png";

export const lavuar: GuarianInfo = {
  name: "Lavuar",
  notes: (
    <ul className="big-list">
      <li>Bouncy and energetic</li>
      <li>
        Possesses such high perception and awareness for a guarian that she can actually be safely
        ridden
      </li>
      <li>
        <b>Very</b> clingy
      </li>
      <li>
        Appears so frequently that you can basically assume she's already there the moment she has
        the chance
        <ul>
          <li>If you didn't know any better, you'd think she'd never left</li>
        </ul>
      </li>
      <li>
        Perfectly happy to lay down with you in the grass, even if just for a really quick moment!
      </li>
    </ul>
  ),
  description: (
    <>
      <p>
        Aftering rousing from your slumber, you come to the realization that you fell asleep on
        Lavuar's back. Having guided you on her own, you have no idea how long you've been riding
        Lavuar for, how far she's taken you or where you even are right now.
      </p>
      <p>It seems really nice here though.</p>
      <p>
        You turn around to find Lavuar nestled under a tree. From what you can tell, the two of you
        are completely alone here. You check the time. You still have a few hours yet. Perhaps
        you'll rest just a moment longer
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
        ref,
      },
      {
        material: GuarianMaterial.Inflatable,
        ref: squishyRef,
      },
    ],
    maxRefWidth: 944,
  },
};
