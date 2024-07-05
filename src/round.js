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




module.exports = {
	// createRound,
	// takeTurn,
	// calculatePercentCorrect,
}