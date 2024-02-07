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
