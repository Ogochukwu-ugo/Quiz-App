//Creating an array & passing the number, questions, options & answers

const question = document.getElementById("que_text");
const choices = Array.from(document.getElementsByClassName("optionChoice"));

const answerText = document.getElementById("answer");
// const scoreText = document.getElementById("score");


let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let userScore = 0;

let questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answer: "3",
        choice1: "Strings",
        choice2: "Booleans",
        choice3: "Alerts", 
        choice4: "Numbers"
        
        
    },
    {
        question: "Arrays in JavaScript can be used to store ______.",
        answer: "4",
        choice1: "Numbers and Strings",
        choice2: "Other Arrays",
        choice3: "Booleans",
        choice4:  "All of the above",
        
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answer: "3",
        choice1: "Commas",
        choice2: "Curly brackets", 
        choice3: "Quotes", 
        choice4:  "Parentheses"
        
    },
    {
        question:"A very useful tool used during development and debugging for printing content to the debugger is:",
        answer: "4",
        choice1: "JavaScript",
        choice2: "Terminal/bash",
        choice3:  "For loops",
        choice4: "console.log",
        
    },
    {
        question: "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
        answer: "1",
        choice1: "Break",
        choice2: "Stop", 
        choice3: "Halt", 
        choice4: "Exit"
        
    },
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startQuiz =() => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}; 

getNewQuestion = () => {

    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
    // localStorage.setItem('mostRecentScore',  score);
    //Go to the end page
    return window.location.assign("./alldone.html");
    }
    questionCounter++;
    
    const questionIndex = Math.floor(Math.random() * availableQuestions.length );//Pick questions randomly.
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"]; //Get the number of the current question.
        choice.innerText = currentQuestion["choice" + number];
    });
        
    availableQuestions.splice(questionIndex, 1); //Will remove the question already picked & answered.
    acceptingAnswers = true;

    
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        
        let classToApply = 'incorrect';
        if (selectedAnswer === currentQuestion.answer) {
            classToApply = 'correct';
        }
        // const classToApply = selectedAnswer === currentQuestion.answer ? "correct" : "incorrect"; //Using tenary operetor
        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);
        document.getElementById("answer").textContent = classToApply + " !";

        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
            document.getElementById("answer").innerHTML = " ";
            getNewQuestion();
        }, 1000);
             
    });
});


incrementScore = num => {
score +=num;
userScore = score;
console.log(userScore);
}

let time_sec = 50;
let interval = setInterval(function(){
document.getElementById('time_sec').innerHTML=time_sec;
time_sec--;
if (time_sec === 0){
    clearInterval(interval);
    document.getElementById('time_sec').innerHTML='Time Up';
    // or...
    //alert("You're out of time!");
    return window.location.assign('/alldone.html');
    }
}, 1000);



startQuiz();
    

    
