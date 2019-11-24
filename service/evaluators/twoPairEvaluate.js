class TwoPairEvaluate {
    evaluate(cards) {
        let pairsGroup = findGroup(cards, 2)
        return pairsGroup.length >= 2
    }

    receivePoints(cards) {
        let newCards = transformAsValueIn(cards, 14)
        let pairsGroup = findGroup(newCards, 2)
        let summedGroups = pairsGroup.map(group => {
            return getSum(group)
        })
        let remainingCard = _.sortBy(this.getRemainings(newCards, _.flatten(pairsGroup)), 'value').reverse()[0]
        let getPairsValue = summedGroups[0] > summedGroups[1]
            ? 2000 + summedGroups[0] * 20 + summedGroups[1] * 10
            : 2000 + summedGroups[1] * 20 + summedGroups[0] * 10
        return getPairsValue + remainingCard.value

    }

    getRemainings(cards, group) {
        return _.differenceWith(cards, group, _.isEqual)
    }
}