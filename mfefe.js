/* =====================================================
   МОБИЛЬНОЕ МЕНЮ
===================================================== */

const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("active");

    if (navigation.classList.contains("active")) {
        menuButton.textContent = "✕";
    } else {
        menuButton.textContent = "☰";
    }

});


/* Закрываем меню после нажатия на ссылку */

document.querySelectorAll(".navigation a").forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("active");

        menuButton.textContent = "☰";

    });

});


/* =====================================================
   ПЛАВНАЯ ПРОКРУТКА
===================================================== */

function scrollToSection(id) {

    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   ТЕМА
===================================================== */

const themeButton =
    document.getElementById("themeButton");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (
        document.body.classList.contains("light")
    ) {
        themeButton.textContent = "☀️ ";
    } else {
        themeButton.textContent = "🌙 ";
    }

});


/* =====================================================
   СТРАНЫ
===================================================== */

const countries = {

    russia: {
        flag: "🇷🇺 ",
        name: "Россия",
        capital: "Москва",
        area: "≈ 17,1 млн км²",
        fact:
            "Россия — крупнейшая страна мира по площади."
    },

    usa: {
        flag: "🇺🇸 ",
        name: "США",
        capital: "Вашингтон",
        area: "≈ 9,8 млн км²",
        fact:
            "США расположены в Северной Америке."
    },

    brazil: {
        flag: "🇧🇷 ",
        name: "Бразилия",
        capital: "Бразилиа",
        area: "≈ 8,5 млн км²",
        fact:
            "Большая часть бассейна Амазонки находится в Бразилии."
    },

    australia: {
        flag: "🇦🇺 ",
        name: "Австралия",
        capital: "Канберра",
        area: "≈ 7,7 млн км²",
        fact:
            "Австралия — одновременно страна и материк."
    },

    japan: {
        flag: "🇯🇵 ",
        name: "Япония",
        capital: "Токио",
        area: "≈ 378 тыс. км²",
        fact:
            "Япония состоит из множества островов."
    }

};


function showCountry(countryName) {

    const country =
        countries[countryName];

    if (!country) return;

    const panel =
        document.getElementById("countryPanel");

    panel.innerHTML = `

        <div class="panel-placeholder">

            <div class="big-country-flag">
                ${country.flag}
            </div>

            <h3>
                ${country.name}
            </h3>

            <p>
                🏛️  Столица:
                <strong>${country.capital}</strong>
            </p>

            <p>
                📐  Площадь:
                <strong>${country.area}</strong>
            </p>

            <p>
                💡  <strong>Интересный факт:</strong>
            </p>

            <p>
                ${country.fact}
            </p>

        </div>

    `;

}


/* =====================================================
   ФАКТ ИЛИ БРЕД
===================================================== */

const facts = [

    {
        emoji: "🇮🇸 ",
        text: "В Исландии нет комаров.",
        answer: true
    },

    {
        emoji: "🐪 ",
        text: "В Антарктиде есть пустыня.",
        answer: true
    },

    {
        emoji: "🌍",
        text: "Африка — самый маленький материк.",
        answer: false
    },

    {
        emoji: "🌋 ",
        text:
        "На Земле существует много действующих вулканов.",
        answer: true
    },

    {
        emoji: "🏔️ ",
        text:
            "Эверест находится в Европе.",
        answer: false
    }

];


let factIndex = 0;


function loadFact() {

    const fact =
        facts[factIndex];

    document.getElementById("factCounter")
        .textContent =
        `${factIndex + 1} / ${facts.length}`;

    document.getElementById("factEmoji")
        .textContent =
        fact.emoji;

    document.getElementById("factQuestion")
        .textContent =
        fact.text;

    document.getElementById("factResult")
        .textContent = "";

}


function answerFact(userAnswer) {

    const fact =
        facts[factIndex];

    const result =
        document.getElementById("factResult");

    if (userAnswer === fact.answer) {

        result.textContent =
            "🎉  Правильно!";

        result.style.color =
            "#15915b";

    } else {

        result.textContent =
            "😅  Неправильно!";

        result.style.color =
            "#df3838";

    }

    setTimeout(() => {

        factIndex++;

        if (factIndex >= facts.length) {
            factIndex = 0;
        }

        loadFact();

    }, 1000);

}


/* =====================================================
   КВИЗ
===================================================== */

const questions = [

    {
        question:
            "Какая страна самая большая по площади?",

        answers: [
            "США",
            "Китай",
            "Россия",
            "Канада"
        ],

        correct: 2
    },

    {
        question:
            "Какой океан самый большой?",

        answers: [
            "Атлантический",
            "Тихий",
            "Индийский",
            "Северный Ледовитый"
        ],

        correct: 1
    },

    {
        question:
            "Столица Франции — это...",

        answers: [
            "Рим",
            "Берлин",
            "Париж",
            "Мадрид"
        ],

        correct: 2
    },

    {
        question:
            "На каком материке находится Египет?",

        answers: [
            "Африка",
            "Европа",
            "Азия",
            "Южная Америка"
        ],

        correct: 0
    },

    {
        question:
            "Какая гора самая высокая над уровнем моря?",

        answers: [
            "Эльбрус",
            "Килиманджаро",
            "Эверест",
            "Монблан"
        ],

        correct: 2
    }

];


let questionIndex = 0;
let quizScore = 0;
let answerSelected = false;


function loadQuestion() {

    const question =
        questions[questionIndex];

    document.getElementById("questionNumber")
        .textContent =
        `Вопрос ${questionIndex + 1} из ${questions.length}`;

    document.getElementById("quizScore")
        .textContent =
        `Очки: ${quizScore}`;

    document.getElementById("quizQuestion")
        .textContent =
        question.question;

    document.getElementById("progressBar")
        .style.width =
        `${((questionIndex + 1) / questions.length) * 100}%`;

    const answers =
        document.getElementById("answers");

    answers.innerHTML = "";

    answerSelected = false;

    document.getElementById("nextButton")
        .disabled = true;


    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");

            button.className =
                "answer";

            button.textContent =
                `${String.fromCharCode(65 + index)}) ${answer}`;

            button.addEventListener(
                "click",
                () => selectAnswer(index)
            );

            answers.appendChild(button);

        }
    );

}


function selectAnswer(index) {

    if (answerSelected) return;

    answerSelected = true;

    const question =
        questions[questionIndex];

    const buttons =document.querySelectorAll(".answer");


    buttons.forEach((button, i) => {

        if (i === question.correct) {

            button.classList.add("correct");

        }

        if (
            i === index &&
            index !== question.correct
        ) {

            button.classList.add("wrong");

        }

    });


    if (index === question.correct) {

        quizScore++;

    }


    document.getElementById("quizScore")
        .textContent =
        `Очки: ${quizScore}`;

    document.getElementById("nextButton")
        .disabled = false;

}


function nextQuestion() {

    questionIndex++;

    if (
        questionIndex >= questions.length
    ) {

        showQuizResult();

        return;
    }

    loadQuestion();

}


function showQuizResult() {

    document.querySelector(".quiz-card")
        .style.display = "none";

    const result =
        document.getElementById("quizResult");

    result.style.display = "flex";


    document.getElementById("resultScore")
        .textContent =
        `${quizScore}/${questions.length}`;


    let text;


    if (quizScore <= 1) {

        text =
            "🥔  Ты пока географическая картошка. Но всё ещё впереди!";

    } else if (quizScore <= 3) {

        text =
            "🧭  Неплохо! Ты турист выходного дня.";

    } else if (quizScore === 4) {

        text =
            "🌍 Почти настоящий географ!";

    } else {

        text =
            "🗿  Вау! Ты знаешь Землю очень хорошо!";

    }


    document.getElementById("resultText")
        .textContent = text;

}


function restartQuiz() {

    questionIndex = 0;

    quizScore = 0;

    document.querySelector(".quiz-card")
        .style.display = "block";

    document.getElementById("quizResult")
        .style.display = "flex";

    loadQuestion();

}


/* =====================================================
   ЗАПУСК
===================================================== */

document.getElementById("quizResult")
    .style.display = "none";

loadFact();

loadQuestion();