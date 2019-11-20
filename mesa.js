const gameEvaluateLogic = new gameEvaluateLogic([])
class Mesa {
    constructor(players, tablePit) {
        this.players = players
        this.tablePit = tablePit
        this.round = 1
    }

    getPlayablePlayersNumber() {
        return this.findPlayablePlayers(this.players)
    }

    setUpHand() {
        this.distributeCards()
        this.firstPlayers = _.takeWhile(this.players, player => !(player instanceof Jogador))
        this.user = _.find(this.players, player => player instanceof Jogador)
        this.lastPlayers = _.takeRightWhile(this.players, player => !(player instanceof Jogador))

    }

    userAction(quit) {
        if(this.user.playable) {
            mesa.tablePit += this.user.play(this, quit)
        }
    }

    playFirsts() {
        this.playTurn(this.firstPlayers)
    }


    playLast() {
        this.playTurn(this.lastPlayers)
        this.turnNextCards()
    }

    turnNextCards() {
        if (this.round == 1) {
            this.tableCards = _.map(_.take(this.tableCards, 3), card => {
                card.visibilidade = true
                return card
            })
        } else if (this.round == 4) {
            this.distribuitsEarings()
        } else {
            _.find(this.tableCards, card => !card.visibilidade).visibilidade = true
            this.round++
        }
    }

    distribuitsEarings(){
        this.findPlayablePlayers(this.players).forEach(player => player.setVisibleCards(true))
        let winner = gameEvaluateLogic.findWinner(this.tableCards, this.findPlayablePlayers(this.players))
        winner.receiveChips(this.tablePit)
        this.tablePit = 0
    }

    nextHand() {
        this.cleanTable()
        this.moveDealer()
        this.setUpHand()
    }

    dealFirstBets() {
        this.tablePit += _.sum(_.slice(this.players, 0, 1), player => player.getBet())
    }

    playTurn(players) {
        this.findPlayablePlayers(players).forEach(player => {
            mesa.tablePit += player.play()
        })
    }

    cleanTable() {
        this.round = 1
        this.tableCards = []
        this.players.forEach(player => {
            player.playable = player.valor > 0
            player.cards = []
        })
    }

    distributeCards() {
        let deck = new Deck()
        deck.shuffle()
        this.findPlayablePlayers(this.players)
            .forEach((player) => {
                player.receiveCards(_.slice(deck.cards, 0, 2))
                deck.cards.shift()
                deck.cards.shift()
            })
        this.tableCards = _.slice(deck.cards, 0, 5)
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