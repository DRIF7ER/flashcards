const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { createDeck, countCards } = require('../src/deck');

describe('create a deck', function() {
  it('should be a function', function() {
    expect(createDeck).to.be.a('function');
  });

  it ('should create an object with one key/value pair', function() {
    const card1 = createCard(5, 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?', ['mutator method', 'accessor method', 'iteration method'], 'iteration method');
    const card2 = createCard(10, 'Which iteration method returns the first array element where the callback function returns true', ['find()', 'filter()', 'forEach()'], 'find()');
    const card3 = createCard(15, 'The callback function for reduce() takes in an accumulator and a current element.', ['true', 'false'], 'true');
    // const card4 = createCard(20, 'forEach() returns an array', ['true', 'false'], 'false');
    // const card5 = createCard(25, 'Arrays are specialized objects where the keys are ordered numbers.', ['true', 'false'], 'true');

    let deck = createDeck([card1, card2, card3]);

    expect(deck).to.deep.equal({
      cards: [
        {
          id: 5,
          question: 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?',
          answers: ['mutator method', 'accessor method', 'iteration method'],
          correctAnswer: 'iteration method'
        },
        {
          id: 10,
          question: 'Which iteration method returns the first array element where the callback function returns true',
          answers: ['find()', 'filter()', 'forEach()'],
          correctAnswer: 'find()'
        },
        {
          id: 15,
          question: 'The callback function for reduce() takes in an accumulator and a current element.',
          answers: ['true', 'false'],
          correctAnswer: 'true'
        }
      ]
    });
  });
});

describe('count cards', function() {
  it('should be a function', function() {
    expect(countCards).to.be.a('function');
  });

  it('should be able to produce a number', function() {
    const card1 = createCard(5, 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?', ['mutator method', 'accessor method', 'iteration method'], 'iteration method');
    const card2 = createCard(10, 'Which iteration method returns the first array element where the callback function returns true', ['find()', 'filter()', 'forEach()'], 'find()');
    const card3 = createCard(15, 'The callback function for reduce() takes in an accumulator and a current element.', ['true', 'false'], 'true');

    let deck = createDeck([card1, card2, card3]);

    let aCountedDeck = countCards(deck);

    expect(aCountedDeck).to.equal(3);
  });
});