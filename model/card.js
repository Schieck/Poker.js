class Card {
    constructor(naipe, valor) {
        this.naipe = naipe
        this.valor = valor
        this.visivel = false
    }
}
class Deck {
    constructor(){
        this.cards = Object.values(Naipes)
            .flatMap(naipe => _.range(1,13)
                        .map(valor => new Card(naipe, valor))
                    )
    }
}