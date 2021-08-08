import reguar from "./reguar.png";
import wereguar from "./wereguar.png";
import owluar from "./owluar.png";
import lavuar from "./lavuar.png";
import malvuar from "./malvuar.png";
import panthuar from "./panthuar.png";
import serguar from "./serguar.png";

export enum TipIcon {
  Reguar,
  Wereguar,
  Owluar,
  Lavuar,
  Malvuar,
  Serguar,
  Panthuar,
}

const tooltipMap: { [guarian: number]: string } = {};

tooltipMap[TipIcon.Reguar] = reguar;
tooltipMap[TipIcon.Wereguar] = wereguar;
tooltipMap[TipIcon.Owluar] = owluar;
tooltipMap[TipIcon.Lavuar] = lavuar;
tooltipMap[TipIcon.Malvuar] = malvuar;
tooltipMap[TipIcon.Serguar] = serguar;
tooltipMap[TipIcon.Panthuar] = panthuar;

export { tooltipMap };
