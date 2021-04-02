import React from "react";
import reguarEmblem from "./images/reguar/reguarEmblem.png";
import placeholderEmblem from "./images/placeholder/sampleEmblem.png";
import placeholderRef from "./images/placeholder/sampleRef.png";

export interface GuarianInfo {
  name: string;
  description: React.ReactNode;
  emblem: string;
  refImage: string;
  secret?: boolean;
}

const guarians: GuarianInfo[] = [
  {
    name: "Reguar",
    description: (
      <p>
        Perhaps the most unremarkable of the guarians, while they may not be as exciting as the
        others, they care for you all the same.
      </p>
    ),
    emblem: reguarEmblem,
    refImage: placeholderRef,
  },
  {
    name: "Lavuar",
    description: <p>PLACEHOLDER</p>,
    emblem: placeholderEmblem,
    refImage: placeholderRef,
  },
  {
    name: "Malvuar",
    description: <p>PLACEHOLDER</p>,
    emblem: placeholderEmblem,
    refImage: placeholderRef,
  },
  {
    name: "Owluar",
    description: <p>PLACEHOLDER</p>,
    emblem: placeholderEmblem,
    refImage: placeholderRef,
  },
  {
    name: "Serguar",
    description: <p>PLACEHOLDER</p>,
    emblem: placeholderEmblem,
    refImage: placeholderRef,
  },
  {
    name: "Wereguar",
    description: <p>PLACEHOLDER</p>,
    emblem: placeholderEmblem,
    refImage: placeholderRef,
  },
  {
    name: "Panthuar",
    description: <p>PLACEHOLDER</p>,
    emblem: placeholderEmblem,
    refImage: placeholderRef,
  },
  {
    name: "Septuar",
    description: <p>PLACEHOLDER</p>,
    secret: true,
    emblem: placeholderEmblem,
    refImage: placeholderRef,
  },
  {
    name: "Enduar",
    description: <p>PLACEHOLDER</p>,
    secret: true,
    emblem: placeholderEmblem,
    refImage: placeholderRef,
  },
];

export { guarians };
