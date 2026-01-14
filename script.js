/* //Generate random number
function getComputerChoice() {
    let randomNumber = (Math.floor(Math.random() * 3) + 1);
    let computerChoice = '';

    switch (randomNumber) {
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'paper';
            break;
        case 3:
            computerChoice = 'scissors';
            break;
    }

    return computerChoice;
}

//Ask user input
function getHumanChoice() {
    let humanChoice = (prompt('Input your choice: ')).toLowerCase();
    return humanChoice;
}

//Create variables for score
let humanScore = 0;
let computerScore = 0;
let tieScore = 0;

//Compare the two values
function playRound(humanChoice, computerChoice) {
    console.log(`Your choice: ${humanChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
    
    switch (humanChoice) {
        case 'rock':
            switch (computerChoice) {
                case 'rock':
                    console.log(`It's a tie! Rock ties with Rock`);
                    tieScore++;
                    break;
                case 'paper':
                    console.log(`You lose! Paper beats Rock`);
                    computerScore++;
                    break;
                case 'scissors':
                    console.log(`You win! Rock beats Scissors`);
                    humanScore++;
                    break;
            }
            break;
        case 'paper':
            switch (computerChoice) {
                case 'rock':
                    console.log(`You win! Paper beats Rock`);
                    humanScore++;
                    break;
                case 'paper':
                    console.log(`It's a tie! Paper ties with Paper`);
                    tieScore++;
                    break;
                case 'scissors':
                    console.log(`You lose! Scissors beats Paper`);
                    computerScore++;
                    break;
            }
            break;
        case 'scissors':
            switch (computerChoice) {
                case 'rock':
                    console.log(`You lose! Rock beats Scissors`);
                    computerScore++;
                    break;
                case 'paper':
                    console.log(`You win! Rock beats Scissors`);
                    humanScore++;
                    break;
                case 'scissors':
                    console.log(`It's a tie! Scissors ties with Scissors`);
                    tieScore++;
                    break;
            }
            break;
    }

    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
    console.log(`Ties Score: ${tieScore}`);
}

//Make a function to play 5 rounds
function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log(`You WON with a score of ${humanScore} against the computer score of ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You LOST with a score of ${humanScore} against the computer score of ${computerScore}`);
    }
} */

//playGame();