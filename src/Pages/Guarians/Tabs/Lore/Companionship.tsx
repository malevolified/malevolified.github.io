import React from "react";
import { GuarianTooltip, TipIcon } from "../../../../Components/GuarianTooltip";
import { PlaceholderText } from "../../../../Components/PlaceholderText";
import shortPerception from "./images/shortPerception.png";
import longPerception from "./images/longPerception.png";
import { useScreenWidthGreaterThan } from "../../../../Hooks/useScreenWidthGreaterThan";
import bow from "./images/bow.png";
import paint from "./images/paint.png";

const Gt = GuarianTooltip;

interface CompanionshipProps {}

export const Companionship: React.FC<CompanionshipProps> = ({}) => {
  const horizPerception = useScreenWidthGreaterThan(1400);
  const horizSections = useScreenWidthGreaterThan(1740);
  const hoirzAdornments = useScreenWidthGreaterThan(600);

  return (
    <div>
      <h1>Companionship</h1>
      <p>
        The guarians are unique in that their existence does not seem to be self-contained. That is
        to say, a guarian has never been witnessed existing in solitude. Every observance of the
        guarians appears to have been, eventually, in the presence of another, for it appears the
        mere act of being perceived is how the guarians exist in the first place.
      </p>
      <p>
        This reliance upon being in the company of someone more real is not well understood, and
        their motives for behaving this way are completely unknown, but given the nature of these
        encounters, it appears as though their intent is purely just altruistic benevolence. The
        guarians seem to build a complex relationships, actively shaping themselves in strange ways
        in order to resonate with those they befriend
      </p>
      <h3>Understanding</h3>
      <p>
        Given their spiritual nature, their fantastical abilities and their completely inexplicable
        existence, one has to wonder what goes on within the mind of a guarian. Contrary to what one
        might think, it turns out that the answer is: probably not much. Unsurprisingly, as they
        typically lack mouths, the guarians are not able to speak, but many of them do seem
        proficient at expressing themselves via body language. Some guarians do seem curious by
        nature, but overall it appears that they're generally uninterested in more complicated
        concepts.
      </p>
      <p>
        While the guarians seem to be very simple minded, a very notable exception to this is their
        profound understanding of emotion. Despite their non-communicative nature, the guarians seem
        to have near perfect knowledge of how you're actually feeling. While it could very well be
        intuition, it seems as though that guarians are actually able to sense ones emotions in ways
        that we cannot perceive. Because of this, even though the guarians themselves are not able
        to speak, they're still able to understand us regardless by the emotions we feel when we
        express ourselves. Through this understanding, the guarians have even demonstrated
        responding to simple questions via body language
      </p>
      <h3>Perception</h3>
      <p>
        Despite lacking eyes, the guarians seem to still be able to see. It is unknown by what
        mechanism they are able to perceive the world around them, but whatever it may be, it allows
        them to see the world completely different from how we see it. Rather than taking light in,
        the guarians seem to be capable of perceiving a small area around them. The range of this
        effect is limited and varies between guarian to guarian. Furthermore, this form of
        perception seems to require a small amount of energy to take effect and can be "turned off"
        when a guarian chooses to rest. Based on these factors, some guarians have{" "}
        <Gt images={TipIcon.Reguar}>unfortunately low perception</Gt> while other guarians have{" "}
        <Gt images={[TipIcon.Lavuar, TipIcon.Wereguar]}>incredibly high perception</Gt>, far beyond
        what we're capable of.
      </p>
      <div
        style={{
          display: "flex",
          alignItems: horizPerception ? "flex-end" : "center",
          flexDirection: horizPerception ? "row" : "column",
        }}
      >
        <div style={{ flex: 1 }}>
          <img src={shortPerception} style={{ maxWidth: "100%" }} />
        </div>
        <div style={{ flex: 1 }}>
          <img src={longPerception} style={{ maxWidth: "100%" }} />
        </div>
      </div>
      <p>
        Interestingly enough, this strange sense of perception <i>isn't</i> actually their only way
        of seeing. This understanding a guarian has of one's emotions appears to go beyond simple
        knowledge or senses, as the guarians seem to be capable of benefiting from the senses of
        their companions as well. In addition to their own perception, the guarians seem to
        incorporate the perception of those around them as well. Unlike their own perception, this
        sharing of vision actually seems to cost no energy on their part and is an intrinsic way of
        seeing the world around them. Because of this, guarians tend to be much more confident in
        their steps whenever they're close to their companion. Conversely, this reliance on other's
        vision results in scenarios where a guarian might not be aware of what's between themselves
        and their companion, which is the leading cause for the guarian's tendency to bump into
        walls.
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: horizSections ? "row" : "column",
          gap: horizSections ? 15 : 0,
        }}
      >
        <div style={{ flex: 1 }}>
          <h3>Self Image</h3>
          <p>
            Through the guarians' ability to see within us, understanding our emotions and sensing
            our own senses, it's almost as if the guarians bind themselves to one in a way that we
            cannot see or understand ourselves. Through these shared senses and emotions, it's
            unclear how deeply the guarians can see into our minds, but it is clear that they
            possess some level of knowing, as accounts of specific guarians have differed from one
            person to the next. Through these varied encounters, the guarians are evidently not
            static beings and appear to craft themselves in the image of those that they're bound
            to, not only in make, but subtly in behavior as well.
          </p>
          <p>
            Given the emotions and the inner workings of those of who a guarian is bound to, the
            guarians actually shift themselves to suit themselves to their companions. Through the
            material shifting and size shifting, the guarians can rebuild themselves as they see fit
            with what seems to be little effort, but what's more interesting is the fact that the
            guarians seem not only to shift themselves, but their actual preferences as well. Where
            one guarian may prefer themselves as a specific material for one person, they may
            suddenly enjoy great change when interacting with another. Where another guarian may
            size themselves to fit indoors, they may suddenly enjoy towering over the clouds
            depending on who they're with. Furthermore, this level of variance actually varies
            between guarians as well, but regardless of to what degree, the bottom line is that
            accounts of individual guarians may differ heavily from one person to another.
          </p>
        </div>
        {horizSections && <div style={{ borderRight: "1px solid #fffae4", marginTop: 40 }}></div>}
        <div style={{ flex: 2.5, minWidth: horizSections ? 1090 : undefined }}>
          <h3>Adornments</h3>
          <p>
            Regarding the guarian's odd spiritual nature, one of their most intriguing traits is
            their receptiveness to being personalized. Given their simplicity, the guarians actually
            seem to enjoy acting as a canvas for others (some of whom{" "}
            <Gt images={TipIcon.Panthuar}>
              <i>really</i> enjoy it
            </Gt>
            ), and are very open to being drawn upon, painted, dyed, or even adorned with various
            accessories. Thus far, there appears not to be any limit to what sort of accessories one
            could adorn their guarian with; necklaces, bracelets, even ribbons and bows.
          </p>
          <p>
            Once applied to a guarian, these adornments practically become a part of their very
            being, resulting in some surprising properties.
          </p>
          <ul>
            <li>
              Applied adornments (if applied properly and securely) become permanently affixed.
              Markings, paints and dyes never fade away or degrade over time regardless of the
              elements they're subjected to. Adornments remain in exactly the condition they were in
              when they were applied. Bows remain tied and loose adornments stay perfectly perched
              upon where they were placed.
            </li>
            <ul>
              <li>
                While permanent, they are not irreversible. Adornments permanently remain until the
                moment you wish to remove them, which can be done by totally ordinary means. When
                removed, these adornments return to their ordinary state and are ordinarily effected
                by reality once more
              </li>
            </ul>
            <li>
              Applied adornments shift with the guarian wearing them. When shifting size, their
              accessories actually <i>change size with them</i>, shrinking or growing to fit a
              guarian regardless of their size. Markings also change scale with their guarian,
              appearing exactly as it did the moment you applied it. Furthermore, when a guarian
              shifts materials, markings and accessories often remain unchanged, but in certain
              circumstances, these adornments also shift with the guarian, taking on the material
              they themselves have become, or sometimes even taking on new forms entirely to suit
              the change (dyes shifting to paints or vice versa).
            </li>
          </ul>
          <div
            style={{
              display: "flex",
              flexDirection: hoirzAdornments ? "row" : "column",
              alignItems: hoirzAdornments ? "flex-start" : "center",
              justifyContent: "center",
            }}
          >
            <div style={{ marginBottom: -50 }}>
              <img src={bow} style={{ maxWidth: "100%" }} />
            </div>
            <div>
              <img src={paint} style={{ maxWidth: "100%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
