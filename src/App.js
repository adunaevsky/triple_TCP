import "./assets/App.css";
import CashDisplay from "./components/CashDisplay/CashDisplay";
import BetBtns from "./components/BetBtns/BetBtns";
import LCtrl from "./components/CtrlBtns/LCtrl";
import RCtrl from "./components/CtrlBtns/RCtrl";
import PlayerCards from "./components/Cards/PlayerCards";
import DealerCards from "./components/Cards/DealerCards";
import Deck from "./components/Cards/Deck";
import result5C from "./components/Cards/result5C";
import result3C from "./components/Cards/result3C";
import PlayerHands, {
  RevealResults,
  SetPHands,
} from "./components/ResultLabels/PlayerHands";

import DealerHand from "./components/ResultLabels/DealerHand";

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
  initialPlayerHands,
  FadeCardOptions,
  FadeResultOptions,
  NextGameStage,
  initDHandResult,
} from "./appSpecs";

import { useState, useReducer, useEffect } from "react";

const CardDeck = new Deck();
CardDeck.newDeck();

const fiveCResult = new result5C();
const threeCResult = new result3C();
let pResult5, pResult3L, pResult3M, pResult3R, d3Result;

const App = () => {
  const [bet, setBet] = useState(initBet);
  const [win, setWin] = useState(initWin);
  const [total, setTotal] = useState(initTotal);
  const [anteBetMade, setAnteBetMade] = useState(initBetMade);
  const stageOptions = initStageOptions;
  const stages = initStages;
  const fiveFalse = [false, false, false, false, false];
  const fourFalse = [false, false, false, false];

  //  const pCardPos = ["c1Pos", "c2Pos", "c3Pos", "c4Pos", "c5Pos"];
  const [pFlip, setPFlip] = useState(fiveFalse);
  const [pDeal, setPDeal] = useState(fiveFalse);
  const [fadeCards, setFadeCards] = useState(fiveFalse);
  const [fadeResults, setFadeResults] = useState(fourFalse);
  const [pCardValues, setCardValues] = useState(["", "", "", "", ""]);

  const [pHandResults, setPHandResults] = useState(initialPlayerHands);
  const [showPResults, setShowPResults] = useState(fourFalse);

  const [dHandResult, setDHandResult] = useState(initDHandResult);
  const [fold, setFold] = useState({ l: false, m: false, r: false });
  const [resultLbl, setResultLbl] = useState({ l: "", m: "", r: "" });

  const pFlipCards = () => {
    setCardValues(CardDeck.playerCards);
    FlipCards(setPFlip, 5, showPHandResults);
  };

  const pDealCards = () => {
    DealCards(setPDeal, 5, CardDeck, "player", dDealCards);
  };
  const pClearCards = () => {
    ClearCards(setPDeal, setPFlip, 5);
  };

  const pUpdateFade = (fadeSpecs) => {
    setFadeCards(() => {
      return fadeSpecs;
    });
  };

  //  const cardPos = ["c2Pos", "c3Pos", "c4Pos"];
  const [dFlip, setDFlip] = useState([false, false, false]);
  const [dDeal, setDDeal] = useState([false, false, false]);
  const [dCardValues, setDCardValues] = useState(["", "", ""]);
  const dFlipCards = () => {
    setDCardValues(CardDeck.dealerCards);
    FlipCards(setDFlip, 3, dResult);
  };

  const dResult = () => {
    d3Result = threeCResult.threeCards(CardDeck.dealerCards);

    var dQualify = threeCResult.dQualify(d3Result, CardDeck.dealerCards);

    dispatchStage({ type: stages.showDealerResult });

    /*  console.log('todo: calculate wins and and adjust player balance.');
    console.log(pResult5, pResult3L, pResult3M, pResult3R, d3Result); */
    /* 
    var LResultLbl = threeCResult.pResult(
      d3Result.rank,
      pResult3L.rank,
      d3Result.tieBreaker,
      pResult3L.tieBreaker,
      dQualify,
      fold.l
    ); */

    setDHandResult({ fill: d3Result.fill, label: d3Result.dLabel });

    var results = {
      l: threeCResult.pResult(
        d3Result.rank,
        pResult3L.rank,
        d3Result.tieBreaker,
        pResult3L.tieBreaker,
        dQualify,
        fold.l
      ),
      m: threeCResult.pResult(
        d3Result.rank,
        pResult3M.rank,
        d3Result.tieBreaker,
        pResult3M.tieBreaker,
        dQualify,
        fold.m
      ),
      r: threeCResult.pResult(
        d3Result.rank,
        pResult3R.rank,
        d3Result.tieBreaker,
        pResult3R.tieBreaker,
        dQualify,
        fold.r
      ),
    };

    setResultLbl(results);

    //    console.log("to do: record fold decision!", LResultLbl);

    console.log(results);
    console.log('to do: show win / push / no win !');

    setTimeout(() => {
      dispatchStage({ type: stages.endRound });
    }, 300);
  };

  const dDealCards = () => {
    DealCards(setDDeal, 3, CardDeck, "dealer", pFlipCards);
  };

  const dClearCards = () => {
    ClearCards(setDDeal, setDFlip, 3);
  };

  const updateBet = (betType, pos, value) => {
    const newBetValue = betType !== "play" ? nextVal[bet[betType][pos]] : value;
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
        pDealCards();
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

  const showPHandResults = () => {
    setTimeout(() => {
      pResult5 = fiveCResult.fiveCards(CardDeck.playerCards);
      pResult3L = threeCResult.threeCards(CardDeck.playerCards.slice(0, 3));
      pResult3M = threeCResult.threeCards(CardDeck.playerCards.slice(1, 4));
      pResult3R = threeCResult.threeCards(CardDeck.playerCards.slice(2));

      SetPHands(setPHandResults, pResult5, pResult3L, pResult3M, pResult3R);
      RevealResults(setShowPResults, displayMoveOptions);
      dispatchStage({ type: stages.showPlayerHands });
    }, 500);
  };

  const displayMoveOptions = (move) => {
    if (move === "revealDealer") {
      setFadeCards(FadeCardOptions.none);
      setFadeResults(FadeResultOptions.none);
      dispatchStage({ type: stages.hideCtrls });
      dFlipCards();

      // console.log("flip dealer cards here, and reveal results.");
    } else {
      setFadeCards(FadeCardOptions[move]);
      setFadeResults(FadeResultOptions[move]);
      dispatchStage({ type: stages.hideCtrls });
      setTimeout(() => {
        dispatchStage({ type: stages["pMove_" + move] });
      }, 800);
    }
  };

  const playBtn = (pos) => {
    updateBet("play", pos, bet.ante[pos]);
    setFold({ ...fold, [pos]: false });
    setTotal(() => {
      return { ...total, balance: total.balance - bet.ante[pos] };
    });

    displayMoveOptions(NextGameStage[pos]);
  };
  const foldBtn = (pos) => {
    displayMoveOptions(NextGameStage[pos]);
    setFold({ ...fold, [pos]: true });
  };
  const rebet = (pos) => {
    console.log("to do rebet.");
  };
  const rebetAndDeal = (pos) => {
    console.log("to do rebet and deal.");
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
      <DealerCards
        deal={dDeal}
        cardValues={dCardValues}
        flip={dFlip}
      ></DealerCards>
      <PlayerCards
        deal={pDeal}
        flip={pFlip}
        cardValues={pCardValues}
        fade={fadeCards}
      ></PlayerCards>
      {(stage.showPlayerHands ||
        stage.pMove_m ||
        stage.pMove_l ||
        stage.hideCtrls ||
        stage.showDealerResult ||
        stage.endRound ||
        stage.pMove_r) && (
        <PlayerHands
          results={pHandResults}
          show={showPResults}
          fade={fadeResults}
          outcome={resultLbl}
        />
      )}
      {(stage.showDealerResult || stage.endRound) && (
        <DealerHand result={dHandResult}  />
      )}

      {stage.bet && (
        <>
          <BetBtns updateBet={updateBet} bet={bet} />
          <LCtrl
            topLbl={"CLEAR"}
            opacity={total.bet > 0 ? 1 : 0.2}
            btmLbl={""}
            action={clearBet}
          />
          <RCtrl
            topLbl={"DEAL"}
            opacity={anteBetMade.lmr ? "1" : "0.2"}
            btmLbl={""}
            action={dealBtn}
          />
        </>
      )}
      {stage.pMove_m && !stage.hideCtrls && (
        <>
          <LCtrl
            topLbl={"MIDDLE"}
            opacity={total.bet > 0 ? 1 : 0.2}
            btmLbl={"FOLD"}
            action={foldBtn}
            actionSpec="m"
          />
          <RCtrl
            topLbl={"MIDDLE"}
            opacity={anteBetMade.lmr ? "1" : "0.2"}
            btmLbl={"PLAY"}
            action={playBtn}
            actionSpec="m"
          />
        </>
      )}

      {stage.pMove_l && !stage.hideCtrls && (
        <>
          <LCtrl
            topLbl={"LEFT"}
            opacity={"1"}
            btmLbl={"FOLD"}
            action={foldBtn}
            actionSpec="l"
          />
          <RCtrl
            topLbl={"LEFT"}
            opacity={"1"}
            btmLbl={"PLAY"}
            action={playBtn}
            actionSpec="l"
          />
        </>
      )}
      {stage.pMove_r && !stage.hideCtrls && (
        <>
          <LCtrl
            topLbl={"RIGHT"}
            opacity={"1"}
            btmLbl={"FOLD"}
            action={foldBtn}
            actionSpec="r"
          />
          <RCtrl
            topLbl={"RIGHT"}
            opacity={"1"}
            btmLbl={"PLAY"}
            action={playBtn}
            actionSpec="r"
          />
        </>
      )}
      {stage.endRound && (
        <>
          <LCtrl
            topLbl={"REBET"}
            opacity={"1"}
            btmLbl={""}
            action={rebet}
            actionSpec=""
          />
          <RCtrl
            topLbl={"REBET"}
            opacity={"1"}
            btmLbl={"& DEAL"}
            action={rebetAndDeal}
            actionSpec=""
          />
        </>
      )}
    </div>
  );
};

export default App;
