const findSequence = (cards) => {
    let reversedCards = _.cloneDeep(cards).reverse()
    for (let i = 0; i < 3; i++) {
        let slicedCards = _.slice(reversedCards, 0 + i, 5 + i)
        let possibleSequence = _.takeWhile(slicedCards, (card, index) => {
            return index <= slicedCards.length - 1
                ? true
                : card.value - 1 == slicedCards[index + 1].value
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
    let group = _.groupBy(cards, 'value')
    let keys = Object.keys(group).filter(key => group[key].length == groupSize)
    return keys.map(key => group[key])
}

const getSum = (cards) => {
    return _.chain(cards).map('value').sum().value()
}