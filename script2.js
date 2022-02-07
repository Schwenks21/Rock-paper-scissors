//Rock Paper Scissors version 2.0 after spending the night thinking over 
//improvements to the code.

//Create function to get Player choice of rock, paper, or scissors
//function getPlayerChoice () {
//const choice = prompt("Rock, paper, or scissors?");
    //convert choice to lowercase for simplicity and return
    //return choice.toLowerCase();
//}

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

//Create variables to store the score for the game
let playerWins = 0;
let computerWins = 0;

//Create code to play one round of the game
function playRound(playerChoice) {
    //playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    if (playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "scissors" && computerChoice === "paper" ||
        playerChoice === "paper" && computerChoice === "rock") {
        playerWins++; 
        
        document.getElementById('player-round').textContent = `You chose ${playerChoice}!`;
        document.getElementById('computer-round').textContent = `The computer chose ${computerChoice}!`;
        document.getElementById('winner-round').textContent = "You won this round!";
       }
    else if (playerChoice === computerChoice) {
        document.getElementById('player-round').textContent = `You chose ${playerChoice}!`;
        document.getElementById('computer-round').textContent = `The computer chose ${computerChoice}!`;
        document.getElementById('winner-round').textContent = "This round is a tie!";
    } else {
        computerWins++;
        document.getElementById('player-round').textContent = `You chose ${playerChoice}.`
        document.getElementById('computer-round').textContent = `The computer chose ${computerChoice}.`
        document.getElementById('winner-round').textContent = "The computer won this round!";
    }
        document.getElementById('player-score').textContent = `You: ${playerWins} wins`;
        document.getElementById('computer-score').textContent = `Computer: ${computerWins} wins`;
}

//Create function to play a best of five game.  The game ends when one reaches
//three wins
// function playGame(playerChoice) {
//     do {
//         playRound(playerChoice);
//     } while (playerWins < 3 && computerWins < 3);
//     let winner = playerWins > computerWins ? "You win the game!" : "The computer wins the game!";
//     alert(winner);
// }

//Play the game
//playGame();

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.id;
        playRound(playerChoice);
    })
})
const results = document.querySelector("#results");
const resetButton = document.createElement('button');
resetButton.textContent = "Reset";

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if ( playerWins == 5 || computerWins == 5) {
            if (playerWins > computerWins) {
                document.getElementById("winner-game").textContent = "You've won the game!";
                results.appendChild(resetButton);
                alert("You won the game!");
            } else {
                document.getElementById("winner-game").textContent = "The computer won.  Better luck next time.";
                results.appendChild(resetButton);
                alert("The computer won the game.  Maybe next time.");
            }
        };
    })
})

const para = document.querySelectorAll("p");

resetButton.addEventListener('click', () => {
    for (i = 0; i < para.length; i++) {
        para[i].textContent = "";
    }
    results.removeChild(resetButton);
})