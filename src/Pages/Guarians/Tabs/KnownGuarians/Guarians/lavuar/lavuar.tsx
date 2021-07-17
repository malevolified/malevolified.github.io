import React from "react";
import { GuarianInfo } from "../guarians";
import { GuarianImagePack, GuarianMaterial } from "../guarianImagePack";
import emblem from "./images/sampleEmblem.png";
import listEmblem from "./images/sampleListEmblem.png";
import listIcon from "./images/sampleListIcon.png";
import ref from "./images/lavuarFluffyRef.png";
import squishyRef from "./images/lavuarSquish.png";

export const lavuar: GuarianInfo = {
  name: "Lavuar",
  notes: (
    <ul className="big-list">
      <li>Bouncy and energetic</li>
      <li>
        Possesses really high perception
        <ul>
          <li>So high that she can actually be safely ridden without needing guidance!</li>
        </ul>
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
