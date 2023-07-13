//get reference to the start button

var startButton = document.getElementById("start-btn");
var startPage = document.getElementById("start-page");
var countDownTimer = document.getElementById("countdown-timer");
var quizPage = document.getElementById("quiz-page");
var title = document.getElementById("title");
var answers = document.getElementById("answers");

var resultsToEachQ = document.getElementById("results");
var finalScore = document.getElementById("final_score");
var endPage = document.getElementById("end-page");
var initialsEl = document.getElementById("initials");
var submitButton = document.getElementById("submit_btn");
var highScorePage = document.getElementById("highscore-page");
var highScoreList = document.getElementById("highscores");
var clearHistoryScore = document.getElementById("clear-btn");
var goBack = document.getElementById("goback-btn");

var currentQuestionIndex = 0;
var score = 0;
var time = 85;
var timer;

function start() {
  // hide the startPage Element
  startPage.classList.add("hide");
  // unhide the quiz-page
  quizPage.classList.remove("hide");
  // start the timer
  startTimer();
  // display the first question
  displayQuestion();
}

function displayQuestion() {
  // disply the  text from the first item in array in the title element
  title.textContent = quizQuestions[currentQuestionIndex].question;
  // display the answers from the first itme in array
  answers.innerHTML = "";
  for (var i = 0; i < 4; i++) {
    // create button element
    var ansBut = document.createElement("button");
    // add the text content to the button element
    ansBut.textContent = quizQuestions[currentQuestionIndex].answers[i];
    ansBut.setAttribute(
      "value",
      quizQuestions[currentQuestionIndex].answers[i]
    );
    ansBut.addEventListener("click", click);
    // append the button to the answer div
    answers.appendChild(ansBut);
  }
}

function click() {
  var correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;

  if (this.value !== quizQuestions[currentQuestionIndex].correctAnswer) {
    time -= 10;
    // print "Wrong answer"
    resultsToEachQ.textContent = "Wrong answer";
  } else {
    // print "Correct answer"
    resultsToEachQ.textContent = "Correct answer";
    score += 10;
  }

  setTimeout(function () {
    resultsToEachQ.textContent = "";

    currentQuestionIndex++;

    if (currentQuestionIndex === 5 || time === 0) {
      // should end game
      clearInterval(timer);
      endGame();
    } else {
      displayQuestion();
    }
  }, 800);
}

function startTimer() {
  timer = setInterval(function () {
    // deduct 1 from the time
    time--;
    // display the time on the page
    countDownTimer.textContent = "Countdown: " + time;

    if (time <= 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
}

function endGame() {
  // hide the quiz-page
  quizPage.classList.add("hide");
  // unhide the end-page
  endPage.classList.remove("hide");
  // display the final score
  finalScore.textContent =score;
}

function saveHighScore() {
  // get the value of the initials
  let initials = initialsEl.value;
  // get the value of the score
  // create an object with the initials and score
  let newScore = {
    initials: initials,
    score: score,
  };
  // array name /// or operator
  let totalHighScores = JSON.parse(localStorage.getItem("highScores")) || [];
  totalHighScores.push(newScore);
  localStorage.setItem("highScores", JSON.stringify(totalHighScores));

  displayHistoryScore();
}

// Score page hide or show by click
function displayHistoryScore() {
  highScorePage.classList.remove("hide");
  startPage.classList.add("hide");
  quizPage.classList.add("hide");
  endPage.classList.add("hide");
  let totalHighScores = JSON.parse(localStorage.getItem("highScores")) || [];
  totalHighScores.forEach(function (score) {
    let li = document.createElement("li");
    li.textContent = score.initials + " - " + score.score;
    highScoreList.appendChild(li);
  })
}


startButton.addEventListener("click", start);
clearHistoryScore.addEventListener("click", function () {
  localStorage.clear();
  highScoreList.innerHTML = "";
});
goBack.addEventListener("click", function () {
  highScorePage.classList.add("hide");
  startPage.classList.remove("hide");
});
submitButton.addEventListener("click", saveHighScore);
