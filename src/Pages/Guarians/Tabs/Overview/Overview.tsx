import React from "react";
import styles from "./Overview.module.css";
import cover from "./cover.png";

interface OverviewProps {}

export const Overview: React.FC<OverviewProps> = ({}) => {
  return (
    <div>
      <div style={{ textAlign: "center", marginTop: 10 }}>
        <img
          src={cover}
          style={{ maxWidth: "min(1600px, 100%)", width: "calc(50% + 300px)", borderRadius: 25 }}
        />
      </div>
      <p className={styles.main}>
        Unbound by the laws of nature and capable of a great many things, the guarians are a broad
        collective of spiritual companions who simply wish to keep you company whenever you need
        them most.
      </p>
      <p>
        Rather unconventional by definition, the guarians could be referred to as 'corporeal
        spirits'. They are neither dead nor alive, nor do they eat or even breathe, but they are not
        simply spectres who can float about or pass through walls. The guarians are still very much
        tangible and subject to at least some of the laws of physics when they're being perceived.
        Outside of our perception, they suddenly become capable of incredible feats, disappearing or
        appearing in an instant, changing size or even changing their very composition, but only
        when you're not looking.
      </p>
      <p>
        Despite their roles as spiritual guardians, they do not seem to be proficient protectors.
        They don't seem to be highly intelligent nor are they very perceptive. They aren't very fast
        and they tend to avoid conflict in the first place. Instead, the guarians seem to possess an
        incredible level of emotional intelligence far in excess of what we ourselves are capable.
        The guarians perceive, not the world around us, but rather, the world within us instead,
        displaying an understanding of our very being beyond what we understand ourselves.
      </p>
      <p>
        Though simplistic in nature, guarians of every shape, size and material have been
        encountered, ever changing and ever shifting. Given their mysterious origins, their design
        seem to know no limits, and as more are discovered, it seems as though the true extent of
        their very existent remains unknown.
      </p>
    </div>
  );
};
