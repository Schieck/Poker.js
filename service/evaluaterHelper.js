const findSequence = (cards) => {
    for (let i = 0; i < 3; i++) {
        let possibleSequence = _.takeWhile(_.slice(cards, 1 + i, 5 + i), (card, index) => {
            return card.value == cards[index - 1].value + 1
        })
        if (possibleSequence.length == 5) return possibleSequence
    }
    return []
}

const hasSameNaipe = (cards) => {
    let naipe
    return _.takeWhile(cards, card => {
        naipe = naipe || card.naipe
        return card.naipe == naipe
    }).length == cards.length
}

const transformAsValueIn = (cards, newValueOfAs) => {
    return _.chain(cards).cloneDeep().map(card => {
        card.value = card.value == 1 ? newValueOfAs : card.value
        return card
    }).value()
}

const findGroup = (cards, groupSize) => {
    let group = _.groupBy(cards, 'valor')
    let keys = Object.keys(threegroups).filter(key => threegroups[key].length == groupSize)
    return keys.map(key => group[key])
}

const getSum = (cards) => {
    return _.chain(cards).map('value').sum().value()
}