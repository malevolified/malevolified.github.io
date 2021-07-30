import React from "react";

interface GuarianFooterProps {}

export const GuarianFooter: React.FC<GuarianFooterProps> = ({}) => {
  return (
    <div className="footer">
      <div>© Malevolifed</div>
      <div>PRE-RELEASE - July 29th, 2021</div>
      <div>
        <a href="http://twitter.com/malevolified" target="_blank">
          <img width={30} height={30} src="/twitterLogo.png" />
        </a>
      </div>
    </div>
  );
};
