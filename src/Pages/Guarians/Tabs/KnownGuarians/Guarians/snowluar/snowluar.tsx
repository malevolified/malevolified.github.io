import React from "react";
import { GuarianInfo } from "../guarians";
import { GuarianMaterial } from "../guarianImagePack";
import emblem from "./images/snowluarEmblem.png";
import listEmblem from "./images/snowluarListEmblem.png";
import listIcon from "./images/snowluarIcon.png";
import inflatable from "./images/snowluarSqueak.png";
import latex from "./images/snowluarLatex.png";

export const snowluar: GuarianInfo = {
  name: "Snowluar",
  notes: (
    <ul className="big-list">
      <li>
        Rather than appearing when convenient, he appears at <b>complete random</b>, regardless of
        what you're doing, where you are or who you're even with
        <ul className="small-sublist">
          <li>
            Appears so suddenly that not even <i>he</i> seems to be sure how he got there
          </li>
          <li>No one else seems to notice him though??</li>
          <li>Hey, now that he's here though, he might as well hang out</li>
        </ul>
      </li>
      <li>Always huge, not by preference but seemingly in the very nature of their being</li>
      <li>Somewhat awkward and clumsy as a result, but happy to be there regardless</li>
    </ul>
  ),
  description: (
    <>
      <p>
        Having returned from a nice long walk, you remove your coat. You open the door to your
        closet, expecting to find a few loose coathangers, but instead find Snowluar, completely
        stogged in the closet so thoroughly that you wonder how he could even fit. Wrestling a wing
        free from behind him, he meekly waves at you.
      </p>
      <p>
        Given the size of his wings, it was actually rather difficult to get a good grip on him, but
        with one good tug, you finally managed to yank him free of the closet. He spills out with
        such force that he practically seemed to bring out half the closet with him. Taking a moment
        to put everything back in its spot, you turn to see him quaintly sitting in the corner of
        the room, his head very slightly smooshed against the ceiling.
      </p>
      <p>Did he get bigger the moment you looked away??</p>
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
        material: GuarianMaterial.Inflatable,
        ref: inflatable,
      },
      {
        material: GuarianMaterial.Latex,
        ref: latex,
      },
    ],
    maxRefWidth: 866,
  },
};
