//Rock Paper Scissors Game
//Ask user for input
let playerPlay = prompt("Rock, Paper, or Scissors?");
switch(playerPlay.toLowerCase()) {
    case "rock":
        console.log("The player has chosen rock!");
        playerPlay = "rock";
        break;
    case "paper":
        console.log('The player has chosen paper!');
        playerPlay = "paper";
        break;
    case "scissors":
        console.log('The player has chosen scissors!');
        playerPlay = "scissors";
        break;
    default:
        console.log('Invalid choice.  Please refresh the page to try again.')
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
computerPlay();
console.log("The computer has chosen " + computerPlay() + "!");
//Determine whether user or computer wins the round
function playRound(playerSelection, computerSelection) {
     computerSelection = computerPlay();
     playerSelection = playerPlay;

     if (computerSelection  === "rock" && playerSelection === "scissors" ||
         computerSelection === "scissors" && playerSelection === "paper" ||
         computerSelection === "paper"  && playerSelection === "rock") {
        return "The computer wins!";
    } else if (computerSelection === playerSelection) {
         return "It's a tie!";
    } else {
        return "The player wins!"
    }
    
}

playRound();
console.log(playRound());

//Announce winner of round
//Keep track of games won by user and computer
//End best of five series when computer or user wins three rounds