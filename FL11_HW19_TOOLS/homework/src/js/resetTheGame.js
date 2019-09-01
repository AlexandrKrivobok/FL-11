const resetTheGame = (roundNode, totalNode, score, rounds) => {
    roundNode.innerHTML = '';
    totalNode.innerHTML = '';

    score = {
        player: 0,
        AI: 0,
        draw: 0,
    };
};

export default resetTheGame;