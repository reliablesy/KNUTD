const ALL_QUESTIONS = [
    {
        text: "Перевірим вашу логіку",
        answers: [
            {
                text: "Да!",
                reward: 1,
            }
        ],
    },
    {
        text: "Віднови ряд 32, 332, *, 33332",
        answers: [
            {
                text: "3322",
                reward: 0,
            },
            {
                text: "3332",
                reward: 5,
            },
        ],
    },
    {
        text: "В якій клітці не тримають ні птахів, ні звірів?",
        answers: [
            {
                text: "в багато яких",
                reward: 2,
            },
            {
                text: " Велика клітка",
                reward: 1,
            },
            {
                text: "У грудній клітці",
                reward: 5,
            },
        ],
    },
    {
        text: "Один одному на зустріч ідуть 2 людини. Обидва абсолютно однакові. Питання, хто з них перший привітається?",
        answers: [
            {
                text: "Більш ввічливий",
                reward: 5,
            },
            {
                text: " Перший",
                reward: 1,
            },
            {
                text: "Другий",
                reward: 1,
            },
            {
                text: "Ніхто",
                reward: 0,
            },
        ],
    },
    {
        text: "Термометр показує плюс 15 градусів.Скільки градусів покажуть два таких термометра?",
        answers: [
            {
                text: "97",
                reward: 0,
            },
            {
                text: "30",
                reward: 2,
            },
            {
                text: "15",
                reward: 5,
            },
        ],
    },
    {
        text: "Як ви думаєте, якою рукою краще розмішувати кава з вершками та цукром?",
        answers: [
            {
                text: "тією рукою, в якій ложка",
                reward: 5,
            },
            {
                text: " тією рукою, в якій нічого",
                reward: 0,
            },
            {
                text: "не зною бо не пю",
                reward: 2,
            },
        ],
    },
    {
        text: "Сашко витрачає на дорогу до школи 10 хвилин. Скільки часу він витратить, якщо піде разом з другом?",
        answers: [
            {
                text: "15",
                reward: 3,
            },
            {
                text: "30",
                reward: 1,
            },
            {
                text: "10",
                reward: 5,
            },
        ],
    },
    {
        text: "Дитина мого батька, а мені не брат. Хто це?",
        answers: [
            {
                text: "Сестра",
                reward: 5,
            },
            {
                text: "Кузина",
                reward: 1,
            },
            {
                text: "Ніхто",
                reward: 0,
            },
        ],
    },
    {
        text: "Вантажівка їхала в село. По дорозі він зустрів 4 легкові машини. Скільки машин їхало в село?",
        answers: [
            {
                text: "1",
                reward: 5,
            },
            {
                text: "4",
                reward: 0,
            },
            {
                text: "5",
                reward: 2,
            },
        ],
    },
    {
        text: "Чи може дощ лити два дні поспіль?",
        answers: [
            {
                text: "Так",
                reward: 0,
            },
            {
                text: "Хто зна ",
                reward: 1,
            },
            {
                text: "Ні",
                reward: 5,
            },
        ],
    },
    {
        text: "Що буде з вороною, коли їй виповниться 7 років?",
        answers: [
            {
                text: "Будь що",
                reward: 3,
            },
            {
                text: "Загине ",
                reward: 1,
            },
            {
                text: "Піде восьмий",
                reward: 5,
            },
        ],
    },
    {
        text: "Коли чорній кішці найкраще пробратися в будинок?",
        answers: [
            {
                text: "Вночі",
                reward: 0,
            },
            {
                text: "Коли вікно відчинене ",
                reward: 2,
            },
            {
                text: "Коли двері відчинені",
                reward: 5,
            },
        ],
    },
    {
        text: "Двоє пішли - три груздя знайшли. Слідом четверо йдуть, багато груздів знайдуть?",
        answers: [
            {
                text: "8",
                reward: 2,
            },
            {
                text: "0",
                reward: 5,
            },
            {
                text: "+-3",
                reward: 3,
            },
        ],
    },
    {
        text: "Двоє пішли - три груздя знайшли. Слідом четверо йдуть, багато груздів знайдуть?",
        answers: [
            {
                text: "8",
                reward: 2,
            },
            {
                text: "0",
                reward: 5,
            },
            {
                text: "+-3",
                reward: 3,
            },
        ],
    },
    {
        text: "В якому місяці 28 днів?",
        answers: [
            {
                text: "Лютий",
                reward: 1,
            },
            {
                text: "В кожному",
                reward: 5,
            },
            {
                text: "Червень",
                reward: -1,
            },
        ],
    },
    {
        text: "Який місяць коротше всіх?",
        answers: [
            {
                text: "Лютий",
                reward: 3,
            },
            {
                text: "Травень",
                reward: 5,
            },
            {
                text: "грудень",
                reward: 0,
            },
        ],
    },
    {
        text: "Який місяць коротше всіх?",
        answers: [
            {
                text: "Лютий",
                reward: 3,
            },
            {
                text: "Травень",
                reward: 5,
            },
            {
                text: "грудень",
                reward: 0,
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

   if(totalScore < 5) {
      element.innerHTML = `Мои поздравления! Вы набрали ${totalScore} очков! И ЭТО СЛАБОВАТО!`
  } else if (totalScore > 5) {
      element.innerHTML = `Мои поздравления! Вы набрали ${totalScore} очков! В принципе пойдёт!`
  } else if (totalScore == 0) {
      element.innerHTML = `Мои поздравления! Вы набрали ${totalScore} очков! ВЫ ПРОДУЛИ, ГОСПОДА`
  }

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
