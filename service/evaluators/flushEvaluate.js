class FlushEvaluate {
    evaluate(cards) {
        let groups = _.groupBy(cards, 'naipe')
        let flushKey = _.findKey(groups, group => group.length >= 5)
        return groups[flushKey].length >= 5
    }

    receivePoints(cards) {
        let newCards = transformAsValueIn(cards, 14)
        let groups = _.groupBy(newCards, 'naipe')
        let flushKey = _.findKey(groups, group => group.length >= 5)
        let flush = _.take(groups[flushKey].reverse(), 5)
        return getSum(flush) + 6500
    }
}