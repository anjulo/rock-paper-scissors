/* eslint-disable no-console */
const prompt = require('prompt-sync')();

const choiceArray = ['rock', 'paper', 'scissors'];
const getComputerChoice = function () {
  const randomChoice = choiceArray[Math.floor(Math.random() * 3)];
  return randomChoice;
};

function playRound(playerSelection, computerSelection) {
  const playerIndex = choiceArray.indexOf(playerSelection.toLowerCase());
  const computerIndex = choiceArray.indexOf(computerSelection.toLowerCase());
  let returnString;
  let returnValue;
  if (playerIndex === computerIndex) {
    returnString = `Tie, both are ${computerSelection}`;
    returnValue = 0;
  } else if ((playerIndex + 1) % 3 === computerIndex) {
    returnString = `You Lose, ${computerSelection} beats ${playerSelection}`;
    returnValue = 1;
  } else {
    returnString = `You win, ${playerSelection} beats ${computerSelection}`;
    returnValue = -1;
  }
  return [returnString, returnValue];
}

function game() {
  let compScore = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Please input your choice : ');
    const result = playRound(playerSelection, getComputerChoice());
    console.log(result[0]);
    compScore += result[1];
  }
  if (compScore === 0) {
    console.log("It's a tie");
  } else if (compScore > 0) {
    console.log('You lost!');
  } else {
    console.log('You won!');
  }
}
game();
