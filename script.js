const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            {text: "shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "What planet is closest to the sun?",
        answers: [
            {text: "Mercury", correct: true},
            {text: "Mars", correct: false},
            {text: "Venus", correct: false},
            {text: "Earth", correct: false},
        ]
    },
    {
        question: "What is the smallest continent in the world?",
        answers: [
            {text: "Asia", correct: false},
            {text: "Africa", correct: false},
            {text: "Europe", correct: false},
            {text: "Australia", correct: true},
        ]
    },
    {
        question: "What state is the golden gate bridge in?",
        answers: [
            {text: "Florida", correct: false},
            {text: "North Dakota", correct: false},
            {text: "California", correct: true},
            {text: "Ohio", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        constbutton = document.createElement("button");
        nextButton.innerHTML = answer.text;
        nextButton.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

startQuiz();