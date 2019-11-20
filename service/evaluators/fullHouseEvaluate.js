class FullHouseEvaluate {
    evaluate(cards) {
        let triplets = findGroup(cards, 3)
        if (triplets.length > 0) {
            let biggestTriplet = triplets.length == 1 ? triplets[0] : this.biggestGroup(triplets)
            let pairs = findGroup(this.getRemainings(cards, biggestTriplet), 2)
            return pairs.length > 0
        } 
        return false

    }

    receivePoints(cards) {
        let newCards = transformAsValueIn(cards, 14)
        let triplets = findGroup(newCards, 3)
        let biggestTriplet = triplets.length == 1 ? triplets[0] : this.biggestGroup(triplets)
        let pairs = findGroup(this.getRemainings(cards, biggestTriplet), 2)
        let biggestPair = pairs.length == 1 ? pairs[0] : this.biggestGroup(pairs)
        return getSum(biggestTriplet) * 10 + getSum(biggestPair)
    }

    biggestGroup(groups) {
        let summedGroup = groups.map(group => {
            return getSum(group)
        })
        return summedGroup[0] > summedGroup[1]
            ? summedGroup[0]
            : summedGroup[1]
    }

    getRemainings(cards, triplets) {
        return _.differenceWith(cards, triplets, _.isEqual)
    }
}