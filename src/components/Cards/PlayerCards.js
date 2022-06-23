import React, { useState } from "react";
import "../../assets/cards.css";
import "../../assets/cardFields.css";
import Card from "./Card";

export default function PlayerCards({ deal, flip, cardValues, fade }) {
  const cardPos = ["c1Pos", "c2Pos", "c3Pos", "c4Pos", "c5Pos"];

  return (
    <div className="playerCardsLR">
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
