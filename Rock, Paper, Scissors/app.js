const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";
const startGameBtn = document.getElementById("start-game-btn");
let gameIsRunniing = false;
function getUserChoise() {
  "use strict";
  let userChoise = prompt("Rock, Paper, Scissor?", "");
  while (
    userChoise.toUpperCase() !== "ROCK" &&
    userChoise.toUpperCase() !== "PAPER" &&
    userChoise.toUpperCase() !== "SCISSOR"
  ) {
    userChoise = prompt(
      "Please input valid information. Rock, Paper or Scissor?",
      ""
    );
  }
  return userChoise;
}

function getComputerChoice() {
  let computerChoiseProbability = Math.random();
  if (computerChoiseProbability < 0.33) {
    return ROCK;
  } else if (computerChoiseProbability < 0.66) {
    return PAPER;
  } else {
    return SCISSOR;
  }
}

const determineWinner = (userMove, computerMove) =>
  userMove === computerMove
    ? "DRAW"
    : (userMove === "ROCK" && computerMove == SCISSOR) || 
    (userMove == "PAPER" && computerMove == ROCK) ||
    (userMove == "SCISSOR" && computerMove == SCISSOR) ? "YOU WON" : "COMPUTER WON"

startGameBtn.addEventListener("click", function () {
  if(gameIsRunniing == true){
      return;
  }
  gameIsRunniing = true;
  console.log("game has started");
  let userMove = getUserChoise();
  console.log("You chose " + userMove);
  let computerMove = getComputerChoice();
  console.log("Computer chose " + computerMove);
  console.log(determineWinner(userMove, computerMove));
});
