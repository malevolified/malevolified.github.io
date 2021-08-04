import React from "react";
import { GuarianInfo } from "../guarians";
import { GuarianImagePack, GuarianMaterial } from "../guarianImagePack";
import emblem from "./images/owluarEmblem.png";
import listEmblem from "./images/owluarListEmblem.png";
import listIcon from "./images/owluarIcon.png";
import ref from "./images/featherRef.png";
import latex from "./images/owluarLatex.png";

export const owluar: GuarianInfo = {
  name: "Owluar",
  notes: (
    <ul className="big-list">
      <li>Extremely quiet and calm, very deliberate with their movements</li>
      <li>
        Even though they don't really understand you, they will happily listen to whatever's on your
        mind
      </li>
      <li>Incredibly patient and surprisingly open to odd ideas</li>
      <li>
        Expresses affection by gently touching their forehead against yours, a gesture they're so
        uncharacteristically enthusiastic about that it actually it becomes rather difficult to
        escape
      </li>
      <li>Just likes being there with you, even if you aren't actively giving them attention</li>
    </ul>
  ),
  description: (
    <>
      <p>
        Hearing a rustle in the night, you awaken to the vague outline Owluar sitting in the corner
        of your room in total silence. You're not really sure how long they've been there for, or if
        it was their presence that had even woke you in the first place. Regardless, they remain
        perfectly still, completely unreadable.
      </p>
      <p>
        They do not react at all as you flick on the light, but as you climb out of bed, you see
        their head slowly track your movements. Taking slow, quiet steps in the night, you walk up
        to them and wrap them in a very gentle hug. After a moment, you feel their wings on your
        back like oversized blankets.
      </p>
      <p>The angle is a little awkward, but you feel like you can rest like this for a while</p>
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
        material: GuarianMaterial.Rubber,
        ref: latex,
      },
    ],
    maxRefWidth: 806,
  },
};
