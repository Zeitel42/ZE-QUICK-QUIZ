// target html elements here
var rules = document.querySelector(".rules");
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
        question: "Which is a correct variable declaration?",
        answers: ["var = ", "const !=", "let aName =", "All of the above"],
        correctAnswer: 2,
        questNumber: 0
    },
    {
        question: "How do you comment out multiple lines?",
        answers: ["/* */", "//", ".commentOut", "25"],
        correctAnswer: 0,
        questNumber: 1
    },
    {
        question: "Which is not an operator?",
        answers: ["+", "()", "/", "*"],
        correctAnswer: 1,
        questNumber: 2
    },
    {
        question: "Which is a correct String?",
        answers: ["Heath Ledger", '("Willem Dafoe")', '"Jack Nicholson"', "let = Joaquin Phoenix"],
        correctAnswer: 2,
        questNumber: 3
    },
    {
        question: "How do you add an item to the end of an array?",
        answers: ["shift()", "pull()", "push()", "unshift()"],
        correctAnswer: 2,
        questNumber: 4
    },
    {
        question: "How do you remove an item from the beginning of an array?",
        answers: ["shift()", "pull()", "push()", "unshift()"],
        correctAnswer: 0,
        questNumber: 5
    },
    {
        question: "Which will randomize a whole number?",
        answers: ["Math.random(Math.floor())", "Math.floor(Math.random())", "Math.random()", "Math.floor()"],
        correctAnswer: 1,
        questNumber: 6
    },
    {
        question: "What statement when added to a switch statement case will continue execution at next switch case?",
        answers: ["break;", "lunchTime!;", "continue;", "All of the above."],
        correctAnswer: 0,
        questNumber: 7
    },
    {
        question: "What does a boolean evaluate?",
        answers: ["Simon or Garfunkle", "Beef or Beans", "True or False", "The Who"],
        correctAnswer: 2,
        questNumber: 8
    },
    {
        question: "Which comparison operator describes equal value and type?",
        answers: ["===", "=", "==", "++++"],
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
    rules.style.display = "none";
    clock.style.display = "block";
    startButton.style.display = "block";
    questionsText.style.display = "block";
    listItemEl.style.display = "block";
    listItemEl.style.backgroundColor = "transparent";
    newQuestion = 0;
    timer = 25;
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

// create an element

function createItem(element, className){
    var newEl = document.createElement(element);
    newEl.setAttribute("class", className);
    return newEl;
}

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

// answer buttons
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
        
        correctButton++;
    }else{
        listItemEl.style.backgroundColor = "red";
        listItemEl.style.transition= "background-color 0.25s ease-out";
        
        if(timer <= 3){
            timer = 1;
        }else{
            timer = timer - 5;
        }
    }
    newQuestion++

    if(newQuestion + 1 > questions.length){

           endGame();
       }else{
        questionFunction();
       }
};

// clears timer interval and shows user their score
function endGame(){
    
    listItemEl.style.display = "none";
    questionsText.style.display = "none";
    
    clearInterval(timeCount);
    if(timer > 1){
    yourScore = correctButton * timer;
    }else if(timer === 1){
        yourScore = correctButton + 2;
    }else{
        yourScore = correctButton;
    }

    clock.innerHTML = "Your Score: " + yourScore + " ! Enter your initials to save your score!";

    timerHead.innerHTML = "Game Over";

    scores();
};
// enter initials to save score
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
// submit initials and score to localStorage
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
// option to start again
function playAgainFunction(){
    initialsText.value = "";
    initialsText.style.display = "none";
    submitButton.style.display = "none";
    clock.style.display = "none";
    playAgain.style.display = "block";
    startButton.style.display = "block";
}




