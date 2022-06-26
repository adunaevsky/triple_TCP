class Deck {
  dealerCards;
  playerCards;
  deck;
  devMode = false;
  clearCards() {
    this.dealerCards = ["", "", ""];
    this.playerCards = ["", "", "", "", ""];
  }
  getCard(cardNum, belongsTo) {
    if (!this.devMode) {
      var cardsInDeck = this.deck.length;
      if (belongsTo === "player") {
        this.playerCards[cardNum] = this.deck[cardsInDeck - 1];
      //  console.log('player', this.playerCards[cardNum], cardNum);
      }
      if (belongsTo === "dealer") {
        this.dealerCards[cardNum] = this.deck[cardsInDeck - 1];
        //console.log('dealer', this.dealerCards[cardNum], cardNum);
      }
      this.deck.pop();
    }
  }
  newDeck() {
    var suits = ["C", "H", "S", "D"];
    this.deck = [];
    for (var s = 0; s < suits.length; s++) {
      for (var r = 2; r <= 14; r++) {
        this.deck.push(suits[s] + r);
      }
    }
    this.shuffle(this.deck);
  }

  shuffle(array) {
    var i = 0,
      j = 0,
      temp = null;
    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  constructor() {
    this.clearCards();
    /*        console.log('devMode:', this.devMode);*/
  }
}

export { Deck as default };
