var countdownEl = document.querySelector(".countdown");
var quizText = document.querySelector(".quiz");
var startButton = document.querySelector(".start");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
//---------------------------------
var question = document.querySelector(".question");
var choices = document.querySelector(".choice-text");
var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];
//-------------------------------------
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
var questions = [
    {
        question: "What is the name of Xie Lian's spiritual device?",
        choice1: "E'ming",
        choice2: "Ruoye",
        choice3: "Shi Qingxuan",
        choice4:"Chenqing",
        answer: 2
    },
    {
        question: "What is Hua Cheng's title?", 
        choice1: "Black Water Sinking Ships",
        choice2: "The White Calamity",
        choice3: "Crimson Rain Sought Flower",
        choice4: "Night Touring Green Lantern",
        answer: 3
    },
    {
        question: "What spiritual weapon does Lan Wangji prefer to use?",
        choice1: "a Guqin",
        choice2: "a Flute",
        choice3: "a Whip",
        choice4: "a Sword",
        answer: 1
    },
    {
        question: "What did Wei Wuxian sacrifice for Jiang Cheng?",
        choice1: "His Golden Core",
        choice2: "His Right Eye",
        choice3: "A Beaded Bracelet",
        choice4: "His Nephew",
        answer: 1
    },
    {
        question: "What is the name of the Peak that Shen Qingqiu resides over?",
        choice1: "Qiong Ding Peak",
        choice2: "Qing Jing Peak",
        choice3: "An Ding Peak",
        choice4: "Bai Zhan Peak",
        answer: 2
    },
    {
        question: "What is the name of the poison Shen Qingqiu was afflicted by?",
        choice1: "Heart Reaper",
        choice2: "Shadowlily",
        choice3: "Searing Black Lotus",
        choice4: "Without a Cure",
        answer: 4
    },
    {
        question: "What was Mo Ran's title as Emperor?",
        choice1: "Taxian-Jun",
        choice2: "Yuheng Elder",
        choice3: "Hanguang-Jun",
        choice4: "Tanlang-Jun",
        answer: 1
    },
    {
        question: "What type of spiritual magic is Chu Wanning the most proficient at?",
        choice1: "Fire elements",
        choice2: "Healing",
        choice3: "Barriers",
        choice4: "Illusions",
        answer: 3
    },
];

const correctPoint = 10;
