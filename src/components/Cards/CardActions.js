export function DealCards(setDeal, totalCards, Deck, target, doneTask) {
  let cardNum = 0;
   for (let c = 0; c < totalCards; c++) {
    Deck.getCard(c, target);
  }
  
  let dealInterval = setInterval(() => {
    cardNum++;
    setDeal(() => {
      let result = [];
      for (let i = 0; i < totalCards; i++) {
        if (i < cardNum) {
          result.push(true);
        } /* else result.push(false); */
      }
      return result;
    });

    if (cardNum === totalCards) {
      clearInterval(dealInterval);
      doneTask();
    }
  }, 200);
}

export function FlipCards(setFlip, totalCards, doneTask) {
  let cardNum = 0;
  let flipInterval = setInterval(() => {
    cardNum++;
    setFlip(() => {
      let result = [];
      for (let i = 0; i < totalCards; i++) {
        if (i < cardNum) {
          result.push(true);
        } else result.push(false);
      }

      return result;
    });

    if (cardNum === totalCards) {
      clearInterval(flipInterval);
      doneTask();
    }
  }, 200);
}

export function ClearCards(setDeal, setFlip, totalCards) {
  let clearArray = [];

  for (let i = 0; i < totalCards; i++) {
    clearArray.push(false);
  }
  console.log(clearArray, totalCards);
  setDeal(() => {
    return clearArray;
  });
  setFlip(() => {
    return clearArray;
  });
}
