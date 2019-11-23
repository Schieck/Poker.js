class Bot {
    constructor(id, valor, cards, playable) {
        this.id = id
        this.valor = valor
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
        this.valor += value
    }

    setVisibleCards(visible) {
        this.cards.forEach(card => {
            card.visibilidade = visible
        });
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