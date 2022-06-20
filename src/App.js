import "./assets/App.css";
import CashDisplay from "./components/CashDisplay/CashDisplay";
import BetBtns from "./components/BetBtns/BetBtns";
import LCtrl from "./components/CtrlBtns/LCtrl";
import RCtrl from "./components/CtrlBtns/RCtrl";
import PlayerCards from "./components/Cards/PlayerCards";
import DealerCards from "./components/Cards/DealerCards";
import Deck from "./components/Cards/Deck";

import {
  DealCards,
  FlipCards,
  ClearCards,
} from "./components/Cards/CardActions";

import {
  nextVal,
  initBet,
  initWin,
  initTotal,
  initBetMade,
  durations,
  initStageOptions,
  initStages,
  initPCardPos,
} from "./appSpecs";

import { useState, useReducer, useEffect } from "react";

const CardDeck = new Deck();
CardDeck.newDeck();

const App = () => {
  const [bet, setBet] = useState(initBet);
  const [win, setWin] = useState(initWin);
  const [total, setTotal] = useState(initTotal);
  const [anteBetMade, setAnteBetMade] = useState(initBetMade);
  const stageOptions = initStageOptions;
  const stages = initStages;

  const pCardPos = ["c1Pos", "c2Pos", "c3Pos", "c4Pos", "c5Pos"];
  const [pFlip, setPFlip] = useState([false, false, false, false, false]);
  const [pDeal, setPDeal] = useState([false, false, false, false, false]);
  const [fade, setFade] = useState([false, false, false, false, false]);
  const [pCardValues, setCardValues] = useState(["", "", "", "", ""]);
  const pFlipCards = () => {
    console.log(CardDeck);
    setCardValues(CardDeck.playerCards);
    FlipCards(setPFlip, 5);
  };

  const pDealCards = () => {
    DealCards(setPDeal, 5, CardDeck, "player", dDealCards);
  };
  const pClearCards = () => {
    ClearCards(setPDeal, setPFlip, 5);
  };

  const pUpdateFade = (fadeSpecs) => {
    setFade(() => {
      return fadeSpecs;
    });
  };

  const cardPos = ["c2Pos", "c3Pos", "c4Pos"];
  const [dFlip, setDFlip] = useState([false, false, false]);
  const [dDeal, setDDeal] = useState([false, false, false]);
  const [dCardValues, setDCardValues] = useState(["", "", ""]);
  const dFlipCards = () => {
    FlipCards(setDFlip, 3);
  };

  const dDealCards = () => {
    DealCards(setDDeal, 3, CardDeck, "dealer", pFlipCards);
  };

  const dClearCards = () => {
    ClearCards(setDDeal, setDFlip, 3);
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
    pDealCards();
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
      <DealerCards deal={dDeal} cardValues={dCardValues}></DealerCards>
      <PlayerCards
        deal={pDeal}
        flip={pFlip}
        cardValues={pCardValues}
      ></PlayerCards>
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
