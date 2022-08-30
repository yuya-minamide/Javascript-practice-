const quiz = [
    {
        question: 'What’s the HTML tag for a Level 1 heading element?',
        answers: [
            '<p>',
            '<img>',
            '<h1>',
            '<a>'
        ],
        correct: '<h1>'
    }, {
        question: 'Which is the tag that represents the header of a document section?',
        answers: [
            '<header>',
            '<head>',
            '<body>',
            '<footer>'
        ],
        correct: '<header>'
    }, {
        question: 'Which tag defines a section of navigation links?',
        answers: [
            '<iframe>',
            '<a>',
            '<nav>',
            '<button>'
        ],
        correct: '<nav>'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//Reflect constant strings in HTML
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('Correct!');
        score++;
    } else {
        window.alert('Incorrect!');
    }
    quizIndex++;

    if(quizIndex < quizLength) {
        setupQuiz();
    } else {
        window.alert('Finish! You got ' + score + '/' + quizLength + '!!') 
    }
};

//If you click on the button, you can know a correct or incorrect decision.
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}
