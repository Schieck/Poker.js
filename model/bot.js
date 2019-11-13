class Bot {
    constructor(valor) {
        this.valor = valor
        this.playable = true
    }

    play(mesa) {
        //@Todo implementar logica de jogo do bot
    }

    receiveCards(cards) {
        this.cartas = cards.map(carta => {
            carta.visibilidade = true
            return carta
        })
    }

    gerBet() {
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