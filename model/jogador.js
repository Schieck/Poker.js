class Jogador {
    constructor(id, valor, cards, playable) {
        this.id = id
        this.valor = valor
        this.playable = playable
        this.cards = cards
    }

    play(quit) {
        if(quit) {
            this.playable = false
            return 0
        } else {
            return this.getBet()
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