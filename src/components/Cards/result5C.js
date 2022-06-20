import sortBy from "lodash.sortby";
class fiveCardResults {

    fiveCards(pCards) {
        var cards = [], r = {}
        pCards.forEach( (a) => {
            cards.push({
                suit: a.charAt(0),
                value: parseInt(a.slice(1, a.length))
            });
        });

        r.rank = 1;

        if (this.royalDiamond(cards)) {
            r.label = 'Royal Flush ♦♦♦♦♦ 1000X';
            r.payout = 1000;
            r.fill = '#045074';
        }
        else if (this.royal(cards)) {
            r.label = 'Royal Flush 500X';
            r.payout = 500;
            r.fill = '#6f0027';
        }
        else if (this.straightFlush(cards)) {
            r.label = 'Straight Flush 100X';
            r.payout = 100;
            r.fill = '#2d0282';
        }
        else if (this.fourOfKind(cards)) {
            r.label = 'Four of a Kind 50X';
            r.payout = 50;
            r.fill = '#824e02';
        }
        else if (this.fullHouse(cards)) {
            r.label = 'Full House 40X';
            r.payout = 40;
            r.fill = '#820271';
        }
        else if (this.flush(cards)) {
            r.label = 'Flush 30X';
            r.payout = 30;
            r.fill = '#5d67e8';
        }
        else if (this.threeOfKind(cards)) {
            r.label = 'Three of a Kind 20X';
            r.payout = 20;
            r.fill = '#a90118';
        }
        else if (this.straight(cards)) {
            r.label = 'Straight 10X';
            r.payout = 10;
            r.fill = '#021782';
        }
        else if (this.twoPair(cards)) {
            r.label = 'Two Pair 5X';
            r.payout = 5;
            r.fill = '#178202';
        }
        else if (this.pair(cards)) {
            r.label = 'Jacks or Better 1x';
            r.payout = 1;
            r.fill = '#045074';
        } else if (this.pairLow(cards)) {
            r.label = 'Non Qualifying Pair';
            r.payout = 0;
            r.fill = '#045074';
            r.rank = 0;
        }
        else {
            r.label = 'High Card';
            r.payout = 0;
            r.fill = '#424242';
            r.rank = 0;
        }

        return r;
    }



    royalDiamond(cards) {
        var result = true;
        var diamondCardValues = [];
        cards.forEach( (c) => {
            if (c.suit === 'D') { diamondCardValues.push(c.value); }
        });

        if (diamondCardValues.length === 5) {
            var reqValues = [10, 11, 12, 13, 14];
            reqValues.forEach( (v) => {
                var valueCheck = diamondCardValues.indexOf(v);
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
        if (sameSuits.length === 5) {
            var reqValues = [10, 11, 12, 13, 14];
            reqValues.forEach( (v) => {
                var valueCheck = sameSuits.indexOf(v);
                if (valueCheck === -1) { result = false; }
            });
        } else {
            result = false;
        }
        return result;
    }

    straightFlush(card) {


        var result = false;
        if (this.findSameSuits(card).length === 5) {
            result = this.straight(card);
        }
        return result;

        //return this.findSameSuits(card).length === 5 && this.orderedValues(card) ? true : false;
    }

    straight(card) {
        var result = false, aceFound = false;
        var finalResult = false;
        var copyCards;
        if (this.orderedValues(card) ? true : false) {
            result = true;
        } else {
            card.forEach( (c) => {
                if (c.value === 14) {
                    aceFound = true;
                    c.value = 1;
                }
            });
        }
        if (result) {
            finalResult = true;
        }

        var result2 = true;
        if (aceFound) {
            card.forEach( (c) => {
                if (c.value === 14) { c.value = 1; }
            });

            var sortedCards = sortBy(card, [function (c) { return c.value; }]);
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

    fourOfKind(card) {
        var result = false;
        var valueCounts = this.getValueCounts(card);
        for (var key in valueCounts) {
            if (valueCounts[key] === 4) {
                result = true;
            }
        }
        return result;
    }
    threeOfKind(card) {
        var result = false;
        var valueCounts = this.getValueCounts(card);
        for (var key in valueCounts) {
            if (valueCounts[key] === 3) {
                result = true;
            }
        }
        return result;
    }

    fullHouse(card) {
        var threeOfaKind = false;
        var pair = false;
        var result = false;
        var valueCounts = this.getValueCounts(card);
        for (var key in valueCounts) {
            if (valueCounts[key] === 3) {
                threeOfaKind = true;
            }
            if (valueCounts[key] === 2) {
                pair = true;
            }
        }
        if (threeOfaKind && pair) {
            result = true;
        }
        return result;
    }

    flush(card) {
        return this.findSameSuits(card).length === 5 ? true : false;
    }

    twoPair(card) {
        var result = false, pairsFound = 0, valueCounts = this.getValueCounts(card);
        for (var key in valueCounts) {
            if (valueCounts[key] === 2) { pairsFound++; }
        }
        if (pairsFound === 2) { result = true; }
        return result;
    }

    pair(card) {
        var result = false;
        var valueCounts = card.reduce((acc, c) => {
            if (c.value > 10) {
                if (typeof acc[c.value] === 'undefined') {
                    acc[c.value] = 1;
                } else {
                    acc[c.value] = acc[c.value] + 1;
                }
            }
            return acc;
        }, {});
        for (var key in valueCounts) {
            if (valueCounts[key] === 2) {
                result = true;
            }
        }
        return result;
    }

    pairLow(card) {
        var result = false;
        var valueCounts = card.reduce((acc, c) => {
            if (c.value <= 10) {
                if (typeof acc[c.value] === 'undefined') {
                    acc[c.value] = 1;
                } else {
                    acc[c.value] = acc[c.value] + 1;
                }
            }
            return acc;
        }, {});
        for (var key in valueCounts) {
            if (valueCounts[key] === 2) {
                result = true;
            }
        }
        return result;
    }


    getValueCounts(card) {
        return card.reduce((acc, c) => {
            if (typeof acc[c.value] === 'undefined') {
                acc[c.value] = 1;
            } else {
                acc[c.value] = acc[c.value] + 1;
            }
            return acc;
        }, {});
    }


    orderedValues(card) {
        var result = true;
        var sortedCards = sortBy(card, [function (c) { return c.value; }]);
        sortedCards.forEach( (c, i) => {
            if (i > 0 && c.value !== sortedCards[i - 1].value + 1) { result = false; }
        });
        return result;
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


}




export { fiveCardResults as default }