import React from "react";
import { GuarianTooltip } from "../../../../Components/GuarianTooltip";
import { TipIcon } from "../../../../Components/GuarianTooltip/Images";
import { useScreenWidthGreaterThan } from "../../../../Hooks/useScreenWidthGreaterThan";
import styles from "./lore.module.css";
import { MaterialDisplay } from "./MaterialDisplay";

const Gt = GuarianTooltip;

interface SpiritualityProps {}

export const Spirituality: React.FC<SpiritualityProps> = ({}) => {
  const horizontalMatDisplay = useScreenWidthGreaterThan(1000);
  const largeMatDisplay = useScreenWidthGreaterThan(600);

  return (
    <div>
      <h1>Spirituality</h1>
      <p>
        Not alive in a conventional sense, the guarians are a collective of what could be referred
        to as corporeal spirits. They are not simply ghosts who float around and pass through walls,
        and are still bound to <i>most</i> of the laws of physics. Despite this, the guarians
        actually still have a number of strange traits not commonly found among the living and are
        capable of some fascinating feats while you aren't looking.
      </p>
      <h3>Materialization</h3>
      <p>
        Acting with mysteriously perfect timing and awareness, the guarians only appear when you are
        completely alone (with <Gt images={[TipIcon.Malvuar, TipIcon.Panthuar]}>few exceptions</Gt>
        ). When choosing to make an appearence, the guarians appear somewhere out of view completely
        instantaneously and silently, and the same is true when they decide to take their leave.
      </p>
      <p>
        The frequency with which the guarians decide to make their visits is mostly dependent on the
        guarian themselves. For some guarians, visits may be so rare that they're practically worth
        celebrating and are typically very <Gt images={TipIcon.Serguar}>memorable experiences</Gt>.
        In other cases, a guarian may appear with such frequency that you eventually form a rhythm
        with them, their presence so assured that you could sit back knowing{" "}
        <Gt images={TipIcon.Lavuar}>they've already appeared behind you</Gt>.
      </p>
      <h3>Facial Features</h3>
      <p>
        One of the most notable and immediately apparent features of their guarians is their typical
        lack of facial features. While total facelessness is{" "}
        <Gt images={TipIcon.Owluar}>relatively common</Gt>, a few facial features still naturally
        occur. Ears are actually quite common and can be found on{" "}
        <Gt images={[TipIcon.Reguar, TipIcon.Lavuar, TipIcon.Panthuar]}>many guarians</Gt>. Mouths
        are far rarer, but can still be found on <Gt images={TipIcon.Serguar}>rare occassion</Gt>.
        Not a single guarian with eyes has been seen to date (not counting those who have had their
        eyes <Gt images={TipIcon.Wereguar}>drawn on after the fact</Gt>).
      </p>
      <h3>Material Shifting</h3>
      <div
        style={{
          display: "flex",
          flexDirection: horizontalMatDisplay ? "row" : "column",
          alignItems: horizontalMatDisplay ? undefined : "center",
        }}
      >
        <div>
          <p>
            The guarians are rather unconventional in that they are not each defined by a static
            form, but rather, a vague concept of who they are and what they're meant to be,
            something that could be molded by those who behold them. As the guarians are not
            conventionally living beings, they are not bound to conventionally living bodies and are
            free to experiment with alternate states of being altogether.
          </p>
          <p>
            A guarian can freely change its composition whenever it so chooses, only shifting when
            not seen. Given they're unalive nature, there appears to be no restrictions on what form
            they take. While plenty of fluffy, feathery guarians have been seen, many often take
            typically inanimate forms such as inflatable or plush forms while still remaining fully
            animate. Many more materials have been seen beyond this such as rubber, mud, water,
            plastic, clay, and even obsidian. While some guarians tend to prefer themselves{" "}
            <Gt images={TipIcon.Malvuar}>as a specific material</Gt>, other guarians have a tendency
            of being <Gt images={TipIcon.Wereguar}>a little more creative</Gt>
          </p>
        </div>
        <MaterialDisplay small={!largeMatDisplay} />
      </div>

      <h3>Size Shifting</h3>
      <p>
        As with the material shifting, each guarian is more of a vague concept of what they should
        be rather than something unchanging, and because of this, they are the ones who define their
        size, rather than their size defining who they are. As with all guarian abilities, the
        change takes place silently and instantaneously, but only when not perceived. The bounds for
        these changes in size are not clearly known.
      </p>
      <p>
        Some guarians tend to enjoy a more{" "}
        <Gt images={[TipIcon.Serguar, TipIcon.Wereguar]}>stable size</Gt>, usually maintaining their
        preferred height in both indoor and outdoor situations. Other guarians tend to play around
        with their size more, enjoying{" "}
        <Gt images={[TipIcon.Reguar, TipIcon.Lavuar, TipIcon.Owluar, TipIcon.Malvuar]}>
          larger forms
        </Gt>{" "}
        when outdoors while certain other guarians take this to{" "}
        <Gt images={TipIcon.Panthuar}>extreme lengths</Gt>.
      </p>
    </div>
  );
};
