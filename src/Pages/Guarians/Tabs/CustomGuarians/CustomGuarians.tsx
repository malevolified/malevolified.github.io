import React from "react";
import styles from "./CustomGuarians.module.css";

interface CustomGuariansProps {}

export const CustomGuarians: React.FC<CustomGuariansProps> = ({}) => {
  return (
    <div>
      <p>
        The way I see them, the guarians are less of a species and more just a general concept, so
        broad that I feel as though it would be unfair for me to lay claim to it. For that reason,{" "}
        <b>the guarians are an open species!</b>
      </p>
      <ul className={styles.list}>
        <li>
          You are completely free to make as many guarians as you like without needing permission
          <ul>
            <li>You can create guarian versions of your existing characters too!</li>
          </ul>
        </li>
        <li>You're free to use them for any purpose, be it art, stories, roleplay, etc</li>
        <li>
          You can use the guarians for commercial purposes, ie, taking guarian commissions, selling
          adopts, etc
        </li>
        <li>
          You are allowed to draw NSFW art of the guarians
          <ul>
            <li style={{ fontSize: 14 }}>
              I personally do not enjoy NSFW art in general however, so unfortunately, I may not be
              interested in actually seeing it! Sorry!
            </li>
          </ul>
        </li>
        <li>
          Consider giving credit{" "}
          <a
            href="https//twitter.com/malevolified"
            target="_blank"
            style={{ textDecoration: "underline dotted" }}
          >
            (@Malevolifed)
          </a>{" "}
          whenever it feels reasonable and avoid using them for nefarious purposes
        </li>
      </ul>
      <h3>Guidelines</h3>
      <p>
        The guarians were very much designed around being as vague and open to interpretation as
        possible. As such, there are no true <i>rules</i> as to how you must create your guarian.
        Instead, there is mostly just guidelines that you're free to follow if you want. In the end,
        you should mostly just design whatever you find most fun. In general, my guarian designs
        feature:
      </p>
      <div style={{ display: "flex", gap: 20 }}>
        <div className={styles.guideline}>
          <h3>Bulky Necks</h3>
          <p>
            Guarians typically have large, pronounced, swooping necks. Characters who have been
            "guarified" are typically given necks far larger than what they had before
          </p>
        </div>
        <div className={styles.guideline}>
          <h3>Facelessness</h3>
          <p>
            Consider designing your guarian to be faceless, or at the very least, eyeless. Ears are
            pretty common, while mouthes are rarer but still perfectly fine.
          </p>
        </div>
      </div>
    </div>
  );
};
