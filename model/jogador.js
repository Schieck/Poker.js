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
        this.cards = cards
        this.setVisibleCards(true)
    }

    setVisibleCards(visible) {
        this.cards.forEach(card => {
            card.visibilidade = visible
        });
    }

    receiveChips(value) {
        this.valor += value
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