export const nextVal = {
  0: 1,
  1: 2,
  2: 3,
  3: 5,
  5: 10,
  10: 25,
  25: 50,
  50: 100,
  100: 200,
  200: 500,
  500: 0,
};

export const initBet = {
  bonus3: { l: 0, m: 0, r: 0 },
  play: { l: 0, m: 0, r: 0 },
  ante: { l: 0, m: 0, r: 0 },
  bonus5: { m: 0 },
};
export const initWin = {
  ante: { l: 1, m: 2, r: 3 },
  play: { l: 1, m: 2, r: 3 },
  bonus3: { l: 1, m: 2, r: 3 },
  bonus5: { m: 20 },
  anteBonus: { m: 20 },
};

export const initTotal = {
  bet: 0,
  win: 0,
  balance: 10000,
};

export const initBetMade = {
  l: false,
  m: false,
  r: false,
  lmr: false,
};

export const durations = {
  cashBalance: 500,
  cashBet: 500,
  cashWin: 2000,
};

export const initStageOptions = {
  bet: true,
  betDone: false,
  dealCards: false,
  dealCounterDone: false,
  showPlayerHands: false,
  pMove_m: false,
  pMove_l: false,
  pMove_r: false,
  revealDealer: false,
  hideCtrls: false,
  showDealerResult: false
};
export const initStages = {
  bet: "deal",
  betDone: "betDone",
  dealCards: "dealCards",
  dealCounterDone: "dealCounterDone",
  showPlayerHands: "showPlayerHands",
  hideCtrls: 'hideCtrls',
  pMove_m: "pMove_m",
  pMove_l: "pMove_l",
  pMove_r: "pMove_r",
  revealDealer: "revealDealer",
  showDealerResult: "showDealerResult"
};

export const NextGameStage = {
  m: "l",
  l: "r",
  r: "revealDealer",
};

export const initialPlayerHands = {
  main: { label: "", fill: "" },
  l: { label: "", fill: "" },
  m: { label: "", fill: "" },
  r: { label: "", fill: "" },
};

export const FadeCardOptions = {
  m: [true, false, false, false, true],
  r: [true, true, false, false, false],
  l: [false, false, false, true, true],
  none: [false, false, false, false, false],
};
export const FadeResultOptions = {
  m: [false, true, true, true],
  l: [true, false, true, true],
  r: [true, true, false, true],
  none: [false, false, false, false],
};
