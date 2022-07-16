//console.log("Hello World")

function getComputerChoice(){
    const pick = ["rock","paper","scissors"];
    choice = Math.floor(Math.random() * pick.length);
    return(pick[choice]);
}
//choice = getComputerChoice();
//console.log(choice);
playerSelection = prompt("What would you like to select, rock or paper or scissors?");
console.log(playerSelection)