//Rock Paper Scissors Game
//Ask user for input
let playerSelection = prompt("Rock, Paper, or Scissors?");
switch(playerSelection.toLowerCase()) {
    case "rock":
        console.log("The player has chosen rock!");
        break;
    case "paper":
        console.log('The player has chosen paper!');
        break;
    case "scissors":
        console.log('The player has chosen scissors!');
        break;
    default:
        console.log('Invalid choice.  Please refresh the page to try again.')
}
//Determine computer input using random choice
//Determine whether user or computer wins the round
//Announce winner of round
//Keep track of games won by user and computer
//End best of five series when computer or user wins three rounds