import React from "react";
import "../../assets/CashDisplay.css";
import CashBoxes from "./CashBoxes";
import CashLabels from "./CashLabels";
import { useGlobalState, setGlobalState } from "../../state";

export default function CashDisplay({ glowCash }) {
  console.log(glowCash);
  const xMarginBoxes = "66";

  const commonTextAttr = {
    textAnchor: "middle",
    fontWeight: "bold",
    fontSize: "9",
    fill: "#FFFFFF",
    opacity: "1",
    x: "93",
  };

  const [cash, setCash] = useGlobalState("cash");

  const $format = function (x) {
    if (x === "") {
      return x;
    }
    return "$" + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="cashDisplays">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 80">
        <CashBoxes xMarginBoxes={xMarginBoxes} />
        <CashLabels />

        <rect
          id="glowTotalWin"
          className="cashBox"
          x={xMarginBoxes}
          y="36.5"
          rx="2"
          width="53.5"
          height="10"
        />
        <rect
          id="glowHandWins"
          className="cashBox"
          x={xMarginBoxes}
          y="24.5"
          rx="2"
          width="53.5"
          height="10"
        />

        <text {...commonTextAttr} y="8.5">
          {$format(cash.bal)}
        </text>
        <text {...commonTextAttr} y="20.5">
          {$format(
            cash.bet.l +
              "+" +
              cash.bet.m +
              "+" +
              cash.bet.r +
              "+" +
              cash.bet.all
          )}
        </text>
        <text {...commonTextAttr} y="32.5">
          {$format(
            cash.win.l +
              "+" +
              cash.win.m +
              "+" +
              cash.win.r +
              "+" +
              cash.win.all
          )}
        </text>
        <text {...commonTextAttr} y="44.5">
          {$format(cash.totalwin)}
        </text>
      </svg>
    </div>
  );
}
