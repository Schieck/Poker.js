const { assert } = chai

describe('Game evaluate logic test', () => {
    var gameEvaluateLogic
    before(() => {
        gameEvaluateLogic = new GameEvaluateLogic([
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
    })

    it('Should evaluate Royal strait flush game', () => {
        let cards = [
            new Card('H', 13), new Card('H', 1), new Card('H', 12),
            new Card('S', 2), new Card('H', 11), new Card('C', 8), new Card('H', 10)
        ]
        let evaluator = gameEvaluateLogic._getEvaluator(_.sortBy(cards, 'value'))
        let points = evaluator.receivePoints(_.sortBy(cards, 'value'))
        console.log(evaluator)
        assert.instanceOf(evaluator, RoyalStraitFlushEvaluate)
        assert.equal(points, 10000)
    })
    it('Should evaluate Strait Flush game', () => {
        let cards = [
            new Card('H', 4), new Card('H', 2), new Card('H', 5),
            new Card('H', 3), new Card('H', 11), new Card('C', 8), new Card('H', 1)
        ]
        let evaluator = gameEvaluateLogic._getEvaluator(_.sortBy(cards, 'value'))
        let points = evaluator.receivePoints(_.sortBy(cards, 'value'))
        console.log(evaluator)
        assert.instanceOf(evaluator, StraitFlushEvaluate)
        assert.equal(points, 9015)
    })
    it('Should evaluate Four game', () => {
        let cards = [
            new Card('H', 13), new Card('D', 2), new Card('H', 12),
            new Card('S', 2), new Card('H', 2), new Card('C', 2), new Card('H', 10)
        ]
        let evaluator = gameEvaluateLogic._getEvaluator(_.sortBy(cards, 'value'))
        let points = evaluator.receivePoints(_.sortBy(cards, 'value'))
        console.log(evaluator)
        assert.instanceOf(evaluator, FourEvaluate)
        assert.equal(points, 8000)
    })
    it('Should evaluate Full house game', () => {
        let cards = [
            new Card('D', 13), new Card('D', 1), new Card('C', 10),
            new Card('S', 2), new Card('H', 2), new Card('C', 2), new Card('H', 10)
        ]
        let evaluator = gameEvaluateLogic._getEvaluator(_.sortBy(cards, 'value'))
        let points = evaluator.receivePoints(_.sortBy(cards, 'value'))
        console.log(evaluator)
        assert.instanceOf(evaluator, FullHouseEvaluate)
        assert.equal(points, 7080)
    })
    it('Should get the bigger pair when evaluating Full house game', () => {
        let cards = [
            new Card('D', 13), new Card('S', 13), new Card('C', 10),
            new Card('S', 2), new Card('H', 2), new Card('C', 2), new Card('H', 10)
        ]
        let evaluator = gameEvaluateLogic._getEvaluator(_.sortBy(cards, 'value'))
        let points = evaluator.receivePoints(_.sortBy(cards, 'value'))
        console.log(evaluator)
        assert.instanceOf(evaluator, FullHouseEvaluate)
        assert.equal(points, 7086)
    })
    it('Should evaluate Flush game', () => {
        let cards = [
            new Card('D', 13), new Card('D', 1), new Card('D', 12),
            new Card('S', 2), new Card('D', 11), new Card('D', 8), new Card('H', 10)
        ]
        let evaluator = gameEvaluateLogic._getEvaluator(_.sortBy(cards, 'value'))
        let points = evaluator.receivePoints(_.sortBy(cards, 'value'))
        console.log(evaluator)
        assert.instanceOf(evaluator, FlushEvaluate)
        assert.equal(points, 6558)
    })
    it('Should evaluate Strait game', () => {
        let cards = [
            new Card('C', 13), new Card('H', 1), new Card('D', 3),
            new Card('S', 2), new Card('D', 11), new Card('C', 4), new Card('H', 5)
        ]
        let evaluator = gameEvaluateLogic._getEvaluator(_.sortBy(cards, 'value'))
        let points = evaluator.receivePoints(_.sortBy(cards, 'value'))
        console.log(evaluator)
        assert.instanceOf(evaluator, StraitEvaluate)
        assert.equal(points, 6015)
    })
    it('Should evaluate Strait game with As worthing 14', () => {
        let cards = [
            new Card('S', 13), new Card('H', 1), new Card('C', 12),
            new Card('S', 2), new Card('D', 11), new Card('C', 10), new Card('H', 10)
        ]
        let evaluator = gameEvaluateLogic._getEvaluator(_.sortBy(cards, 'value'))
        let points = evaluator.receivePoints(_.sortBy(cards, 'value'))
        console.log(evaluator)
        assert.instanceOf(evaluator, StraitEvaluate)
        assert.equal(points, 6060)
    })
    it('Should evaluate Three game', () => {
        let cards = [
            new Card('H', 13), new Card('D', 13), new Card('C', 13),
            new Card('S', 2), new Card('H', 4), new Card('C', 8), new Card('H', 10)
        ]
        let evaluator = gameEvaluateLogic._getEvaluator(_.sortBy(cards, 'value'))
        let points = evaluator.receivePoints(_.sortBy(cards, 'value'))
        console.log(evaluator)
        assert.instanceOf(evaluator, ThreeEvaluate)
        assert.equal(points, 5408)
    })
    it('Should evaluate Three game with As', () => {
        let cards = [
            new Card('H', 1), new Card('D', 1), new Card('C', 1),
            new Card('S', 3), new Card('H', 2), new Card('C', 7), new Card('H', 10)
        ]
        let evaluator = gameEvaluateLogic._getEvaluator(_.sortBy(cards, 'value'))
        let points = evaluator.receivePoints(_.sortBy(cards, 'value'))
        console.log(evaluator)
        assert.instanceOf(evaluator, ThreeEvaluate)
        assert.equal(points, 5917)
    })
    it('Should evaluate Two pair game', () => {
        let cards = [
            new Card('H', 13), new Card('D', 1), new Card('C', 12),
            new Card('S', 2), new Card('H', 2), new Card('C', 8), new Card('H', 8)
        ]
        let evaluator = gameEvaluateLogic._getEvaluator(_.sortBy(cards, 'value'))
        let points = evaluator.receivePoints(_.sortBy(cards, 'value'))
        console.log(evaluator)
        assert.instanceOf(evaluator, TwoPairEvaluate)
        assert.equal(points, 4374)
    })
    it('Should evaluate Pair game', () => {
        let cards = [
            new Card('H', 13), new Card('H', 1), new Card('D', 12),
            new Card('S', 6), new Card('C', 2), new Card('C', 1), new Card('H', 10)
        ]
        let evaluator = gameEvaluateLogic._getEvaluator(_.sortBy(cards, 'value'))
        let points = evaluator.receivePoints(_.sortBy(cards, 'value'))
        console.log(evaluator)
        assert.instanceOf(evaluator, PairEvaluate)
        assert.equal(points, 2635)
    })
    it('Should evaluate Higher card game', () => {
        let cards = [
            new Card('H', 13), new Card('S', 5), new Card('H', 12),
            new Card('S', 2), new Card('C', 11), new Card('C', 8), new Card('H', 10)
        ]
        let evaluator = gameEvaluateLogic._getEvaluator(_.sortBy(cards, 'value'))
        let points = evaluator.receivePoints(_.sortBy(cards, 'value'))
        console.log(evaluator)
        assert.instanceOf(evaluator, HigherCardEvaluate)
        assert.equal(points, 13)
    })
    it('As Should win a game with evaluator of Higher card', () => {
        let cards = [
            new Card('H', 13), new Card('S', 1), new Card('H', 7),
            new Card('S', 2), new Card('C', 11), new Card('C', 8), new Card('H', 10)
        ]
        let evaluator = gameEvaluateLogic._getEvaluator(_.sortBy(cards, 'value'))
        let points = evaluator.receivePoints(_.sortBy(cards, 'value'))
        console.log(evaluator)
        assert.instanceOf(evaluator, HigherCardEvaluate)
        assert.equal(points, 14)
    })
})