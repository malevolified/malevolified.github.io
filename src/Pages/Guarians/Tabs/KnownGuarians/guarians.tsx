import React from "react";
import reguarEmblem from "./images/reguar/reguarEmblem.png";

export interface GuarianInfo {
  name: string;
  description?: React.ReactNode;
  emblem?: string;
  secret?: boolean;
}

const guarians: GuarianInfo[] = [
  {
    name: "Reguar",
    description: (
      <p>
        While they may not be as enigmatic and unique as the other guarians, they still love you all
        the same
      </p>
    ),
    emblem: reguarEmblem,
  },
  { name: "Lavuar" },
  { name: "Malvuar" },
  { name: "Owluar" },
  { name: "Serguar" },
  { name: "Wereguar" },
  { name: "Septuar", secret: true },
  { name: "Enduar", secret: true },
];

export { guarians };
