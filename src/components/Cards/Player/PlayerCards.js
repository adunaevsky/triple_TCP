import React, { useState } from "react";
import "../../../assets/cards.css";
import "../../../assets/cardFields.css";
import Card from "../Card";

export default function PlayerCards({}) {
  const cardPos = ["c1Pos", "c2Pos", "c3Pos", "c4Pos", "c5Pos"];
  const [flip, setFlip] = useState([false, false, false, false, false]);
  const [deal, setDeal] = useState([false, false, false, false, false]);
  const [cardValues, setCardValues] = useState([
    "C2",
    "C13",
    "H2",
    "H14",
    "S11",
  ]);
  const flipCards = () => {
    setFlip(() => {
      return [!flip[0], !flip[1], !flip[2], !flip[3], !flip[4]];
    });
  };

  const dealCards = () => {
    let cardNum = 0;
    let dealInterval = setInterval(() => {
      cardNum++;
      setDeal(() => {
        let result = [];
        for (let i = 0; i < 5; i++) {
          if (i < cardNum) {
            result.push(true);
          } else result.push(false);
        }

        return result;
      });

      if (cardNum === 5) {
        clearInterval(dealInterval);
      }
    }, 200);
  };
  const clearCards = () => {
    setDeal(() => {
      return [false, false, false, false, false];
    });
  };

  return (
    <div className="playerCardsLR">
      <div style={{ zIndex: 1000 }}>
        <button onClick={() => dealCards()}>deal</button>
        <button onClick={() => flipCards()}>flip</button>
        <button onClick={() => clearCards()}>clear</button>
      </div>
      {cardPos.map((pos, i) => {
        return (
          <Card
            pos={pos}
            cardVal={cardValues[i]}
            key={i + "pCard"}
            flip={flip[i]}
            deal={deal[i]}
          />
        );
      })}
    </div>
  );
}
