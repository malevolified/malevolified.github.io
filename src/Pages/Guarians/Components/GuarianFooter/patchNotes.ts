//prettier-ignore
enum Months {Jan,Feb, Mar,Apr,May,Jun,Jul,Aug,Sep, Oct,Nov,Dec}

export interface PatchNotes {
  date: Date;
  notes: string[];
}

export interface MinorVersion {
  patches: PatchNotes[];
}

export interface MajorVersion {
  versions: MinorVersion[];
}

export const patchNotes: MajorVersion[] = [
  {
    versions: [
      {
        patches: [
          {
            date: new Date(2021, Months.Aug, 7),
            notes: ["Initial Release!"],
          },
          {
            date: new Date(2021, Months.Aug, 8),
            notes: ["Fixed broken links", "Streamlined patch notes generation"],
          },
        ],
      },
      {
        patches: [
          {
            date: new Date(2021, Months.Sep, 19),
            notes: ["Added playdough Wereguar art and playdough material icon"],
          },
        ],
      },
    ],
  },
];
