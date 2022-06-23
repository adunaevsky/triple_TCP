import orderBy from "lodash.orderby";
import sortBy from "lodash.sortby";
class threeCardResults {

    threeCards(pCards) {
        var card = [], r = {}
        pCards.forEach((a) => {
            card.push({
                suit: a.charAt(0),
                value: parseInt(a.slice(1, a.length))
            })
        });

        if (this.royalSpades(card)) {
            r.label = 'Royal ♠♠♠ 500X';
            r.dLabel = 'Short Royal';
            r.anteBonusPayout = 0;
            r.threeBonusPayout = 500;
            r.fill = '#2d0282';
            r.rank = 7;
        }
        else if (this.royal(card)) {
            r.label = 'Short Royal 200X';
            r.dLabel = 'Short Royal';
            r.anteBonusPayout = 0;
            r.threeBonusPayout = 200;
            r.fill = '#824e02';
            r.rank = 6;
        }
        else if (this.straightFlush(card)) {
            r.label = 'Straight Flush 5X 100X';
            r.dLabel = 'Straight Flush';
            r.anteBonusPayout = 5;
            r.threeBonusPayout = 100;
            r.fill = '#820271';
            r.rank = 5;
            r.tieBreaker = orderBy(card, ['value'], ['desc']);
        }
        else if (this.threeOfKind(card)) {
            r.label = '3 of a Kind 4X 20X';
            r.dLabel = '3 of a Kind';
            r.anteBonusPayout = 4;
            r.threeBonusPayout = 20;
            r.fill = '#05363f';
            r.rank = 4;
            r.tieBreaker = orderBy(card, ['value'], ['desc']);
        }
        else if (this.stright(card)) {
            r.label = 'Straight 1X 5X';
            r.dLabel = 'Straight';
            r.anteBonusPayout = 1;
            r.threeBonusPayout = 5;
            r.fill = '#a90118';
            r.rank = 3;
            r.tieBreaker = orderBy(card, ['value'], ['desc']);
        }
        else if (this.flush(card)) {
            r.label = 'Flush 4X';
            r.dLabel = 'Flush';
            r.anteBonusPayout = 0;
            r.threeBonusPayout = 4;
            r.fill = '#021782';
            r.rank = 2;
            r.tieBreaker = orderBy(card, ['value'], ['desc']);
        }
        else if (this.pair(card)) {
            r.label = 'Pair 2X';
            r.dLabel = 'Pair';
            r.anteBonusPayout = 0;
            r.threeBonusPayout = 2;
            r.fill = '#178202';
            r.rank = 1;
            r.tieBreaker = this.setPairBreaker(card);
        }
        else {
            r.label = 'High Card';
            r.dLabel = 'High Card';
            r.anteBonusPayout = 0;
            r.threeBonusPayout = 0;
            r.fill = '#424242';
            r.rank = 0;
            r.tieBreaker = orderBy(card, ['value'], ['desc']);
        }
        r.antePayout = 1;

        return r;
    }

    pair(card) {
        if (card[0].value === card[1].value ||
            card[0].value === card[2].value ||
            card[1].value === card[2].value
        ) {
            return true;
        }
        return false;
    }

    setPairBreaker(card) {
        var pair, highCard;
        if (card[0].value === card[1].value) { pair = card[0]; highCard = card[2]; }
        if (card[0].value === card[2].value) { pair = card[0]; highCard = card[1]; }
        if (card[1].value === card[2].value) { pair = card[1]; highCard = card[0]; }
        return {
            pair: pair,
            highCard: highCard
        }
    }

    flush(card) {
        return this.findSameSuits(card).length === 3 ? true : false;
    }

    stright(card) {
        return this.orderedValues(card) ? true : false;
    }

    threeOfKind(card) {
        var result = true;
        var sameValue = [];
        card.forEach((c, i) => {
            if (i === 0) {
                sameValue.push(c.value);
            } else if (c.value === card[i - 1].value) {
                sameValue.push(c.value);
            }
        });
        if (sameValue.length !== 3) {
            result = false;
        }
        return result;
    }

    straightFlush(card) {
        return this.findSameSuits(card).length === 3 && this.orderedValues(card) ? true : false;
    }

    royalSpades(card) {
        var result = true;
        var spadeCardValues = [];
        card.forEach( (c) => {
            if (c.suit === 'S') { spadeCardValues.push(c.value); }
        });

        if (spadeCardValues.length === 3) {
            var reqValues = [12, 13, 14];
            reqValues.forEach((v) => {
                var valueCheck = spadeCardValues.indexOf(v);
                if (valueCheck === -1) { result = false; }
            });
        } else {
            result = false;
        }
        return result;
    }

    royal(card) {
        var result = true;
        var sameSuits = this.findSameSuits(card);
        if (sameSuits.length === 3) {
            var reqValues = [12, 13, 14];
            reqValues.forEach( (v) => {
                var valueCheck = sameSuits.indexOf(v);
                if (valueCheck === -1) { result = false; }
            });
        } else {
            result = false;
        }
        return result;
    }

    orderedValues(card) {
        var result = true;
        var aceFound = false;
        var finalResult = false;
        var sortedCards = sortBy(card, [function (c) { return c.value; }]);
        sortedCards.forEach( (c, i) => {
            if (c.value === 14) { aceFound = true; }
            if (i > 0 && c.value !== sortedCards[i - 1].value + 1) { result = false; }
        });

        if (result) {
            finalResult = true;
        }

        var result2 = true;
        if (aceFound) {
            card.forEach( (c) => {
                if (c.value === 14) { c.value = 1; }
            });

            sortedCards = sortBy(card, [function (c) { return c.value; }]);
            sortedCards.forEach( (c, i) => {
                if (i > 0 && c.value !== sortedCards[i - 1].value + 1) { result2 = false; }
            });
            card.forEach( (c) => {
                if (c.value === 1) { c.value = 14 }
            });

            if (result2) {
                finalResult = true;
            }
        }


        return finalResult;
    }

    findSameSuits(card) {
        var sameSuits = [];
        card.forEach( (c, i) => {
            if (i === 0) {
                sameSuits.push(c.value);
            } else if (c.suit === card[i - 1].suit) {
                sameSuits.push(c.value);
            }
        });
        return sameSuits;
    }

    dQualify(dResults, cards) {
        var qOrHIgherFound = false;
        var result = false;

        cards.forEach( (a) => {
            var value = parseInt(a.slice(1, a.length));
            if (value === 12 || value === 13 || value === 14) {
                qOrHIgherFound = true;
            }
        });


        if (dResults.rank > 0 || qOrHIgherFound) {
            result = true;
        }

        return result;

    }

    pResult(dRank, pRank, dTieBreaker, pTieBreaker, dQualify, fold) {

        if (fold) {
            return 'NO WIN';
        }

        if (dRank < pRank || !dQualify) {
            return 'WIN';
        }
        if (dRank > pRank) {
            return 'NO WIN'; //lose
        }
        else {
            switch (dRank) {
                case 1:  // pair
                    return this.breakPair(dTieBreaker, pTieBreaker);
                case 0: //highcard
                case 2: //Flush
                case 3: //Stright 
                case 4: //3 of a kind 
                case 5: //Stright flush 
                    return this.compareHighToLowValues(dTieBreaker, pTieBreaker);
                case 6:
                    return 'PUSH'; //Royal tie
                default:
                    return 'to be done!!';
            }
        }
    }

    /*    breakHighCard(dCards, pCards) {
            return this.compareHighToLowValues(dCards, pCards);
        }*/

    breakPair(dCards, pCards) {
        var result = 'PUSH';
        if (dCards.pair.value < pCards.pair.value) { result = 'WIN'; }
        if (dCards.pair.value > pCards.pair.value) { result = 'NO WIN'; } //lose
        if (dCards.pair.value === pCards.pair.value) {
            if (dCards.highCard.value < pCards.highCard.value) { result = 'WIN'; }
            if (dCards.highCard.value > pCards.highCard.value) { result = 'NO WIN'; }
        }
        return result;
    }

    /*    breakFlush(dCards, pCards) {
            return this.compareHighToLowValues(dCards, pCards);
        }
    
        breakStraight(dCards, pCards) {
            return this.compareHighToLowValues(dCards, pCards);
        }*/

    compareHighToLowValues(dCards, pCards) {
        var result = 'PUSH', i = 0;
        do {
            if (dCards[i].value < pCards[i].value) { result = 'WIN'; }
            if (dCards[i].value > pCards[i].value) { result = 'NO WIN'; }  //lose
            i++;
        }
        while (i < dCards.length && result === 'PUSH');
        return result;
    }

}




export { threeCardResults as default }