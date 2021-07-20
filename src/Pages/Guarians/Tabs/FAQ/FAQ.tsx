import React from "react";
import { FadeText } from "../../../../Components/FadeText";
import { GuarianTooltip, TipIcon } from "../../../../Components/GuarianTooltip";
import { useLocalStorage } from "../../../../Hooks/useLocalStorage";
import { QuestionAnswer } from "./QuestionAnswer";
import "./faq.css";
import notAGuarian from "./notAGuarian.png";

export const SHOW_SECRET_GUARIANS = "show_secret_guarians";

const QA = QuestionAnswer;
const GT = GuarianTooltip;

interface IProps {}

const FAQ: React.FC<IProps> = ({}) => {
  const [showSecrets, setShowSecrets] = useLocalStorage<boolean>(SHOW_SECRET_GUARIANS, false);

  return (
    <div className="faq">
      <QA question={<>Where do the guarians come from? How are they actually formed?</>}>
        <p>
          Unfortunately, the origins of the guarians are actually rather nebulous! There are loads
          of theories on where the actually originate! Some might say that the guarians just
          spontaneously occur from nothing, while others might feel that they were some other being
          prior that transcended into a guarian form. Some might say that they have no origin at all
          and are primordial beings, and others might say that they're created from within{" "}
          <i>you</i> instead
        </p>
        <p>
          Things get profoundly more complicated when you consider that not all guarians are alike.
          Most of the guarians are guarians through and through, which I've usually been referring
          to as{" "}
          <GT
            position="bottom"
            images={[TipIcon.Reguar, TipIcon.Lavuar, TipIcon.Owluar, TipIcon.Panthuar]}
          >
            pure guarians.
          </GT>{" "}
          Regarding the other guarians however, you get a funny feeling that they might be{" "}
          <GT images={[TipIcon.Malvuar, TipIcon.Serguar, TipIcon.Wereguar]}>hiding something.</GT>.{" "}
          <span className="not-a-guarian">
            Some guarians are very definitely{" "}
            <GT images={[notAGuarian]} position="bottom">
              not a guarian
            </GT>
          </span>
        </p>
      </QA>
      <QA question={<>How does gender work with the guarians?</>}>
        The guarians actually have no concept of gender at all, so all the references you see to
        pronouns are purely just based on whatever felt most appropriate for them! Each guarian
        might represent something completely different for each person, so really, you're free to
        gender them however you please!
      </QA>
      <QA question={<>Do you have any secret guarians?</>}>
        <div className="secret" onClick={() => setShowSecrets(!showSecrets)}>
          <FadeText
            text={
              showSecrets ? "Okay, maybe a few..." : "I have no idea what you're talking about!"
            }
          />
        </div>
      </QA>
    </div>
  );
};

FAQ.displayName = "FAQ";
export { FAQ };
