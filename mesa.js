class Mesa {
    constructor(players, tablePit, deck) {
        this.players = players
        this.tablePit = tablePit
        this.deck = deck
        this.user = user
        this.turno = 0
    }

    setUpHand() {
        this.distributeCards()
        
    }

    playFirsts() {
        this.firstPlayers.forEach(player => player.play(this, this.turno++))
    }

    nextHand() {
        this.deck.shuffle()
        this.moveDealer()
        this.setUpHand()
    }

    distributeCards() {
        //logicaDeDistribuir
    }

    moveDealer() {

    }

}