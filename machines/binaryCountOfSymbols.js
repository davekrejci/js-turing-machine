let move = {
    left: -1,
    right: 1,
    stay: 0
}

let input = "#####xyxyxxxy####"
let headPosition = 5;

let tape = new Tape(Array.from(input), headPosition);

let states = {
    q0: new State('q0', false),
    q1: new State('q1', false),
    q2: new State('q2', false),
    q3: new State('q3', false),
    q4: new State('q4', false),
    q5: new State('q5', true),
}
let rules = [
    // q0
    new Rule(states.q0,'x','x', move.right, states.q0),
    new Rule(states.q0,'y','y', move.right, states.q0),
    new Rule(states.q0,'#','#', move.left, states.q1),
    // q1
    new Rule(states.q1,'x','#', move.left, states.q2),
    new Rule(states.q1,'y','#', move.left, states.q2),
    new Rule(states.q1,'#','#', move.left, states.q5),
    // q2
    new Rule(states.q2,'x','x', move.left, states.q2),
    new Rule(states.q2,'y','y', move.left, states.q2),
    new Rule(states.q2,'#','#', move.left, states.q3),
    // q3
    new Rule(states.q3,'1','0', move.left, states.q3),
    new Rule(states.q3,'#','1', move.right, states.q4),
    new Rule(states.q3,'0','1', move.right, states.q4),
    // q4
    new Rule(states.q4,'0','0', move.right, states.q4),
    new Rule(states.q4,'1','1', move.right, states.q4),
    new Rule(states.q4,'#','#', move.right, states.q0),
]