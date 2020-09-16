(function () {
  function buildQuiz() {
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answers = [];

      for (letter in currentQuestion.answers) {
        answers.push(
          `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
        );
      }

      output.push(
        `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
      );
    });

    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;

        answerContainers[questionNumber].style.color = "green";
      } else {
        answerContainers[questionNumber].style.color = "red";
      }

    });

    // correct answer total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    localStorage.setItem('most recentScore', score);
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables section
  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    //questions
    {
      question: "Who founded Amazon?",
      answers: {
        a: "Bill Gates",
        b: "Elon Musk",
        c: "Jeff Bezos",
        d: "Tony Stark",
      },
      correctAnswer: "c",
    },
    {
      question: "Are Java and Javascript the same thing?",
      answers: {
        a: "Yes",
        b: "No",
      },
      correctAnswer: "b",
    },
    {
      question: "What does HTML stand for?",
      answers: {
        a: "Hydro techno meteor lasers",
        b: "Hyper Lattè medium liquid",
        c: "How to meet ladies",
        d: "Hyper Text Markup Language",
      },
      correctAnswer: "d",
    },
    {
      question: "What college says ROll TIDE",
      answers: {
        a: "University of Alabama",
        b: "Clemson",
        c: "Georgia",
        d: "Auburn",
      },
      correctAnswer: "a",
    },
  ];

  buildQuiz();
  
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(currentSlide);

  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();

//timer
document.addEventListener("DOMContentLoaded", () => {
  const timeLeftDisplay = document.querySelector("#time-left");
  const startBtn = document.querySelector("#start-button");
  let timeLeft = 60;

  function countDown() {
    setInterval(function () {
      if (timeLeft <= 0) {
        clearInterval((timeLeft = 0));
      }
      timeLeftDisplay.innerHTML = timeLeft;
      timeLeft -= 1;
    }, 1000);
  }
  startBtn.addEventListener("click", countDown);
});
