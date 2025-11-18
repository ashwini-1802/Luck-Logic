let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");

const msg =document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");

const computerScorePara = document.querySelector("#computer-score");


const genComputerChoice = () => {
   const options = ["stone", "paper", "scissors"]
    const randomIdx=Math.floor(Math.random()*3);
    return options [randomIdx];
};

const drawGame = () => {
  // console.log("game was draw");
  msg.innerText="Game Was Draw.! Play again";
  msg.style.backgroundColor= "#081b31";
};

const showWinner = (userWin, userChoice, computerChoice) => {
  if(userWin) {
    // console.log("You are Winner");
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText=`You Win..! Your ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor= "green";
  } else{
    computerScore++;
    computerScorePara.innerText= computerScore;
    // console.log("You Lose");
    msg.innerText=`You Lose..! ${computerChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor= "red";
  }
};

const playGame = (userChoice) => {
// console.log("user choice= ",userChoice);

//Generate Computer Choice;
const computerChoice= genComputerChoice();
// console.log("Computer choice= ",computerChoice);

if(userChoice === computerChoice){
    drawGame();
} else{
  let userWin = true;
  if (userChoice === "stone"){
      userWin = computerChoice === "paper" ? false : true;
  } else if(userChoice === "paper") {
    userWin = computerChoice === "scissors" ? false : true;
  }else {
    userWin = computerChoice === "stone" ? false: true;
  }
  showWinner(userWin, userChoice, computerChoice); 
}
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
