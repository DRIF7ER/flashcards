// round will organize guesses and records correct
// incorrect answers.

const { createCard, evaluateGuess } = require("./card");
const { createDeck, countCards } = require("./deck");

// ROUND OBJECT:
// round stuff will return an object that holds a deck property, a
// currentCard property, a turns prop, and an
// incorrectGuesses prop.

// TAKE A TURN:
// updates the turns count, evaluates guesses, gives feedback, and
// stores ids of incorrect guesses.
// when a guess is made: - turn count updates
// - next card becomes current
// - guess is evaluated, wrongs will be stored in an array by id
// - feedback about guess is returned

// CALCULATE PERCENT CORRECT:
// self explainitory.

// END ROUND:
// prints, ‘** Round over! ** You answered <>% of
// the questions correctly!’ to console.

function createRound (aDeck) {
	let aRound = {
		deck: aDeck,
		currentCard: [],
		turns: 0,
		incorrectGuesses: []
	};
	if (aRound.currentCard.length === 0) {
		aRound.currentCard.push(aDeck.cards[0]);
		// aRound.turns++;
	};
	// console.log('current card from create round:', aRound.currentCard)
	return aRound;
};

// CARISSA'S FUNCTIONS:
// function takeTurn(guess, round) {
// 	const result = evaluateGuess(guess, round.currentCard.correctAnswer);
// 	round.turns += 1;
// 	if (result === 'incorrect') {
// 			round.incorrectGuesses.push(round.currentCard.id);
// 	};
// 	const cardIndex = round.deck.cards.indexOf(round.currentCard);
// 	round.currentCard = round.deck.cards[cardIndex + 1];
// 	return result;
// }

// calculatePercentCorrect(round) {
// 	if (round.turns === 0) {
// 		return 1;
// 	};
// };

function takeTurn(aGuess, aRound) {
	// console.log('from beginning of take turn func:', aRound.currentCard)
	let resultOfGuess = evaluateGuess(aGuess, aRound.currentCard[0].correctAnswer);
	// console.log('guess result:', resultOfGuess)
	aRound.turns++;
	if (resultOfGuess === 'Incorrect!') {
		aRound.incorrectGuesses.push(aRound.currentCard[0]);
		// console.log('current card out of if state:', aRound.currentCard)
	};
	// console.log('incorrect guess list:', aRound.incorrectGuesses)
	const cardIndex = aRound.deck.cards.indexOf(aRound.currentCard[0]);
	// console.log('an Index:', cardIndex)
	aRound.currentCard = [aRound.deck.cards[cardIndex + 1]];
	return resultOfGuess;
};

function calculatePercentCorrect(aRound) {
	let correctPercent = ((aRound.turns - aRound.incorrectGuesses.length) / aRound.turns) * 100;
	return correctPercent;
};

function endRound (aRound) {
	let correctPercent = calculatePercentCorrect(aRound);
	if(aRound.turns !== aRound.deck.cards.length) {
		console.log('fix it')
		return
	} else {
		console.log(`** Round over! ** You answered ${correctPercent}% of the questions correctly!`);
		return `** Round over! ** You answered ${correctPercent}% of the questions correctly!`;
	};
};



module.exports = {
	createRound,
	takeTurn,
	calculatePercentCorrect,
	endRound,
}