class RoyalStraitFlushEvaluate {
    evaluate(cards) {
        let possibleRoyalSequence = _.take(_.sortBy(transformAsValueIn(cards, 14), 'value').reverse(), 5)
        if(possibleRoyalSequence[0].value == 14) {
            let sequence = _.takeWhile(_.slice(possibleRoyalSequence, 1, 5), (card, index) => {
                return card.value == possibleRoyalSequence[index - 1].value + 1
            })
            return sequence.length == 5 && hasSameNaipe(sequence)
        } return false
    }

    receivePoints(cards) {
        return 10000
    }
}