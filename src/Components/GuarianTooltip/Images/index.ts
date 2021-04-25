import reguar from "./reguar.png";

export enum TipIcon {
  Reguar,
}

const tooltipMap: { [guarian: number]: string } = {};

tooltipMap[TipIcon.Reguar] = reguar;

export { tooltipMap };
