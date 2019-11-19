class RoyalStraitFlushEvaluate {
    evaluate(cards) {
        let copied = _.cloneDeep(cards)
        let ordered = _.chain(copied).each(card => {
            card.value = card.value == 1 ? 14 : card.value
        }).value()
        let naipe
        let finalLentgh = _.takeRightWhile(ordered, (card => {
            naipe = naipe || card.naipe
            return card.value >= 10 && card.naipe == naipe
        })).length
        return finalLentgh == 5
    }

    receivePoints(cards) {
        return 10000
    }
}