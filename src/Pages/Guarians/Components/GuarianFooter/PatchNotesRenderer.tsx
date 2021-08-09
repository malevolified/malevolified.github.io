import dayjs from "dayjs";
import React from "react";
import { MajorVersion } from "./patchNotes";
import styles from "./PatchNotesRenderer.module.css";

interface PatchNotesRendererProps {
  patchNotes: MajorVersion[];
}

export const PatchNotesRenderer: React.FC<PatchNotesRendererProps> = ({ patchNotes }) => {
  return (
    <div className={styles.patchNotesWrapper}>
      <div className={styles.patchNotes}>
        {patchNotes.map((major, majorIndex) =>
          major.versions.map((version, versionIndex) =>
            version.patches.map((patch, patchIndex) => (
              <div key={`${majorIndex + 1}.${versionIndex}.${patchIndex}`}>
                <h3>
                  v{majorIndex + 1}.{versionIndex}.{patchIndex}{" "}
                  <span style={{ fontSize: 16 }}>
                    {" "}
                    - {dayjs(patch.date).format("MMMM Do, YYYY")}
                  </span>
                </h3>
                <ul>
                  {patch.notes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </div>
            ))
          )
        )}
      </div>
    </div>
  );
};
