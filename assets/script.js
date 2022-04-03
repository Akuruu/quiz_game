var countdownEl = document.querySelector(".countdown");
var quizText = document.querySelector(".quiz");
var startButton = document.querySelector(".start");
var win = document.querySelector(".win");
var lose = docment.querySelector(".lose");
var timer;
var timerCount;
var isWin = false;
var winNumber = 0;
var loseNumber = 0;


//what happens when you hit the start button
function start () {
 timerCount = 60;
 isWin = false;
 timer()

}

//timer function
function timer() {
    timer = setInterval(function) {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            if (isWin && timerCount > 0) {
                clearInterval(timer);
                //initiates game win function
                gameWin();
            }
        }
    }
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
    
}