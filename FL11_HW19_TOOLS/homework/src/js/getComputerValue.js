const getComputerValue = () => {
    const randomValue = Math.random();

    switch (true) {
        case randomValue < 0.33:
            return 'scissors';
        case randomValue <= 0.66:
            return 'paper';
        case randomValue > 0.66:
            return 'rock';
    }
};

export default getComputerValue;