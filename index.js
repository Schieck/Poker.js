const gameEvaluateLogic = new GameEvaluateLogic([
    new RoyalStraitFlushEvaluate(),
    new StraitFlushEvaluate(),
    new FourEvaluate(),
    new FullHouseEvaluate(),
    new FlushEvaluate(),
    new StraitEvaluate(),
    new ThreeEvaluate(),
    new TwoPairEvaluate(),
    new PairEvaluate(),
    new HigherCardEvaluate()
])
let user = new Jogador('player', 500, [], true)
let players = [
    new Bot('bot1', 500, [], true), new Bot('bot2', 500, [], true), user,
    new Bot('bot4', 500, [], true), new Bot('bot5', 500, [], true)
]
let mesa = new Mesa(_.shuffle(players), 0, gameEvaluateLogic)

window.onload = () => {
    mesa.setUpHand()
    mainPlayFlow()
}

const mainPlayFlow = () => {
    drawTable()
    if (mesa.getPlayablePlayersNumber() != 1) {
        if (mesa.round <= 4) {
            mesa.playFirsts()
            if (!user.playable) {
                mesa.playLast()
                mainPlayFlow()
            }
        } else {
            $('#nextHand').css('display', 'block')
        }
        drawTable()
    } else {
        alert(`Parabéns, você ganhou... :)`)
        alert("Reiniciando o jogo")
        location.reload()
    }
}

const nextHand = () => {
    if (user.valor == 0) {
        alert("Você perdeu... :(")
        alert("Reiniciando o jogo")
        location.reload()
    } else {
        $('#nextHand').css('display', 'none')
        mesa.nextHand()
        mainPlayFlow()
    }
}

const userPlay = (quit) => {
    mesa.userAction(!quit)
    mesa.playLast()
    mainPlayFlow()
}

const drawTable = () => {
    $("#table_pit").html(mesa.tablePit)
    flipTableCards()
    mesa.players.forEach(player => {
        $(`#${player.id}_pit`).html(player.valor);
        player.cards.forEach((card, index) => {
            let cardElement = $(`#${player.id}_card${index}`)
            if (!player.playable && player.id != 'player') {
                cardElement.css('display', 'none')
            } else {
                updateVisibility(cardElement, card)
            }
        })
    });
}

const flipTableCards = () => {
    let tableCards = mesa.tableCards
    let flop = _.slice(tableCards, 0, 3)
    let turn = _.slice(tableCards, 3, 4)[0]
    let river = _.slice(tableCards, 4, 5)[0]
    flop.forEach((card, index) => {
        let flopCard = $(`#flop_${index}`)
        updateVisibility(flopCard, card)
    })
    updateVisibility($('#turn'), turn)
    updateVisibility($('#river'), river)
}

const updateVisibility = (imgElemt, card) => {
    if (card.visibilidade) imgElemt.attr('src', card.frontImage)
    else imgElemt.attr('src', card.backImage)
}

const reset = () => {
    location.reload()
}

const saveGame = () => {
    let blob = new Blob([mesa.toJson()])
    saveAs(blob, 'pokerGame.json')
}


const fileInput = document.getElementById("fileInput")
fileInput.addEventListener('change', () => {
    let file = fileInput.files[0]
    try {
        let fileReader = new FileReader()
        fileReader.onload = (load) => {
            mesa.loadInfo(JSON.parse(fileReader.result))
            drawTable()
            $('#ModalLongoExemplo').modal('hide')
        }
        fileReader.readAsText(file)
    } catch (err) {
        console.log("Invalid file extension, must be an .json file")
    }
})