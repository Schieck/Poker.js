class Bot {
    constructor(id, value, cards, playable) {
        this.id = id
        this.value = value
        this.cards = cards
        this.playable = playable
    }

    play() {
        return this.getBet()
        
    }

    receiveCards(cards) {
        this.cards = cards
    }

    receiveChips(value) {
        this.value += value
    }

    setVisibleCards(visible) {
        this.cards.forEach(card => {
            card.visibilidade = visible
        });
    }

    getBet() {
        if(this.value < 50) {
            let value = this.value
            this.value = 0
            return value
        } else {
            this.value -= 50
            return 50
        }
    }
}