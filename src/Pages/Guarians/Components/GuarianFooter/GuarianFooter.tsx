import React, { useState } from "react";
import styles from "./GuarianFooter.module.css";
import { patchNotes } from "./patchNotes";
import { PatchNotesDisplay } from "./PatchNotesDisplay";
import { PatchNotesRenderer } from "./PatchNotesRenderer";

interface GuarianFooterProps {}

export const GuarianFooter: React.FC<GuarianFooterProps> = ({}) => {
  const [viewingPatchNotes, setViewingPatchNotes] = useState(false);

  return (
    <>
      <div className={styles.footer}>
        <div>© Malevolifed</div>
        <div style={{ cursor: "pointer" }} onClick={() => setViewingPatchNotes(true)}>
          <PatchNotesDisplay patchNotes={patchNotes} />
        </div>
        <div>
          <a href="https://twitter.com/malevolified" target="_blank">
            <img width={30} height={30} src="/twitterLogo.png" />
          </a>
        </div>
      </div>
      {viewingPatchNotes && (
        <div onClick={() => setViewingPatchNotes(false)}>
          <PatchNotesRenderer patchNotes={patchNotes} />
        </div>
      )}
    </>
  );
};
