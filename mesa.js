class Mesa {
    constructor(players, tablePit, deck) {
        this.players = players
        this.tablePit = tablePit
        this.deck = deck
        this.user = user
        this.rodada = 1
        this.turno = 0
    }

    setUpHand() {
        this.distributeCards()
        this.firstPlayers = _.takeWhile(this.players, player => !(player instanceof User))
        this.user = _.find(this.players, player => player instanceof User)
        this.lastPlayers = _.takeRightWhile(this.players, player => !(player instanceof User))

    }

    playFirsts() {
        this.firstPlayers.forEach(player => player.play(this, this.turno++))
    }

    playLast() {
        this.lastPlayers.forEach(player => player.play(this, this.turno++))
        turnNextCards()
    }

    turnNextCards() {
        if (this.rodada == 1) {
            this.cartas = _.map(_.take(this.cartas, 3), carta => {
                carta.visibilidade = true
                return carta
            })
        }
        _.find(this.cartas, carta => !carta.visibilidade).visibilidade = true
    }

    nextHand() {
        this.deck.shuffle()
        this.moveDealer()
        this.setUpHand()
    }

    //@Todo caso usuarios não tenham o valor cheio, como prosseguir?
    //@Todo Avaliar com o lucas
    dealFirstBets() {
        this.tablePit += 75
        this.players[1].valor -= 25
        this.players[2].valor -= 50
    }

    distributeCards() {
        [0, this.players.length].forEach(loop =>
            this.players.forEach((player, index) =>
                player.cartas.push(this.deck[index + loop])
            )
        )
        this.cartas = _.slice(this.deck, this.players.length * 2, this.players.length * 2 + 5)
    }

    moveDealer() {
        let firstPlayer = this.players[0]
        for (let i = 1; i < this.players.length; i++) {
            this.players[i - 1] = this.players[i]
        }
        this.players[this.players.length - 1] = firstPlayer
    }

}