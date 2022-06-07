import { action } from "easy-peasy";
export const model = {
  cash: {
    bet: {
      ante: { l: 0, m: 0, r: 0 },
      play: { l: 0, m: 0, r: 0 },
      bonus3: { l: 0, m: 0, r: 0 },
      bonus5: { m: 0 },
    },
    win: {
      ante: { l: 1, m: 2, r: 3 },
      play: { l: 1, m: 2, r: 3 },
      bonus3: { l: 1, m: 2, r: 3 },
      bonus5: { m: 20 },
      anteBonus: { m: 20 },
    },
    total: {
      bet: 0,
      win: 123456,
      balance: 12345678,
    },
    //actions
  },
  changeBet: action((state, key) => {
    console.log(key[0], key[1], state.cash.bet[key[0]][key[1]]);
    state.cash.bet[key[0]][key[1]]++;
    // state.cash.bet[key[0]][key[1]]++;
  }),
  gameState: {
    newGame: true,
    gameResults: false,
    playing: false,
  },
};
