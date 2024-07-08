const { createCard, evaluateGuess } = require("./card");
const { createDeck, countCards } = require("./deck");

function createRound (aDeck) {
	let aRound = {
		deck: aDeck,
		currentCard: [],
		turns: 0,
		incorrectGuesses: []
	};
	if (aRound.currentCard.length === 0) {
		aRound.currentCard.push(aDeck.cards[0]);
	};
	return aRound;
};

function takeTurn(aGuess, aRound) {
	let resultOfGuess = evaluateGuess(aGuess, aRound.currentCard[0].correctAnswer);
	aRound.turns++;
	if (resultOfGuess === 'Incorrect!') {
		aRound.incorrectGuesses.push(aRound.currentCard[0]);
	};
	const cardIndex = aRound.deck.cards.indexOf(aRound.currentCard[0]);
	aRound.currentCard = [aRound.deck.cards[cardIndex + 1]];
	return resultOfGuess;
};

function calculatePercentCorrect(aRound) {
	let correctPercent = ((aRound.turns - aRound.incorrectGuesses.length) / aRound.turns) * 100;
	return correctPercent;
};

function endRound (aRound) {
	let correctPercent = calculatePercentCorrect(aRound);
	if(aRound.turns !== 30) {
		console.log('in end round func:', aRound.turns)
		return
	} else {
		console.log(`
			***************************************************************
			*+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+*
			** ROUND OVER! ** YOU ANSWERED ${correctPercent}% OF THE QUESTIONS CORRECTLY!*
			*=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=*
			***************************************************************
		`);
		return `** Round over! ** You answered ${correctPercent}% of the questions correctly!`;
	};
};



module.exports = {
	createRound,
	takeTurn,
	calculatePercentCorrect,
	endRound,
}