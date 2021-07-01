import React from "react";
import { enduar } from "./enduar";
import { GuarianImagePack } from "./guarianImagePack";
import { lavuar } from "./lavuar";
import { malvuar } from "./malvuar";
import { owluar } from "./owluar";
import { panthuar } from "./panthuar";
import { placeholderPack } from "./placeholder";
import { reguar } from "./reguar";
import { serguar } from "./serguar";
import { wereguar } from "./wereguar";

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
  wereguar,
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
  enduar,
];

export { guarians };
