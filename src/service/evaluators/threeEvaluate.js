class ThreeEvaluate {
    evaluate(cards) {
        let newCards = transformAsValueIn(cards, 30)
        let triplets = findGroup(newCards, 3)[0]
        return triplets && triplets.length == 3
    }

    receivePoints(cards) {
        let newCards = transformAsValueIn(cards, 30)
        let triplets = findGroup(newCards, 3)[0]
        let remainings = _.sortBy(this.getRemainings(newCards, triplets), ['value']).reverse()
        return _.chain(triplets).map('value').sum().value() * 10 +
            _.chain(remainings).take(2).map('value').sum().value() +
            5000
    }

    getRemainings(cards, triplets) {
        return _.differenceWith(cards, triplets, _.isEqual)
    }
}