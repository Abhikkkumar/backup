let randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);
const submit = document.querySelector("#submit");
const guessedNumber = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const rmnGuessSlot = document.querySelector(".latestResult");
const lowOrHi = document.querySelector(".lowOrHi");

const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", (event) => {
    event.preventDefault();
    const guess = parseInt(guessedNumber.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //
  if (isNaN(guess)) {
    alert("Please enter valid number");
  } else if (guess < 1) {
    alert("Please enter a number greater than 0");
  } else if (guess >= 100) {
    alert("Please enter a number less than 100");
  } else {
    prevGuess.push(guess);
    checkGuess(guess);
    if (numGuess == 11) {
      updateFormDisplay(guess);
      displayMessage(`Game Over. Random number was ${randomNum}`);
      endGame();
    }
  }
}
function checkGuess(guess) {
  //
  if(guess===randomNum){
      displayMessage("You guessed it right ! YOU WON !!!");
      endGame();
  }else if(guess<randomNum){
      displayMessage("Your guess is TOOO low");
      updateFormDisplay(guess);
  }else{
      displayMessage("Your guess is TOOO high");
      updateFormDisplay(guess);
  }

}

function updateFormDisplay(guess) {
    guessedNumber.value=" ";
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    rmnGuessSlot.innerHTML = `${11-numGuess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    guessedNumber.value = "";
    guessedNumber.setAttribute("disabled","");
    p.classList.add("button");
    p.innerHTML = `<h2 id='newGame'>Start New Game </h2>`;
    startOver.appendChild(p);
    playGame= false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click",(event)=>{
        randomNum = Math.floor(Math.random()*99)+1;
        prevGuess=[];
        numGuess= 1;
        guessSlot.innerHTML='';
        lowOrHi.innerHTML='';
        rmnGuessSlot.innerHTML = `${11-numGuess}`;
        guessedNumber.removeAttribute("disabled");
        startOver.removeChild(p);
        playGame=true;
    })
}


