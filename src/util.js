const inquirer = require('inquirer');
const { takeTurn, endRound } = require('./round');

const genList = (round) => {
  let card = round.currentCard;
  if (round.turns === 30) {
    endRound(round);
    return;
  };
  
  let choices = card[0].answers.map((answer, index) => {
    return {
      key: index,
      value: answer
    }
  });
  return {
    type: 'rawlist',
    message: card[0].question,
    name: 'answers',
    choices: choices
  };
}

const getRound = (round) => {
  return Promise.resolve(round);
}

const confirmUpdate = (id, round) => {
  const feedback = takeTurn(id, round);
  return {
    name: 'feedback',
    message: `Your answer of ${id} is ${feedback}`
  }
}

async function main(round) {
  const currentRound = await getRound(round);
  const getAnswer = await inquirer.prompt(genList(currentRound));
  const getConfirm = await inquirer.prompt(confirmUpdate(getAnswer.answers, round));

    if(!round.currentCard) {
      endRound(round);
    } else {
      main(round);
    }
}

module.exports.main = main;