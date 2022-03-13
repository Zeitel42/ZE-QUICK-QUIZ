// target html elements here
var timerHead = document.querySelector(".timerHead");
var clock = document.querySelector(".clock");
var startButton = document.querySelector(".start-btn");
var questionsText = document.querySelector(".questions-text");
var buttonsList = document.querySelector(".buttonsList");
var highScoresList = document.querySelector(".highScores");



// declare global variables here
var timer;
var timeDown;
var timeCount;
var newQuestion;
var ulListEl;
var listItemEl;
var buttonArray = [];
var buttonOne;
var buttonTwo;
var buttonThree;
var buttonFour;
var correctButton = 0;
var incorrectButton = 0;
var yourScore;
var initialsForm;
var initialsText;
var initialsSubmit;
var submitButton;
var highScores;
var loadScores;
var newScores;
var newHighScore;

// //  array of questions and answers
var questions = [
    {
        question: "How many licks to get to the center of a Tootsie Roll Tootsie Pop?",
        answers: ["One lick", "Two licks", "Three licks", "All of the above"],
        correctAnswer: 2,
        questNumber: 0
    },
    {
        question: "What is the square root of 25?",
        answers: ["5", "15", "12.5", "25"],
        correctAnswer: 0,
        questNumber: 1
    },
    {
        question: "Which planet in the Milky Way Galaxy is the hottest?",
        answers: ["Uranus", "Venus", "Earth", "Mars"],
        correctAnswer: 1,
        questNumber: 2
    },
    {
        question: "Who played the Joker in Tim Burton's Batman?",
        answers: ["Heath Ledger", "Willem Dafoe", "Jack Nicholson", "Joaquin Phoenix"],
        correctAnswer: 2,
        questNumber: 3
    },
    {
        question: "How many time outs per half are alloted to each NFL team?",
        answers: ["One", "Two", "Three", "Four"],
        correctAnswer: 2,
        questNumber: 4
    },
    {
        question: "Who caught quarterback Brett Favre's first NFL completion?",
        answers: ["Brett Farvre", "Jerry Rice", "Sterling Sharpe", "Steve Largeant"],
        correctAnswer: 0,
        questNumber: 5
    },
    {
        question: "How many days are in a leap year?",
        answers: ["a. 365", "b. 366", "c. 367", "d. All of the above."],
        correctAnswer: 1,
        questNumber: 6
    },
    {
        question: "What time is it? (according to the Spin Doctors)",
        answers: ["4:30", "It's not late.", "Naw, naw, it's early", "All of the above."],
        correctAnswer: 0,
        questNumber: 7
    },
    {
        question: "Which of these acts didn't play at Woodstock?",
        answers: ["Grateful Dead", "Jimi Hendrix", "The Rolling Stones", "The Who"],
        correctAnswer: 2,
        questNumber: 8
    },
    {
        question: "Who sang the song 'Who Are You?",
        answers: ["a. The Who", "b. The Guess Who.", "c. Whomever", "d. All of the above."],
        correctAnswer: 0,
        questNumber: 9
    },
    {
        question: "How many ghosts chase Pac-man at the beginning of every game?",
        answers: ["a. One", "b. Two", "c. Three", "d. Four"],
        correctAnswer: 3,
        questNumber: 10
    }
];

// start game 
startButton.addEventListener("click", startGame);

function startGame(){
    startButton.style.display = "block";
    questionsText.style.display = "block";
    listItemEl.style.display = "block";
    newQuestion = 0;
    timer = 15;
    timeCount = setInterval(timeDown, 1000);
        
    questionFunction();
};

// countdown
function timeDown(){
        timer;
        if(timer > 0){
            timer--;
        }
        else{
            clearInterval(timeCount);
            return endGame();
        }
        clock.innerHTML = timer;  
};

function createItem(element, className){
    var newEl = document.createElement(element);
    newEl.setAttribute("class", className);
    return newEl;
}

// var newButton = createItem("button", "newButton");
// console.log(newButton);

// create ul li buttons

ulListEl = createItem("ul", "ulListElName")
ulListEl.style.display = "none";
listItemEl = createItem("li", "listItemElName")
listItemEl.style.listStyle = "none";

buttonOne = createItem("button", "answerButton");
buttonTwo = createItem("button", "answerButton");
buttonThree = createItem("button", "answerButton");
buttonFour= createItem("button", "answerButton");
var playAgain = createItem("h3", "playAgainText");
playAgain.innerHTML = "Play Again?";


buttonsList.appendChild(ulListEl);
ulListEl.appendChild(listItemEl);
listItemEl.appendChild(buttonOne);
listItemEl.appendChild(buttonTwo);
listItemEl.appendChild(buttonThree);
listItemEl.appendChild(buttonFour);

ulListEl.appendChild(playAgain);

// questions
function questionFunction(){
    startButton.style.display = "none";
    playAgain.style.display = "none";
    var theQuestion = questions[newQuestion];
    questionsText.innerHTML = theQuestion.question;
    answers();
};

// answers
function answers(){
    ulListEl.style.display = "block";
    var buttonAnswer = questions[newQuestion].answers;
    buttonOne.innerHTML = buttonAnswer[0];
    buttonTwo.innerHTML = buttonAnswer[1];
    buttonThree.innerHTML = buttonAnswer[2];
    buttonFour.innerHTML = buttonAnswer[3];
};

var checkAnswer;
var buttonClick = document.querySelectorAll(".answerButton").forEach(element => {
    element.addEventListener("click", event => {
    checkAnswer = element.innerHTML;
    rightOrWrong();
    })
});
// if correct do this, if incorrect do that
function rightOrWrong(){

    if( checkAnswer === questions[newQuestion].answers[questions[newQuestion].correctAnswer]){
        timer = timer + 3;
        listItemEl.style.backgroundColor = "green";
        listItemEl.style.transition= "background-color 0.25s ease-out";
        // listItemEl.style.backgroundColor = "transparent";
        correctButton++;
    }else{
        listItemEl.style.transition= "background-color 0.25s ease-in";
        listItemEl.style.backgroundColor = "red";
        
        if(timer <= 3){
            timer = 1;
        }else{
            timer = timer - 3;
        }
    }
    newQuestion++

    if(newQuestion + 1 > questions.length){

           endGame();
       }else{
        questionFunction();
       }
};

function endGame(){
    
    listItemEl.style.display = "none";
    questionsText.style.display = "none";
    
    clearInterval(timeCount);
    if(timer > 1){
    yourScore = correctButton * timer;
    }else{
        yourScore = correctButton;
    }

    clock.innerHTML = "Your Score: " + yourScore + " ! Enter your initials to save your score!";

    timerHead.innerHTML = "Game Over";

    scores();
};

function scores(){
    
    initialsText = document.createElement("input");
    initialsText.setAttribute("type", "text");
    initialsText.setAttribute("maxlength", "4");

    submitButton = createItem("button", "submitButton");
    submitButton.innerHTML = "Save Score";
    
    ulListEl.appendChild(initialsText);
    ulListEl.appendChild(submitButton);

    submitButton.addEventListener("click", saveScore);
    
};

function saveScore(){

    submitScore = {
    "name": initialsText.value,
    "score": yourScore
    }
    
    loadScores =  JSON.parse(localStorage.getItem('scores')) || [];

    loadScores.push(submitScore);
    console.log(loadScores);

    var sortedScores = loadScores.sort(function(a, b){return b.score - a.score});
    console.log(sortedScores);
      
    for(var i = 0; i < sortedScores.length; i++){
        var scoreLi = createItem("li", "scoreLi");
        scoreLi.innerHTML = sortedScores[i].name + " " + sortedScores[i].score;
        scoreLi.style.listStyle = "none";
        highScoresList.appendChild(scoreLi);
    }
    
    newScores = localStorage.setItem("scores", JSON.stringify(sortedScores));
    
    playAgainFunction();
}

function playAgainFunction(){
    initialsText.value = "";
    initialsText.style.display = "none";
    submitButton.style.display = "none";
    playAgain.style.display = "block";
    startButton.style.display = "block";
}




