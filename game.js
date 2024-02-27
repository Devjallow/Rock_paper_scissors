function getComputerChoice(){
    let arrData = ['rock','paper','scissors'];
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
    //return "It's a tie";
    document.getElementById("tie").innerHTML = "tie";
    
  }else if ((playerSelection === "scissors" && computerSelection === "paper") ||
           (playerSelection === "paper" && computerSelection === "rock") ||
           (playerSelection === "rock" && computerSelection === "scissors"))
           {
            document.getElementById("player").innerHTML = "win";
          
           
           }else {
            document.getElementById("Computer").innerHTML = "win";
           
          
           }
           
  }  

const presButton = document.querySelectorAll(".btn")

presButton.forEach (( button) => {
  button.addEventListener("click", () =>{
    const playerchoice = button.textContent
    console.log("clicked",playerchoice)
    playGame(playerchoice)
    document.getElementById("Computer").innerHTML = "";


  });
});
function playGame(playerchoice){
 
      
        <p id="playerOutput">Player </p>
        <p id="tieOutput">Draw </p>
        <p id="ComputerOutput">Computer </p>*/
      
          const playeroutput = document.querySelector("#playerOutput")
          playeroutput.innerHTML = "Player: " + playerchoice
    
          //console.log("player choice: " + playerchoice);
          const computerSelection = getComputerChoice();
          //console.log("Computer choice:" + computerSelection);
          const computeroutput = document.querySelector("#ComputerOutput")
          computeroutput.innerHTML = "Computer: " + computerSelection
          const winner = playRound(playerchoice, computerSelection)
          console.log(winner);
     
        
        //Todo Dispay the wiiner of the game on the UI
      }
