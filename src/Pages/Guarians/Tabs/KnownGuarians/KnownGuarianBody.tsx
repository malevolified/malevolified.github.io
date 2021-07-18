import React from "react";

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
        <b>Note:</b> As guarians tend to craft themselves after the interpretations of their
        companion, the information provided for each is purely subjective and written from the
        perspective of the author of these notes. In reality, the guarians often adapt to those of
        who they are bound to and as such, one guarian may appear or behave completely differently
        from one person to the next, only keeping with them the very core of who they are.
      </p>
      <p>
        In short, the following attributes are written from my own personal perspective and may vary
        heavily depending on your own interpretation of each guarian:
      </p>
      <ul style={{ marginTop: -10 }}>
        <li>
          A guarian's gender/pronouns. The guarians really have no concept of gender and are
          perfectly fine with whatever you feel is appropriate for them.
        </li>
        <li style={{ marginTop: 6 }}>
          The size and material a guarian is most comfortable with. The means by which a guarian
          manifests itself is constructed around the preferences of their beholder, and as such, the
          sizes and materials I write about may be completely irrelevant to how they might appear to
          you.
        </li>
      </ul>
    </div>
  );
};

KnownGuarianBody.displayName = "KnownGuarianBody";
export { KnownGuarianBody };
