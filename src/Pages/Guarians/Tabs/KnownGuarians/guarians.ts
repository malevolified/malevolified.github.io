export interface GuarianInfo {
  name: string;
  secret?: boolean;
}

const guarians: GuarianInfo[] = [
  { name: "Reguar" },
  { name: "Lavuar" },
  { name: "Malvuar" },
  { name: "Owluar" },
  { name: "Serguar" },
  { name: "Wereguar" },
  { name: "Septuar", secret: true },
  { name: "Enduar", secret: true },
];

export { guarians };
