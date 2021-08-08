import React from "react";
import styles from "./GuarianFooter.module.css";

interface GuarianFooterProps {}

export const GuarianFooter: React.FC<GuarianFooterProps> = ({}) => {
  return (
    <div className={styles.footer}>
      <div>© Malevolifed</div>
      <div>PRE-RELEASE - August 6th, 2021</div>
      <div>
        <a href="http://twitter.com/malevolified" target="_blank">
          <img width={30} height={30} src="/twitterLogo.png" />
        </a>
      </div>
    </div>
  );
};
