// GAME FUNCTIONS

const gameOptions = ["ROCK", "PAPER", "SCISSORS"]; // Lists all the options available for both PC and Player.

function getComputerChoice() { 
    let botChoice = Math.floor(Math.random() * 3);
    return botChoice;
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == gameOptions[0] && computerSelection == gameOptions[2]) {
        wins = wins + 1;
        return "You won! Rock beats Scissors!";
    } else if(playerSelection == gameOptions[0] && computerSelection == gameOptions[1]) {
        return "Loser! Paper beats Rock!";
    } else if(playerSelection == gameOptions[0] && computerSelection == gameOptions[0]) {
        ties = ties + 1;
        return "It's a tie! You both chose Rock!";
    } else if(playerSelection == gameOptions[1] && computerSelection == gameOptions[0]) {
        wins = wins + 1;
        return "You won! Paper beats Rock!";
    } else if(playerSelection == gameOptions[1] && computerSelection == gameOptions[2]) {
        return "Loser! Scissors beat Paper!";
    } else if(playerSelection == gameOptions[1] && computerSelection == gameOptions[1]) {
        ties = ties + 1;
        return "It's a tie! You both chose Paper!";
    } else if(playerSelection == gameOptions[2] && computerSelection == gameOptions[1]) {
        wins = wins + 1;
        return "You won! Scissors beat Paper!";
    } else if(playerSelection == gameOptions[2] && computerSelection == gameOptions[0]) {
        return "Loser! Rock beats Scissors!";
    } else if(playerSelection == gameOptions[2] && computerSelection == gameOptions[2]) {
        ties = ties + 1;
        return "It's a tie! You both chose Scissors!";
    } else { return "Stop cheating, there's no such an option." }
}

//PAGE EVENT LISTENERS

const playBttn = document.querySelector('#start');
playBttn.onclick = () => {
    playBttn.setAttribute("id", "started");
    const main = document.querySelector('.main');
    main.setAttribute("id", "gameOn");
    console.log("GAME START");
};

let round = 1;
let wins = 0;
let ties = 0;

const score = document.querySelector('.score');
score.innerHTML = `<div class="round">ROUND:&nbsp;${round}/5</div> <div class="wins"><span style="color: green">${wins}</span>&nbsp;WINS</div>`;

// sets user choice to ROCK if the player clicks the bttn
const rockBtn = document.querySelector('#btnRock');
rockBtn.onclick = () => {
    // gets computer choice
    computerSelection = gameOptions[getComputerChoice()];

    let playerSelection = "ROCK";
    console.log("The bot chose: " + computerSelection);
    console.log("You chose: " + playerSelection);
    console.log(playRound(playerSelection, computerSelection));

    // sets the ROUND number
    round = round + 1;
    score.innerHTML = `<div class="round">ROUND:&nbsp;${round}/5</div> <div class="wins"><span style="color: green">${wins}</span>&nbsp;WINS</div>`;
    
    // sets game loop
    if(round === 5) {
        console.log("Game over");
        const main = document.querySelector('.main');
        main.setAttribute("id","gameOff");
        const result = document.querySelector('#res');
        result.setAttribute("class", "over");
        const finalRes = document.querySelector('#results');
        if((wins == 2 && ties == 1) || (ties > 2)) { finalRes.textContent = "It's a tie!" } else if(wins > 2) {
            finalRes.style.color = "green";
            finalRes.textContent = "You WON!"
        } else {
            finalRes.style.color = "red";
            finalRes.textContent = "You LOST!"
        }
    };
};

// sets user choice to PAPER if the player clicks the bttn
const paperBtn = document.querySelector('#btnPaper');
paperBtn.onclick = () => {
    // gets computer choice
    computerSelection = gameOptions[getComputerChoice()];

    let playerSelection = "PAPER";
    console.log("The bot chose: " + computerSelection);
    console.log("You chose: " + playerSelection);
    console.log(playRound(playerSelection, computerSelection));

    // sets the ROUND number
    round = round + 1;
    score.innerHTML = `<div class="round">ROUND:&nbsp;${round}/5</div> <div class="wins"><span style="color: green">${wins}</span>&nbsp;WINS</div>`;
    
    // sets game loop
    if(round === 5) {
        console.log("Game over");
        const main = document.querySelector('.main');
        main.setAttribute("id","gameOff");
        const result = document.querySelector('#res');
        result.setAttribute("class", "over");
        const finalRes = document.querySelector('#results');
        if((wins == 2 && ties == 1) || (ties > 2)) { finalRes.textContent = "It's a tie!" } else if(wins > 2) {
            finalRes.style.color = "green";
            finalRes.textContent = "You WON!"
        } else {
            finalRes.style.color = "red";
            finalRes.textContent = "You LOST!"
        }
    };
};

// sets user choice to SCISSORS if the player clickS the bttn
const sciBtn = document.querySelector('#btnSci');
sciBtn.onclick = () => {
    // gets computer choice
    computerSelection = gameOptions[getComputerChoice()];

    let playerSelection = "SCISSORS";
    console.log("The bot chose: " + computerSelection);
    console.log("You chose: " + playerSelection);
    console.log(playRound(playerSelection, computerSelection));

    // sets the ROUND number
    round = round + 1;
    score.innerHTML = `<div class="round">ROUND:&nbsp;${round}/5</div> <div class="wins"><span style="color: green">${wins}</span>&nbsp;WINS</div>`;
    
    // sets game loop
    if(round === 5) {
        console.log("Game over");
        const main = document.querySelector('.main');
        main.setAttribute("id","gameOff");
        const result = document.querySelector('#res');
        result.setAttribute("class", "over");
        const finalRes = document.querySelector('#results');
        if((wins == 2 && ties == 1) || (ties > 2)) { finalRes.textContent = "It's a tie!" } else if(wins > 2) {
            finalRes.style.color = "green";
            finalRes.textContent = "You WON!"
        } else {
            finalRes.style.color = "red";
            finalRes.textContent = "You LOST!"
        }
    };
};

const loop = document.querySelector('#loopBtn');
loop.onclick = () => {
    round = 1;
    wins = 0;
    score.innerHTML = `<div class="round">ROUND:&nbsp;${round}/5</div> <div class="wins"><span style="color: green">${wins}</span>&nbsp;WINS</div>`;
    const result = document.querySelector('#res');
    result.setAttribute("class", "ongoing");
    const main = document.querySelector('.main');
    main.setAttribute("id", "gameOn");
}