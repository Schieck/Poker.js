let players = [new Bot('bot1', 500), new Bot('bot2', 500),
       new Jogador('player', 500), new Bot('bot4', 500), new Bot('bot5', 500)]
let mesa = new Mesa(players, 0)
window.onload = () => {
    mesa.setUpHand()
    drawTable()
    mesa.playFirsts()
    drawTable()
}

const drawTable = () => {
    mesa.players.forEach(player => {
        //Adiciona valor para players
        $('#' + player.id).html(player.valor);
        player.cards.forEach((card, index) => {
            if(card.visibilidade) {
                var img = $(`#${player.id}_card${index}`)
                if(img) {
                    img.attr("src", card.frontImage)
                } 
            }
        })
    });
}

const loadGame = () => {
    let fileInput = document.getElementById("fileInput")
    fileInput.addEventListener('change', () => {
        let file = fileInput.files[0]
        try {
            let fileReader = new FileReader()
            fileReader.onload = (load) => {
                let loadedMesa = JSON.parse(fileReader.result)
                if(loadedMesa instanceof Mesa) {
                    mesa = loadedMesa
                } else {
                    console.log("Invalid JSON structure, must be a Mesa type")
                }
            }
        } catch (err) {
            console.log("Invalid file extension, must be an .json file")
        } 
    })
}

const saveGame = () => {
    let blob = new Blob([JSON.stringify(mesa)])
    saveAs(blob, 'pokerGame.json')
}