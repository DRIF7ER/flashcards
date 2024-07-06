const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { createDeck, countCards } = require('../src/deck');
const { createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/round');

describe('make a round', function() {
  it('should be a function', function() {
    expect(createRound).to.be.a('function');
  });

  it('should make a live round', function() {
    const card1 = createCard(5, 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?', ['mutator method', 'accessor method', 'iteration method'], 'iteration method');
    const card2 = createCard(10, 'Which iteration method returns the first array element where the callback function returns true', ['find()', 'filter()', 'forEach()'], 'find()');
    const card3 = createCard(15, 'The callback function for reduce() takes in an accumulator and a current element.', ['true', 'false'], 'true');
    // const card4 = createCard(20, 'forEach() returns an array', ['true', 'false'], 'false');
    // const card5 = createCard(25, 'Arrays are specialized objects where the keys are ordered numbers.', ['true', 'false'], 'true');

    let deck = createDeck([card1, card2, card3]);

    let round = createRound(deck);

    expect(round.currentCard[0]).to.deep.equal({
      id: 5,
      question: 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?',
      answers: [ 'mutator method', 'accessor method', 'iteration method' ],
      correctAnswer: 'iteration method'
    });
  });
});

describe('take a turn', function() {
  it('should be a function', function() {
    expect(takeTurn).to.be.a('function');
  })

  it('should evaluate a correct answer', function() {
    const card1 = createCard(5, 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?', ['mutator method', 'accessor method', 'iteration method'], 'iteration method');
    const card2 = createCard(10, 'Which iteration method returns the first array element where the callback function returns true', ['find()', 'filter()', 'forEach()'], 'find()');
    const card3 = createCard(15, 'The callback function for reduce() takes in an accumulator and a current element.', ['true', 'false'], 'true');
    // const card4 = createCard(20, 'forEach() returns an array', ['true', 'false'], 'false');
    // const card5 = createCard(25, 'Arrays are specialized objects where the keys are ordered numbers.', ['true', 'false'], 'true');

    let deck = createDeck([card1, card2, card3]);

    let round = createRound(deck);

    let aGuess = 'iteration method';

    let turnTaken = takeTurn(aGuess, round);

    expect(turnTaken).to.equal('Correct!');
  });

  it('should evaluate an incorrect guess', function() {
    const card1 = createCard(5, 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?', ['mutator method', 'accessor method', 'iteration method'], 'iteration method');
    const card2 = createCard(10, 'Which iteration method returns the first array element where the callback function returns true', ['find()', 'filter()', 'forEach()'], 'find()');
    const card3 = createCard(15, 'The callback function for reduce() takes in an accumulator and a current element.', ['true', 'false'], 'true');
    // const card4 = createCard(20, 'forEach() returns an array', ['true', 'false'], 'false');
    // const card5 = createCard(25, 'Arrays are specialized objects where the keys are ordered numbers.', ['true', 'false'], 'true');

    let deck = createDeck([card1, card2, card3]);

    let round = createRound(deck);

    let aGuess = 'not right answer';

    let turnTaken = takeTurn(aGuess, round);

    expect(turnTaken).to.equal('Incorrect!');
    expect(round.incorrectGuesses.length).to.equal(1);
    expect(round.incorrectGuesses[0]).to.deep.equal({
      id: 5,
      question: 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?',
      answers: [ 'mutator method', 'accessor method', 'iteration method' ],
      correctAnswer: 'iteration method'
    });
  });

  it('should change out the current card', function() {
    const card1 = createCard(5, 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?', ['mutator method', 'accessor method', 'iteration method'], 'iteration method');
    const card2 = createCard(10, 'Which iteration method returns the first array element where the callback function returns true', ['find()', 'filter()', 'forEach()'], 'find()');
    const card3 = createCard(15, 'The callback function for reduce() takes in an accumulator and a current element.', ['true', 'false'], 'true');
    const card4 = createCard(20, 'forEach() returns an array', ['true', 'false'], 'false');
    const card5 = createCard(25, 'Arrays are specialized objects where the keys are ordered numbers.', ['true', 'false'], 'true');

    let deck = createDeck([card1, card2, card3, card4, card5]);

    let round = createRound(deck);

    expect(round.currentCard[0]).to.deep.equal({
      id: 5,
      question: 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?',
      answers: [ 'mutator method', 'accessor method', 'iteration method' ],
      correctAnswer: 'iteration method'
    });

    let aGuess1 = 'iteration method';

    let turnTaken1 = takeTurn(aGuess1, round);

    expect(turnTaken1).to.equal('Correct!');

    expect(round.currentCard[0]).to.deep.equal({
      id: 10,
      question: 'Which iteration method returns the first array element where the callback function returns true',
      answers: ['find()', 'filter()', 'forEach()'],
      correctAnswer: 'find()'
    });

    let aGuess2 = 'find()';

    let turnTaken2 = takeTurn(aGuess2, round);

    expect(turnTaken2).to.equal('Correct!');

    expect(round.currentCard[0]).to.deep.equal({
      id: 15,
      question: 'The callback function for reduce() takes in an accumulator and a current element.',
      answers: ['true', 'false'],
      correctAnswer:  'true'
    });

    let aGuess3 = 'true';

    let turnTaken3 = takeTurn(aGuess3, round);

    expect(turnTaken3).to.equal('Correct!');

    expect(round.currentCard[0]).to.deep.equal({
      id: 20,
      question: 'forEach() returns an array',
      answers: ['true', 'false'],
      correctAnswer:  'false'
    });

    let aGuess4 = 'false';

    let turnTaken4 = takeTurn(aGuess4, round);

    expect(turnTaken4).to.equal('Correct!');

    expect(round.currentCard[0]).to.deep.equal({
      id: 25,
      question: 'Arrays are specialized objects where the keys are ordered numbers.',
      answers: ['true', 'false'],
      correctAnswer:  'true'
    });

    let aGuess5 = 'true';

    let turnTaken5 = takeTurn(aGuess5, round);

    expect(turnTaken5).to.equal('Correct!');
  });
});

describe('calculate percentage correct', function() {
  it('should be a function', function() {
    expect(calculatePercentCorrect).to.be.a('function');
  });

  it('should update a correct answers percentage', function() {
    const card1 = createCard(5, 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?', ['mutator method', 'accessor method', 'iteration method'], 'iteration method');
    const card2 = createCard(10, 'Which iteration method returns the first array element where the callback function returns true', ['find()', 'filter()', 'forEach()'], 'find()');
    const card3 = createCard(15, 'The callback function for reduce() takes in an accumulator and a current element.', ['true', 'false'], 'true');
    const card4 = createCard(20, 'forEach() returns an array', ['true', 'false'], 'false');
    const card5 = createCard(25, 'Arrays are specialized objects where the keys are ordered numbers.', ['true', 'false'], 'true');

    let deck = createDeck([card1, card2, card3, card4, card5]);

    let round = createRound(deck);

    let aGuess1 = 'iteration method';
    let turnTaken1 = takeTurn(aGuess1, round);

    expect(turnTaken1).to.equal('Correct!');

    let aGuess2 = 'find()';
    let turnTaken2 = takeTurn(aGuess2, round);

    expect(turnTaken2).to.equal('Correct!');

    let aGuess3 = 'false';
    let turnTaken3 = takeTurn(aGuess3, round);

    expect(turnTaken3).to.equal('Incorrect!');

    let aGuess4 = 'false';
    let turnTaken4 = takeTurn(aGuess4, round);

    expect(turnTaken4).to.equal('Correct!');

    let aGuess5 = 'true';
    let turnTaken5 = takeTurn(aGuess5, round);

    expect(turnTaken5).to.equal('Correct!');

    let percentageCorrect = calculatePercentCorrect(round);

    expect(percentageCorrect).to.equal(80);
  });
});

describe('round end', function() {
  it('should be a function', function() {
    expect(endRound).to.be.a('function');
  });

  it('should print an end round message', function() {
    const card1 = createCard(5, 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?', ['mutator method', 'accessor method', 'iteration method'], 'iteration method');
    const card2 = createCard(10, 'Which iteration method returns the first array element where the callback function returns true', ['find()', 'filter()', 'forEach()'], 'find()');
    const card3 = createCard(15, 'The callback function for reduce() takes in an accumulator and a current element.', ['true', 'false'], 'true');
    const card4 = createCard(20, 'forEach() returns an array', ['true', 'false'], 'false');
    const card5 = createCard(25, 'Arrays are specialized objects where the keys are ordered numbers.', ['true', 'false'], 'true');

    let deck = createDeck([card1, card2, card3, card4, card5]);

    let round = createRound(deck);

    let aGuess1 = 'iteration method';
    let turnTaken1 = takeTurn(aGuess1, round);

    expect(turnTaken1).to.equal('Correct!');

    let aGuess2 = 'find()';
    let turnTaken2 = takeTurn(aGuess2, round);

    expect(turnTaken2).to.equal('Correct!');

    let aGuess3 = 'false';
    let turnTaken3 = takeTurn(aGuess3, round);

    expect(turnTaken3).to.equal('Incorrect!');

    let aGuess4 = 'false';
    let turnTaken4 = takeTurn(aGuess4, round);

    expect(turnTaken4).to.equal('Correct!');

    let aGuess5 = 'true';
    let turnTaken5 = takeTurn(aGuess5, round);

    expect(turnTaken5).to.equal('Correct!');

    let endRoundMessage = endRound(round);

    expect(endRoundMessage).to.equal('** Round over! ** You answered 80% of the questions correctly!');
  });
});