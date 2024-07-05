const {  } = require('../src/round');

function createDeck(stackOfCards) {
    let aDeck = {cards: stackOfCards};
    // console.log(aDeck);
    return aDeck;
};

function countCards (deckToCount) {
    let countedDeck = deckToCount.cards.length;
    return countedDeck;
};



module.exports = {
    createDeck,
    countCards,
}