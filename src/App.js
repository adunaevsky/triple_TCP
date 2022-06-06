import "./assets/App.css";
import CashDisplay from "./components/CashDisplay/CashDisplay";

import { useGlobalState, setGlobalState } from "./state";

import { useState, useReducer } from "react";

function App() {
  const cashDisplayActions = {
    win: "win",
    noWin: "noWin",
    playing: "playing",
  };

  const cashGlowReducer = (state, action) => {
    /*     console.log(action, cashDisplayActions); */
    switch (action.type) {
      case cashDisplayActions.win:
        return {
          bet: true,
          totalWin: true,
        };
      case cashDisplayActions.noWin:
        return {
          glowBet: true,
          glowTotalWin: false,
        };
      case cashDisplayActions.playing:
        return {
          glowBet: false,
          glowTotalWin: false,
        };
      default:
        return state;
    }
  };

  const [cashGlow, dispatch] = useReducer(cashGlowReducer, {
    glowBet: true,
    glowTotalWin: true,
  });

  const win = () => {
    dispatch(cashDisplayActions.win);
  };
  const noWin = () => {
    dispatch(cashDisplayActions.noWin);
  };
  const playing = () => {
    dispatch(cashDisplayActions.playing);
  };

  return (
    <div className="playingField">
      <CashDisplay glowCash={cashGlow} />

      <button onClick={noWin}>Game Start | No win</button>
      <button onClick={playing}>Playing Game</button>
      <button onClick={win}>Win</button>
    </div>
  );
}

export default App;
