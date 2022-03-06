// target html elements here
var clock = document.querySelector(".clock");
var startButton = document.querySelector(".start-btn");
var questionsText = document.querySelector(".questions-text");
var answers = document.querySelector(".answers");

// declare global variables here
var timer = 15;
var timerInterval;
var randomQuestions = [];

// //  array of questions and answers
// var questions = [
//     {
//         question: "How many licks to get to the center of a Tootsie Roll Tootsie Pop?",
//         answers: ["a. One lick.", "b. Two licks.", "c. Three licks.", "d. All of the above."],
//         questNumber: 0
//     },
//     {
//         question: "What is the square root of 25?",
//         answers: ["a. 5", "b. 15", "c. 12.5", "d. 25"],
//         questNumber: 1
//     },
//     {
//         question: "index 2?",
//         answers: ["a. One lick.", "b. Two licks.", "c. Three licks.", "d. All of the above."],
//         questNumber: 2
//     },
//     {
//         question: "index 3?",
//         answers: ["a. One lick.", "b. Two licks.", "c. Three licks.", "d. All of the above."],
//         questNumber: 3
//     },
//     {
//         question: "index 4?",
//         answers: ["a. One lick.", "b. Two licks.", "c. Three licks.", "d. All of the above."],
//         questNumber: 4
//     },
//     {
//         question: "index 5?",
//         answers: ["a. One lick.", "b. Two licks.", "c. Three licks.", "d. All of the above."],
//         questNumber: 5
//     },
//     {
//         question: "index 6?",
//         answers: ["a. One lick.", "b. Two licks.", "c. Three licks.", "d. All of the above."],
//         questNumber: 6
//     },
//     {
//         question: "index 7?",
//         answers: ["a. One lick.", "b. Two licks.", "c. Three licks.", "d. All of the above."],
//         questNumber: 7
//     },
//     {
//         question: "index 8?",
//         answers: ["a. One lick.", "b. Two licks.", "c. Three licks.", "d. All of the above."],
//         questNumber: 8
//     },
//     {
//         question: "index 9?",
//         answers: ["a. One lick.", "b. Two licks.", "c. Three licks.", "d. All of the above."],
//         questNumber: 9
//     },
//     {
//         question: "index 10?",
//         answers: ["a. One lick.", "b. Two licks.", "c. Three licks.", "d. All of the above."],
//         questNumber: 10
//     }
// ];
// questionsText.innerHTML = questions[0].question;
// var liEl = document.createElement("li")
// for(var i = 0; i < questions.answers.length; i++){
//     liEl.appendChild(questions.answers[i]);
//     console.log(liEl);
// }
// function randoQuest(){
    
//     for(var i = 0; i < questions.length; i++){
//         rando = questions[Math.floor(Math.random()* questions.length)];      
//     }
// }
// console.log(randomQuestions);


// // timer interval and function

timerInterval = function(){
    setInterval(timeDown, 1000);
}

function timeDown(){
    timer;
    if(timer > 0){
        timer--;
    }else{
        return;
    }
    if(timer <= 5){
        clock.style.color = "yellow";
        clock.style.fontSize = "30px";
    }
    if(timer <= 3){
        clock.style.color = "red";
        clock.style.fontSize = "40px";
    }
    
    clock.innerHTML = timer;
}

// timer start

// startButton.addEventListener("click", timerInterval);
startButton.addEventListener("click", randoQuest);