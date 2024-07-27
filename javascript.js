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

// function which determines if a user input is a valid move - CASE INSENSITIVE
function validMove (move) {
    if (typeof move === 'string') {
        move = move.toLowerCase();
        if ((move === 'rock') || (move === 'paper') || (move === 'scissors')) {
            return true;
        }
    }
    return false;
}


// Randomly generate and return a move for the CPU with equal probabilities
function getCpuMove () {
    let randomMove = Math.floor(Math.random() * 3);
    if (randomMove === 0) {
        return 'rock';
    } else if (randomMove === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// Given user and cpu's moves, which are assumed to be valid, determine the winner
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


// initialize user and cpu scores
let userScore = 0;
let cpuScore = 0;

buttons = document.querySelectorAll("button");
buttons.forEach( button => {
    let userMove = (() => {
        switch (button.id) {
            case "rock":
                return "rock";
            case "paper":
                return "paper";
            case "scissors":
                return "scissors";
            default:
                return "ERROR";
        }
    })();

    button.addEventListener("click", () => {
        playRound(userMove)
    });
});

// When called, plays one round of the game with the user
function playRound (userMove) {
    // Generate cpuMove
    let cpuMove = getCpuMove();

    // Determine the winner 
    winner = determineWinner(userMove, cpuMove);


    // Update score tallies and notify user of result
    if (winner === USER_ID) {
        userScore++;
        console.log('You win this round!');
    } else if (winner === CPU_ID) {
        cpuScore++;
        console.log('You lost this round :(');
    } else {
        console.log('It was a tie.');
    }


    const results = document.querySelector(".results");
    results.textContent = `Your score: ${userScore} vs. Your opponent's score: ${cpuScore}`;
    
    // Notify user of the current score
    console.log(`You chose ${userMove}, your opponent chose ${cpuMove}`);
    
}







