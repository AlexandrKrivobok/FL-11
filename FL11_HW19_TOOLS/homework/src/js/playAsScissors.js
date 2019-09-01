import getComputerValue from './getComputerValue';

const playAsScissors = () => {
    const computerValue = getComputerValue();

    switch (computerValue) {
        case 'scissors':
            return {
                player: 'Scissors',
                AI: 'Scissors',
                winner: 'draw'
            };
        case 'paper':
            return {
                player: 'Scissors',
                AI: 'Paper',
                winner: 'player'
            };
        case 'rock':
            return {
                player: 'Scissors',
                AI: 'Rock',
                winner: 'AI'
            };
    }
};

export default playAsScissors;

