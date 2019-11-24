class Jogador {
    constructor(id, value, cards, playable) {
        this.id = id
        this.value = value
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
        this.value += value
    }

    getBet() {
        if (this.value < 50) {
            let value = this.value
            this.value = 0
            return value
        } else {
            this.value -= 50
            return 50
        }
    }
}