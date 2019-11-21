class HigherCardEvaluate {
    evaluate(cards) {
        return true
    }

    receivePoints(cards) {
        return _.sortBy(transformAsValueIn(cards, 14), 'value').reverse()[0]
    }
}