class Threevaluate {
    evaluate(cards) {
        let threegroup = _.groupBy(cards, 'valor');
        let three = threegroup.find(threegroup, function(group){return group.lenght>=3})
        if(three.lenght > 0){
            return true;
        }
    }

    receivePoints(cards) {
        if(this.evaluate(cards)){
            return 5000;
        }
    }
}