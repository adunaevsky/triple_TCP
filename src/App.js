import "./assets/App.css";
import CashDisplay from "./components/CashDisplay/CashDisplay";
import BetBtns from "./components/BetBtns/BetBtns";

import Store from "./Store";

import { useState, useReducer, useContext } from "react";

import { Context } from "./Store"

function App() {
  //const [s, setState] = useContext(Context);

  const cashDisplayActions = {
    win: "win",
    noWin: "noWin",
    playing: "playing",
  };

  const gameStates = {
    newGame: false,
    gameResults: false,
    playing: false,
  };

  const cashGlowReducer = (state, action) => {
    switch (action.type) {
      case cashDisplayActions.win:
        return {
          bet: true,
          win: true,
        };
      case cashDisplayActions.noWin:
        return {
          bet: true,
          win: false,
        };
      case cashDisplayActions.playing:
        return {
          bet: false,
          win: false,
        };
      default:
        return state;
    }
  };

  const [cashGlow, dispatchCashGlow] = useReducer(cashGlowReducer, {
    bet: true,
    win: false,
  });

  const win = () => {
    /* dispatchCashGlow({ type: cashDisplayActions.win });
    setGlobalState("gameState", { ...gameStates, newGame: true }); */
  };
  const noWin = () => {
  /*   dispatchCashGlow({ type: cashDisplayActions.noWin });

    setGlobalState("gameState", { ...gameStates, gameResults: true }); */
  };
  const playing = () => {
 /*    dispatchCashGlow({ type: cashDisplayActions.playing });
    setGlobalState("gameState", { ...gameStates, playing: true }); */
  };

  const setGlobalBet = (betType, pos) => {
    console.log(betType, pos);
   /*  let newCash = cash;
    newCash.bet[betType][pos]++;
    console.log(cash.bet);
    setGlobalState("cash", newCash); */
  };

  return (
    <div className="playingField">
      <Store>
        <CashDisplay glowCash={cashGlow} />
        <h1 style={{ color: "white" }}>Game state</h1>
        <button onClick={noWin}>Game Start | No win</button> <br />
        <button onClick={playing}>Playing Game</button> <br />
        <button onClick={win}>End round</button>
        <BetBtns />
      </Store>
    </div>
  );
}

export default App;
