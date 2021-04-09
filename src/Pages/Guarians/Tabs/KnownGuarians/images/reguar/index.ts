import { GuarianImagePack, GuarianMaterial } from "../guarianImagePack";
import emblem from "./reguarEmblem.png";
import fluffyRef from "./reguarFluffyRef.png";
import inflatableRef from "./reguarInflatableRef.png";

const reguarPack: GuarianImagePack = {
  emblem,
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
};

export { reguarPack };
