import React from "react";
import styles from "./PlaceholderText.module.css";
import placeholder from "./placeholder.png";

interface PlaceholderTextProps {
  children: React.ReactNode;
}

export const PlaceholderText: React.FC<PlaceholderTextProps> = ({ children }) => {
  if (process.env.NODE_ENV == "production") {
    return <img src={placeholder} />;
  }

  return <span className={styles.placeholder}>{children}</span>;
};
