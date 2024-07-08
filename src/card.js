function createCard(cardId = 'no input', cardQuestion = 'no input', possibleAnswers = 'no input', rightAnswer = 'no input') {
  let flashCard = {
    id: cardId,
    question: cardQuestion,
    answers: possibleAnswers,
    correctAnswer: rightAnswer,
  };
  return flashCard;
};

function evaluateGuess(guess, correctAnswer) {
  if (guess === '') {
    return
  } else if (guess !== correctAnswer) {
    return 'Incorrect!';
  } else if (guess === correctAnswer) {
    return 'Correct!';
  };
};



module.exports = {
  createCard,
  evaluateGuess,
}