class Mesa {
    constructor(players, tablePot, gameEvaluateLogic) {
        this.players = players
        this.tablePot = tablePot
        this.gameEvaluateLogic = gameEvaluateLogic
        this.round = 1
    }

    setUpHand() {
        this._distributeCards()
        this.firstPlayers = _.takeWhile(this.players, player => !(player instanceof Jogador))
        this.user = _.find(this.players, player => player instanceof Jogador)
        this.lastPlayers = _.takeRightWhile(this.players, player => !(player instanceof Jogador))

    }

    getPlayablePlayersNumber() {
        return this._findPlayablePlayers(this.players)
    }

    playFirsts() {
        this._playTurn(this.firstPlayers)
    }

    userAction(quit) {
        mesa.tablePot += this.user.play(quit)
    }

    playLast() {
        this._playTurn(this.lastPlayers)
        this.turnNextCards()
    }

    turnNextCards() {
        if (this.round == 1) {
            _.forEach(_.take(this.tableCards, 3), card => {
                card.visibilidade = true
            })
        } else if (this.round == 4) {
            this.distribuitsEarings()
        } else {
            _.find(this.tableCards, card => !card.visibilidade).visibilidade = true
        }
        this.round++
    }

    distribuitsEarings() {
        let playable = this._findPlayablePlayers(this.players)
        let winners = gameEvaluateLogic.findWinners(this.tableCards, playable)
        winners.forEach(winner => winner.receiveChips(Math.round(this.tablePot / winners.length)))
        playable.forEach(player => player.setVisibleCards(true))
        this.tablePot = 0
    }

    nextHand() {
        this._cleanTable()
        this._moveDealer()
        this.setUpHand()
    }

    toJson() {
        return JSON.stringify({
            players: this.players,
            tablePot: this.tablePot,
            round: this.round,
            tableCards: this.tableCards
        })
    }

    loadInfo({ players, tablePot, round, tableCards }) {
        this.players = this._loadPlayers(players)
        this.tablePot = tablePot
        this.round = round
        this.tableCards = tableCards
    }

    _playTurn(players) {
        this._findPlayablePlayers(players).forEach(player => {
            mesa.tablePot += player.play()
        })
    }

    _cleanTable() {
        this.round = 1
        this.tableCards = []
        this.players.forEach(player => {
            player.playable = player.value > 0
            player.cards = []
        })
    }

    _distributeCards() {
        let deck = new Deck()
        deck.shuffle()
        this._findPlayablePlayers(this.players)
            .forEach((player) => {
                player.receiveCards(_.slice(deck.cards, 0, 2))
                deck.cards.shift()
                deck.cards.shift()
            })
        this.tableCards = _.slice(deck.cards, 0, 5)
    }

    _moveDealer() {
        let firstPlayer = this.players[0]
        for (let i = 1; i < this.players.length; i++) {
            this.players[i - 1] = this.players[i]
        }
        this.players[this.players.length - 1] = firstPlayer
    }

    _findPlayablePlayers(players) {
        return players.filter(player => player.playable)
    }

    _loadPlayers(players) {
        return players.map(player => {
            if (player.id == 'player') return new Jogador(player.id, player.value, player.cards, player.playable)
            else return new Bot(player.id, player.value, player.cards, player.playable)
        })
    }
}