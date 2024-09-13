let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const us = document.querySelector("#userScore")
const cs = document.querySelector("#compScore")

// Comp choice
const genCompChoice = () => {
    const choose = ["Rock", "Paper", "Sissor"]
    const randIdx = Math.floor(Math.random() * 3) // genrate random number betrween 0 to 2
    return choose[randIdx] 
};
// when game is draw
const drawGame = (userChoice, compChoice) => {
  console.log("Draw")
  msg.innerText = `Game was Draw! ${userChoice} same as ${compChoice}`
  msg.style.backgroundColor = "#081b31"
};
// declare winner
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin === true) {
    console.log("You won")
    msg.innerText = `You Won ${userChoice} beats ${compChoice}`
    msg.style.backgroundColor = "Green"
    userScore++;
    us.innerText = userScore
  } else if (userWin === false) {
    console.log("You loose")
    msg.innerText = `You loose ${compChoice} beats ${userChoice} Play Again`
    msg.style.backgroundColor = "Red"
    compScore++;
    cs.innerText = compScore 
  };
};

// Main game
const playGame = (userChoice) => {
    console.log(`User choice = ${userChoice}`);
    // Genrate computer choice
    let compChoice = genCompChoice()
    console.log(`Comp choice = ${compChoice}`)
    // check winner
    let userWin = 0
    if (userChoice === compChoice) {
      drawGame(userChoice, compChoice)
    } else if (userChoice === "Rock") {
      // compChoice --> Paper/Sissor
      userWin = compChoice === "Paper" ? false:true
    } else if (userChoice === "Paper") {
      // compChoice --> Rock/Sissor
      userWin = compChoice === "Rock" ? true:false
    } else if (userChoice === "Sissor") {
      // compChoice --> Paper/Rock
      userWin = compChoice === "Paper" ? true:false
    };
    // Declare Winner
    showWinner(userWin, userChoice, compChoice)
};

// to show click
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice)
  });
});

