var quizQuestions = [
    {
      question: "1. What does API mean?",
      answers: [
        { text: "a. Application Program Interface", correct: true },
        { text: "b. American Petroleum Institute", correct: false },
        { text: "c. Accurate Position Indicator", correct: false },
        { text: "d. Automated Pronunciation Instructor", correct: false }
      ]
    },
    {
      question: "What does CSS stand for?",
      answers: [
        { text: "Cascading Style Sheets", correct: true },
        { text: "Computer Style Sheets", correct: false },
        { text: "Colorful Style Sheets", correct: false },
        { text: "Creative Style Sheets", correct: false }
      ]
    },
    {
      question: "What does JS stand for?",
      answers: [
        { text: "Java Source", correct: false },
        { text: "Java Syntax", correct: false },
        { text: "JavaScript", correct: true },
        { text: "Joomla Script", correct: false }
      ]
    },
    {
        question: "What does DOM stand for?",
        answers: [
          { text: "a. Digital Ohmmeter", correct: false },
          { text: "Dissolved Organic Matter", correct: false },
          { text: "Document object model", correct: true },
          { text: "Door of mentor", correct: false }
        ]
      },
      {
        question: "Which of the following statements about event listeners is true?",
        answers: [
          { text: "a. Event listeners are used only for handling mouse events.", correct: false },
          { text: "b. Event listeners are added to elements using the `on-click` attribute.", correct: false },
          { text: "c. Event listeners are triggered only by user interactions with a webpage.", correct: true },
          { text: "d. Event listeners are not supported in modern web browsers.", correct: false }
        ]
      }
  ];
  // //set up quiz variables
  // let currentQuestionIndex = 0;
  // let score = 0;

  // //get reference to the quiz element
  // const quizContainer = document.getElementById('quiz-container');
  // const questtionElement = document.getElementById('question');
  // const answerButtonsElement = document.getElementById('answer-buttons');

  // //add event listener to the start button
  // document.getElementById('start-btn').addEventListener('click', startQuiz);
 
  // function startQuiz() {
  //   console.log('started');
  //   //start timer and display first question
  //   //implement quiz logic here 
  //   document.getElementById('start-btn').style.display = 'none';
  //   //start timer and diaplay first question
  //   const timerInterval = setInterval(function() {
  //     //decrement time remaining
  //     timeRemaing--;
  //     //update timer display
  //     document.getElementById('timer').textContent = "Time remaining: " + timeRemaing;
  //     //check if time has run out
  //     if (timeRemaing === 0) {
  //       clearInterval(timerInterval);
  //       endQuiz();
  //     }
  //   }, 1000);
  //   //implement quiz logic
  //   showQuestion();
  // }

  // function showQuestion() {
  //   //display current question and answers
  //   const currentQuestion = quizQuestions[currentQuestionIndex];
  //   questtionElement.innerText = currentQuestion.question;
  //   answerButtonsElement.innerHTML = '';


  // }