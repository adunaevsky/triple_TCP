import "./assets/App.css";
import CashDisplay from "./components/CashDisplay/CashDisplay";
import BetBtns from "./components/BetBtns/BetBtns";
import LCtrl from "./components/CtrlBtns/LCtrl";
import RCtrl from "./components/CtrlBtns/RCtrl";
import PlayerCards from "./components/Cards/Player/PlayerCards";

import {
  nextVal,
  initBet,
  initWin,
  initTotal,
  initBetMade,
  durations,
} from "./appSpecs";

import { useState, useReducer, useEffect } from "react";

const App = () => {
  const [bet, setBet] = useState(initBet);
  const [win, setWin] = useState(initWin);
  const [total, setTotal] = useState(initTotal);
  const [anteBetMade, setAnteBetMade] = useState(initBetMade);

  const stageOptions = {
    bet: true,
    betDone: false,
    dealCards: false,
    dealCounterDone: false,
  };

  const stages = {
    bet: "deal",
    betDone: "betDone",
    dealCards: "dealCards",
    dealCounterDone: "dealCounterDone",
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

  const dealBtn = () => {
    if (anteBetMade.l && anteBetMade.m && anteBetMade.r) {
      setTotal(() => {
        return { ...total, balance: total.balance - total.bet };
      });
      dispatchStage({ type: stages.betDone });

      setTimeout(() => {
        dealCards();
      }, durations.cashBalance);
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

  const stageReducer = (state, action) => {
    let newState = {};
    for (var key in state) {
      newState[key] = false;
    }

    const result = {
      ...newState,
      [action.type]: true,
    };
    return result;
  };

  const [stage, dispatchStage] = useReducer(stageReducer, stageOptions);

  const dealCards = () => {
    console.log("deal cards here...!");
  };

  return (
    <div className="playingField">

      <CashDisplay
        stage={stage}
        bet={bet}
        total={total}
        win={win}
        anteBetMade={anteBetMade.lmr}
      />
      <PlayerCards></PlayerCards>
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
          action={dealBtn}
        />
      )}
    </div>
  );
};

export default App;
