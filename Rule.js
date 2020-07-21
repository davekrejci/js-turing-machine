class Rule {
    constructor(currentState, currentSymbol, newSymbol, move, newState){
        this.currentState = currentState;
        this.currentSymbol = currentSymbol;
        this.newSymbol = newSymbol;
        this.move = move;
        this.newState = newState;
    }
}

module.exports = Rule