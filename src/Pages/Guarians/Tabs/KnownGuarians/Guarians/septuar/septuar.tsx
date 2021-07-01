import React from "react";
import { GuarianInfo } from "../guarians";
import { GuarianMaterial } from "../guarianImagePack";
import emblem from "./images/sampleEmblem.png";
import listEmblem from "./images/sampleListEmblem.png";
import listIcon from "./images/sampleListIcon.png";
import fluffyRef from "./images/sampleRef.png";

export const septuar: GuarianInfo = {
  name: "Septuar",
  notes: (
    <ul className="big-list">
      <li>PLACEHOLDER</li>
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
        curiously tilts their head at you
      </p>
      <p>Nope, definitely a guarian.</p>
    </>
  ),
  secret: true,
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
    maxRefWidth: 985,
  },
};
