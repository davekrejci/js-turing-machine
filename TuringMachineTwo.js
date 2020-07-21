const chalk = require('chalk');

class TuringMachineTwo{
    constructor(ruleSets, tapeOne, tapeTwo, states, startState, endState) {
        this.ruleSets = ruleSets;
        this.tapeOne = tapeOne;
        this.tapeTwo = tapeTwo;
        this.states = states;
        this.startState = startState;
        this.currentState = startState;
        this.endState = endState;
        this.currentSymbolOne = this.tapeOne.symbols[this.tapeOne.head];
        this.currentSymbolTwo = this.tapeTwo.symbols[this.tapeTwo.head];
    }

    /**
     * Run the turing machine.
     */
    run(){
        this.log();
        while(!this.currentState.isEndState){
            // let ruleOne = this.rulesOne.filter(rule => rule.currentState == this.currentState && rule.currentSymbol == this.tapeOne.symbols[this.tapeOne.head])[0];
            let ruleSets = this.ruleSets.filter(ruleSet => ruleSet.ruleOne.currentState == this.currentState);
            let ruleOne = ruleSets.filter(ruleSet => ruleSet.ruleOne.currentSymbol == this.currentSymbolOne && ruleSet.ruleTwo.currentSymbol == this.currentSymbolTwo)
            console.log(ruleSets);
            // this.tapeOne.symbols[this.tapeOne.head] = ruleOne.newSymbol;
            // this.tapeTwo.symbols[this.tapeTwo.head] = ruleTwo.newSymbol;
            // this.currentState = ruleOne.newState;
            // this.tapeOne.head += ruleOne.move;
            // this.tapeTwo.head += ruleTwo.move;
            // this.log();
        }
    }
    step(){
        let stateRuleSets = this.ruleSets.filter(ruleSet => ruleSet.ruleOne.currentState == this.currentState);
        let ruleSet = stateRuleSets.filter(ruleSet => ruleSet.ruleOne.currentSymbol == this.currentSymbolOne && ruleSet.ruleTwo.currentSymbol == this.currentSymbolTwo);
        console.log(ruleSet);
    }
    /**
     * Log the current state of the turing machine to the console.
     */
    log(){
        for (let i = 0; i < this.tapeOne.symbols.length; i++) {
            const symbol = this.tapeOne.symbols[i];
            if (i == this.tapeOne.head) {
                process.stdout.write((chalk.inverse(' '+ symbol + ' ') + '| '));
            }
            else{
                process.stdout.write((' '+ symbol + ' ') + '|');
            }
        }
        console.log('');
        for (let i = 0; i < this.tapeTwo.symbols.length; i++) {
            const symbol = this.tapeTwo.symbols[i];
            if (i == this.tapeTwo.head) {
                process.stdout.write((chalk.inverse(' '+ symbol + ' ') + '| '));
            }
            else{
                process.stdout.write((' '+ symbol + ' ') + '|');
            }
        }
        process.stdout.write(this.currentState.name);
        console.log('');
        console.log('');

    }
}

module.exports = TuringMachineTwo

// let ruleSets = {
//     q0: [
//         new RuleSet({
//                 currentState: states.q0,
//                 nextState: states.q1,
//                 tapeTransitions: [
//                     new Rule('a','#', move.right),
//                     new Rule('#','a', move.right),
//                 ]
//         }),
//         new RuleSet({
//             currentState: states.q0,
//             nextState: states.q1,
//             tapeTransitions: [
//                 new Rule('b','#', move.right),
//                 new Rule('#','b', move.right),
//             ]
//         }),
//         new RuleSet({
//             currentState: states.q0,
//             nextState: states.q1,
//             tapeTransitions: [
//                 new Rule('b','#', move.right),
//                 new Rule('#','b', move.right),
//             ]
//         }),
//         new RuleSet({
//             currentState: states.q0,
//             nextState: states.q1,
//             tapeTransitions: [
//                 new Rule('b','#', move.right),
//                 new Rule('#','b', move.right),
//             ]
//         }),
//         new RuleSet({
//             currentState: states.q0,
//             nextState: states.q1,
//             tapeTransitions: [
//                 new Rule('c','#', move.right),
//                 new Rule('#','c', move.right),
//             ]
//         }),
//         new RuleSet({
//             currentState: states.q0,
//             nextState: states.q1,
//             tapeTransitions: [
//                 new Rule('#','#', move.stay),
//                 new Rule('#','#', move.left),
//             ]
//         }),
//     ],
//     q1: [
//         new RuleSet({
//             currentState: states.q1,
//             nextState: states.q0,
//             tapeTransitions: [
//                 new Rule('a','#', move.right),
//                 new Rule('#','#', move.stay),
//             ]
//         }
//         ),
//         new RuleSet({
//             currentState: states.q1,
//             nextState: states.q0,
//             tapeTransitions: [
//                 new Rule('b','#', move.right),
//                 new Rule('#','#', move.stay),
//             ]
//         }
//         ),
//         new RuleSet({
//             currentState: states.q1,
//             nextState: states.q0,
//             tapeTransitions: [
//                 new Rule('c','#', move.right),
//                 new Rule('#','#', move.stay),
//             ]
//         }
//         ),
//         new RuleSet({
//             currentState: states.q1,
//             nextState: states.q2,
//             tapeTransitions: [
//                 new Rule('#','#', move.stay),
//                 new Rule('#','#', move.left),
//             ]
//         }),
//     ],
//     q2: [
//         new RuleSet({
//             currentState: states.q2,
//             nextState: states.q2,
//             tapeTransitions: [
//                 new Rule('#','a', move.right),
//                 new Rule('a','a', move.left),
//             ]
//         }
//         ),
//         new RuleSet({
//             currentState: states.q2,
//             nextState: states.q2,
//             tapeTransitions: [
//                 new Rule('#','#', move.stay),
//                 new Rule('b','b', move.left),
//             ]
//         }
//         ),
//         new RuleSet({
//             currentState: states.q2,
//             nextState: states.q2,
//             tapeTransitions: [
//                 new Rule('#','#', move.stay),
//                 new Rule('c','c', move.left),
//             ]
//         }
//         ),
//         new RuleSet({
//             currentState: states.q2,
//             nextState: states.q3,
//             tapeTransitions: [
//                 new Rule('#','#', move.stay),
//                 new Rule('#','#', move.right),
//             ]
//         }),
//     ],
//     q3: [
//         new RuleSet({
//             currentState: states.q3,
//             nextState: states.q3,
//             tapeTransitions: [
//                 new Rule('#','b', move.right),
//                 new Rule('b','b', move.left),
//             ]
//         }),
//         new RuleSet({
//             currentState: states.q3,
//             nextState: states.q3,
//             tapeTransitions: [
//                 new Rule('#','#', move.stay),
//                 new Rule('a','a', move.right),
//             ]
//         }),
//         new RuleSet({
//             currentState: states.q3,
//             nextState: states.q3,
//             tapeTransitions: [
//                 new Rule('#','#', move.stay),
//                 new Rule('c','c', move.right),
//             ]
//         }),
//         new RuleSet({
//             currentState: states.q3,
//             nextState: states.q4,
//             tapeTransitions: [
//                 new Rule('#','#', move.stay),
//                 new Rule('#','#', move.left),
//             ]
//         }),
//     ],
//     q4: [
//         new RuleSet({
//             currentState: states.q4,
//             nextState: states.q4,
//             tapeTransitions: [
//                 new Rule('#','c', move.right),
//                 new Rule('c','c', move.left),
//             ]
//         }),
//         new RuleSet({
//             currentState: states.q4,
//             nextState: states.q4,
//             tapeTransitions: [
//                 new Rule('#','#', move.stay),
//                 new Rule('a','a', move.left),
//             ]
//         }),
//         new RuleSet({
//             currentState: states.q4,
//             nextState: states.q4,
//             tapeTransitions: [
//                 new Rule('#','#', move.stay),
//                 new Rule('b','b', move.left),
//             ]
//         }),
//         new RuleSet({
//             currentState: states.q4,
//             nextState: states.q5,
//             tapeTransitions: [
//                 new Rule('#','#', move.stay),
//                 new Rule('#','#', move.stay),
//             ]
//         }),
//     ]
// };

// states.q0.ruleSets.filter(
//     ruleSet.rule[0].currentSymbol === this.tapes[0].currentSymbol
//     &&
//     ruleSet.rule[1].currentSymbol === this.tapes[1].currentSymbol
// );
