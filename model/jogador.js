class Jogador {
    constructor(id, valor) {
        this.id = id
        this.valor = valor
        this.playable = true
    }

    play(mesa, quit) {
        if(quit) {
            this.playable = false
        } else {
            mesa.tablePit += this.getBet()
        }
    }

    receiveCards(cards) {
        this.cards = cards.map(card => {
            card.visibilidade = true
            return card
        })
    }

    getBet() {
        if (this.valor < 50) {
            let value = this.valor
            this.valor = 0
            return value
        } else {
            this.valor -= 50
            return 50
        }
    }
}