import React from "react";
import { GuarianImagePack } from "./images/guarianImagePack";
import { placeholderPack } from "./images/placeholder";
import { reguarPack } from "./images/reguar";

export interface GuarianInfo {
  name: string;
  subTitle: string;

  notes: React.ReactNode;
  description: React.ReactNode;

  images: GuarianImagePack;
  secret?: boolean;
}

const guarians: GuarianInfo[] = [
  {
    name: "Reguar",
    subTitle: "The Beginning",
    notes: (
      <ul className="big-list">
        <li>PLACEHOLDER</li>
      </ul>
    ),
    description: (
      <p>
        Perhaps the most average guarian that could possibly be surmised, while Reguar may not be as
        exciting as the other guarians, they still care for you just as much.
      </p>
    ),
    images: reguarPack,
  },
  {
    name: "Lavuar",
    subTitle: "PLACEHOLDER",
    notes: (
      <ul className="big-list">
        <li>Bouncy and energetic</li>
        <li>
          Possesses such high perception for a guarian that she can be safely ridden without
          guidance
        </li>
      </ul>
    ),
    description: (
      <p>
        Given their typical lack of perception, the guarians are often masters of the silent and
        subtle hello. Lavuar, on the other hand, has such confindence in her movement that she's one
        of the only guarians you'll find practically bouncing circles around you.
      </p>
    ),
    images: placeholderPack,
  },
  {
    name: "Malvuar",
    subTitle: "PLACEHOLDER",
    notes: (
      <ul className="big-list">
        <li>PLACEHOLDER</li>
      </ul>
    ),
    description: <p>PLACEHOLDER</p>,
    images: placeholderPack,
  },
  {
    name: "Owluar",
    subTitle: "PLACEHOLDER",
    notes: (
      <ul className="big-list">
        <li>PLACEHOLDER</li>
      </ul>
    ),
    description: <p>PLACEHOLDER</p>,
    images: placeholderPack,
  },
  {
    name: "Serguar",
    subTitle: "PLACEHOLDER",
    notes: (
      <ul className="big-list">
        <li>PLACEHOLDER</li>
      </ul>
    ),
    description: <p>PLACEHOLDER</p>,
    images: placeholderPack,
  },
  {
    name: "Wereguar",
    subTitle: "PLACEHOLDER",
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
    subTitle: "PLACEHOLDER",
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
    subTitle: "PLACEHOLDER",
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
    subTitle: "PLACEHOLDER",
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
