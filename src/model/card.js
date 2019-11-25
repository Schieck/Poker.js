class Card {
    constructor(naipe, value, frontImage, backImage) {
        this.naipe = naipe
        this.value = value
        this.frontImage = frontImage
        this.backImage = backImage
        this.visibilidade = false
    }
}
class Deck {
    constructor(){
        this.cards = _.values(Naipes)
            .flatMap(naipe => _.range(1,14).map(value => new Card(naipe, value, `textures/cards/${value}${naipe}.png`, 'textures/cards/purple_back.png')))
    }

    shuffle(){
        this.cards = _.shuffle(_.shuffle(this.cards))
    }
}