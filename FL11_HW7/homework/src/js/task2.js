let attempts = 3;
let winNumber = -1;
let min = 0;
let max = 9;
let totalPrize = 0;
let playerChoise = -1;
let possiblePrize = 100;
let thisGameMaxPrize = 100;
let gameInvitationEnding = 'a game';

const maxAttempts = 3;
const startPrize = 100;
const startMax = 9;
const maxStep = 4;
const prizeMultiplier = 2;

loop1:
while (confirm(`Do you want to play ${gameInvitationEnding}?`)) {
    gameInvitationEnding = 'again';
    attempts = maxAttempts;
    totalPrize = 0;
    possiblePrize = startPrize;
    max = startMax;
    winNumber = Math.floor(Math.random() * (max - min)) + min;
    while (attempts !== 0) {
        console.log(winNumber);
        playerChoise = prompt(`Choose a roulette pocket number from ${min} to ${max - 1}\n
Attempts left: ${attempts}\n
Total prize: ${totalPrize}$\n
Possible prize on current attempt: ${possiblePrize}$`);
        if (playerChoise !== '' && +playerChoise === winNumber) {
            totalPrize += possiblePrize;
            max += maxStep;
            winNumber = Math.floor(Math.random() * (max - min)) + min;
            if (confirm(`Congratulation, you won! Your prize is: ${possiblePrize}$. Do you want to continue?`)) {
                thisGameMaxPrize *= prizeMultiplier;
                possiblePrize = thisGameMaxPrize;
                attempts = maxAttempts;
                continue;
            } else {
                alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
                console.log('hello');
                continue loop1;
            }
        } else {
            possiblePrize /= prizeMultiplier;
            attempts -= 1;
            continue;
        }
    }
    alert(`Thanks for your participation. Your prize is: ${totalPrize} $`);
}
alert('You did not become a billionaire, but can.');

