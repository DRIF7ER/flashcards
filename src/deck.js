function createDeck(stackOfCards) {
    let aDeck = {cards: stackOfCards};
    return aDeck;
};

function countCards(deckToCount) {
    let countedDeck = deckToCount.cards.length;
    return countedDeck;
};



module.exports = {
    createDeck,
    countCards,
}