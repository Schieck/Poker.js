class FourEvaluate {
    evaluate(cards) {
        let quadruplet = this.findQuadruplet(cards)
        return quadruplet.length == 4
    }
    
    receivePoints(cards) {
        return 8000
    }

    findQuadruplet(cards) {
        let quadGroup = _.groupBy(cards, 'value');
        let quadKey = _.findKey(quadGroup, group => group.length == 4)
        return quadKey ? quadGroup[quadKey] : []
    }
}