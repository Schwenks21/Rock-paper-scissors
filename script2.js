//Rock Paper Scissors version 2.0 after spending the night thinking over 
//improvements to the code.

//Create function to get Player choice of rock, paper, or scissors
function getPlayerChoice () {
    const choice = prompt("Rock, paper, or scissors?");
    //convert choice to lowercase for simplicity and return
    return choice.toLowerCase();
}

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
function playRound(playerChoice, computerChoice) {
    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();

    if (playerChoice === "rock" && computerChoice === "scissors" ||
       playerChoice === "scissors" && computerChoice === "paper" ||
       playerChoice === "paper" && computerChoice === "rock") {
        playerWins++; 
        console.log("You won this round!  You chose " + playerChoice +
         " and the computer chose " + computerChoice + ".");
       }
    else if (playerChoice === computerChoice) {
        console.log("It's a tie!");
    } else {
        computerWins++;
        console.log("The computer won this round!  You chose " + playerChoice +
        " and the computer chose " + computerChoice + ".");
    }
    //print the score in the console after each round
    console.log("The score is:");
    console.log("Player wins: " + playerWins);
    console.log("Computer wins: " + computerWins);
}

//Create function to play a best of five game.  The game ends when one reaches
//three wins
function playGame() {
    do {
        playRound();
    } while (playerWins < 3 && computerWins <3);
    let winner = playerWins > computerWins ? "You win the game!" : "The computer wins the game!";
    console.log(winner);
}

//Play the game
playGame();