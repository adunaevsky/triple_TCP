import React, { useContext } from "react";
import { Context } from "../../Store";

export default function BetBtns({}) {
  const [s, setState] = useContext(Context);

  const setBet = (betType, pos) => {
    let newState = s;
    newState.cash.bet[betType][pos]++;

    setState((previous) => {
      console.log(previous);
      return newState;
    });
  };

  return (
    <div>
      <h1 style={{ color: "white" }}>Bets</h1>
      <button
        onClick={() => {
          setBet("ante", "l");
        }}
      >
        L Ante
      </button>
      <button
        onClick={() => {
          setBet("bonus3", "l");
        }}
      >
        L 3 Extra Bonus
      </button>{" "}
      |
      <button
        onClick={() => {
          setBet("ante", "m");
        }}
      >
        M Ante
      </button>
      <button
        onClick={() => {
          setBet("bonus3", "m");
        }}
      >
        M 3 Extra Bonus
      </button>{" "}
      |
      <button
        onClick={() => {
          setBet("ante", "r");
        }}
      >
        R Ante
      </button>
      <button
        onClick={() => {
          setBet("bonus3", "r");
        }}
      >
        R 3 Extra Bonus
      </button>{" "}
      <br />
      <br />
      <button
        onClick={() => {
          setBet("bonus5", "m");
        }}
      >
        5 Extra Bonus
      </button>
    </div>
  );
}
