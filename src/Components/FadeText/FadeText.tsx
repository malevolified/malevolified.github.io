import React, { useEffect, useState } from "react";

interface IProps {
  text: string;
}

export const FadeText: React.FC<IProps> = ({ text }) => {
  const [currentText, setCurrentText] = useState(text);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (text == currentText) {
      return;
    }

    setFadeOut(true);

    setTimeout(() => {
      setCurrentText(text);
      setFadeOut(false);
    }, 350);
  }, [text]);

  return <span style={{ transition: "0.3s", opacity: fadeOut ? 0 : 1 }}>{currentText}</span>;
};
