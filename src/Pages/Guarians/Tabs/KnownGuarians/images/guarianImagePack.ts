export enum GuarianMaterial {
  Fluffy,
  Rubber,
  Inflatable,
}

export interface GuarianMaterialRef {
  ref: string;
  material: GuarianMaterial;
}

export interface GuarianImagePack {
  emblem: string;
  refs: GuarianMaterialRef[];
}
