import "./assets/App.css";
import CashDisplay from "./components/CashDisplay/CashDisplay";
import BetBtns from "./components/BetBtns/BetBtns";
import LCtrl from "./components/CtrlBtns/LCtrl";
import RCtrl from "./components/CtrlBtns/RCtrl";

import { useState, useReducer, useContext, useEffect } from "react";

import { Context } from "./Store";

const initBet = {
  bonus3: { l: 0, m: 0, r: 0 },
  play: { l: 0, m: 0, r: 0 },
  ante: { l: 0, m: 0, r: 0 },
  bonus5: { m: 0 },
};

const App = () => {
  const [bet, setBet] = useState(initBet);
  const [win, setWin] = useState({
    ante: { l: 1, m: 2, r: 3 },
    play: { l: 1, m: 2, r: 3 },
    bonus3: { l: 1, m: 2, r: 3 },
    bonus5: { m: 20 },
    anteBonus: { m: 20 },
  });
  const [total, setTotal] = useState({
    bet: 0,
    win: 0,
    balance: 10000,
  });
  const [anteBetMade, setAnteBetMade] = useState({
    l: false,
    m: false,
    r: false,
    lmr: false,
  });

  const nextVal = {
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

  const stageOptions = {
    win: false,
    bet: true,
    betDone: false,
    dealCards: false,
  };

  const updateBet = (betType, pos) => {
    const newBetValue = nextVal[bet[betType][pos]];
    setBet({
      ...bet,
      [betType]: { ...bet[betType], [pos]: newBetValue },
    });
    if (betType === "ante") {
      setAnteBetMade({
        ...anteBetMade,
        [pos]: newBetValue > 0 ? true : false,
        lmr: setLMRAnte(pos, newBetValue),
      });
    }
  };

  const deal = () => {
    if (anteBetMade.l && anteBetMade.m && anteBetMade.r) {
      setTotal(() => {
        return { ...total, balance: total.balance - total.bet };
      });
      dispatchStage({ type: stages.betDone });
    } else {
      console.log("cannot bet");
    }
  };

  const setLMRAnte = (pos, newBetValue) => {
    if (newBetValue === 0) {
      return false;
    }
    let check = { ...anteBetMade, [pos]: true };
    if (check.l && check.m && check.r) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    setTotal(() => {
      let totalBet = 0;
      for (var key in bet) {
        for (var k in bet[key]) {
          totalBet += bet[key][k];
        }
      }
      return { bet: totalBet, win: total.win, balance: total.balance };
    });
  }, [bet]);

  const clearBet = () => {
    if (total.bet > 0) {
      setBet(initBet);
    }
  };

  const stages = {
    betDone: "betDone",
    win: "win",
    noWin: "noWin",
    playing: "playing",
    deal: "deal",
  };

  const stageReducer = (state, action) => {
    let newState = {};
    for (var key in state) {
      newState[key] = false;
    }

    const result = {
      ...newState,
      [stages[action.type]]: true,
    };

    console.log(action, result);
    return result;

    /*     switch (action.type) {
      case stages.win:
        return {
          bet: true,
          win: true,
        };
      case stages.noWin:
        return {
          bet: true,
          win: false,
        };
      case stages.playing:
        return {
          bet: false,
          win: false,
        };
      default:
        return state;
    } */
  };

  const [stage, dispatchStage] = useReducer(stageReducer, stageOptions);

  /*   const winRound = () => {
    dispatchStage({ type: stages.win });
  };
  const noWin = () => {
    dispatchStage({ type: stages.noWin });
  };
  const playing = () => {
    dispatchStage({ type: stages.playing });
  }; */

  const dealCards = () => {
    if (stage.betDone) {
      console.log("cards dealing now....");
      dispatchStage({ type: stageOptions.dealCards });
    }
  };

  return (
    <div className="playingField">
      <CashDisplay
        stage={stage}
        bet={bet}
        total={total}
        win={win}
        dealCards={dealCards}
      />
      {/*  <h1 style={{ color: "white" }}>Game state</h1>
      <h2 style={{ color: "white" }}>test: </h2>
      <button onClick={noWin}>Game Start | No win</button> <br />
      <button onClick={playing}>Playing Game</button> <br />
      <button onClick={winRound}>End round</button> */}
      {stage.bet && <BetBtns updateBet={updateBet} bet={bet} />}
      {stage.bet && (
        <LCtrl
          topLbl={"CLEAR"}
          opacity={total.bet > 0 ? 1 : 0.2}
          btmLbl={""}
          action={clearBet}
        />
      )}
      {stage.bet && (
        <RCtrl
          topLbl={"DEAL"}
          opacity={anteBetMade.lmr ? "1" : "0.2"}
          btmLbl={""}
          action={deal}
        />
      )}
    </div>
  );
};

export default App;
