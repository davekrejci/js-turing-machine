const chalk = require('chalk');

class TuringMachine{
    constructor(rules, tape, states, startState, endState) {
        this.rules = rules;
        this.tape = tape;
        this.states = states;
        this.startState = startState;
        this.currentState = startState;
        this.endState = endState;
        this.currentSymbol = this.tape.symbols[this.tape.head];
    }

    /**
     * Run the turing machine.
     */
    run(){
        console.log(this);
        this.log();
        while(!this.currentState.isEndState){
            let rule = this.rules.filter(rule => rule.currentState == this.currentState && rule.currentSymbol == this.tape.symbols[this.tape.head])[0];
            this.tape.symbols[this.tape.head] = rule.newSymbol;
            this.currentState = rule.newState;
            this.tape.head += rule.move;
            this.log();
        }
    }
    /**
     * Log the current state of the turing machine to the console.
     */
    log(){
        for (let i = 0; i < this.tape.symbols.length; i++) {
            const symbol = this.tape.symbols[i];
            if (i == this.tape.head) {
                process.stdout.write((chalk.inverse(' '+ symbol + ' ') + '| '));
            }
            else{
                process.stdout.write((' '+ symbol + ' ') + '|');
            }
        }
        process.stdout.write(this.currentState.name);
        console.log('');
    }

    getCode(){

        let code ="";
        this.rules.forEach(rule => {
            let subCode = ""
            let string = rule.currentState.name;
            string = string.replace(/q0/g, "0");
            string = string.replace(/q1/g, "00");
            string = string.replace(/q2/g, "000");
            string = string.replace(/q3/g, "0000");
            subCode += string;
            subCode += "1"

            string = rule.currentSymbol;
            string = string.replace(/a/g, "0");
            string = string.replace(/b/g, "00");
            string = string.replace(/c/g, "000");
            string = string.replace(/#/g, "0000");
            subCode += string;
            subCode += "1"

            string = rule.newSymbol;
            string = string.replace(/a/g, "0");
            string = string.replace(/b/g, "00");
            string = string.replace(/c/g, "000");
            string = string.replace(/#/g, "0000");
            subCode += string;
            subCode += "1"

            string = rule.move.toString();
            string = string.replace(/1/g, "0");
            string = string.replace(/0/g, "00");
            string = string.replace(/-1/g, "000");
            subCode += string;
            subCode += "1"

            string = rule.newState.name;
            string = string.replace(/q0/g, "0");
            string = string.replace(/q1/g, "00");
            string = string.replace(/q2/g, "000");
            string = string.replace(/q3/g, "0000");
            string = string.replace(/q4/g, "00000");
            subCode += string;

            code += subCode + "11";

        });
        return code;
    }
}

module.exports = TuringMachine