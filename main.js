const Tape = require('./Tape.js');
const Rule = require('./Rule.js');
// const RuleSet = require('./RuleSet.js');
const State = require('./State.js');
const TuringMachine = require('./TuringMachine');
// const TuringMachineTwo = require('./TuringMachineTwo');
const { move } = require('./consts.js');


// Define Input tapes with head position
let input = "#####aaabbcccc####";
let headPosition = 5;

let tape = new Tape(Array.from(input), headPosition);

let states = {
    q0: new State('q0', false),
    q1: new State('q1', false),
    q2: new State('q2', false),
    q3: new State('q3', false),
    qf: new State('q4', true),
}
let rules = [
    // q0
    new Rule(states.q0,'a','a', move.right, states.q1),
    // q1
    new Rule(states.q1,'a','a', move.right, states.q1),
    new Rule(states.q1,'b','b', move.right, states.q2),
    // q2
    new Rule(states.q2,'b','b', move.right, states.q2),
    new Rule(states.q2,'c','c', move.right, states.q3),
    // q3
    new Rule(states.q3,'c','c', move.right, states.q3),
    new Rule(states.q3,'#','#', move.stay, states.qf),
]


let tm = new TuringMachine(rules, tape, states, states.q0, states.q5);

tm.run();
console.log("Code: " + tm.getCode());
