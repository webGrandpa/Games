let secretNumber;
let score;
let highscore = localStorage.getItem('marioHighscore') ? parseInt(localStorage.getItem('marioHighscore')) : 0;

const messageElement = document.querySelector('.message');
const scoreValueElement = document.querySelector('.score-value');
const highscoreValueElement = document.querySelector('.highscore-value');
const guessInput = document.querySelector('.guess-input');
const checkBtn = document.querySelector('.check-btn');
const playAgainBtn = document.querySelector('.play-again-btn');
const body = document.body;
const questionBlocks = document.querySelectorAll('.question-block');
const screenCrackOverlay = document.querySelector('.screen-crack-overlay');

const startGame = () => {
    secretNumber = Math.floor(Math.random() * 20) + 1;
    score = 20;
    scoreValueElement.textContent = score;
    messageElement.textContent = 'Start guessing...';
    guessInput.value = '';
    body.classList.remove('correct', 'dark-mode', 'screen-cracked');
    screenCrackOverlay.style.opacity = 0;
    checkBtn.disabled = false;
    guessInput.disabled = false;
    questionBlocks.forEach(block => block.classList.remove('hit'));
};

const displayMessage = (message) => {
    messageElement.textContent = message;
};

const updateHighscore = () => {
    if (score > highscore) {
        highscore = score;
        highscoreValueElement.textContent = highscore;
        localStorage.setItem('marioHighscore', highscore);
    }
};

checkBtn.addEventListener('click', checkFunc);
function checkFunc(){
    const guess = Number(guessInput.value);

    if (!guess) {
        displayMessage('No number!');
    }
    else if (guess < 1 || guess > 20) {
        displayMessage('Number must be between 1 and 20!');
    }
    else if (guessInput.value.startsWith('0') && guessInput.value.length > 1) {
        displayMessage('Cannot start with zero!');
    }
    else if (guess === secretNumber) {
        displayMessage(`Correct Number! The secret was ${secretNumber}`);
        body.classList.add('correct');
        updateHighscore();
        checkBtn.disabled = true;
        guessInput.disabled = true;
        questionBlocks.forEach(block => block.classList.add('hit'));

    }
    else {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
            score--;
            scoreValueElement.textContent = score;

            if (score <= 3) {
                body.classList.add('dark-mode');
            }

        }
        else {
            displayMessage('You lost the game!');
            score = 0;
            scoreValueElement.textContent = score;
            checkBtn.disabled = true;
            guessInput.disabled = true;
            body.classList.add('screen-cracked');
            screenCrackOverlay.style.opacity = 1;
        }
    }
}

playAgainBtn.addEventListener('click', startGame);

startGame();
highscoreValueElement.textContent = highscore;
