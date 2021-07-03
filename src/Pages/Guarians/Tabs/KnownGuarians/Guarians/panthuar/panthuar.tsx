import React from "react";
import { GuarianMaterial } from "../guarianImagePack";
import { GuarianInfo } from "../guarians";
import emblem from "./images/sampleEmblem.png";
import listEmblem from "./images/sampleListEmblem.png";
import listIcon from "./images/sampleListIcon.png";
import matteRef from "./images/panthuarMatte.png";

export const panthuar: GuarianInfo = {
  name: "Panthuar",
  notes: (
    <ul className="big-list">
      <li>A silent, rather contemplative guarian</li>
      <li>Loves to be drawn upon and would be honored to be your night sky canvas</li>
      <li>
        Seems <strong>really</strong> liberated by his size shifting abilities, taking it to
        literally enormous lengths when outdoors
        <ul>
          <li>Even in broad daylight</li>
          <li>Can no one else see him?</li>
        </ul>
      </li>
      <li>Will happily adopt a smaller size when paying you a visit indoors </li>
    </ul>
  ),
  description: (
    <>
      <p>
        On your way home, you look to the rooftops and see him again. Panthuar always seemed to have
        a fascination with keeping watch over you, and though it felt odd it first, you gradually
        got used to what seems to be just genuine curiosity. Given his preferred state of being, you
        find yourself wondering how he remains so stealthy.
      </p>
      <p>He's literally as large as the buildings he's perched upon if not bigger!</p>
      <p>
        With surprising silence, he obviously has no issue keeping up as he simply slinks over top
        of the buildings, and despite his lack of eyes, you know very much that he's looking
        directly at you. If anything however, you get an odd sense of comfort seeing his massive
        silhouette eclipsing the sky itself.
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
        material: GuarianMaterial.Matte,
        ref: matteRef,
      },
    ],
    maxRefWidth: 716,
  },
};
