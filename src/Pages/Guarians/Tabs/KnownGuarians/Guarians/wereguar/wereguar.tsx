import React from "react";
import { GuarianInfo } from "../guarians";
import { GuarianImagePack, GuarianMaterial } from "../guarianImagePack";
import emblem from "./images/wereguarEmblem.png";
import listEmblem from "./images/wereguarListEmblem.png";
import listIcon from "./images/wereguarIcon.png";
import ref from "./images/floffy.png";
import inflatable from "./images/inflatable.png";

export const wereguar: GuarianInfo = {
  name: "Wereguar",
  notes: (
    <ul className="big-list">
      <li>
        <b>Unbelievably</b> good perception for a guarian, suspiciously so
      </li>
      <li>Follows you from the rooftops, staying hidden to all except you</li>
      <li>
        His hand drawn expression has been there since you first met him
        <ul>
          <li>
            If you erase it, it randomly returns some time later by some unknown mechanism,
            sometimes months later, sometimes minutes
          </li>
        </ul>
      </li>
      <li>Exuberant and energetic, despite his large size which he refuses to shrink down from</li>
    </ul>
  ),
  description: (
    <>
      <p>
        You look out your window and see him there again, over on the rooftop across the street. He
        hasn't moved from his spot in several hours, and even though his face is painted on, you
        can't shake the feeling that he's still staring directly at you. Regardless, you know he
        means well so you don't let it bother you too much
      </p>
      <p>
        You turn back to the window to find that he's suddenly gone. Before you have time to even
        react, you suddenly see Wereguar's face squishing right up against the very window you look
        at. Having taken on a softer material in the moment you looked away, you open the window
        for, through which he lurches violently, barely able to fit. Having finally made it inside
        in one piece, he crouches down over you, far too large to even consider standing.
      </p>
      <p>His expression may never change, but you can tell he seems really happy to see you!</p>
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
        ref: inflatable,
      },
    ],
    maxRefWidth: 803,
  },
};
