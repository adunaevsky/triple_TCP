import React, { useState } from "react";
import "../../../assets/cards.css";
import "../../../assets/cardFields.css";
import Card from "../Card";

export default function PlayerCards({}) {
  const cardPos = ["c1Pos", "c2Pos", "c3Pos", "c4Pos", "c5Pos"];
  const [flip, setFlip] = useState([false, false, false, false, false]);
  const [deal, setDeal] = useState([false, false, false, false, false]);
  const [fade, setFade] = useState([false, false, false, false, false]);
  const [cardValues, setCardValues] = useState([
    "C2",
    "C13",
    "H2",
    "H14",
    "S11",
  ]);
  const flipCards = () => {
    let cardNum = 0;
    let flipInterval = setInterval(() => {
      cardNum++;
      setFlip(() => {
        let result = [];
        for (let i = 0; i < 5; i++) {
          if (i < cardNum) {
            result.push(true);
          } else result.push(false);
        }

        return result;
      });

      if (cardNum === 5) {
        clearInterval(flipInterval);
      }
    }, 200);

   
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

  const updateFade = (c1, c2) => {
    var result = [];

    fade.forEach((f, i) => {
      if (i === c1 || i === c2) {
        result.push(!f);
      } else result.push(f);
    });

    setFade(() => {
      return result;
    });
  };

  return (
    <div className="playerCardsLR">
      <div style={{ zIndex: 1000 }}>
        <button onClick={() => dealCards()}>deal</button>
        <button onClick={() => flipCards()}>flip</button>
        <button onClick={() => clearCards()}>clear</button>
        <button onClick={() => updateFade(0, 1)}>fade 1,2</button>
        <button onClick={() => updateFade(0, 4)}>fade 1,5</button>
        <button onClick={() => updateFade(3, 4)}>fade 4,5</button>
      </div>
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
