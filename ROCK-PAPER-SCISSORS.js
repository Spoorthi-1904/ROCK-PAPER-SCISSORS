//console.log("Hello World")

function getComputerChoice(){
    const pick = ["rock","paper","scissors"];
    choice = Math.floor(Math.random() * pick.length);
    return(pick[choice]);
}
function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return("Tie")
    }
    else if(playerSelection === "rock" ){
        if(computerSelection === "paper"){
            return("You Lose! Paper beats Rock");
        }
        else{
            return("You Win! Rock beats Scissors");
        }

    }
    else if(playerSelection === "paper"){
        if(computerSelection === "rock"){
            return("You Win! Paper beats Rock");
        }
        else{
            return("You Lose! Scissors beats Paper");
        }
    }
    else if(playerSelection === "scissors"){
        if(computerSelection === "rock"){
            return("You Lose! Rock beats Scissors");
        }
        else{
            return("You Win! Scissors beats Paper");
        }
    }
}
//choice = getComputerChoice();
//console.log(choice);
let playerSelection = prompt("What would you like to select, rock or paper or scissors?");
playerSelection = playerSelection.toLowerCase();
let computerSelection = getComputerChoice();
console.log(playerSelection);
console.log(playRound(playerSelection, computerSelection));