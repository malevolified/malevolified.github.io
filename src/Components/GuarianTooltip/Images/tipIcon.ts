import reguar from "./reguar.png";
import wereguar from "./wereguar.png";
import owluar from "./owluar.png";
import lavuar from "./lavuar.png";

export enum TipIcon {
  Reguar,
  Wereguar,
  Owluar,
  Lavuar,
}

const tooltipMap: { [guarian: number]: string } = {};

tooltipMap[TipIcon.Reguar] = reguar;
tooltipMap[TipIcon.Wereguar] = wereguar;
tooltipMap[TipIcon.Owluar] = owluar;
tooltipMap[TipIcon.Lavuar] = lavuar;

export { tooltipMap };
