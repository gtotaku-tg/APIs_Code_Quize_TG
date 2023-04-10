//get reference to the start button
var startButton = document.getElementById("start-btn");
var startPage = document.getElementById("start-page");
var countDownTimer = document.getElementById("countdown-timer");
var quizPage = document.getElementById("quiz-page");
var title = document.getElementById("title")

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
title.textContent=quizQuestions[0].question
title.textContent=quizQuestions[answers]
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

// const countDown= document.getElementById('countdown-timer');
// (function() {
//     var sec=0;
//     countDown=setInterval(function() {

startPage.addEventListener("click", startQuiz);
//add event listener to the start button

//add timer
const timeLimit = 85;

function startQuiz() {
  console.log("started");
  startButton.style.display = "none";
  //start timer and display first question

  //implement quiz logic here
}
