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
var answers = document.querySelectorAll(".btn")
var score = 0
var welcomeEl = document.getElementById("welcome")
var startEl = document.getElementById("start")
var list = document.getElementById("answers")
var form = document.getElementById("form")
var nav = document.getElementById("nav")
var container = document.getElementById("container")
var count = 50
var sumbitBtn = document.getElementById("submit")
//Variables defined to pull questions data

var questionEl = document.getElementById("question");
var a_text = document.getElementById("a_text");
var b_text = document.getElementById("b_text");
var c_text = document.getElementById("c_text");
var d_text = document.getElementById("d_text");

//indexing
var currentQuestion = 0;

var hideElement = function(element) {
    if(element.style.display == "none"){
        element.style.display = "block"
    }
    else {
        element.style.display = "none"
    }
}
var showElement = function(element) {
    if(element.style.display == "block"){
        element.style.display = "none"
    }
    else {
        element.style.display = "block"
    }
}

// creating function that loads quiz data into page.


var loadQuiz = function () {
    var currentQuizQuestion = quizData[currentQuestion];

    questionEl.innerText = currentQuizQuestion.question

    a_text.innerText = currentQuizQuestion.a
    b_text.innerText = currentQuizQuestion.b
    c_text.innerText = currentQuizQuestion.c
    d_text.innerText = currentQuizQuestion.d

    
}

//TODO Start quiz function

var startQuiz = function() {
    //remove welcome div
    hideElement(welcomeEl);
    //load quiz data
    loadQuiz();
    //start timer
var counter = setInterval(timer, 1000);
function timer () {
    count = count-1;
    if (count <0)
    {
        clearInterval(counter);
        return;
    }
    document.getElementById("timer").innerText = "Time: " + count;
}
showElement(list);
}
//End quiz function

var endQuiz = function() {
    hideElement(container);
    hideElement(nav);
    if(form.style.display == "flex"){
        form.style.display = "none"
    }
    else {
        form.style.display = "flex"
    }
    var endHeader = document.createElement("h2");
    endHeader.innerHTML = "All Done!";
    var finalScore = document.createElement("p");
    finalScore.innerHTML ="Your Final Score is " + score
    form.prepend(endHeader, finalScore)
    
}



answers.forEach(answers => {
        answers.addEventListener('click', function(e) {
       
        //get answer value
        var chosenAnswer = e.currentTarget.getAttribute('value');
        console.log(chosenAnswer);
        console.log(quizData[currentQuestion].correct);
        if(currentQuestion === quizData.length -1 || count <=0){
            endQuiz();
        }else {
        //correct answer add 10 points
        if(chosenAnswer === quizData[currentQuestion].correct){
        score+=10;
        } 
        //incorrect answer deduct 10 points
        //deduct time from timer
        else {
            count=count-10;
            if (score > 10) {
                score -= 10;
            }else {
                score = 0;
            }
        }
        currentQuestion++;
        loadQuiz();
        console.log(score);
    };
         
    })});

startEl.addEventListener("click", startQuiz);   
    //for loop

//     innerText= highScoresArr[i].score + 
// //append

// var highScore = {Score: score,Initials://value };
// //check if array is in local storage
// var highScoresArr = JSON.parse(localStorage.getItem("highscores")) || []


// highScoresArr.push(highScore)
// localStorage.setItem("highscores",

sumbitBtn.addEventListener("click", function(){
    var initials = document.getElementById("initials").value;
    console.log(initials)

})






