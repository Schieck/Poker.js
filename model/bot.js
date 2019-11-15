class Bot {
    constructor(id, valor) {
        this.id = id
        this.valor = valor
        this.playable = true
    }

    play(mesa) {
        mesa.tablePit += this.getBet()
    }

    receiveCards(cards) {
        this.cards = cards
    }

    getBet() {
        if(this.valor < 50) {
            let value = this.valor
            this.valor = 0
            return value
        } else {
            this.valor -= 50
            return 50
        }
    }
}