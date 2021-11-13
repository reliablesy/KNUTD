let buttonLeft = document.getElementById("buttonLeft");
let buttonRight = document.getElementById("#buttonRight");
let questionText = document.querySelector("#questionText");
questionText.innerHTML = "Привет, куда пойдем?";
let urlImage = "";
const questionMassive = ["Куда идем?", "Почему на лево?", "Давай назад тогда"];
const card = {
    question: questionText.innerHTML,
    stats: {
        religion: 10,
        war: 10,
        cash: 10,
    },
    mainImage: urlImage
};

let cnt = 0;
function setQuestion() {
    questionText.innerHTML = questionMassive[cnt];
    cnt++;
    card.stats.cash = card.stats.cash - 5;
    console.log(card.stats.cash);
}

buttonLeft.addEventListener('click', setQuestion);

