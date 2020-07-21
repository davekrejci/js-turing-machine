class RuleSet {
    constructor(ruleSetObject){
        // Accepts an object defining the ruleSet;
        this.currentState = ruleSetObject.currentState;
        this.nextState = ruleSetObject.nextState;
        this.tapeTransitions = ruleSetObject.tapeTransitions;

    }
}

module.exports = RuleSet