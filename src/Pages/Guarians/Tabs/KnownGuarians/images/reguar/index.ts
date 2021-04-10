import { GuarianImagePack, GuarianMaterial } from "../guarianImagePack";
import emblem from "./reguarEmblem.png";
import listEmblem from "./listEmblem.png";
import listIcon from "./listIcon.png";
import fluffyRef from "./reguarFluffyRef.png";
import inflatableRef from "./reguarInflatableRef.png";

const reguarPack: GuarianImagePack = {
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
};

export { reguarPack };
