let players = [new Bot('bot1', 500), new Bot('bot2', 500),
       new Jogador('player', 500), new Bot('bot4', 500), new Bot('bot5', 500)]
    let mesa = new Mesa(players, 0)
window.onload = () => {
    mesa.setUpHand()
    drawTable(mesa)
    mesa.playFirsts()
    //drawTable(mesa)
}

const drawTable = (mesa) => {
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
