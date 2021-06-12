import reguar from "./reguar.png";
import wereguar from "./wereguar.png";
import owluar from "./owluar.png";

export enum TipIcon {
  Reguar,
  Wereguar,
  Owluar,
}

const tooltipMap: { [guarian: number]: string } = {};

tooltipMap[TipIcon.Reguar] = reguar;
tooltipMap[TipIcon.Wereguar] = wereguar;
tooltipMap[TipIcon.Owluar] = owluar;

export { tooltipMap };
