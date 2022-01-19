//Rock Paper Scissors Game
//Ask user for input
let playerPlay = prompt("Rock, Paper, or Scissors?");
switch(playerPlay.toLowerCase()) {
    case "rock":
        playerPlay = "rock";
        break;
    case "paper":
        playerPlay = "paper";
        break;
    case "scissors":
        playerPlay = "scissors";
        break;
}
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

//Keep track of games won by user and computer
let playerWins = 0;
let computerWins = 0;

//Determine whether user or computer wins the round
function playRound(playerSelection, computerSelection) {
     computerSelection = computerPlay();
     playerSelection = playerPlay;

     if (computerSelection  === "rock" && playerSelection === "scissors" ||
         computerSelection === "scissors" && playerSelection === "paper" ||
         computerSelection === "paper"  && playerSelection === "rock") {
        return "You chose " + playerSelection + ".  The computer chose " +
        computerSelection + ".  The computer wins!";
    } else if (computerSelection === playerSelection) {
         return "You chose " + playerSelection + ".  The computer chose " +
         computerSelection + ".  It's a tie!";
    } else {
        return "You chose " + playerSelection + ".  The computer chose " +
        computerSelection + ".  You win!";
    }
    
}

//Execute one round of the game and announce the winnner - commenting out code for a five round match
playRound();
console.log(playRound());


//End best of five series when computer or user wins three rounds