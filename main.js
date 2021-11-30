const DATA = [
    {
        question: 'Вопрос 1',
        answers: [
            {
                id: '1',
                value: 'Ответ 1',
                allStatus: 4
            },
            {
                id: '2',
                value: 'Ответ 2',
                allStatus: 5
            },
            {
                id: '3',
                value: 'Ответ 3',
                allStatus: 7
            },
        ]
    },
    {
        question: 'Вопрос 2',
        answers: [
            {
                id: '4',
                value: 'Ответ 4',
                allStatus: 15
            },
            {
                id: '5',
                value: 'Ответ 5',
                allStatus: 18
            },
        ]
    }
];

let localresults = {};
let nowStatus = 0;

const quiz = document.getElementById('quiz');
const questions = document.getElementById('questions');
const results = document.getElementById('results');
const indicator = document.getElementById('indicator');
const btnNext = document.getElementById('btn-next');
const btnRestart = document.getElementById('btn-restart');
const stats = document.getElementById('stats');

const renderQuestion = (index) => {
    questions.dataset.currentStep = index;
    renderIndicator(index + 1);
    const renderAnswers = () => {
        return DATA[index].answers.map((answer) => {
            return `
                    <li>
                       <label>
                           <input class="answer-input" type="radio" name=${index} value=${answer.id} data-status=${DATA[index].answers.allStatus}>
                           ${answer.value}
                       </label>
                   </li>
`;
        })
            .join('');
    };
    questions.innerHTML = `
    <div class="quiz-questions-item">
               <div class="quiz-questions-item_question">${DATA[index].question}</div>
               <ul class="quiz-questions-item_answers">
                   ${renderAnswers()}
               </ul>
           </div>
    `;
};

const renderIndicator = (currentStep) => {
    indicator.innerHTML = `${currentStep}/${DATA.length}`;
};

const renderResults = (index) => {};

quiz.addEventListener('change', (event) => {
    if (event.target.classList.contains('answer-input')) {
        console.log(event.target.defaultValue);
        btnNext.disabled = false;
    }
});

quiz.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-next')) {
        if (DATA.length === Number(questions.dataset.currentStep) + 1) {

        } else {
            renderQuestion(Number(questions.dataset.currentStep) + 1)
        }
        btnNext.disabled = true;
    }
});
renderQuestion(0);


