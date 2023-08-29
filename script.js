// GAME FUNCTIONS

const gameOptions = ["ROCK", "PAPER", "SCISSORS"]; // Lists all the options available for both PC and Player.

function getComputerChoice() { 
    let botChoice = Math.floor(Math.random() * 3);
    return botChoice;
};

function resultsMsg(textColor, message) {
    const turnRes = document.querySelector('#turnRes');
    turnRes.style.color = textColor;
    turnRes.textContent = message;
    turnRes.classList.add('visible');
    setTimeout(() => {
        turnRes.classList.remove('visible');
        setTimeout(() => {
            turnRes.replaceChildren();
        }, 300);
    }, 1000);
};

function playRound(playerSelection, computerSelection) {
    if(playerSelection == gameOptions[0] && computerSelection == gameOptions[2]) {
        wins = wins + 1;
        resultsMsg("green", "You won! Rock beats Scissors!");
    } else if(playerSelection == gameOptions[0] && computerSelection == gameOptions[1]) {
        miss = miss + 1;
        resultsMsg("red", "Loser! Paper beats Rock!");
    } else if(playerSelection == gameOptions[0] && computerSelection == gameOptions[0]) {
        ties = ties + 1;
        resultsMsg("#22223b", "It's a tie! You both chose Rock!");
    } else if(playerSelection == gameOptions[1] && computerSelection == gameOptions[0]) {
        wins = wins + 1;
        resultsMsg("green", "You won! Paper beats Rock!");
    } else if(playerSelection == gameOptions[1] && computerSelection == gameOptions[2]) {
        miss = miss + 1;
        resultsMsg("red", "Loser! Scissors beat Paper!");
    } else if(playerSelection == gameOptions[1] && computerSelection == gameOptions[1]) {
        ties = ties + 1;
        resultsMsg("#22223b", "It's a tie! You both chose Paper!");
    } else if(playerSelection == gameOptions[2] && computerSelection == gameOptions[1]) {
        wins = wins + 1;
        resultsMsg("green", "You won! Scissors beat Paper!");
    } else if(playerSelection == gameOptions[2] && computerSelection == gameOptions[0]) {
        miss = miss + 1;
        resultsMsg("red", "Loser! Rock beats Scissors!");
    } else if(playerSelection == gameOptions[2] && computerSelection == gameOptions[2]) {
        ties = ties + 1;
        resultsMsg("#22223b", "It's a tie! You both chose Scissors!");
    }
};

function gameOver() {
    const main = document.querySelector('.main');
        main.setAttribute("id","gameOff");
        const result = document.querySelector('#res');
        result.setAttribute("class", "over");
        const finalRes = document.querySelector('#results');
        if((ties > 2) || (ties > wins)) {
            finalRes.style.color = "#22223b";
            finalRes.textContent = "It's a tie!" 
        } else if((wins > miss) || (wins >= 3)) {
            finalRes.style.color = "green";
            finalRes.textContent = "You WON!"
        } else {
            finalRes.style.color = "red";
            finalRes.textContent = "You LOST!"
        }
};

function runGame(playerMove) {
    // gets computer choice
    computerSelection = gameOptions[getComputerChoice()];

    let playerSelection = playerMove;
    playRound(playerSelection, computerSelection);

    // sets the ROUND number
    round = round + 1;
    score.innerHTML = `<div class="round">ROUND:&nbsp;${round}/5</div> <div class="wins"><span style="color: green">${wins}</span>&nbsp;WINS</div>`;
    
    // sets game loop
    if(round === 5) {
        gameOver();
    };
};

//PAGE EVENT LISTENERS

const playBttn = document.querySelector('#start');
playBttn.onclick = () => {
    playBttn.setAttribute("id", "started");
    const main = document.querySelector('.main');
    main.setAttribute("id", "gameOn");
};

let round = 1;
let wins = 0;
let miss = 0;
let ties = 0;

const score = document.querySelector('.score');
score.innerHTML = `<div class="round">ROUND:&nbsp;${round}/5</div> <div class="wins"><span style="color: green">${wins}</span>&nbsp;WINS</div>`;

// sets user choice to ROCK if the player clicks the bttn
const rockBtn = document.querySelector('#btnRock');
rockBtn.onclick = () => {
    runGame("ROCK");
};

// sets user choice to PAPER if the player clicks the bttn
const paperBtn = document.querySelector('#btnPaper');
paperBtn.onclick = () => {
    runGame("PAPER");
};

// sets user choice to SCISSORS if the player clickS the bttn
const sciBtn = document.querySelector('#btnSci');
sciBtn.onclick = () => {
    runGame("SCISSORS");
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
};