class PairEvaluate {
    evaluate(cards) {
        let pairs = findGroup(cards, 2)
        return pairs.length >= 1
    }

    receivePoints(cards) {
        let newCards = transformAsValueIn(cards, 30)
        let pair = findGroup(newCards, 2)[0]
        let remaing = _.take(_.sortBy(this.getRemainings(newCards, pair), 'value').reverse(), 3)
        return 2000 + getSum(pair) + getSum(remaing)
    }

    getRemainings(cards, group) {
        return _.differenceWith(cards, group, _.isEqual)
    }
}