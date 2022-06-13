import React, { useEffect, useReducer, useState } from "react";
import "../../assets/CashDisplay.css";
import CashLabels from "./CashLabels";
import Eye from "./Eye";
import Return from "./Return";
import CashBoxes from "./CashBoxes";
import { useCountUp } from "react-countup";
import Counter from "./Counter";

import {
  commonTextAttr,
  commonBoxAttr,
  mainSpecs,
  betSpecs,
  viewHeaders,
  viewTitle,
  col1,
  col3,
} from "./specs";

export default function CashDisplay({ stage, bet, total, win, dealCards }) {
  const cashDisplayView = {
    wins: "wins",
    bets: "bets",
    total: "total",
  };

  const [startBetValue, setStartBetValue] = useState(total.bet);
  const [startBalanceValue, setStartBalanceValue] = useState(total.bet);
  const [startWinValue, setStartWinValue] = useState(total.win);

  const readyToDeal = () => {
    dealCards();
  };

  const cashDisplayStateReducer = (state, action) => {
    setStartBetValue(total.bet);
    setStartBalanceValue(total.balance);
    setStartWinValue(total.win);
    let defaultView = {
      wins: false,
      bets: false,
      total: false,
    };

    switch (action.type) {
      case cashDisplayView.wins:
        return {
          ...defaultView,
          wins: true,
        };
      case cashDisplayView.bets:
        return {
          ...defaultView,
          bets: true,
        };
      case cashDisplayView.total:
        return {
          ...defaultView,
          total: true,
        };
      default:
        return state;
    }
  };

  const [cashView, setCashView] = useReducer(cashDisplayStateReducer, {
    wins: false,
    bets: false,
    total: true,
  });

  const $format = function (x) {
    if (x === "") {
      return x;
    }
    return "$" + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const enableBetsView = () => {
    setCashView({ type: cashDisplayView.bets });
  };
  const enableWinsView = () => {
    setCashView({ type: cashDisplayView.wins });
  };
  const enableTotalView = () => {
    setCashView({ type: cashDisplayView.total });
  };

  return (
    <div className="cashDisplays">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 80">
        {cashView.bets && (
          <g>
            <CashBoxes commonBoxAttr={commonBoxAttr} specs={betSpecs} />
            <CashLabels specs={betSpecs} />

            <g>
              <text {...viewTitle} x="18">
                BETS
              </text>
              <text {...viewHeaders} x="68">
                Left
              </text>
              <text {...viewHeaders} x="100">
                Middle
              </text>
              <text {...viewHeaders} x="130">
                Right
              </text>

              <g>
                <text {...col1} y={betSpecs[1].yText}>
                  {$format(bet.ante.l)}
                </text>
                <text {...commonTextAttr} y={betSpecs[1].yText}>
                  {$format(bet.ante.m)}
                </text>
                <text {...col3} y={betSpecs[1].yText}>
                  {$format(bet.ante.r)}
                </text>
              </g>

              <g>
                <text {...col1} y={betSpecs[2].yText}>
                  {$format(bet.play.l)}
                </text>
                <text {...commonTextAttr} y={betSpecs[2].yText}>
                  {$format(bet.play.m)}
                </text>
                <text {...col3} y={betSpecs[2].yText}>
                  {$format(bet.play.r)}
                </text>
              </g>

              <g>
                <text {...col1} y={betSpecs[3].yText}>
                  {$format(bet.bonus3.l)}
                </text>
                <text {...commonTextAttr} y={betSpecs[3].yText}>
                  {$format(bet.bonus3.m)}
                </text>
                <text {...col3} y={betSpecs[3].yText}>
                  {$format(bet.bonus3.r)}
                </text>
              </g>
              <text {...commonTextAttr} y={betSpecs[4].yText}>
                {$format(bet.bonus5.m)}
              </text>
            </g>
          </g>
        )}

        {cashView.wins && (
          <g>
            <g>
              <text {...viewTitle} x="18">
                WINS
              </text>
              <text {...viewHeaders} x="68">
                Left
              </text>
              <text {...viewHeaders} x="100">
                Middle
              </text>
              <text {...viewHeaders} x="130">
                Right
              </text>

              <g>
                <text {...col1} y={betSpecs[1].yText}>
                  {$format(win.ante.l)}
                </text>
                <text {...commonTextAttr} y={betSpecs[1].yText}>
                  {$format(win.ante.m)}
                </text>
                <text {...col3} y={betSpecs[1].yText}>
                  {$format(win.ante.r)}
                </text>
              </g>

              <g>
                <text {...col1} y={betSpecs[2].yText}>
                  {$format(win.play.l)}
                </text>
                <text {...commonTextAttr} y={betSpecs[2].yText}>
                  {$format(win.play.m)}
                </text>
                <text {...col3} y={betSpecs[2].yText}>
                  {$format(win.play.r)}
                </text>
              </g>
              <text {...commonTextAttr} y={betSpecs[3].yText}>
                {$format(win.anteBonus)}
              </text>
              <g>
                <text {...col1} y={betSpecs[4].yText}>
                  {$format(win.bonus3.l)}
                </text>
                <text {...commonTextAttr} y={betSpecs[4].yText}>
                  {$format(win.bonus3.m)}
                </text>
                <text {...col3} y={betSpecs[4].yText}>
                  {$format(win.bonus3.r)}
                </text>
              </g>
              <text {...commonTextAttr} y={betSpecs[5].yText}>
                {$format(win.bonus5)}
              </text>
            </g>
          </g>
        )}

        {cashView.total && (
          <g>
            <CashBoxes commonBoxAttr={commonBoxAttr} specs={mainSpecs} />
            <CashLabels specs={mainSpecs} />

            <rect
              id="glowHandWins"
              {...commonBoxAttr}
              className={stage.bet ? "cashBox glow" : "cashBox"}
              y={mainSpecs[1].yBox}
            />
            <rect
              id="glowTotalWin"
              y={mainSpecs[2].yBox}
              {...commonBoxAttr}
              className={stage.win ? "cashBox glow" : "cashBox"}
            />

            <g>
              <Counter
                y={mainSpecs[0].yText}
                value={total.balance}
                attr={commonTextAttr}
                start={startBalanceValue}
                doneAction={readyToDeal}
                duration={0.3}
              />
              <Counter
                y={mainSpecs[1].yText}
                value={total.bet}
                attr={commonTextAttr}
                start={startBetValue}
                duration={0.5}
              />
              <Counter
                y={mainSpecs[2].yText}
                value={total.win}
                attr={commonTextAttr}
                start={startWinValue}
              />
            </g>
          </g>
        )}

        {cashView.total && (
          <Eye transform={mainSpecs[1].eye} view={enableBetsView} />
        )}
        {stage.win & cashView.total && (
          <Eye transform={mainSpecs[2].eye} view={enableWinsView} />
        )}
        {(cashView.bets || cashView.wins) && <Return view={enableTotalView} />}
      </svg>
    </div>
  );
}
