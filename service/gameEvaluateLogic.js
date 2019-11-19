class GameEvaluateLogic {
    findWinner(tableCards, playablePlayers) {
        return _.find(playablePlayers, player => player.id == 'jogador')
    }
}

