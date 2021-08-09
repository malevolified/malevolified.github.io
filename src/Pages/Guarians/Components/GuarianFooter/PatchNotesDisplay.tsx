import dayjs from "dayjs";
import React from "react";
import { MajorVersion } from "./patchNotes";

interface PatchNotesDisplayProps {
  patchNotes: MajorVersion[];
}

export const PatchNotesDisplay: React.FC<PatchNotesDisplayProps> = ({ patchNotes }) => {
  const lastMajor = patchNotes[patchNotes.length - 1];
  const lastVersion = lastMajor.versions[lastMajor.versions.length - 1];
  const lastPatch = lastVersion.patches[lastVersion.patches.length - 1];

  return (
    <div>
      v{patchNotes.length}.{lastMajor.versions.length - 1}.{lastVersion.patches.length - 1} -{" "}
      {dayjs(lastPatch.date).format("MMMM Do, YYYY")}
    </div>
  );
};
