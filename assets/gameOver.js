var username = document.querySelector("#username");
var save = document.querySelector(".saveScore");
var recentScore = localStorage.getItem("recentScore");
var finalScore = document.getElementById("highscore-text");
var highscore = JSON.parse(localStorage.getItem("highscore")) || [];

//when you click the save score button your score should be saved
saveFinalScore = () => {
    finalScore.textContent = recentScore;
    
    var score = {
        score: recentScore,
        name: username.value
    };
    highscore.push(score);
localStorage.setItem("highscore", JSON.stringify(highscore));

};
saveFinalScore()




