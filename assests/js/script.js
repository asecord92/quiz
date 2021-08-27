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

var a_text = document.getElementById("a_text");
var b_text = document.getElementById("b_text");
var c_text = document.getElementById("c_text");
var d_text = document.getElementById("d_text");

var currentQuestion = 0;

loadQuiz();

var loadQuiz = function () {

}