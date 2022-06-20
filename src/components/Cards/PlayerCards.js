import React, { useState } from "react";
import "../../assets/cards.css";
import "../../assets/cardFields.css";
import Card from "./Card";

import { DealCards, FlipCards, ClearCards } from "./CardActions";

export default function PlayerCards({deal, flip, cardValues}) {
  const cardPos = ["c1Pos", "c2Pos", "c3Pos", "c4Pos", "c5Pos"];
 // const [flip, setFlip] = useState([false, false, false, false, false]);
 // const [deal, setDeal] = useState([false, false, false, false, false]);
  const [fade, setFade] = useState([false, false, false, false, false]);
/*   const [cardValues, setCardValues] = useState([
    "C2",
    "C13",
    "H2",
    "H14",
    "S11",
  ]); */
/*   const flipCards = () => {
    FlipCards(setFlip, 5);
  };

  const dealCards = () => {
    DealCards(setDeal, 5);
  };
  const clearCards = () => {
    ClearCards(setDeal, setFlip, 5);
  };

  const updateFade = (fadeSpecs) => {
    setFade(() => {
      return fadeSpecs;
    });
  }; */
  return (
    <div className="playerCardsLR">
{/*       <div style={{ zIndex: 1000 }}>
        <button onClick={() => dealCards()}>deal</button>
        <button onClick={() => flipCards()}>flip</button>
        <button onClick={() => clearCards()}>clear</button>
        <button onClick={() => updateFade([true, true, false, false, false])}>
          fade 1,2
        </button>
        <button onClick={() => updateFade([true, false, false, false, true])}>
          fade 1,5
        </button>
        <button onClick={() => updateFade([false, false, false, true, true])}>
          fade 4,5
        </button>
        <button onClick={() => updateFade([false, false, false, false, false])}>
          clear fade
        </button>
      </div> */}
      {cardPos.map((pos, i) => {
        return (
          <Card
            pos={pos}
            cardVal={cardValues[i]}
            key={i + "pCard"}
            flip={flip[i]}
            deal={deal[i]}
            fade={fade[i]}
          />
        );
      })}
    </div>
  );
}
