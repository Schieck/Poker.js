class Mesa {
    constructor(players, tablePit, deck) {
        this.players = players
        this.tablePit = tablePit
        this.deck = deck
        this.user = user
        this.round = 1
    }

    setUpHand() {
        this.distributeCards()
        this.firstPlayers = _.takeWhile(this.players, player => !(player instanceof User))
        this.user = _.find(this.players, player => player instanceof User)
        this.lastPlayers = _.takeRightWhile(this.players, player => !(player instanceof User))

    }

    userAction(quit) {
        this.user.play(this, quit)
        this.playLast()
    }

    playFirsts() {
        /*this.findPlayablePlayers(this.firstPlayers).forEach(player => {
            setTimeout(() => {
                player.play(this) 
            }, 2000);
        })*/
        this.findPlayablePlayers(this.firstPlayers).forEach(player => player.play(this))
    }


    playLast() {
        /*this.findPlayablePlayers(this.lastPlayers).forEach(player => {
            setTimeout(() => {
                player.play(this) 
            }, 2000);
        })*/
        this.findPlayablePlayers(this.lastPlayers).forEach(player => player.play(this))
        this.turnNextCards()
    }

    turnNextCards() {
        if (this.round == 1) {
            this.tableCards = _.map(_.take(this.tableCards, 3), card => {
                card.visibilidade = true
                return card
            })
        }
        _.find(this.tableCards, card => !card.visibilidade).visibilidade = true
    }

    nextHand() {
        this.deck.shuffle()
        this.moveDealer()
        this.setUpHand()
    }

    dealFirstBets() {
        this.tablePit += _.sum(_.slice(this.players, 0, 1), player => player.getBet())
    }

    distributeCards() {
        [0, this.players.length - 1].forEach(loop =>
            this.players.forEach((player, index) =>
                player.tableCards.push(this.deck[index + loop])
            )
        )
        this.tableCards = _.slice(this.deck, this.players.length * 2, this.players.length * 2 + 5)
    }

    moveDealer() {
        let firstPlayer = this.players[0]
        for (let i = 1; i < this.players.length; i++) {
            this.players[i - 1] = this.players[i]
        }
        this.players[this.players.length - 1] = firstPlayer
    }

    findPlayablePlayers(players) {
        return players.filter(player => player.playable)
    }

}