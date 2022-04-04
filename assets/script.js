var countdownEl = document.querySelector(".countdown");
var quizText = document.querySelector(".quiz");
var startButton = document.querySelector(".start");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var point = document.querySelector(".point");
//---------------------------------
var question = document.querySelector(".question");
var choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices);
var currentQuestion = {};
var acceptingAnswers = false;
var score = 0;
//new question array
var availableQuestions = [];
const correctPoint = 10;
const totalQuestions = 10;
//-------------------------------------
var timer;
var timeLeft;
var isWin = false;
var loseNumber = 0;
//--------------------------------------
//calling the startQuiz function after the start button is pressed
startButton.addEventListener("click", startQuiz);
//--------------------------------------
//what happens when you hit the start button
function startQuiz (event) {
 timeLeft = 60;
 isWin = false;
 //score is set to 0
 score = 0;
 //creates new array by referring to the existing array of questions
 availableQuestions = [...questions];
 console.log(availableQuestions);
 timer()
 nextQuestion()
}

//proceeds to the next question
function nextQuestion() {
    //if there's no more questions left then move to the game over screen
    if (availableQuestions.length === 0 || questionCounter > totalQuestions){
        return window.location.assign("/gameOver.html");
    }
    //randomizes the questions
    var qI = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[qI];
    question.textContent = currentQuestion.question;
    //referencing html dataset to displat answer choices
    choices.forEach( choice => {
        var number = choice.dataset["number"];
        choice.textContent = currentQuestion[`choice` + number];
    });
    //cuts out already answered questions
    availableQuestions.splice(qI, 1);

    acceptingAnswers = true;
};

//what happens when you click choice
choices.forEach(choice => {
    choice.addEventListener("click", e => {
        //if the answer the user clicked on was incorrect then ignore it
        if (!acceptingAnswers) return;
        acceptingAnswers = false;
        const choiceEl = e.target;
        const answerEl = choiceEl.dataset["number"];
        console.log(answerEl == currentQuestion.answer);
        //shows whether an answer is correct or incorrect
        var highlight = "incorrect";
        //if the current choice matches the answer
            if (answerEl == currentQuestion.answer) {
                //register it as correct
                highlight = "correct";
            }
            //adds the highlight for the correct and incorrect choices
            choiceEl.parentElement.classList.add(highlight);
            //sets a small delay before removing the highlight element
            setTimeout( () => {
            choiceEl.parentElement.classList.remove(highlight);
            //proceeds to next question
            nextQuestion();
            }, 1000); 
    });
})

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
    {
        question: "What is the name of Luo Binghe's sword?",
        choice1: "Xiu Ya",
        choice2: "Suibian",
        choice3: "Xin Mo",
        choice4: "Zidian",
        answer: 3
    },
    {
        question: "In the GusuLan Sect, Which piece of clothing signifies a direct descendant of the Lan bloodline?",
        choice1: "A White Outer Robe",
        choice2: "A White Headband with Clouds",
        choice3: "A Braided Wristlet",
        choice4: "A Silver Hair Ornament with Dragons",
        answer: 2
    },
];

