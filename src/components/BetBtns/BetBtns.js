import React from "react";
/* import { Context } from "../../Store"; */

export default function BetBtns({updateBet}) {
  return (
    <div>
      <h3>Bonus</h3>
      <button onClick={() => updateBet("bonus3", "l")}>Bonus L</button>{" "}
      <button onClick={() => updateBet("bonus3", "m")}>Bonus M</button>{" "}
      <button onClick={() => updateBet("bonus3", "r")}>Bonus R</button>
      <h3>Play</h3>
      <button onClick={() => updateBet("play", "l")}>Play L</button>{" "}
      <button onClick={() => updateBet("play", "m")}>Play M</button>{" "}
      <button onClick={() => updateBet("play", "r")}>Play R</button>
      <h3>Ante</h3>
      <button onClick={() => updateBet("ante", "l")}>Ante L</button>{" "}
      <button onClick={() => updateBet("ante", "m")}>Ante M</button>{" "}
      <button onClick={() => updateBet("ante", "r")}>Ante R</button>
      <h3>5C Bonus</h3>
      <button onClick={() => updateBet("bonus5", "m")}>Bonus 5</button>{" "}
    </div>
  );
}
