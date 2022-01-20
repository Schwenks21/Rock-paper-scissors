//Rock Paper Scissors Game
//Keep track of games won by user and computer
let playerWins = 0;
let computerWins = 0;

//Determine computer input using random choice

function computerPlay() {
    let choiceArray = [
        "rock",
        "paper",
        "scissors"
    ];

    return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}
//Commenting out the following code because it's screwing up the results
//computerPlay();
//console.log("The computer has chosen " + computerPlay() + "!");

//nest the function playRound in playGame function
function playGame() {
    

    do {
    //Determine whether user or computer wins the round
    function playRound(playerSelection, computerSelection) {
        computerSelection = computerPlay();
        //Ask user for input
        playerSelection = prompt("Rock, Paper, or Scissors?");
        playerSelection = playerSelection.toLowerCase();

        if (computerSelection  === "rock" && playerSelection === "scissors" ||
            computerSelection === "scissors" && playerSelection === "paper" ||
            computerSelection === "paper"  && playerSelection === "rock") {
            return "You chose " + playerSelection + ".  The computer chose " +
            computerSelection + ".  The computer wins!  The computer has won " +
            ++computerWins + " times.";
        } else if (computerSelection === playerSelection) {
            return "You chose " + playerSelection + ".  The computer chose " +
            computerSelection + ".  It's a tie!";
        } else {
            return "You chose " + playerSelection + ".  The computer chose " +
            computerSelection + ".  You win!  You have now won " + ++playerWins + " times."
        }
        
    }
    //Execute one round of the game and announce the winnner - commenting out code for a five round match
    console.log("Player wins: " + playerWins)
    console.log("Computer wins: " + computerWins)
    console.log(playRound())
    }
    while (playerWins < 3 && computerWins < 3);
}

playGame();

let winner = playerWins > computerWins ? "You won the game!" : "The computer won the game!";
console.log("The final score is:");
console.log("You: " + playerWins + " rounds won.");
console.log("Computer: " + computerWins + " rounds won.");
console.log(winner);
//End best of five series when computer or user wins three rounds