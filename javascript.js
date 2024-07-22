/*
Problem specification:
We need to create a simple rock paper scissors game that operates entirely 
on the console (no user interface)

The game should prompt the user for their move and check that the input
is valid

it should allow the user to play against the cpu, which randomly generates 
a move with equal probability

this is a simultaneous game that is played for 5 rounds, with scorekeeping

after the 5 rounds, a winner is determined

Pseudocode:

INIT user score tally to 0
INIT cpu score tally to 0

FOR 5 iterations
    GENERATE cpu's move

    REPEAT
        GET user's input
    UNTIL input is a valid move

    DETERMINE winner 
    UPDATE score tally
ENDFOR


*/

function validMove (move) {
    if (typeof move === 'string') {
        move = move.toLowerCase();
        if ((move == 'rock') || (move == 'paper') || (move == 'scissors')) {
            return true;
        }
    }
    return false;
}

let cpuMove;

switch (Math.floor(Math.random() * 3)) {
    case 0:
        cpuMove = 'rock';
        break;
    case 1:
        cpuMove = 'paper';
        break;
    case 2:
        cpuMove = 'scissors';
        break;
}

let userMove = prompt("Let's' play rock, paper, scissors. Choose your move!");

while (!validMove(userMove)) {
    userMove = prompt("Please choose a valid move: rock, paper, or scissors.")
}


