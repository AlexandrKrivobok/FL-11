import getComputerValue from './getComputerValue.js';

const playAsRock = () => {
    const computerValue = getComputerValue();

    switch (computerValue) {
        case 'scissors':
            return {
                player: 'Rock',
                AI: 'Scissors',
                winner: 'player'
            };
        case 'paper':
            return {
                player: 'Rock',
                AI: 'Paper',
                winner: 'AI'
            };
        case 'rock':
            return {
                player: 'Rock',
                AI: 'Rock',
                winner: 'draw'
            };
    }
};

export default playAsRock;