// DOM elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startButton = document.getElementById('start-btn');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const currentQuestionsSpan = document.getElementById('current-questions');
const totalQuestionsSpan = document.getElementById('total-questions');
const scoreSpan = document.getElementById('score');
const finalScoreSpan = document.getElementById('final-score');
const maxScoreSpan = document.getElementById('max-score');
const resultMessage = document.getElementById('result-message');
const restartButton = document.getElementById('restart-btn');
const progressBar = document.getElementById('progress-bar');

const quizQuestions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "London", correct: false },
            { text: "Berlin", correct: false },
            { text: "Paris", correct: true },
            { text: "Madrid", correct: false }
        ],
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Mercury", correct: false }
        ],
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true }
        ],
    },
    {
        question: "Which of these is NOT a programming language?",
        answers: [
            { text: "Python", correct: false },
            { text: "Java", correct: false },
            { text: "Banana", correct: true },
            { text: "JavaScript", correct: false }
        ],
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text: "Go", correct: false },
            { text: "Gd", correct: false },
            { text: "Au", correct: true },
            { text: "Ag", correct: false }
        ],
    },
];

// Quiz state vars
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

// Event listeners
startButton.addEventListener('click', startQuiz);
restartButton.addEventListener('click', restartQuiz);

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreSpan.textContent = score;

    startScreen.classList.remove('active');
    quizScreen.classList.add('active');

    showQuestion();
}

function showQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    answersContainer.innerHTML = '';
    currentQuestionsSpan.textContent = currentQuestionIndex + 1;

    progressBar.style.width = `${(currentQuestionIndex / quizQuestions.length) * 100}%`;

    answersDisabled = false;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('answer-btn');
        button.dataset.correct = answer.correct;
        button.addEventListener('click', selectAnswer);
        answersContainer.appendChild(button);
    });
}

function selectAnswer(e) {
    if (answersDisabled) return;
    answersDisabled = true;

    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === 'true';

    if (isCorrect) {
        score++;
        scoreSpan.textContent = score;
    }

    Array.from(answersContainer.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        } else if (button === selectedButton) {
            button.classList.add('incorrect');
        }
    });

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 1000);
}

function showResult() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');
    finalScoreSpan.textContent = score;

    const scorePercent = (score / quizQuestions.length) * 100;

    if (scorePercent === 100) {
        resultMessage.textContent = "Perfect! You're a genius!";
    } else if (scorePercent >= 80) {
        resultMessage.textContent = "Great job! You know your stuff!";
    } else if (scorePercent >= 60) {
        resultMessage.textContent = "Good effort! Keep learning!";
    } else if (scorePercent >= 40) {
        resultMessage.textContent = "Not bad, try again to improve!";
    } else {
        resultMessage.textContent = "Keep studying! You'll get better!";
    }
}

function restartQuiz() {
    resultScreen.classList.remove('active');
    startQuiz();
}
