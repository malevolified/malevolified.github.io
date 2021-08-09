import React, { useState } from "react";
import styles from "./GuarianFooter.module.css";

interface GuarianFooterProps {}

export const GuarianFooter: React.FC<GuarianFooterProps> = ({}) => {
  const [viewingPatchNotes, setViewingPatchNotes] = useState(false);

  return (
    <>
      <div className={styles.footer}>
        <div>© Malevolifed</div>
        <div style={{ cursor: "pointer" }} onClick={() => setViewingPatchNotes(true)}>
          v1.0.1 - August 8th, 2021
        </div>
        <div>
          <a href="https://twitter.com/malevolified" target="_blank">
            <img width={30} height={30} src="/twitterLogo.png" />
          </a>
        </div>
      </div>
      {viewingPatchNotes && (
        <div className={styles.patchNotesWrapper} onClick={() => setViewingPatchNotes(false)}>
          <div className={styles.patchNotes}>
            <h3>
              v1.0.0 <span style={{ fontSize: 16 }}> - August 7th, 2021</span>
            </h3>
            <ul>
              <li>Initial release!</li>
            </ul>
            <h3>
              v1.0.1 <span style={{ fontSize: 16 }}> - August 8th, 2021</span>
            </h3>
            <ul>
              <li>Fixed broken link</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
