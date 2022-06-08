import React, {useReducer } from "react";
import "../../assets/CashDisplay.css";
import CashLabels from "./CashLabels";
import Eye from "./Eye";
import Return from "./Return";
import TextBox from "./TextBox";
import CashBoxes from "./CashBoxes"

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

export default function CashDisplay({ glowCash, bet, total, win }) {
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
                {$format(total.balance)}
              </text>

              <text {...commonTextAttr} y={mainSpecs[1].yText}>
                {$format(total.bet)}
              </text>

              <text {...commonTextAttr} y={mainSpecs[2].yText}>
                {$format(total.win)}
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
