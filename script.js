//PAGE EVENT LISTENERS
const playBttn = document.querySelector('#start');
playBttn.onclick = () => {
    playBttn.setAttribute("id", "started");
    const main = document.querySelector('.main');
    main.setAttribute("id", "gameOn");
    console.log("GAME START");
};

// GAME FUNCTIONS
/*
const gameOptions = ["ROCK", "PAPER", "SCISSORS"]; // Lists all the options available for both PC and Player.

function getComputerChoice() { 
    let botChoice = Math.floor(Math.random() * 3);
    return botChoice;
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toUpperCase() == gameOptions[0] && computerSelection.toUpperCase() == gameOptions[2]) {
        return "You won! Rock beats Scissors!";
    } else if(playerSelection.toUpperCase() == gameOptions[0] && computerSelection.toUpperCase() == gameOptions[1]) {
        return "Loser! Paper beats Rock!";
    } else if(playerSelection.toUpperCase() == gameOptions[0] && computerSelection.toUpperCase() == gameOptions[0]) {
        return "It's a tie! You both chose Rock!";
    } else if(playerSelection.toUpperCase() == gameOptions[1] && computerSelection.toUpperCase() == gameOptions[0]) {
        return "You won! Paper beats Rock!";
    } else if(playerSelection.toUpperCase() == gameOptions[1] && computerSelection.toUpperCase() == gameOptions[2]) {
        return "Loser! Scissors beat Paper!";
    } else if(playerSelection.toUpperCase() == gameOptions[1] && computerSelection.toUpperCase() == gameOptions[1]) {
        return "It's a tie! You both chose Paper!";
    } else if(playerSelection.toUpperCase() == gameOptions[2] && computerSelection.toUpperCase() == gameOptions[1]) {
        return "You won! Scissors beat Paper!";
    } else if(playerSelection.toUpperCase() == gameOptions[2] && computerSelection.toUpperCase() == gameOptions[0]) {
        return "Loser! Rock beats Scissors!";
    } else if(playerSelection.toUpperCase() == gameOptions[2] && computerSelection.toUpperCase() == gameOptions[2]) {
        return "It's a tie! You both chose Scissors!";
    } else { return "Stop cheating, there's no such an option." }
}

let playerSelection = prompt("Choose your weapon:", "Rock, Paper or Scissor?");

let computerSelection = gameOptions[getComputerChoice()];
console.log("You chose: " + playerSelection);
console.log("The bot chose: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));

let gameLoop = prompt("Again?", "Y/N");
gameLoop = gameLoop.toUpperCase();

while(gameLoop === ("Y" || "YES")) {
    let playerSelection = prompt("Choose your weapon:", "Rock, Paper or Scissor?");
    
    computerSelection = gameOptions[getComputerChoice()];
    console.log("You chose: " + playerSelection);
    console.log("The bot chose: " + computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    
    gameLoop = prompt("Again?", "Y/N");
    gameLoop = gameLoop.toUpperCase();

    if(gameLoop !== ("Y" || "YES")) break;
} console.log("See ya, then!");
*/