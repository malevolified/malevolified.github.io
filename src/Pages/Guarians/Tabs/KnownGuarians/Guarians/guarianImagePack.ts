export enum GuarianMaterial {
  Fluffy,
  Latex,
  Inflatable,
  Rubber,
  Playdough,
  Balloon,
  SqueakyMitosis,
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
