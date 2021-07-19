import React from "react";
import "./faq.css";

interface QuestionAnswerProps {
  question: React.ReactNode;
}

export const QuestionAnswer: React.FC<QuestionAnswerProps> = ({ question, children }) => {
  return (
    <>
      <div className="question">{question}</div>
      <div className="answer">{children}</div>
      <div className="separator" />
    </>
  );
};
