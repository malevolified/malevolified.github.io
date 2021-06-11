import React from "react";
import { GuarianImagePack } from "./guarianImagePack";
import { lavuar } from "./lavuar";
import { malvuar } from "./malvuar";
import { owluar } from "./owluar";
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

export const COLLAPSE_LINKS_ROOM = 720;
export const HORIZONTAL_REF_ROOM = 480;

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
  {
    name: "Panthuar",
    notes: (
      <ul className="big-list">
        <li>PLACEHOLDER</li>
      </ul>
    ),
    description: <p>PLACEHOLDER</p>,
    images: placeholderPack,
  },
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
