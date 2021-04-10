import React from "react";
import { GuarianInfo } from "./guarians";

interface IProps {}

const KnownGuarianBody: React.FC<IProps> = ({}) => {
  return (
    <div>
      <h1>Known Guarians</h1>
      <p>
        Listed here are all of the known (or at least well documented) guarians. The actual amount
        of guarians out there is truly unknown and possibly ever changing, and this list may be
        extended as more are discovered.
      </p>
      <p>
        As the guarians are often a highly dynamic race, the information provided for each is purely
        subjective and written from the perspective of the author of these notes. In reality, the
        guarians often adapt to those of who they are bound to and as such, one guarian may appear
        or behave completely differently from one person to the next, only keeping with them the
        very core of who they are.
      </p>
    </div>
  );
};

KnownGuarianBody.displayName = "KnownGuarianBody";
export { KnownGuarianBody };
