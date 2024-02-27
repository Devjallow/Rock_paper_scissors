//simple game with three option to decide a wiiner
function getComputerChoice(){
    let arrData = ["rock","paper","scissors"];
    let data = arrData[(Math.floor(Math.random() * arrData.length))];
        return data;
    /*if (i === 1) {
      return "Rock";
    } else if (i === 2) {
      return "sissor";
    }else {
      return "paper";
    }*/
  }
function playRound(playerSelection, computerSelection) {

  if (playerSelection === computerSelection) {
    return "It's a tie";
  }else if ((playerSelection === "scissors" && computerSelection === "paper") ||
           (playerSelection === "paper" && computerSelection === "rock") ||
           (playerSelection === "rock" && computerSelection === "scissors"))
           {
             return "Player win"
           }else {
             return "Computer Win"
           }

}
const playerSelection = "paper";
const computerSelection = getComputerChoice();
function playGame(){
	console.log("player choice: " + playerSelection);
	console.log("Computer choice:" + computerSelection);
	console.log(playRound(playerSelection, computerSelection));
}

