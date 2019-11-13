class Jogador {
    constructor(valor, cartas) {
        this.valor = valor
        this.cartas = cartas
        this.playable = true
    }

    play(mesa, quit) {
        if(quit) {
            this.playable = false
        } else {
            this.mesa.tablePit += this.getBet()
        }
    }

    receiveCards(cards) {
        this.cartas = cards
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