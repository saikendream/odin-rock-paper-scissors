const gameOptions = ["Rock", "Paper", "Scissors"]; // Lists all the options available for both PC and Player.

function getComputerChoice() { 
    let botChoice = Math.floor(Math.random() * 3);
    return botChoice;
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == gameOptions[0] && computerSelection == gameOptions[2]) {
        return "You won! Rock beats Scissors!";
    } else if(playerSelection == gameOptions[0] && computerSelection == gameOptions[1]) {
        return "Loser! Paper beats Rock!";
    } else if(playerSelection == gameOptions[0] && computerSelection == gameOptions[0]) {
        return "It's a tie! You both chose Rock!";
    } else if(playerSelection == gameOptions[1] && computerSelection == gameOptions[0]) {
        return "You won! Paper beats Rock!";
    } else if(playerSelection == gameOptions[1] && computerSelection == gameOptions[2]) {
        return "Loser! Scissors beat Paper!";
    } else if(playerSelection == gameOptions[1] && computerSelection == gameOptions[1]) {
        return "It's a tie! You both chose Paper!";
    } else if(playerSelection == gameOptions[2] && computerSelection == gameOptions[1]) {
        return "You won! Scissors beat Paper!";
    } else if(playerSelection == gameOptions[2] && computerSelection == gameOptions[0]) {
        return "Loser! Rock beats Scissors!";
    } else if(playerSelection == gameOptions[2] && computerSelection == gameOptions[2]) {
        return "It's a tie! You both chose Scissors!";
    }
}

let playerSelection = prompt("Choose your weapon:", "Rock, Paper or Scissor?");

function getPlayerChoice() {
    if(playerSelection == "Rock") {
        playerSelection = gameOptions[0];
    } else if(playerSelection == "Paper") {
        playerSelection = gameOptions[1];
    } else if(playerSelection == "Scissors") {
        playerSelection = gameOptions[2];
    }

    return playerSelection;
}

const computerSelection = gameOptions[getComputerChoice()];
getPlayerChoice();
console.log("You chose: " + playerSelection);
console.log("The bot chose: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));