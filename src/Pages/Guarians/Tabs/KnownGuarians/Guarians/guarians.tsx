import React from "react";
import { GuarianImagePack } from "./guarianImagePack";
import { lavuar } from "./lavuar";
import { owluar } from "./owluar/owluar";
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
  {
    name: "Malvuar",
    notes: (
      <ul className="big-list">
        <li>Uncharacteristically obnoxious for a guarian</li>
        <li>Often shoves himself between you and whatever you're doing</li>
        <li>
          Will actively follow you around wherever you go
          <ul>
            <li>Even in public</li>
          </ul>
        </li>
        <li>Despite being completely visible, nobody seems to mind their presence except you</li>
      </ul>
    ),
    description: (
      <>
        <p>
          Out in the open, where everyone can see, you roam around, Malvuar following so closely
          that he's practically on top of you. You desperately try to convince onlookers that this
          bizarre, boisterous beast won't leave you alone, but no one seems to care and you can't
          figure out why. He's not invisible, everyone can see him loud and clear for what he really
          is, but no matter who you ask, everyone seems to think that this is just the way it's
          always been, the way it's meant to be.
        </p>
        <p>Something really does not feel right about this guarian.</p>
      </>
    ),
    images: placeholderPack,
  },
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
