class User {
    constructor(cartas, valor) {
        this.cartas = cartas.map(carta => {
            carta.visibilidade = true
            return carta
        })
        this.valor = valor

    }

    play(mesa) {

    }
}