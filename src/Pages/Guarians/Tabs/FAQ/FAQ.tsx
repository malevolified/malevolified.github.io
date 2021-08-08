import React from "react";
import { FadeText } from "../../../../Components/FadeText";
import { useLocalStorage } from "../../../../Hooks/useLocalStorage";
import { QuestionAnswer } from "./QuestionAnswer";
import "./faq.css";
import notAGuarian from "./notAGuarian.png";
import { Link } from "react-router-dom";
import { useSecret } from "../../Contexts/SecretContext";
import { GuarianTooltip, TipIcon } from "../../Components/GuarianTooltip";

const QA = QuestionAnswer;
const GT = GuarianTooltip;

interface IProps {}

const FAQ: React.FC<IProps> = ({}) => {
  const { showSecret, setShowSecret } = useSecret();

  return (
    <div className="faq">
      <p style={{ fontSize: 13 }}>
        All questions here are written from the direct perspective of the{" "}
        <a href="https://twitter.com/malevolified" style={{ textDecoration: "underline dotted" }}>
          author
        </a>
        . More Q&amp;A will added over time as questions come up.
      </p>
      <div className="separator"></div>
      <QA question={<>Can I make a guarian?</>}>
        You can indeed! You can view the full details over in the{" "}
        <Link to={"/guarians/custom"} style={{ textDecoration: "underline dotted" }}>
          A Guarian of Your Own
        </Link>{" "}
        section!
      </QA>
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
          Things get profoundly more complicated when you consider that not all guarians have the
          same origins. Most of the guarians are guarians through and through, which I've usually
          been referring to as{" "}
          <GT
            position="bottom"
            images={[TipIcon.Reguar, TipIcon.Lavuar, TipIcon.Owluar, TipIcon.Panthuar]}
          >
            pure guarians.
          </GT>{" "}
          Regarding the other guarians however, you get a funny feeling that they might be{" "}
          <GT images={[TipIcon.Malvuar, TipIcon.Serguar, TipIcon.Wereguar]}>hiding something.</GT>.{" "}
          <span className="not-a-guarian">
            Worth mentioning however is that some guarians are very definitely{" "}
            <GT images={notAGuarian} position="bottom">
              not a guarian
            </GT>
          </span>
        </p>
      </QA>
      <QA question={<>Is there a reason every guarian name ends with -uar?</>}>
        To be completely honest, no! My first guarian character, Reguar, just happened to get that
        name randomly, and then I named Lavuar as just a spin on Reguar's name. After that, I just
        felt like I was committed which is fine since I sort of just have fun having arbitrary
        patterns in naming schemes. You don't have to follow it at all and are completely free to
        name your guarian whatever you want!
      </QA>
      <QA question={<>How does gender work with the guarians?</>}>
        The guarians actually have no concept of gender at all, so all the references you see to
        pronouns are purely just based on whatever felt most appropriate for them! Each guarian
        might represent something completely different for each person, so really, you're free to
        gender them however you please!
      </QA>
      <QA question={<>Do you have any secret guarians?</>}>
        <div className="secret" onClick={() => setShowSecret(!showSecret)}>
          <FadeText
            text={showSecret ? "Okay, maybe a few..." : "I have no idea what you're talking about!"}
          />
        </div>
      </QA>
    </div>
  );
};

FAQ.displayName = "FAQ";
export { FAQ };
