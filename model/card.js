class Card {
    constructor(naipe, valor) {
        this.naipe = naipe
        this.valor = valor
        this.visibilidade = false
    }
}
class Deck {
    constructor(){
        this.cards = _.values(Naipes)
            .flatMap(naipe => _.range(1,13).map(valor => new Card(naipe, valor)))
    }

    shuffle(){
        this.cards = _.shuffle(this.cards)
    }
}