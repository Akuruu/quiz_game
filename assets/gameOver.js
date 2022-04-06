var username = document.querySelector("#username");
var save = document.querySelector(".saveScore");
var recentScore = localStorage.getItem("recentScore");
var finalScore = document.getElementById("highscore-text")

//when you click the save score button your score should be saved
function saveFinalScore (event) {
    finalScore.textContent = recentScore;
    event.preventDefault();
}

saveFinalScore()
var totalScores = JSON.parse(localStorage.getItem("recentScore"));
