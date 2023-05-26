const quizData = [
    {
        question: 'What is the capital of Spain?',
        a: 'Lisbon',
        b: 'Madrid',
        c: 'Paris',
        d: 'Rome',
        correct: 'b'
    }, 
    {
        question: 'Which ocean is the largest by area?',
        a: 'Indian Ocean',
        b: 'Pacific Ocean',
        c: 'Atlantic Ocean',
        d: 'Southern Ocean',
        correct: 'b'
    }, 
    {
        question: 'When did the French Revolution begin?',
        a: '1776',
        b: '1789',
        c: '1812',
        d: '1848',
        correct: 'b'
    }, 
    {
        question: 'Which country has won the most FIFA World Cup titles?',
        a: 'Italy',
        b: 'Germany',
        c: 'Brazil',
        d: 'Argentina',
        correct: 'c'
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz= 0;
let score = 0;

loadQuiz()

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b; 
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
    

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You got ${score}/${quizData.length} questions.</h2>

                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
