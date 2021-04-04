import React from "react";
import { GuarianImagePack } from "./images/guarianImagePack";
import { placeholderPack } from "./images/placeholder";
import { reguarPack } from "./images/reguar";

export interface GuarianInfo {
  name: string;

  description: React.ReactNode;
  images: GuarianImagePack;
  secret?: boolean;
}

const guarians: GuarianInfo[] = [
  {
    name: "Reguar",
    description: (
      <>
        <p>
          A quiet, lumbering fellow, Reguar could be considered a guarian in its purest, most
          refined form; the average of pretty much any and every guarian combined into one single
          entity. While they may not be as remarkable or interesting as the other guarians, they
          still care for you just as much and will happily be at your side whenever you need them.
        </p>
        <p>
          Being visited by your guarian is often a memorable thing, every guarian having their own
          special presence, every meeting, a clandestine encounter. A visit from Reguar, however, is
          far more informal and is more akin to being greeted by an extremely large dog. With very
          little pomp and circumstance, lacking grace, they typically flop next to you and tilt
          their head your way, awaiting to be either petted or laid upon. Regardless of what you
          choose, they will not mind in the end. They merely wish to keep you company whenever they
          can; a quiet companion to press against
        </p>
      </>
    ),
    images: reguarPack,
  },
  { name: "Lavuar", description: <p>PLACEHOLDER</p>, images: placeholderPack },
  { name: "Malvuar", description: <p>PLACEHOLDER</p>, images: placeholderPack },
  { name: "Owluar", description: <p>PLACEHOLDER</p>, images: placeholderPack },
  { name: "Serguar", description: <p>PLACEHOLDER</p>, images: placeholderPack },
  { name: "Wereguar", description: <p>PLACEHOLDER</p>, images: placeholderPack },
  { name: "Panthuar", description: <p>PLACEHOLDER</p>, images: placeholderPack },
  { name: "Septuar", description: <p>PLACEHOLDER</p>, secret: true, images: placeholderPack },
  { name: "Enduar", description: <p>PLACEHOLDER</p>, secret: true, images: placeholderPack },
];

export { guarians };
