class RoyalStraitFlushEvaluate {
    evaluate(cards) {
        let possibleRoyalSequence = _.take(_.sortBy(transformAsValueIn(cards, 14), 'value').reverse(), 5)
        if(possibleRoyalSequence[0].value == 14) {
            let sequence = _.takeWhile(possibleRoyalSequence, (card, index) => {
                return index < possibleRoyalSequence.length - 1 && card.value - 1 == possibleRoyalSequence[index + 1].value
            })
            return sequence.length == 5 && hasSameNaipe(sequence)
        } return false
    }

    receivePoints(cards) {
        return 10000
    }
}