import React, { useState } from "react";
import "../../assets/cards.css";
import "../../assets/cardFields.css";
import Card from "./Card";

import { DealCards, FlipCards, ClearCards } from "./CardActions";

export default function DealerCards({deal, flip, cardValues}) {
  const cardPos = ["c2Pos", "c3Pos", "c4Pos"];
  //const [flip, setFlip] = useState([false, false, false]);
  //const [deal, setDeal] = useState([false, false, false]);
  //const [cardValues, setCardValues] = useState(["H12", "H9", "C11"]);
/*   const flipCards = () => {
    FlipCards(setFlip, 3);
  };

  const dealCards = () => {
    DealCards(setDeal, 3);
  };

  const clearCards = () => {
    ClearCards(setDeal, setFlip, 3);
  }; */

  return (
    <div className="dealerCards">
{/*       <div style={{ zIndex: 1000 }}>
        <button onClick={() => dealCards()}>deal</button>
        <button onClick={() => flipCards()}>flip</button>
        <button onClick={() => clearCards()}>clear</button>
      </div> */}
      {cardPos.map((pos, i) => {
        return (
          <Card
            pos={pos}
            cardVal={cardValues[i]}
            key={i + "dCard"}
            flip={flip[i]}
            deal={deal[i]}
            /* fade={fade[i]} */
          />
        );
      })}
    </div>
  );
}
