const generalSpecs = [
  { yText: 8.5, yBox: 0.5 },
  { yText: 20.5, yBox: 12.5 },
  { yText: 32.5, yBox: 24.5 },
  { yText: 44.5, yBox: 36.5 },
  { yText: 56.5, yBox: 48.5 },
  { yText: 68.5, yBox: 60.5 },
];

export const viewHeaders = {
  textAnchor: "middle",
  fontWeight: "bold",
  fontSize: "7",
  fill: "#FFFFFF",
  opacity: "0.8",
  y: generalSpecs[0].yText,
};
export const viewTitle = {
  textAnchor: "middle",
  fontWeight: "bold",
  fontSize: "10",
  fill: "#FFFFFF",
  opacity: "1",
  y: generalSpecs[0].yText,
};

export const commonTextAttr = {
  textAnchor: "middle",
  fontWeight: "bold",
  fontSize: "9",
  fill: "#FFFFFF",
  opacity: "1",
  x: "100"
};
export const col1 = {
  ...commonTextAttr,
  x: 75
};
export const col3 = {
  ...commonTextAttr,
  x: 125
};

export const commonBoxAttr = {
  className: "cashBox",
  x: "61",
  rx: "2",
  width: "78",
  height: "10",
};

export const commonDisplayLabelsAttr = {
  x: 56,
  textAnchor: "end",
  fontWeight: "bold",
  fontSize: 9,
  fill: "#FFFFFF",
  opacity: 0.8,
};

export const mainSpecs = [
  { ...generalSpecs[0], id: "balance", label: "BAL" },
  {
    ...generalSpecs[1],
    id: "totalBet",
    label: "BET",
    eye: "translate(20, 10) scale(0.03)",
  },
  {
    ...generalSpecs[2],
    id: "totalWin",
    label: "WIN",
    eye: "translate(20, 22) scale(0.03)",
  },
];
export const betSpecs = [
  { ...generalSpecs[0], id: "skip", label: "", skipLine: true },
  { ...generalSpecs[1], id: "ante", label: "ANTE" },
  {
    ...generalSpecs[2],
    id: "play",
    label: "PLAY",
  },
  {
    ...generalSpecs[3],
    id: "3CBonus",
    label: "3C BONUS",
  },
  {
    ...generalSpecs[4],
    id: "5CBonus",
    label: "5C BONUS",
  },
];
