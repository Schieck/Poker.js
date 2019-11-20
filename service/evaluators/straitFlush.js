class StraitFlushEvaluate {
    evaluate(cards) {
        let sequenceCards = findSequence(cards)
        return sequenceCards.length != 0 && hasSameNaipe(sequenceCards)
    }

    receivePoints(cards) {
        let sequenceCards = findSequence(cards)
        return _.chain(sequenceCards).map('value').sum().value() + 9000
    }
}