import React from "react";
import { GuarianInfo } from "../guarians";
import { GuarianMaterial } from "../guarianImagePack";
import emblem from "./images/reguarEmblem.png";
import listEmblem from "./images/listEmblem.png";
import listIcon from "./images/listIcon.png";
import fluffyRef from "./images/reguarFluffyRef.png";
import inflatableRef from "./images/reguarInflatableRef.png";

export const reguar: GuarianInfo = {
  name: "Reguar",
  notes: (
    <ul className="big-list">
      <li>The average of every guarian combined into one entity</li>
      <li>Extremely lazy but happy to nap with you whenever</li>
      <li>
        They may not be as exciting as the other guarians, but they still care for you just as much
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
    </ul>
  ),
  description: (
    <>
      <p>
        After hearing some sort of clumsy stumbling noises in the next room, you hear a sudden thud
        against the wall right next to the door. After a brief moment, you see Reguar poke his head
        around the corner (completely unharmed). He steps through the doorway (just barely small
        enough to fit through it) and lumbers towards you in no particular rush at all. Only a few
        steps away from you, he thunderously flops onto his side with enough force that you feel
        everything in the room bounce a bit when he lands.
      </p>
      <p>
        The room sits in silence for a second. Eventually, Reguar lifts his head somewhat curiously,
        awaiting to either be hugged, petted, laid upon or any combination of the three.
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
    ],
    maxRefWidth: 900,
  },
};
