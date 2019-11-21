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
        let remainingCard = _.sort(getRemainings(newCards, _.flatten(pairsGroup)), 'value').reverse()[0]
        let getPairsValue = summedGroups[0] > summedGroups[1]
            ? 2000 + summedGroups[0] * 20 + summedGroups[1] * 10
            : 2000 + summedGroups[1] * 20 + summedGroups[0] * 10
        return getPairsValue + remainingCard 

    }

    getRemainings(cards, group) {
        return _.differenceWith(cards, group, _.isEqual)
    }

    biggestGroup(groups) {
        let summedGroup = groups.map(group => {
            return getSum(group)
        })
        return summedGroup[0] > summedGroup[1]
            ? summedGroup[0]
            : summedGroup[1]
    }
}