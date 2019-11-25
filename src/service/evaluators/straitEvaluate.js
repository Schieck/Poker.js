class StraitEvaluate {
    evaluate(cards) {
        let newCards = transformAsValueIn(cards, 14)
        let possibleHigherSequence = findSequence(newCards)
        if(possibleHigherSequence.length == 0) {
            let possibleSequence = findSequence(cards)
            return possibleSequence.length == 5
        }
        return true
    }

    receivePoints(cards) {
        let newCards = transformAsValueIn(cards, 14)
        let possibleHigherSequence = findSequence(newCards)
        if(possibleHigherSequence.length == 0) {
            let possibleSequence = findSequence(cards)
            return getSum(possibleSequence) + 6000
        }
        return getSum(possibleHigherSequence) + 6000
    }
}