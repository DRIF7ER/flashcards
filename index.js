const { createCard, evaluateGuess } = require('./src/card');
const data = require('./src/data');
const prototypeQuestions = data.prototypeData;
const { createDeck, countCards } = require('./src/deck');
const { printMessage, printQuestion } = require('./src/game');
const { createRound, takeTurn, calculatePercentCorrect, endRound } = require('./src/round');
const { main } = require('./src/util');


console.log('Your project is running...'); 

function start(prototypeQuestions) {
  let cardId = prototypeQuestions[0].id;
  let cardQ = prototypeQuestions[0].question;
  let cardAnswers = prototypeQuestions[0].answers;
  let cardCorrAns = prototypeQuestions[0].correctAnswer;
  let stackOfCards = prototypeQuestions.map((card) => {
    createCard(cardId, cardQ, cardAnswers, cardCorrAns);
    return card
  });
  let deck = createDeck(stackOfCards);
  let round = createRound(deck);
  printMessage(deck);
  printQuestion(round);
};

start(prototypeQuestions);