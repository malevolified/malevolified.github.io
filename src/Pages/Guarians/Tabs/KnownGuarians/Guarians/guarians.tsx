import React from "react";
import { GuarianImagePack } from "./guarianImagePack";
import { lavuar } from "./lavuar";
import { malvuar } from "./malvuar";
import { owluar } from "./owluar";
import { panthuar } from "./panthuar";
import { placeholderPack } from "./placeholder";
import { reguar } from "./reguar";
import { serguar } from "./serguar";

export interface GuarianInfo {
  name: string;

  notes: React.ReactNode;
  description: React.ReactNode;

  images: GuarianImagePack;

  secret?: boolean;
}

const guarians: GuarianInfo[] = [
  reguar,
  lavuar,
  malvuar,
  owluar,
  serguar,
  {
    name: "Wereguar",
    notes: (
      <ul className="big-list">
        <li>PLACEHOLDER</li>
      </ul>
    ),
    description: <p>PLACEHOLDER</p>,
    images: placeholderPack,
  },
  panthuar,
  {
    name: "Septuar",
    notes: (
      <ul className="big-list">
        <li>PLACEHOLDER</li>
      </ul>
    ),
    description: <p>PLACEHOLDER</p>,
    secret: true,
    images: placeholderPack,
  },
  {
    name: "Enduar",
    notes: (
      <ul className="big-list">
        <li>PLACEHOLDER</li>
      </ul>
    ),
    description: <p>PLACEHOLDER</p>,
    secret: true,
    images: placeholderPack,
  },
];

export { guarians };
