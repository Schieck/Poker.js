class Card {
    constructor(naipe, valor, frontImage, backImage) {
        this.naipe = naipe
        this.valor = valor
        this.frontImage = frontImage
        this.backImage = backImage
        this.visibilidade = false
    }
}
class Deck {
    constructor(){
        this.cards = _.values(Naipes)
            .flatMap(naipe => _.range(1,14).map(valor => new Card(naipe, valor, `textures/cards/${valor}${naipe}.png`, 'textures/cards/purple_back.png')))
    }

    shuffle(){
        this.cards = _.shuffle(_.shuffle(this.cards))
    }
}