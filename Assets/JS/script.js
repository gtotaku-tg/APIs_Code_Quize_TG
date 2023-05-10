//get reference to the start button
var startButton = document.getElementById("start-btn");
var startPage = document.getElementById("start-page");
var countDownTimer = document.getElementById("countdown-timer");
var quizPage = document.getElementById("quiz-page");
var title = document.getElementById("title");
var answers = document.getElementById("answers");
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
  if (this.value !== quizQuestions[currentQuestionIndex].correctAnswer) {
    time -= 10;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex === 5 || time === 0) {
    // should end game
    clearInterval(timer);
  } else {
    displayQuestion();
  }
}
function calculateScore(){
  
}

function startTimer() {
  timer = setInterval(function () {
    // deduct 1 from the time
    time--;
    // display the time on the page
    countDownTimer.textContent = "Countdown: " + time;
    
  }, 1000);
}

startButton.addEventListener("click", start);

startPage.addEventListener("click", startQuiz);
//add event listener to the start button


