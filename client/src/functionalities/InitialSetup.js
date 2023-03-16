const initialSetup = {
    game: {
        currPlayer: 1,
        CurrMap: Array(9).fill(null),
        history: []
    },
    player1: {
        moves: []
    },
    player2: {
        moves: []
    },
    stats: {
        totalGames: 0,
        player1Wins: 0,
        player2Wins: 0,
        draw: 0,
        doubleTrap: {
            player1: 0,
            player2: 0
        }
    }
};

export default initialSetup;