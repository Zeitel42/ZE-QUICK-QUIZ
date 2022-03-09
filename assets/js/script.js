// target html elements here
var clock = document.querySelector(".clock");
var startButton = document.querySelector(".start-btn");
var questionsText = document.querySelector(".questions-text");
var buttonsList = document.querySelector(".buttonsList");


// declare global variables here
var timer = 15;
var timerInterval;
var questionsArray = [];
var correctAnswer= "";
var newQuestion = 0;
var newAnswers = [];
var listItemEl;
var ulListEl;
var buttonItemEl;

// //  array of questions and answers
var questions = [
    {
        question: "How many licks to get to the center of a Tootsie Roll Tootsie Pop?",
        answers: ["One lick", "Two licks", "Three licks", "All of the above"],
        correctAnswer: 3,
        questNumber: 0
    },
    {
        question: "What is the square root of 25?",
        answers: ["5", "15", "12.5", "25"],
        correctAnswers: 1,
        questNumber: 1
    },
    {
        question: "Which planet in the Milky Way Galaxy is the hottest?",
        answers: ["Uranus", "Venus", "Earth", "Mars"],
        correctAnswers: 2,
        questNumber: 2
    },
    {
        question: "Who played the Joker in Tim Burton's Batman?",
        answers: ["Heath Ledger", "Willem Dafoe", "Jack Nicholson", "Joaquin Phoenix"],
        correctAnswers: 3,
        questNumber: 3
    },
    {
        question: "How many time outs per half are alloted to each NFL team?",
        answers: ["One", "Two", "Three", "Four"],
        correctAnswers: 3,
        questNumber: 4
    },
    {
        question: "Who caught quarterback Bret Favre's first NFL completion?",
        answers: ["Brett Farvre", "Jerry Rice", "Sterling Sharpe", "Steve Largeant"],
        correctAnswers: 1,
        questNumber: 5
    },
    {
        question: "How many days are in a leap year?",
        answers: ["a. 365", "b. 366", "c. 367", "d. All of the above."],
        correctAnswers: 2,
        questNumber: 6
    },
    {
        question: "What time is it? (according to the Spin Doctors)",
        answers: ["4:30", "It's not late.", "Naw, naw, it's early", "All of the above."],
        correctAnswers: 1,
        questNumber: 7
    },
    {
        question: "Which of these acts didn't play at Woodstock?",
        answers: ["Grateful Dead", "Jimi Hendrix", "The Rolling Stones", "The Who"],
        correctAnswers: 3,
        questNumber: 8
    },
    {
        question: "Who sang the song 'Who Are You?",
        answers: ["a. The Who", "b. The Guess Who.", "c. Whomever", "d. All of the above."],
        correctAnswers: 1,
        questNumber: 9
    },
    {
        question: "How many ghosts chase Pac-man at the beginning of every game?",
        answers: ["a. One", "b. Two", "c. Three", "d. Four"],
        correctAnswers: 4,
        questNumber: 10
    }
];

function questionsAnswers(){
    startButton.style.display="none";
    for(var i = 0; i < questions.length; i++){ 
        if(questions[i].questNumber === newQuestion){
            questionsText.innerHTML += questions[i].question;
            newAnswers = questions[i].answers;
    
            for(var j = 0; j < newAnswers.length; j++){
                ulListEl = document.createElement("ul");
                ulListEl.setAttribute("class", "ulList")

                listItemEl = document.createElement("li");
                listItemEl.style.listStyle = "none";

                buttonItemEl = document.createElement("button");
                buttonItemEl.setAttribute("class", "answerClick");
                buttonItemEl.innerHTML += questions[i].answers[j];

                buttonsList.appendChild(ulListEl);
                ulListEl.appendChild(listItemEl);
                listItemEl.appendChild(buttonItemEl);

                document.querySelectorAll(".answerClick").forEach(item => {
                    item.addEventListener("click", event => {
                        playerChoice();
                    })
                }) 
            }
        }   
    }
    
  };


function playerChoice(){
    newQuestion++;
    console.log(newQuestion);
    
    var el = document.querySelector(".ulList");
    el.remove();
    questionsAnswers();
   
}

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

startButton.addEventListener("click", timerInterval);
startButton.addEventListener("click", questionsAnswers);
// 

