var countdownEl = document.querySelector(".countdown");
var quizText = document.querySelector(".quiz");
var startButton = document.querySelector(".start");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var question = document.querySelector(".question");
var timer;
var timeLeft;
var isWin = false;
var winNumber = 0;
var loseNumber = 0;
//--------------------------------------
//calling the startQuiz function after the start button is pressed
startButton.addEventListener("click", startQuiz);
//--------------------------------------
//what happens when you hit the start button
function startQuiz () {
 timeLeft = 60;
 isWin = false;
 timer()

}

//timer function
function timer() {
    timer = setInterval(function() {
        timeLeft--;
        countdownEl.textContent = timeLeft;
        if (timeLeft >= 0) {
            if (isWin && timeLeft > 0) {
                clearInterval(timer);
                //initiates game win function
                gameWin();
            }
        }
        if (timeLeft === 0) {
            clearInterval(timer);
            gameLose();
        }
    }, 1000);
    console.log(timeLeft);
}

//win game function
function gameWin() {
winNumber++
startButton.disabled = false;
quizText.textContent = "Good Job! You're cultured :)";
//initiates win counter
setWins()
}

//lose game function
function gameLose() {
    loseNumber++
    startButton.disabled = false;
    quizText.textContent = "Aww, looks like someone needs to read more novels...";
    //initiates lose counter
    setLosses()
}

//--------------------------
