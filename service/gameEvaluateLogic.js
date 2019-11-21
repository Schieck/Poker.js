class GameEvaluateLogic {
    constructor(evaluators) {
        this.evaluators = evaluators
    }
    findWinner(tableCards, playablePlayers) {
        return _.find(playablePlayers, player => player.id == 'player')
    }

    find(tableCards, playablePlayers) {
        let orderd = _.sortBy(_.concat(tableCards, playablePlayers), 'value')
        let winnerId = _.head(_.sortBy(playablePlayers.map(player => {
            let value = this.evaluators.find(evaluator => evaluator.evaluate(orderd)).receivePoints(orderd)
            return {
                id: player.id,
                value: value
            }
        }), 'value').reverse()).id
        return playablePlayers.find(player => player.id == winnerId)
    }

}

