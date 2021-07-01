import React from "react";
import { enduar } from "./enduar";
import { GuarianImagePack } from "./guarianImagePack";
import { lavuar } from "./lavuar";
import { malvuar } from "./malvuar";
import { owluar } from "./owluar";
import { panthuar } from "./panthuar";
import { placeholderPack } from "./placeholder";
import { reguar } from "./reguar";
import { septuar } from "./septuar/septuar";
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
  septuar,
  enduar,
];

export { guarians };
