quizData = [
    {
        question: "What year did I graduate college?",
        a:"2011",
        b:"2014",
        c:"2015",
        d:"2019",
        correct:"c",
    },
    {
        question: "Where did I propose to my fiance?",
        a:"South Lake Tahoe",
        b:"Portland",
        c:"Santa Cruz",
        d:"San Diego",
        correct: "a",
    },
    {
        question: "What is my favorite sport to watch?",
        a:"Hockey",
        b:"Golf",
        c:"Football",
        d:"Soccer",
        correct:"c",
    },
    {
        question:"What is my favorite sport to play",
        a:"Golf",
        b:"Football",
        c:"Soccer",
        d:"Beer Olympics",
        correct:"a",
    },
    {
        question: "Did I run out of questions?",
        a:"Yes",
        b:"No",
        c:"Obviously",
        d:"Both A and C",
        correct:"d",
    }
]

//Variables defined to pull questions data

var questionEl = document.getElementById("question");
var a_text = document.getElementById("a_text");
var b_text = document.getElementById("b_text");
var c_text = document.getElementById("c_text");
var d_text = document.getElementById("d_text");

//indexing
var currentQuestion = 0;

var answerList = document.querySelectorAll(".answer");
// creating function that loads quiz data into page.



var loadQuiz = function () {
    var currentQuizQuestion = quizData[currentQuestion];

    questionEl.innerText = currentQuizQuestion.question

    a_text.innerText = currentQuizQuestion.a
    b_text.innerText = currentQuizQuestion.b
    c_text.innerText = currentQuizQuestion.c
    d_text.innerText = currentQuizQuestion.d


    currentQuestion++;
   
}


loadQuiz();

document.querySelector(".answer").addEventListener("click", function() {
    
  

    if (currentQuestion < quizData.length) {
        
        loadQuiz();
        console.log(answer);
    }
});
