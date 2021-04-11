import React from "react";
import { GuarianImagePack } from "./images/guarianImagePack";
import { lavuarPack } from "./images/lavuar";
import { placeholderPack } from "./images/placeholder";
import { reguarPack } from "./images/reguar";

export interface GuarianInfo {
  name: string;

  notes: React.ReactNode;
  description: React.ReactNode;

  images: GuarianImagePack;

  secret?: boolean;
}

export const COLLAPSE_LINKS_ROOM = 670;
export const HORIZONTAL_REF_ROOM = 430;

const guarians: GuarianInfo[] = [
  {
    name: "Reguar",
    notes: (
      <ul className="big-list">
        <li>The average of every guarian combined into one entity</li>
        <li>Extremely lazy but happy to nap with you whenever</li>
        <li>
          They may not be as exciting as the other guarians, but they still care for you just as
          much
        </li>
        <li>
          Very low perception (even for a guarian)
          <ul>
            <li>
              You might hear the sound of them gently bumping into a wall every so often, but don't
              worry, they'll be alright
            </li>
          </ul>
        </li>
      </ul>
    ),
    description: (
      <p>
        Depending on who you meet, a visit from a guarian can be an ethereal experience. A visit
        from Reguar, on the other hand, is more akin to being visited by an especially oversized
        lazy dog. After a long day, they lumber up next to you and clumsily flop onto their side,
        waiting to either be petted or laid upon.
      </p>
    ),
    images: reguarPack,
  },
  {
    name: "Lavuar",
    notes: (
      <ul className="big-list">
        <li>Bouncy and energetic</li>
        <li>
          Possesses really high perception
          <ul>
            <li>So high that she can actually be safely ridden without needing guidance!</li>
          </ul>
        </li>
      </ul>
    ),
    description: (
      <p>
        Aftering rousing from your slumber, you come to the realization that you fell asleep on
        Lavuar's back. Having guided you on her own, you have no idea how long you've been out for,
        how far she's taken you or where you even are right now. That said, it seems really nice
        here, and Lavuar's
      </p>
    ),
    images: lavuarPack,
  },
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
  {
    name: "Owluar",
    notes: (
      <ul className="big-list">
        <li>Quiet, but incredibly caring</li>
        <li>
          Even though they don't really understand you, they will happily listen to whatever's on
          your mind
        </li>
        <li>Possesses an incredible stillness, even for a guarian</li>
      </ul>
    ),
    description: <p>PLACEHOLDER</p>,
    images: placeholderPack,
  },
  {
    name: "Serguar",
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
