const btnRock = document.querySelector(".rock_btn");
const btnPaper = document.querySelector(".paper_btn");
const btnScissors = document.querySelector(".scissors_btn");
const btnReset = document.querySelector(".reset_btn");

const labelChoices = document.querySelector(".choices");
const labelResult = document.querySelector(".result");

// Computer Move
const pickComputerMove = function () {
  const randomNumber = Math.trunc(Math.random() * 9 + 1);
  let computerMove = "";

  if (randomNumber >= 1 && randomNumber < 4) {
    computerMove = "rock";
  } else if (randomNumber >= 4 && randomNumber < 7) {
    computerMove = "paper";
  } else if (randomNumber >= 7 && randomNumber < 10) {
    computerMove = "scissors";
  }

  return computerMove;
};

btnRock.addEventListener("click", function () {
  const computerMove = pickComputerMove();
  let result = "";
  const playerMove = "rock";

  if (computerMove === "rock") {
    result = "IT IS A TIE 😥";
  } else if (computerMove === "paper") {
    result = "YOU LOST 😭";
  } else if (computerMove === "scissors") {
    result = "YOU WON 🤩";
  }

  labelChoices.textContent = `You picked ${playerMove}, Computer picked ${computerMove}`;

  if (result === "YOU WON 🤩") {
    labelResult.style.color = "hsl(120, 87%, 50%)";
  } else if (result === "YOU LOST 😭") {
    labelResult.style.color = "rgb(255, 0, 0)";
  } else if (result === "IT IS A TIE 😥") {
    labelResult.style.color = "rgb(255, 149, 0)";
  }

  labelResult.textContent = `${result}`;
});

btnPaper.addEventListener("click", function () {
  const computerMove = pickComputerMove();
  let result = "";
  const playerMove = "paper";

  if (computerMove === "rock") {
    result = "YOU WON 🤩";
  } else if (computerMove === "paper") {
    result = "IT IS A TIE 😥";
  } else if (computerMove === "scissors") {
    result = "YOU LOST 😭";
  }

  labelChoices.textContent = `You picked ${playerMove}, Computer picked ${computerMove}`;

  if (result === "YOU WON 🤩") {
    labelResult.style.color = "hsl(120, 87%, 50%)";
  } else if (result === "YOU LOST 😭") {
    labelResult.style.color = "rgb(255, 0, 0)";
  } else if (result === "IT IS A TIE 😥") {
    labelResult.style.color = "rgb(255, 149, 0)";
  }

  labelResult.textContent = `${result}`;
});

btnScissors.addEventListener("click", function () {
  const computerMove = pickComputerMove();
  let result = "";
  const playerMove = "scissors";

  if (computerMove === "rock") {
    result = "YOU LOST 😭";
  } else if (computerMove === "paper") {
    result = "YOU WON 🤩";
  } else if (computerMove === "scissors") {
    result = "IT IS A TIE 😥";
  }

  labelChoices.textContent = `You picked ${playerMove}, Computer picked ${computerMove}`;

  if (result === "YOU WON 🤩") {
    labelResult.style.color = "hsl(120, 87%, 50%)";
  } else if (result === "YOU LOST 😭") {
    labelResult.style.color = "rgb(255, 0, 0)";
  } else if (result === "IT IS A TIE 😥") {
    labelResult.style.color = "rgb(255, 149, 0)";
  }

  labelResult.textContent = `${result}`;
});

btnReset.addEventListener("click", function () {
  labelChoices.textContent = "";
  labelResult.textContent = "";
});
