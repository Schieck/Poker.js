class GameEvaluateLogic {
    constructor(evaluators) {
        this.evaluators = evaluators
    }

    findWinners(tableCards, playablePlayers) {
        let playersPoints = playablePlayers.map(player => {
            let orderd = _.sortBy(_.concat(tableCards, player.cards), 'value')
            let value = this._getEvaluator(orderd).receivePoints(orderd)
            return {
                id: player.id,
                value: value
            }
        })
        let groupedPoints = _.groupBy(playersPoints, 'value')
        let maximumPoints = _.sortBy(_.keys(groupedPoints)).reverse()[0]
        let winnersId = _.map(groupedPoints[maximumPoints], 'id')
        return winnersId.map(id => playablePlayers.find(player => player.id == id))
    }
    
    _getEvaluator(cards) {
        return this.evaluators.find(evaluator => evaluator.evaluate(_.sortBy(cards, 'value')))
    }
}

