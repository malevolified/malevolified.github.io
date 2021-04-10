export enum GuarianMaterial {
  Fluffy,
  Rubber,
  Inflatable,
}

export interface GuarianMaterialRef {
  ref: string;
  material: GuarianMaterial;
}

export interface GuarianEmblems {
  full: string;
  list: string;
  icon: string;
}

export interface GuarianImagePack {
  emblems: GuarianEmblems;
  refs: GuarianMaterialRef[];
  maxRefWidth: number;
}
