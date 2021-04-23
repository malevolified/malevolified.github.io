import React from "react";
import { FadeText } from "../../../../Components/FadeText";
import { useLocalStorage } from "../../../../Hooks/useLocalStorage";
import "./faq.css";

export const SHOW_SECRET_GUARIANS = "show_secret_guarians";

interface IProps {}

const FAQ: React.FC<IProps> = ({}) => {
  const [showSecrets, setShowSecrets] = useLocalStorage<boolean>(SHOW_SECRET_GUARIANS, false);

  return (
    <div className="faq">
      <div className="question">
        Where do the guarians come from? Were they something else before or do they just
        spontaneously occur?
      </div>
      <div className="answer">
        Unfortunately, the origins of the guarians are rather nebulous, especially since every
        guarian tends to have their own story.
      </div>
      <div className="separator" />
      <div className="question">Do you have any other secret guarians?</div>
      <div className="answer secret" onClick={() => setShowSecrets(!showSecrets)}>
        <FadeText
          text={showSecrets ? "Okay, maybe a few..." : "I have no idea what you're talking about!"}
        />
      </div>
    </div>
  );
};

FAQ.displayName = "FAQ";
export { FAQ };
