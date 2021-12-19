const ALL_QUESTIONS = [
  {
    text: "Вопрос 1",
    answers: [
      {
        text: "Ответ 1",
        reward: 1,
      },
      {
        text: "Ответ 2",
        reward: 2,
      },
      {
        text: "Ответ 3",
        reward: 3,
      },
    ],
  },
  {
    text: "Вопрос 2",
    answers: [
      {
        text: "Ответ 4",
        reward: 1,
      },
      {
        text: "Ответ 5",
        reward: 2,
      },
    ],
  },
];

const game = {
  currentQuestionIndex: 0,
  currentAnswerIndex: null,
  answeredQuestions: [],
  isFinished: false,
};

const selectAnswer = (index) => {
  game.currentAnswerIndex = index;

  render();
};

const renderQuiz = () => {
  const index = game.currentQuestionIndex;

  const { answers, text } = ALL_QUESTIONS[index];

  const form = document.createElement("form");

  form.classList.add("quiz");

  form.innerHTML = `
        <div class="quiz-text">
          ${text}
        </div>
        <ul class="quiz-anwsers">
            ${answers
              .map((answer, index) => {
                return `
                  <li>
                  <label class="label">
                      <input
                        class="quiz-anwsers-input"
                        type="radio"
                        name="currentAnswer"
                        value=${index}
                        onclick="selectAnswer(${index})"
                        ${game.currentAnswerIndex === index ? "checked" : ""}
                      >
                      <span class="checkbox"></span>
                      <span class="answer-text">${answer.text}</>
                    </label>
                  </li>
                `;
              })
              .join(``)}
        </ul>
        <div>
          ${game.currentQuestionIndex + 1}/${ALL_QUESTIONS.length}
        </div>
        <button class="btn" ${
          game.currentAnswerIndex !== null ? "" : "disabled"
        }>Далее</button>
    `;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const question = ALL_QUESTIONS[game.currentQuestionIndex];

    const answer = question.answers[game.currentAnswerIndex];

    game.answeredQuestions.push({
      question,
      answer,
    });

    onNextQuestion();
  });

  return form;
};

const renderResultsScreen = () => {
  const element = document.createElement('div');
  element.className = 'results';
  const totalScore = game.answeredQuestions.reduce((acc, { answer }) => acc + answer.reward, 0);

  element.innerHTML = `Мои поздравления! Вы набрали ${totalScore} очков!`

  return element;
}

const onNextQuestion = () => {
  const isLastQuestion = ALL_QUESTIONS.length === game.currentQuestionIndex + 1;

  game.isFinished = isLastQuestion;

  if (!isLastQuestion) {
    game.currentQuestionIndex++;
    game.currentAnswerIndex = null;
  }

  render();
};

let app;

const main = () => {
  app = document.getElementById('app');
  render();
};

const render = () => {
  const element = game.isFinished ? renderResultsScreen() : renderQuiz();

  app.replaceChildren(element);
};

main();
