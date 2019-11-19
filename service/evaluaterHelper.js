const findSequence = (cards) => {
    for(let i = 0; i < 3; i++){
        let possibleSequence = _.takeWhile(_.slice(cards, 0 + i, 5 + i), (card, index) => {
            return card.value + 1 == card[index + 1].value
        })
        if(possibleSequence.length == 5) return possibleSequence
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

