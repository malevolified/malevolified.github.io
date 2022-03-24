import React from "react";
import { GuarianInfo } from "../guarians";
import { GuarianMaterial } from "../guarianImagePack";
import emblem from "./images/emblem.png";
import listEmblem from "./images/emblemSide.png";
import listIcon from "./images/icon.png";
import fluffyRef from "./images/fluffySeptuar.png";
import squeaky from "./images/septsqueak.png";

export const septuar: GuarianInfo = {
  name: "Septuar",
  notes: (
    <ul className="big-list">
      <li>Capable of so much more than you've ever seen from another guarian</li>
      <li>Just as they appear in our reality, you can appear in Septuar's reality as well</li>
      <li>Fur/material color actually adapts to their environment</li>
      <li>
        While capable of floating, they're perfectly happy to walk with you, possessing such grace
        and confidence that it leaves you wondering what they really are...
        <ul>
          <li>
            ...until you very quickly realize that they're actually just as goofy as any other
            guarian
          </li>
          <li>Gives very nice hugs though</li>
        </ul>
      </li>
    </ul>
  ),
  description: (
    <>
      <p>
        You find yourself standing atop a grassy hill, surrounded by mountains and dark, rainy
        skies; an unfamiliar land that's no where close to home. Standing in front of you a little
        ways away is Septuar, silhouetted by the dark horizon, but made visible by what looked like
        a subtle glow.
      </p>
      <p>
        Accompanied by only the sound of blowing wind and the rain on the hills, you find yourself
        wondering, how did you get here? Did they bring you here? Where even are we in the first
        place? Is this real? You feel such a powerful aura emanating from them. What are they even
        capable of? Are they really a guarian, or are they truly something much greater?
      </p>
      <p>
        After a long stretch of silence, Septuar suddenly flops directly onto the wet grass and
        curiously tilts their head at you.
      </p>
      <p>Well, they're definitely a guarian at least.</p>
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
        ref: squeaky,
      },
    ],
    maxRefWidth: 741,
  },
};
