import { GuarianImagePack, GuarianMaterial } from "../guarianImagePack";
import emblem from "./sampleEmblem.png";
import listEmblem from "./sampleListEmblem.png";
import listIcon from "./sampleListIcon.png";
import ref from "./lavuarFluffyRef.png";

const lavuarPack: GuarianImagePack = {
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
  ],
  maxRefWidth: 960,
};

export { lavuarPack };
