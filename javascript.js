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
const CPU_ID = 0;
const USER_ID = 1;

function validMove (move) {
    if (typeof move === 'string') {
        move = move.toLowerCase();
        if ((move == 'rock') || (move == 'paper') || (move == 'scissors')) {
            return true;
        }
    }
    return false;
}

function getCpuMove () {
    randomMove = Math.floor(Math.random() * 3);
    if (randomMove == 0) {
        return 'rock';
    } else if (randomMove == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getUserMove () {
    let input = prompt("Let's play rock, paper, scissors. Choose your move!");
    while (!validMove(input)) {
        input = prompt("Please choose a valid move: rock, paper, or scissors.")
    }
    return input.toLowerCase();
}

function determineWinner (userMove, cpuMove) {
    if (userMove === cpuMove) {
        return;
    } else if ((userMove === 'paper' && cpuMove === 'rock') 
            || (userMove === 'scissors' && cpuMove === 'paper') 
            || (userMove === 'rock' && cpuMove === 'scissors')) {
        return USER_ID;
    } else {
        return CPU_ID;
    }
}


function playGame () {
    // initialize user and cpu scores
    let userScore = 0;
    let cpuScore = 0;

    function playRound () {
        // Generate cpuMove
        let cpuMove = getCpuMove();
    
        // Prompt user for move until they input a valid move
        let userMove = getUserMove();
    
    
        // Determine the winner 
        winner = determineWinner(userMove, cpuMove);
    
        // Update score tallies and notify user of result
        if (winner == USER_ID) {
            userScore++;
            console.log('You win this round!');
        } else if (winner == CPU_ID) {
            cpuScore++;
            console.log('You lost this round :(');
        } else {
            console.log('It was a tie.');
        }
    
        console.log(`You chose ${userMove}, your opponent chose ${cpuMove}`);
        console.log(`Your score: ${userScore} vs. Your opponent's score: ${cpuScore}`);
    }

    for (let i = 0; i < 5; i++) {
        playRound();
    }

    if (userScore > cpuScore) {
        alert ("DUB CITY BABY");
    } else if (cpuScore > userScore) {
        alert ("YOU LOST LMAOOOOOOOO");
    } else {
        alert ("Y'ALL BOTH SOME BUMS");
    }
}

playGame();

