//Create variables to store the score for the game
let playerWins = 0;
let computerWins = 0;

const buttons = document.querySelectorAll('button');

const results = document.querySelector("#results");
const gameResults = document.getElementById('game-results');
const resetButton = document.createElement('button');
resetButton.textContent = "Reset";

let cpuPlay = document.getElementById('cpuPlay');

//Create function to get computer choice of rock, paper, scissors
function getComputerChoice() {
    const computerChoice = [
        "rock",
        "paper",
        "scissors"
    ];

    return computerChoice[Math.floor(Math.random() *
        computerChoice.length)];
}

//Create code to play one round of the game
function playRound(playerChoice) {
    let computerChoice = getComputerChoice();

    if (computerChoice === "rock") {
        cpuPlay.textContent = "👊";
    } else if (computerChoice === "scissors") {
        cpuPlay.textContent = "✌️";
    } else {
        cpuPlay.textContent = "✋";
    }

    if (playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "scissors" && computerChoice === "paper" ||
        playerChoice === "paper" && computerChoice === "rock") {
        playerWins++; 
        document.getElementById('winner-round').textContent = "You won this round!";
       }
    else if (playerChoice === computerChoice) {
        document.getElementById('winner-round').textContent = "This round is a tie!";
    } else {
        computerWins++;
        document.getElementById('winner-round').textContent = "The computer won this round!";
    }
        document.getElementById('player-score').textContent = playerWins;
        document.getElementById('computer-score').textContent = computerWins;
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.id;
        playRound(playerChoice);
    })
})


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if ( playerWins == 5 || computerWins == 5) {
            if (playerWins > computerWins) {
                document.getElementById("winner-game").textContent = "You win!";
                alert("You won the game!");
            } else {
                document.getElementById("winner-game").textContent = "The computer won.";
                alert("The computer won the game.  Maybe next time.");
            }
        gameResults.appendChild(resetButton);
        };
    })
})


resetButton.addEventListener('click', () => {
    document.getElementById("winner-game").textContent = "";
    document.getElementById("winner-round").textContent = "";
    document.getElementById('player-score').textContent = "";
    document.getElementById('computer-score').textContent = "";
    cpuPlay.textContent = '';
    playerWins = 0;
    computerWins = 0;
    gameResults.removeChild(resetButton);
})

