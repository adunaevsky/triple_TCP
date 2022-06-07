import React, { useState, useReducer, useContext } from "react";
import "../../assets/CashDisplay.css";
import CashBoxes from "./CashBoxes";
import CashLabels from "./CashLabels";
import Eye from "./Eye";
import Return from "./Return";
import { Context } from "../../Store";

import { useStore } from "easy-peasy";

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

export default function CashDisplay({ glowCash }) {
  const s = useStore((state) => state).getState();

  /* const [s, setState] = useState({}); */
  console.log(s);

  const cashDisplayView = {
    wins: "wins",
    bets: "bets",
    total: "total",
  };

  const cashDisplayStateReducer = (state, action) => {
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
                  {$format(s.cash.bet.ante.l)}
                </text>
                <text {...commonTextAttr} y={betSpecs[1].yText}>
                  {$format(s.cash.bet.ante.m)}
                </text>
                <text {...col3} y={betSpecs[1].yText}>
                  {$format(s.cash.bet.ante.r)}
                </text>
              </g>

              <g>
                <text {...col1} y={betSpecs[2].yText}>
                  {$format(s.cash.bet.play.l)}
                </text>
                <text {...commonTextAttr} y={betSpecs[2].yText}>
                  {$format(s.cash.bet.play.m)}
                </text>
                <text {...col3} y={betSpecs[2].yText}>
                  {$format(s.cash.bet.play.r)}
                </text>
              </g>
           
              <g>
                <text {...col1} y={betSpecs[3].yText}>
                  {$format(s.cash.bet.bonus3.l)}
                </text>
                <text {...commonTextAttr} y={betSpecs[3].yText}>
                  {$format(s.cash.bet.bonus3.m)}
                </text>
                <text {...col3} y={betSpecs[3].yText}>
                  {$format(s.cash.bet.bonus3.r)}
                </text>
              </g>
              <text {...commonTextAttr} y={betSpecs[4].yText}>
                {$format(s.cash.bet.bonus5.m)}
              </text>
            </g>
          </g>
        )}

        {cashView.wins && (
          <g>
            <CashBoxes commonBoxAttr={commonBoxAttr} specs={betSpecs} />
            <CashLabels specs={betSpecs} />

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
                  {$format(s.cash.win.ante.l)}
                </text>
                <text {...commonTextAttr} y={betSpecs[1].yText}>
                  {$format(s.cash.win.ante.m)}
                </text>
                <text {...col3} y={betSpecs[1].yText}>
                  {$format(s.cash.win.ante.r)}
                </text>
              </g>

              <g>
                <text {...col1} y={betSpecs[2].yText}>
                  {$format(s.cash.win.play.l)}
                </text>
                <text {...commonTextAttr} y={betSpecs[2].yText}>
                  {$format(s.cash.win.play.m)}
                </text>
                <text {...col3} y={betSpecs[2].yText}>
                  {$format(s.cash.win.play.r)}
                </text>
              </g>
              <text {...commonTextAttr} y={betSpecs[3].yText}>
                {$format(s.cash.win.anteBonus)}
              </text>
              <g>
                <text {...col1} y={betSpecs[4].yText}>
                  {$format(s.cash.win.bonus3.l)}
                </text>
                <text {...commonTextAttr} y={betSpecs[4].yText}>
                  {$format(s.cash.win.bonus3.m)}
                </text>
                <text {...col3} y={betSpecs[4].yText}>
                  {$format(s.cash.win.bonus3.r)}
                </text>
              </g>
              <text {...commonTextAttr} y={betSpecs[5].yText}>
                {$format(s.cash.win.bonus5)}
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
              className={glowCash.bet ? "cashBox glow" : "cashBox"}
              y={mainSpecs[1].yBox}
            />
            <rect
              id="glowTotalWin"
              y={mainSpecs[2].yBox}
              {...commonBoxAttr}
              className={glowCash.win ? "cashBox glow" : "cashBox"}
            />

            <g>
              <text {...commonTextAttr} y={mainSpecs[0].yText}>
                {$format(s.cash.total.balance)}
              </text>

              <text {...commonTextAttr} y={mainSpecs[1].yText}>
                {$format(s.cash.total.bet)}
              </text>

              <text {...commonTextAttr} y={mainSpecs[2].yText}>
                {$format(s.cash.total.win)}
              </text>
            </g>
          </g>
        )}

        {glowCash.bet & cashView.total && (
          <Eye transform={mainSpecs[1].eye} view={enableBetsView} />
        )}
        {glowCash.win & cashView.total && (
          <Eye transform={mainSpecs[2].eye} view={enableWinsView} />
        )}
        {(cashView.bets || cashView.wins) && <Return view={enableTotalView} />}
      </svg>
    </div>
  );
}
