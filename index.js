let players = [new Bot('bot1', 500), new Bot('bot2', 500),
new Jogador('player', 500), new Bot('bot4', 500), new Bot('bot5', 500)]
let mesa = new Mesa(_.shuffle(players), 0, new GameEvaluateLogic([]))

window.onload = () => {
    mesa.setUpHand()
    drawTable()
    mainPlayFlow()
}

const mainPlayFlow = () => {
    if(mesa.getPlayablePlayersNumber != 1) {
        if(mesa.round <= 4) {
            mesa.playFirsts()
        } else {
            mesa.nextHand()
            drawTable()
            mainPlayFlow()
        }
        drawTable()
    } else {
        let winner = _.head(mesa.players)
        alert(`Winner is: ${winner.id} with the total amount of ${winner.valor}`)
        let restart = confirm("Want to restart the game?")
        if(restart) location.reload()
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
            updateVisibility($(`#${player.id}_card${index}`), card)
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
    updateVisibility($('#turn', turn))
    updateVisibility($('#river', river))
}

const updateVisibility = (imgElemt, card) => {
    if(card.visibilidade) imgElemt.attr('src', card.frontImage)
    else imgElemt.attr('src', card.backImage)
}

const loadGame = () => {
    let fileInput = document.getElementById("fileInput")
    fileInput.addEventListener('change', () => {
        let file = fileInput.files[0]
        try {
            let fileReader = new FileReader()
            fileReader.onload = (load) => {
                let loadedMesa = JSON.parse(fileReader.result)
                if (loadedMesa instanceof Mesa) {
                    mesa = loadedMesa
                    drawTable()
                } else {
                    console.log("Invalid JSON structure, must be a Mesa type")
                }
            }
            fileReader.readAsText(file)
        } catch (err) {
            console.log("Invalid file extension, must be an .json file")
        }
    })
}

const saveGame = () => {
    let blob = new Blob([JSON.stringify(mesa)])
    saveAs(blob, 'pokerGame.json')
}