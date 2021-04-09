import { GuarianImagePack, GuarianMaterial } from "../guarianImagePack";
import emblem from "./sampleEmblem.png";
import ref from "./sampleRef.png";

const placeholderPack: GuarianImagePack = {
  emblem,
  refs: [
    {
      material: GuarianMaterial.Fluffy,
      ref,
    },
  ],
};

export { placeholderPack };
