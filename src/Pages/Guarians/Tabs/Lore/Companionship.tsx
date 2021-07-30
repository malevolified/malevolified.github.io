import React from "react";
import { GuarianTooltip, TipIcon } from "../../../../Components/GuarianTooltip";
import { PlaceholderText } from "../../../../Components/PlaceholderText";

const Gt = GuarianTooltip;

interface CompanionshipProps {}

export const Companionship: React.FC<CompanionshipProps> = ({}) => {
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
        typically lack mouthes, the guarians are not able to speak, but many of them do seem
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
        responding to simple quesitons via body language
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
      <p>
        What's really surprising, however, is that this sort of perceptive sense the guarians have{" "}
        <i>isn't</i>
        actually the only way they're capable of seeing.
      </p>
      <h3>Self Image</h3>
      <p>
        <PlaceholderText>
          Write about guarian gender/size/material and how it relates to other people
        </PlaceholderText>
      </p>
      <h3>Markings</h3>
      <p>
        <PlaceholderText>
          Write about how guarians like being drawn on/adorned with stuff
        </PlaceholderText>
      </p>
    </div>
  );
};
