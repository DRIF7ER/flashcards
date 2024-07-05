const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess } = require('../src/card');

describe('card', function() {
  it('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });
});

describe('checks card for correct answer', function() {
  it.skip('should be a function', function() {
    expect(evaluateGuess).to.be.a('function');
  });

  it.skip('should be able to evaluate a correct answer', function() {
    const card = createCard(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');

    card.inputAnswer = 'array';

    const checkAnswer = evaluateGuess(card);

    expect(checkAnswer).to.equal('Correct!')
  });

  it.skip('should be able to evaluate an incorrect answer', function() {
    const card = createCard(13, 'The callback function for map() returns a modified version of the current element.', ['true', 'false'], 'true');

    card.inputAnswer = 'false';

    const checkAnswer = evaluateGuess(card);

    expect(checkAnswer).to.equal('Incorrect!')
  });
});