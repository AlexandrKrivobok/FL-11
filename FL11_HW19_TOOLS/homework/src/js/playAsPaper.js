import getComputerValue from './getComputerValue.js';

const playAsPaper = () => {
    const computerValue = getComputerValue();

    switch (computerValue) {
        case 'scissors':
            return {
                player: 'Paper',
                AI: 'Scissors',
                winner: 'AI'
            };
        case 'paper':
            return {
                player: 'Paper',
                AI: 'Paper',
                winner: 'draw'
            };
        case 'rock':
            return {
                player: 'Paper',
                AI: 'Rock',
                winner: 'player'
            };
    }
};

export default playAsPaper;