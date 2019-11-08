class Card {
    constructor(naipe, valor) {
        this.naipe = naipe
        this.valor = valor
    }
}
class Deck {
    constructor(){
        this.cards = Object.values(Naipes)
            .flatMap(naipe => [...Array(13).keys()]
                        .map(valor => new Card(naipe, ++valor))
                    )
    }
}