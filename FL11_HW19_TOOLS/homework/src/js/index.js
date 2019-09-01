import styles from '../scss/main.scss';
import gameLogo from '../img/game-logo.jpeg';
import playAsScissors from './playAsScissors.js';
import playAsRock from './playAsRock.js';
import playAsPaper from './playAsPaper.js';
import resetTheGame from './resetTheGame.js';

const container = document.getElementsByClassName('container')[0];
const roundResult = document.getElementById('roundResult');
const totalScore = document.getElementById('totalScore');
const rules = document.getElementsByClassName('rules')[0];
const logo = document.createElement('img');
logo.setAttribute('src', gameLogo);
logo.className = 'game-logo';
container.insertBefore(logo, rules);

let score = {
    player: 0,
    AI: 0,
    draw: 0,
};
let rounds = 1;

const updateScore = (letsPlay) => {
    if (rounds <= 3) {
        const { AI, player, winner } = letsPlay();
        const winnerString = winner === 'draw' ? "it's a draw" : `${winner} WON!`;

        score[winner] = score[winner]++;
        roundResult.innerHTML = `Round ${rounds}, ${player} vs ${AI}, ${winnerString}`;

        if (rounds === 3) {
            let finalMessage;

            switch (true) {
                case score.player > score.AI:
                    finalMessage = 'The winner is player';
                    break;
                case score.player < score.AI:
                    finalMessage = 'The winner is AI';
                    break;
                default:
                    finalMessage = 'It\'s a draw';
                    break;
            }

            totalScore.innerHTML = finalMessage;
        }
        rounds += 1;
    }
};

const scissors = document.getElementById('scissors');
scissors.addEventListener('click', () => {
    updateScore(playAsScissors);
});

const rock = document.getElementById('rock');
rock.addEventListener('click', () => {
    updateScore(playAsRock);
});

const paper = document.getElementById('paper');
paper.addEventListener('click', () => {
    updateScore(playAsPaper);
});

const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    resetTheGame(roundResult, totalScore, score);
    rounds = 1;
});

